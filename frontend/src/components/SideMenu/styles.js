import styled from 'styled-components';
import { DEVICE_BREAKPOINTS } from "../../styles/devicesBreakpoints";

export const Container = styled.header`
    grid-area: menu;

    width: 100vw;
    height: 100vh;

    display: flex;
    flex-direction: column;
    
    background: ${({ theme }) => theme.COLORS.DARK_200};

    display: none;
    
    @media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
        grid-area: none;
        display: flex;
        position: absolute;
        z-index: 1;
        
        &[data-menu-open="false"] {
            display: none;
        }
    }
`;

export const Title = styled.div`
    width: 100%;
    height: 114px;
    background: ${({ theme }) => theme.COLORS.DARK_700};
    padding: 28px 9% 28px 9%;

    align-content: center;
    
    > .header {
        display: flex;
        
        > button {
            width: auto;
            height: auto;
            background-color: transparent;
            border: none;
            font-size: 2rem;
            color: ${({ theme }) => theme.COLORS.LIGHT_300};

            padding-right: 1rem;
        }

        h2 {
            font-size: 2rem;
            font-weight: normal;
        }
    }
`;

export const MenuItem = styled.div`
    width: 100%;
    flex: 1;

    padding: 28px 9% 28px 9%;

    > div {
        margin-bottom: 3rem;
    }

    > button {
        width: 100%;
        display: block;
        background-color: transparent;

        padding-top: 2rem;
        padding-bottom: 2rem;
        
        border: none;
        border-bottom: 1px solid ${({ theme }) => theme.COLORS.LIGHT_700};
        
        font-size: 2rem;
        text-align: left;
        color: ${({ theme }) => theme.COLORS.LIGHT_300};
    }

`;