import { useState } from 'react';
import { useAuth } from '../../hooks/auth';
import { Link } from 'react-router-dom';
import { InputTwo } from '../../components/InputTwo';
import { Button } from '../../components/Button';
import { Container, Form, Logo } from './styles';
import logo from '../../assets/icons/logo.svg';


export function SignIn() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const { signIn } = useAuth();

    function handleSignIn() {
        signIn({email, password});
    }

    return (
        <Container>
            <Logo>
                <img src={logo} alt="Logo do Aplicativo" />
                <strong>food explorer</strong>
            </Logo>
            <Form>
                <h1>Faça Login</h1>
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

                <Button title="Entrar" onClick={handleSignIn} />

                <Link to="/register">
                    Criar uma conta
                </Link>
            </Form>
        </Container>
    );
}