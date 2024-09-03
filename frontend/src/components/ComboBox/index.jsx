import { Container } from './styles';

export function ComboBox({ title, ...rest }) {
    return (
        <Container>
            <h2>{title}</h2>
            <select {...rest}>
                <option value="Refeição">Refeição</option>
                <option value="Sobremesa">Sobremesa</option>
                <option value="Bebida">Bebida</option>
            </select>
        </Container>
    )
}