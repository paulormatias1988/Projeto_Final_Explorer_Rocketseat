import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    
    > h2 {
        padding-top: 32px;
        padding-bottom: 16px;
        color: ${({ theme }) => theme.COLORS.LIGHT_400};
        font-family: "Roboto", sans-serif;
        font-size: 1rem;
        font-weight: 300;
    }
    `;

export const Content = styled.textarea`
    width: 100%;
    height: 204px;
    background-color: ${({theme}) => theme.COLORS.DARK_800};
    color: ${({theme}) => theme.COLORS.LIGHT_400};

    border-radius: 8px;

    border: none;
    resize: none;

    padding: 14px;

    &::placeholder {
            color: ${({ theme }) => theme.COLORS.LIGHT_500};
    }
`;