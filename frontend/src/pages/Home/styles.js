import styled from "styled-components";
import { DEVICE_BREAKPOINTS } from "../../styles/devicesBreakpoints";

export const Container = styled.div`
    width: 100vw;
    height: 100vh;

    display: grid;
    grid-template-rows: 104px auto;
    grid-template-areas:
    "header"
    "content";
`;

export const Content = styled.div`
    grid-area: content;
    overflow-y: auto;

    > div {
        padding: 70px 9% 28px 9%;
    }

    @media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
        > div {
            padding: 4.3rem 5% 1.5rem 5%;
        }
    }
`;