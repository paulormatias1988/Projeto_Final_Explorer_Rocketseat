import { Container } from './styles';

export function InputTwo({ title, icon: Icon, icon2: Icon2, onClickIcon2, ...rest }) {
    return (
        <Container>
            {title && <h2>{title}</h2>}
            <div>
                {Icon && <Icon size={24} />}
                <input {...rest} />
                {Icon2 && <Icon2 size={24} onClick={onClickIcon2} />}
            </div>
        </Container>
    )
}