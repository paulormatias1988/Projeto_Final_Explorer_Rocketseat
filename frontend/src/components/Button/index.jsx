import { Container } from './styles';

export function Button({ img, title, loading = false, ...rest }) {
    return (
        <Container
            type="button"
            disabled={loading}
            {...rest}
        >
            {img && <img src={img} size={32} />}
            <span>
                {loading ? 'Carregando...' : title}
            </span>
        </Container>
    );
}