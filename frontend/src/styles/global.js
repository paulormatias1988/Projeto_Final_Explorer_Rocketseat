import { createGlobalStyle } from "styled-components";
import { DEVICE_BREAKPOINTS } from "./devicesBreakpoints";

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    :root {
        font-size: 16px;

        @media (max-width: ${DEVICE_BREAKPOINTS.XS}) {
            font-size: 10px;
        }

        @media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
            font-size: 12px;
        }

        @media (max-width: ${DEVICE_BREAKPOINTS.LG}) {
            font-size: 14px;
        }
    }

    body {
        background-color: ${({ theme }) => theme.COLORS.DARK_400};
        color: ${({ theme }) => theme.COLORS.LIGHT_100};
    }

    body, input, button, textarea {
        font-family: "Poppins", sans-serif;
        font-size: 1rem;
        font-style: normal;
    }

    a {
        text-decoration: none;
    }

    button, a {
        cursor: pointer;
        transition: filter 0.2s;
    }

    button:hover, a:hover {
        filter: brightness(0.9);
    }
`;