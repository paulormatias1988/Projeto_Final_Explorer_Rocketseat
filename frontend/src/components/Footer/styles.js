import styled from 'styled-components';

export const Container = styled.footer`
    width: 100%;
    height: 77px;

    display: flex;
    align-items: center;
    justify-content: space-between;
    align-self: flex-end;
    
    padding: 28px 9% 23.74px 9%;
    
    background: ${({ theme }) => theme.COLORS.DARK_600};

    > span {
        font-size: 0.87rem;
        color: ${({ theme }) => theme.COLORS.LIGHT_200};
    }
`;

export const Logo = styled.div`
    width: 200px;
    display: flex;
    align-items: center;

    > img {
        width: 30px;
        height: 30px;
    }

    strong {
        padding-left: 10px;
        padding-right: 0;
        font-size: 1.5rem;
        color: ${({ theme }) => theme.COLORS.LIGHT_700};
    }

    filter: grayscale(1);
`;