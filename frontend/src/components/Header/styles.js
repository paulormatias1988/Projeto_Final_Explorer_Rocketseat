import styled from 'styled-components';
import { DEVICE_BREAKPOINTS } from "../../styles/devicesBreakpoints";

export const Container = styled.header`
    grid-area: header;

    width: 100vw;
    height: 100%;

    display: flex;
    align-items: center;
    
    padding: 28px 9% 28px 9%;
    
    background: ${({ theme }) => theme.COLORS.DARK_600};

    > .header1 {
        display: flex;
        align-items: center;
        width: 80%;

        @media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
            width: 100%;
            align-content: center;
            justify-content: center;
        }
    }
`;

export const Logo = styled.div`
    width: auto;
    margin-bottom: 0;
    padding-bottom: 0;
    
    .logo {
        display: flex;
        align-items: center;
        cursor: pointer;
    
        > img {
            width: 30px;
            height: 30px;
        }
    
        strong {
            padding-left: 10px;
            padding-right: 0;
            font-size: 1.5rem;
            color: ${({ theme }) => theme.COLORS.LIGHT_100};
        }
    }

    .admin {
        text-align: right;
        position: relative;
        top: -10px;
        small {
            color: ${({ theme }) => theme.COLORS.CAKE_200};
        }

        @media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
            margin-left: 5px;
            position: unset;
            align-content: center;
        }
    }

    @media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
        display: flex;
    }
`;

export const Search = styled.div`
    margin-left: 2.85%;
    flex-grow: 1;

    > div > div {
        justify-content: center;
    }

    div > input {
        width: 70%;
        height: 48px;
    }

    @media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
        display: none;
    }
`;

export const Receipt = styled.div`
    margin-left: 2.85%;
    min-width: 200px;
    button {
        height: 3.5rem;
    }

    @media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
        display: none;
    }
`;

export const Logout = styled.button`
    width: 32px;
    height: 32px;
    margin-left: 32px;

    background: none;
    border: none;

    > svg {
        color: ${({ theme }) => theme.COLORS.LIGHT_100};
        font-size: 2rem;
    }

    @media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
        display: none;
    }
`;

export const Menu = styled.button`
    background: none;
    border: none;
    display: none;

    > svg {
        font-size: 2.5rem;
        color: ${({ theme }) => theme.COLORS.LIGHT_100};
    }

    @media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
        display: block;
    }
`;

export const ReceiptButton = styled.button`
    background: none;
    border: none;
    display: none;

    .receiptButtonQuantity {
        padding: 0;
        margin: 0;
        border-radius: 50%;
        width: 20px;
        height: 20px;
        position: relative;
        top: 14px;
        right: -15px;


    display: flex;
    justify-content: center;
    align-items: center;

    /* Opcional: Se houver texto dentro, certifique-se de centralizá-lo */
    line-height: 20px; /* Deve ser igual à altura para centralizar verticalmente */
    text-align: center;
    }

    > svg {
        font-size: 2.5rem;
        color: ${({ theme }) => theme.COLORS.LIGHT_100};
    }

    @media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
        display: block;
    }
`;

export const SideMenu = styled.div`

`;