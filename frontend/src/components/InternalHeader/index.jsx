import { Container } from './styles';
import internal_header from '../../assets/images/internal_header.png';

export function InternalHeader() {
    return (
        <Container>
            <div className='image'>
                <img src={internal_header} alt="Imagem Banner da tela Home" />
            </div>

            <div className='text'>
                <h1>Sabores inigualáveis</h1>
                <h3>Sinta o cuidado do preparo com ingredientes selecionados</h3>
            </div>
        </Container>
    );
}