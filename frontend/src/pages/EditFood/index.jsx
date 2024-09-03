import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { FiChevronLeft } from 'react-icons/fi';
import { PiUploadSimple } from "react-icons/pi";
import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';
import { Container, Content } from './styles';
import { Section } from '../../components/Section';
import { InputTwo } from '../../components/InputTwo';
import { ComboBox } from '../../components/ComboBox';
import { Textarea } from '../../components/Textarea';
import { Button } from '../../components/Button';
import { IngredientItem } from '../../components/IngredientItem';
import { SideMenu } from '../../components/SideMenu';
import { api } from '../../services/api';

export function EditFood() {
  const [image, setImage] = useState("");
  const [oldImage, setOldImage] = useState("");
  const [data, setData] = useState(null);
  const [name, setName] = useState('');
  const [category, setCategory] = useState('');
  const [ingredients, setIngredients] = useState([]);
  const [newIngredient, setNewIngredient] = useState("");
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');
  const [search, setSearch] = useState("");

  const [menuIsOpen, setMenuIsOpen] = useState(false);

  const params = useParams();
  const navigate = useNavigate();

  function handleBack() {
    navigate(-1);
  }

  function handleAddIngredient() {
    setIngredients(prevstate => [...prevstate, newIngredient]);
    setNewIngredient("");
  }

  function handleRemoveIngredient(deleted) {
    setIngredients(prevstate => prevstate.filter(ingredient => ingredient !== deleted));
  }

  function handleImage(event) {
    const file = event.target.files[0];
    setImage(file);

    const selectImage = document.querySelector('.selectImage');
    selectImage.classList.add('selected');
  }

  async function handleUpdateFood() {
    if (!name) {
      return alert("Não pode haver uma comida sem nome.");
    }
    if (!image) {
      return alert("Não pode haver uma comida sem imagem.");
    }
    if (ingredients.length == 0) {
      return alert("Não pode haver uma comida sem ingredientes.");
    }
    if (newIngredient) {
      return alert("Você deixou um ingrediente digitado, porém não adicionou. Clique para adicionar, ou remova-o.")
    }
    if (!price) {
      return alert("Não pode haver uma comida sem preço.");
    }

    const response = await api.patch(`/foods/${params.id}`, {
      name,
      category,
      price,
      description,
      ingredients
    });

    //const food_id = response.data;
    if (image != oldImage) {
      const fileUploadForm = new FormData();
      fileUploadForm.append("img_food", image);

      await api.patch(`foods/img_food/${params.id}`, fileUploadForm);
    }

    alert("Comida atualizada com sucesso.");
    navigate("/");
  }

  async function handleRemoveFood() {
    if (confirm("Tem certeza de que deseja excluir esta comida?") == true) {
      await api.delete(`/foods/${params.id}`);
      alert("Comida atualizada com sucesso.");
      navigate("/");
    }
  }

  useEffect(() => {
    async function fetchFood() {
      const response = await api.get(`/foods/${params.id}`);
      setData(response.data);
    }

    fetchFood();
  }, []);

  useEffect(() => {
    if (data) {
      setName(data.name);
      setCategory(data.category);
      setPrice(data.price);
      setDescription(data.description);
      setIngredients(data.ingredients.map(ingredient => ingredient.ingredient));
      setImage(data.image);
      setOldImage(data.image);
      const selectImage = document.querySelector('.selectImage');
      selectImage.classList.add('selected');
    }
  }, [data]);

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

          <h1>Editar Prato</h1>
          <div className='lineOne'>
            <div className='selectImage' >
              <h2>Imagem do Prato</h2>
              <label>
                <PiUploadSimple size={32} />
                <span>Selecione imagem</span>
                <input type="file" onChange={handleImage} />
              </label>
            </div>

            <InputTwo className="nameSection" title="Nome" value={name} onChange={(e) => setName(e.target.value)} />
            <ComboBox title="Categoria" value={category} onChange={(e) => setCategory(e.target.value)} />
          </div>

          <div className='lineTwo'>
            <Section title="Ingredientes">
              {
                ingredients.map((ingredient, index) => (
                  <IngredientItem
                    key={String(index)}
                    value={ingredient}
                    onChange={e => setNewIngredient(e.target.value)}
                    onClick={() => handleRemoveIngredient(ingredient)}
                  />
                ))
              }
              <IngredientItem
                isNew={true}
                placeholder="Novo Ingrediente"
                value={newIngredient}
                onChange={e => setNewIngredient(e.target.value)}
                onClick={handleAddIngredient}
              />
            </Section>
            <InputTwo className="priceSection" title="Preço" value={price} onChange={(e) => setPrice(e.target.value)} />
          </div>

          <Textarea title="Descrição" value={description} onChange={(e) => setDescription(e.target.value)} />

          <div className='buttonsActions'>
            <div className='buttonDelete'>
              <Button title="Excluir prato" onClick={handleRemoveFood} />
            </div>

            <div className='buttonSave'>
              <Button title="Salvar Alterações" onClick={handleUpdateFood} />
            </div>
          </div>
        </div>
        <Footer />
      </Content>
    </Container >
  );
}