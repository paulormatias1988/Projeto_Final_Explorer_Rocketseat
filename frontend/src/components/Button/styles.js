import styled from 'styled-components';
import { DEVICE_BREAKPOINTS } from "../../styles/devicesBreakpoints";

export const Container = styled.button`
    width: 100%;
    background-color: ${({ theme }) => theme.COLORS.TOMATO_100};
    color: ${({ theme }) => theme.COLORS.LIGHT_100};

    display: flex;
    align-items: center;
    justify-content: center;

    border: 0;
    padding: 8px 32px;
    border-radius: 5px;

    font-weight: 200;
    font-size: 0.87rem;

    > img {
        padding: 12px 8px;
    }

    @media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
        height: 4rem;
        font-size: 1rem;
        font-weight: 400;
    }

    &:disabled {
        background-color: ${({ theme }) => theme.COLORS.TOMATO_400};
        filter: none;
    }

    &:not([disabled]):hover {
        background-color: ${({ theme }) => theme.COLORS.TOMATO_200};
        filter: none;
    }
`;