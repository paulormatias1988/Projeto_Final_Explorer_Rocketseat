import { Container, Logo } from './styles';
import logo from '../../assets/icons/logo.svg';


export function Footer() {
    return (
        <Container>
            <Logo>
                <img src={logo} alt="Logo do Aplicativo" />
                <strong>food explorer</strong>
            </Logo>
            <span>© 2023 - Todos os direitos reservados.</span>
        </Container>
    );
}