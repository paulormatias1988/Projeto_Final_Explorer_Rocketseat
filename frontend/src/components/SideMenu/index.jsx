import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from "../../hooks/auth";
import { Container, Title, MenuItem } from './styles';
import { InputTwo } from '../InputTwo';
import { FiSearch, FiArrowRight } from 'react-icons/fi';
import { Footer } from '../../components/Footer';


export function SideMenu({ setSearch, menuIsOpen, onCloseMenu }) {
    const { signOut } = useAuth();
    const { user } = useAuth();

    const navigate = useNavigate();

    //const [quantity, setQuantity] = useState(0);

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

    function handleSearch(event) {
        const value = event.target.value;
        if (setSearch) {
            setSearch(value);
            setSearchValue(value);
        }
    }

    /*
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
    */

    return (
        <Container data-menu-open={menuIsOpen}>
            <Title>
                <div className='header'>
                    <button onClick={onCloseMenu}>X</button>
                    <h2>Menu</h2>
                </div>
            </Title>

            <MenuItem>
                <InputTwo
                    placeholder="Busque por pratos ou ingredientes"
                    icon={FiSearch}
                    icon2={FiArrowRight}
                    value={searchValue}
                    onChange={handleSearch}
                    onClickIcon2={onCloseMenu}
                />

                {user.type_user === "admin" && <button onClick={handleAddFood}>Novo Prato</button>}

                <button onClick={handleHome}>Home</button>

                <button onClick={signOut}>Sair</button>
            </MenuItem>

            <Footer />
        </Container>
    );
}