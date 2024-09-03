import { Container, Content } from './styles';

export function Textarea({ title, value, ...rest }) {
    return (
        <Container>
            <h2>{title}</h2>
            <Content value={value} {...rest} />
        </Container>
    );
}