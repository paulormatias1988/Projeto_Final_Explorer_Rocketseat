import styled from 'styled-components';

export const Container = styled.section`
    width: 100%;

    > h2 {
        padding-top: 32px;
        padding-bottom: 16px;
        color: ${({ theme }) => theme.COLORS.LIGHT_400};
        font-family: "Roboto", sans-serif;
        font-size: 1rem;
        font-weight: 300;
    }

    > div {
        padding: 8px;

        display: flex;
        align-items: center;
        flex-wrap: wrap;

        background-color: ${({ theme }) => theme.COLORS.DARK_800};
        border-radius: 5px;
    }
`;