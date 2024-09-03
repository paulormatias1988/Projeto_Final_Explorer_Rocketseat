import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    display: block;

    > h2 {
        padding-top: 32px;
        padding-bottom: 16px;
        color: ${({ theme }) => theme.COLORS.LIGHT_400};
        font-family: "Roboto", sans-serif;
        font-size: 1rem;
        font-weight: 300;
    }
    
    > select {
        width: 100%;
        height: 48px;
        padding-left: 16px;
        border-radius: 5px;
        border: none;

        display: flex;
        align-items: center;

        background-color: ${({theme}) => theme.COLORS.DARK_800};
        color: ${({ theme }) => theme.COLORS.LIGHT_400};

        font-size: 0.87rem;
    }
`;