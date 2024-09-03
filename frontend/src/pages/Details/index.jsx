import { useEffect, useState } from 'react';
import { useAuth } from "../../hooks/auth";
import { useParams, useNavigate } from 'react-router-dom';
import { FiChevronLeft, FiMinus, FiPlus } from 'react-icons/fi';
import { Container, Content } from './styles';
import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';
import { Button } from '../../components/Button';
import { Ingredient } from '../../components/Ingredient';
import { SideMenu } from '../../components/SideMenu';
import { api } from '../../services/api';

export function Details() {
  const [data, setData] = useState(null);
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  const [search, setSearch] = useState("");

  const { user } = useAuth();
  const params = useParams();
  const navigate = useNavigate();

  const [quantity, setQuantity] = useState(1);

  const handleMinus = () => {
    if (quantity > 1) {
      setQuantity(prevQuantity => prevQuantity - 1);
    }
  };

  const handlePlus = () => {
    setQuantity(prevQuantity => prevQuantity + 1);
  };

  function handleBack() {
    navigate(-1);
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

  useEffect(() => {
    async function fetchFood() {
      const response = await api.get(`/foods/${params.id}`);
      setData(response.data);
    }

    fetchFood();
  }, []);

  return (
    <Container>
      <SideMenu
        setSearch={setSearch}
        menuIsOpen={menuIsOpen}
        onCloseMenu={() => setMenuIsOpen(false)}
      />
      <Header setSearch={setSearch} onOpenMenu={() => setMenuIsOpen(true)} />
      <Content>
        <div>
          <div className="backLink" onClick={handleBack}>
            <FiChevronLeft size={32} />
            <label>voltar</label>
          </div>

          {
            data &&
            <div className='main'>
              <img src={`${api.defaults.baseURL}/files/${data.image}`} alt="Imagem da comida" />
              <div>
                <h3>{data.name}</h3>
                <p>{data.description}</p>
                <div className='ingredients'>
                  {
                    data.ingredients.map((ingredient) => (
                      <Ingredient
                        key={String(ingredient.id)}
                        title={ingredient.ingredient}
                      />
                    ))
                  }
                </div>
                {["sale", "customer"].includes(user.type_user) &&
                  <div className='lineBuy'>
                    <FiMinus size={24} onClick={handleMinus} />
                    <span>{quantity.toString()}</span>
                    <FiPlus size={24} onClick={handlePlus} />
                    <Button title={`incluir ∙ R$ ${data.price}`} onClick={handleOrder} />
                  </div>
                }
              </div>
            </div>
          }
        </div>
        <Footer />
      </Content>
    </Container >
  );
}