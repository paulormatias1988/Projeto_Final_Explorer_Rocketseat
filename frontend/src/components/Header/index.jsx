import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from "../../hooks/auth";
import { Container, Menu, Logo, Search, Receipt, ReceiptButton, Logout } from './styles';
import { InputTwo } from '../InputTwo';
import { Button } from '../Button';
import logo from '../../assets/icons/logo.svg';
import { FiMenu, FiSearch } from 'react-icons/fi';
import { PiReceipt } from "react-icons/pi";
import receipt from '../../assets/icons/receipt.svg';
import signout from '../../assets/icons/signout.svg';


export function Header({ setSearch, onOpenMenu }) {
    const { signOut } = useAuth();
    const { user } = useAuth();

    const navigate = useNavigate();

    const [quantity, setQuantity] = useState(0);

    const [searchValue, setSearchValue] = useState("");

    function handleHome() {
        if (setSearch) {
            setSearch("");
            setSearchValue("");
        }
        navigate('/');
    }

    function handleAddFood() {
        navigate('/addFood');
    }

    function handlePayment() {
        navigate('/payment');
    }

    function handleSearch(event) {
        const value = event.target.value;
        if (setSearch) {
            setSearch(value);
            setSearchValue(value);
        }
    }

    useEffect(() => {
        const calculateQuantity = () => {
            const orderQuantity = JSON.parse(localStorage.getItem("@foodexplorer:order")) || [];
            let totalQuantity = 0;
            orderQuantity.forEach(order => {
                totalQuantity += order.quantity;
            });
            return totalQuantity;
        };

        setQuantity(calculateQuantity());

        const handleOrderUpdated = () => {
            setQuantity(calculateQuantity());
        };

        window.addEventListener('orderUpdated', handleOrderUpdated);

        return () => {
            window.removeEventListener('orderUpdated', handleOrderUpdated);
        };
    }, []);

    return (
        <Container>
            <Menu onClick={onOpenMenu} >
                <FiMenu />
            </Menu>
            <div className='header1'>
                <Logo onClick={handleHome}>
                    <div className='logo'>
                        <img src={logo} alt="Logo do Aplicativo" />
                        <strong>food explorer</strong>
                    </div>
                    <div className='admin'>
                        {user.type_user === "admin" && <small>admin</small>}
                    </div>
                </Logo>
                <Search>
                    <InputTwo
                        placeholder="Busque por pratos ou ingredientes"
                        icon={FiSearch}
                        value={searchValue}
                        onChange={handleSearch}
                    />
                </Search>
            </div>
            <Receipt >
                {user.type_user === "admin" && <Button title='Novo prato' onClick={handleAddFood} />}
                {["sale", "customer"].includes(user.type_user) && <Button title={`Pedidos (${quantity})`} img={receipt} onClick={handlePayment} />}
            </Receipt>
            {["sale", "customer"].includes(user.type_user) &&
                <ReceiptButton>
                    <Button className="receiptButtonQuantity" title={`${quantity}`} onClick={handlePayment} />
                    <PiReceipt />
                </ReceiptButton>}
            <Logout onClick={signOut}>
                <img src={signout} alt="Ícone de SignOut" />
            </Logout>
        </Container>
    );
}