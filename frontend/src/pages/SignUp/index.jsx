import { useState } from 'react';
import { api } from '../../services/api';
import { Link, useNavigate } from 'react-router-dom';
import { InputTwo } from '../../components/InputTwo';
import { Button } from '../../components/Button';
import { Container, Form, Logo } from './styles';
import logo from '../../assets/icons/logo.svg';


export function SignUp() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();

    function handleSignUp() {
        if (!name || !email || !password) {
            return alert("Preencha todos os campos!");
        }

        api.post("/users", { name, email, password })
            .then(() => {
                alert("Usuário cadastrado com sucesso.");
                navigate("/");
            })
            .catch(error => {
                if(error.response){
                    alert(error.response.data.message)
                } else {
                    alert("Não foi possível cadastrar.")
                }
            });
    }

    return (
        <Container>
            <Logo>
                <img src={logo} alt="Logo do Aplicativo" />
                <strong>food explorer</strong>
            </Logo>
            <Form>
                <h1>Crie sua conta</h1>

                <p>Seu nome</p>
                <InputTwo
                    placeholder="Exemplo: Maria da Silva"
                    type="text"
                    onChange={e => setName(e.target.value)}
                />

                <p>Email</p>
                <InputTwo
                    placeholder="Exemplo: exemplo@exemplo.com.br"
                    type="text"
                    onChange={e => setEmail(e.target.value)}
                />

                <p>Senha</p>
                <InputTwo
                    placeholder="No mínimo 4 caracteres"
                    type="password"
                    onChange={e => setPassword(e.target.value)}
                />

                <Button title="Criar conta" onClick={handleSignUp} />

                <Link to="/">
                    Já tenho uma conta
                </Link>
            </Form>
        </Container>
    );
}