import styled from "styled-components";
import { DEVICE_BREAKPOINTS } from "../../styles/devicesBreakpoints";

export const Container = styled.div`
    width: 100vw;
    height: 100vh;

    display: flex;

    @media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
        display: block;
        align-content: center;
        justify-content: center;
    }
`;

export const Logo = styled.form`
    width: 57vw;
    
    display: flex;
    align-items: center;
    justify-content: center;

    > img {
        width: 49.43px;
        height: 47.5px;
    }

    strong {
        padding-left: 19px;
        padding-right: 0;
        font-size: 2.62rem;
        font-weight: bold;
        font-family: "Roboto", sans-serif;
        color: ${({ theme }) => theme.COLORS.LIGHT_100};
    }

    @media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
        width: auto;
    }
`;

export const Form = styled.form`
    background-color: ${({ theme }) => theme.COLORS.DARK_700};
    width: 35vw;
    margin: 11vh 8vw 14vh 0;
    padding: 62px;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    > h1 {
        font-size: 2rem;
        font-weight: 400;
        color: ${({ theme }) => theme.COLORS.LIGHT_100};
    }
    
    > p {
        width: 100%;
        margin-top: 2rem;
        font-size: 1rem;
        font-family: "Roboto", sans-serif;
        color: ${({ theme }) => theme.COLORS.LIGHT_400};
    }
    
    > div {
        margin-top: 0.5rem;
        font-family: "Roboto", sans-serif;
        color: ${({ theme }) => theme.COLORS.DARK_900};
    }
    
    > button, > a {
        margin-top: 2rem;
        font-weight: 400;
    }
    
    > a {
        font-size: 0.87rem;
        color: ${({ theme }) => theme.COLORS.LIGHT_100};
    }

    @media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
        width: auto;
        margin: 5% 0 0 0;
        padding: 0 15% 0 15%;
        background-color: ${({ theme }) => theme.COLORS.DARK_100};

        h1 {
            display: none;
        }

        div {
            border: none;
            div {
                background-color: ${({ theme }) => theme.COLORS.DARK_900};
            }
        }
    }
`;