import { useEffect, useState } from 'react';
import { Container, Content, Order, ItemOrder, PaymentTag } from './styles';
import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';
import { SideMenu } from '../../components/SideMenu';
import { api } from '../../services/api';
import pix from '../../assets/images/pix.png';
import credit from '../../assets/images/credit.png';
import qr_code from '../../assets/images/qrcode.png';

export function Payment() {
  const [order, setOrder] = useState([]);
  const [total, setTotal] = useState(0);
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  const [search, setSearch] = useState("");

  function handleRemoveItem(id) {
    const itemToRemove = order.find(item => item.id === id);
    if (itemToRemove) {
      const updatedTotal = total - (itemToRemove.price * itemToRemove.quantity);
      setTotal(updatedTotal);

      const updatedOrder = order.filter(item => item.id !== id);
      setOrder(updatedOrder);

      const storedOrder = JSON.parse(localStorage.getItem("@foodexplorer:order")) || [];
      const updatedStorageOrder = storedOrder.filter(item => item.id !== id);
      localStorage.setItem("@foodexplorer:order", JSON.stringify(updatedStorageOrder));

      const event = new CustomEvent('orderUpdated');
      window.dispatchEvent(event);
    }
  }

  useEffect(() => {
    async function getOrder() {
      const localStorageItems = (JSON.parse(localStorage.getItem("@foodexplorer:order")) || []);
      let runningTotal = 0;

      const orderPromises = localStorageItems.map(async (item) => {
        const response = await api.get(`/foods/${item.id}`);
        const foodData = response.data;

        runningTotal += foodData.price * item.quantity;

        return {
          id: item.id,
          quantity: item.quantity,
          name: foodData.name,
          price: foodData.price,
          image: foodData.image,
        };
      });

      const orderData = await Promise.all(orderPromises);

      setOrder(orderData);
      setTotal(runningTotal);
    }

    getOrder();
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
        <Order>
          <h2>Meu pedido</h2>
          <ItemOrder>
            <ul>
              {
                order.map(item => (
                  <li>
                    <img src={`${api.defaults.baseURL}/files/${item.image}`} alt="Imagem da comida" />
                    <div className='dataItemOrder'>
                      <div className='namePrice'>
                        <h3>{`${item.quantity} x ${item.name}`}</h3>
                        <h4>{`R$ ${item.price}`}</h4>
                      </div>
                      <div className='btnExclude'>
                        <span onClick={() => handleRemoveItem(item.id)}>Excluir</span>
                      </div>
                    </div>
                  </li>
                ))
              }

            </ul>
          </ItemOrder>
          <span className='total'>{`Total: ${total.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}`}</span>
        </Order>

        <PaymentTag>
          <h2>Pagamento</h2>
          <div className='framePayment'>
            <div className='pix'>
              <img src={pix} alt="Ícone Pix" />
              <span>PIX</span>
            </div>
            <div className='credit'>
              <img src={credit} alt="Ícone Cartão de Crédito" />
              <span>Crédito</span>
            </div>
            <div className='qr_code'>
              <img src={qr_code} alt="QR Code do Pagamento" />
            </div>
          </div>
        </PaymentTag>

      </Content>
      <Footer />
    </Container >
  );
}