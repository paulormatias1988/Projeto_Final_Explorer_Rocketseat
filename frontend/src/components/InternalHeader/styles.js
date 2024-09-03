import styled from 'styled-components';
import { DEVICE_BREAKPOINTS } from "../../styles/devicesBreakpoints";

export const Container = styled.div`
    width: 100%;
    height: 260px;
    display: flex;

    background: ${({ theme }) => theme.COLORS.GRADIENT_200};

    @media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
        height: 10rem;
    }

    .image {
        position: relative;
        width: 50%;

        > img {
            width: 35rem;
            height: auto;
            position: absolute;
            bottom: -10px; left: -50px;
        }

        @media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
            > img {
                width: 20rem;
                height: 14rem;
                bottom: -5px; left: -25px;
            }
        }
    }

    .text {
        width: 50%;
        position: relative;
        top: 25%;

        > h1 {
            font-size: 3.12rem;
            font-weight: 400;
            color: ${({ theme }) => theme.COLORS.LIGHT_300};
        }
    
        > h3 {
            font-family: "Roboto", sans-serif;
            font-size: 1rem;
            font-weight: 300;
            letter-spacing: .12rem;
            color: ${({ theme }) => theme.COLORS.LIGHT_300};
    
            padding-top: 8px;
        }

        @media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
            > h1 {
                font-size: 1.5rem;
            }

            > h3 {
                font-size: 0.8rem;
            }
        }
    }

`;