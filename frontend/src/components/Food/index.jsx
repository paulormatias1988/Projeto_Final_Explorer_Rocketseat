import { useState } from 'react';
import { useAuth } from "../../hooks/auth";
import { useNavigate } from 'react-router-dom';
import { FiHeart, FiMinus, FiPlus } from 'react-icons/fi';
import { PiPencilSimpleLight } from "react-icons/pi";
import { Container } from './styles';
import { Button } from '../Button';

export function Food({ data, ...rest }) {
    const [quantity, setQuantity] = useState(1);
    const [isLiked, setIsLiked] = useState(false);
    const { user } = useAuth();

    const navigate = useNavigate();

    const handleMinus = () => {
        if (quantity > 1) {
            setQuantity(prevQuantity => prevQuantity - 1);
        }
    };

    const handlePlus = () => {
        setQuantity(prevQuantity => prevQuantity + 1);
    };

    const toggleLike = () => {
        setIsLiked(prevIsLiked => !prevIsLiked);
    };

    function handleDetails() {
        navigate(`/details/${data.id}`);
    }

    function handleEdit() {
        navigate(`/editFood/${data.id}`);
    }

    function handleOrder() {
        let order = JSON.parse(localStorage.getItem("@foodexplorer:order")) || [];

        const orderItem = {
            id: data.id,
            quantity: quantity
        };

        const existingItemIndex = order.findIndex(item => item.id === data.id);
        if (existingItemIndex !== -1) {
            order[existingItemIndex].quantity += quantity;
        } else {
            order.push(orderItem);
        }

        localStorage.setItem("@foodexplorer:order", JSON.stringify(order));

        const event = new CustomEvent('orderUpdated');
        window.dispatchEvent(event);
    }

    return (
        <Container {...rest}>
            {user.type_user === "admin" &&
                <div className='edit'>
                    <PiPencilSimpleLight onClick={handleEdit} />
                </div>
            }

            {["sale", "customer"].includes(user.type_user) &&
                <div className={isLiked ? 'like' : 'unlike'} onClick={toggleLike} >
                    <FiHeart />
                </div>
            }

            <img onClick={handleDetails} src={data.img} alt="Imagem da comida" />
            <h1 onClick={handleDetails} >{data.title}</h1>
            <h2>{data.description}</h2>
            <h3>{data.price}</h3>

            {["sale", "customer"].includes(user.type_user) &&
                <div>
                    <div onClick={handleMinus} ><FiMinus /></div>
                    <span className='quantity'>{quantity.toString()}</span>
                    <div onClick={handlePlus} ><FiPlus /></div>
                    <Button title='incluir' onClick={handleOrder} />
                </div>
            }
        </Container>
    )
}