import { useEffect, useState } from 'react';
import { Container, Content } from './styles';
import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';
import { InternalHeader } from '../../components/InternalHeader';
import { Carousel } from '../../components/Carousel';
import { Food } from '../../components/Food';
import { SideMenu } from '../../components/SideMenu';
import { api } from '../../services/api';

export function Home() {
  const [search, setSearch] = useState("");
  const [foods, setFoods] = useState([]);
  const [menuIsOpen, setMenuIsOpen] = useState(false);

  useEffect(() => {
    async function fetchFoods() {
      const response = await api.get(`/foods?name=${search}`);
      setFoods(response.data);
    }
    fetchFoods();
  }, [search]);

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
          <InternalHeader />

          <Carousel title="Refeições">
            {
              foods
                .filter(food => food.category == "Refeição")
                .map(food => (
                  <Food
                    key={String(food.id)}
                    data={{
                      img: `${api.defaults.baseURL}/files/${food.image}`,
                      title: food.name,
                      description: food.description,
                      price: Intl.NumberFormat('pt-br', { style: 'currency', currency: 'BRL' }).format(food.price),
                      id: food.id
                    }}
                  />
                ))
            }
          </Carousel>

          <Carousel title="Sobremesas">
            {
              foods
                .filter(food => food.category == "Sobremesa")
                .map(food => (
                  <Food
                    key={String(food.id)}
                    data={{
                      img: `${api.defaults.baseURL}/files/${food.image}`,
                      title: food.name,
                      description: food.description,
                      price: Intl.NumberFormat('pt-br', { style: 'currency', currency: 'BRL' }).format(food.price),
                      id: food.id
                    }}
                  />
                ))
            }
          </Carousel>

          <Carousel title="Bebidas">
            {
              foods
                .filter(food => food.category == "Bebida")
                .map(food => (
                  <Food
                    key={String(food.id)}
                    data={{
                      img: `${api.defaults.baseURL}/files/${food.image}`,
                      title: food.name,
                      description: food.description,
                      price: Intl.NumberFormat('pt-br', { style: 'currency', currency: 'BRL' }).format(food.price),
                      id: food.id
                    }}
                  />
                ))
            }
          </Carousel>
        </div>
        <Footer />
      </Content>
    </Container>
  )
}