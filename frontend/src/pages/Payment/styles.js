import styled from "styled-components";
import { DEVICE_BREAKPOINTS } from "../../styles/devicesBreakpoints";

export const Container = styled.div`
    width: 100%;
    height: 100vh;

    display: grid;
    grid-template-rows: 104px auto;
    grid-template-areas: 
    "header"
    "content";
`;

export const Content = styled.div`
    overflow-y: auto;
    margin-top: 2.1rem;
    display: flex;

    font-family: "Poppins", sans-serif;
`;

export const Order = styled.div`
    margin-left: 7.5rem;
    display: block;
    width: 40%;

    h2 {
        font-size: 2rem;
        font-weight: 400;
        margin-bottom: 2rem;
    }

    .total {
        font-size: 1.25rem;
        font-weight: 300;
    }

    @media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
        margin-left: 2.5rem;

        h2 {
            font-size: 1.5rem;
        }

        .total {
            font-size: 1rem;
            font-weight: 200;
        }
    }
`;

export const ItemOrder = styled.div`
    width: 100%;
    margin-top: 1rem;
    margin-bottom: 1rem;

    li{
        display: flex;
        align-items: center;
        padding-top: 1rem;
        padding-bottom: 1rem;
        
        img {
            width: 4.5rem;
            height: 4.5rem;
            margin-right: 0.8rem;
        }

        .dataItemOrder {
            .namePrice {
                align-items: center;
                h3 {
                    font-size: 1.25rem;
                    font-weight: 300;
                    margin-right: 10px;
                }
                h4 {
                    font-size: 1rem;
                    font-weight: 200;
                }

                @media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
                    h3 {
                        font-size: 1rem;
                    }
                    
                    h4 {
                        font-size: 0.8rem;
                    }
                }
            }
        }

        div {
            width: 100%;
            display: block;
            .namePrice {
                display: inline-flex;
                h4 {
                    color: ${({ theme }) => theme.COLORS.LIGHT_400};
                }
                @media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
                    display: block;
                }

                @media (max-width: ${DEVICE_BREAKPOINTS.XL}) {
                    display: block;
                }
            }
            .btnExclude {
                font-size: 1rem;
                font-weight: 200;
                color: ${({ theme }) => theme.COLORS.TOMATO_400};
                cursor: pointer;
            }
        }
    }
`;

export const PaymentTag = styled.div`
    display: block;
    width: 35%;
    margin-right: 2rem;

    h2 {
        font-size: 2rem;
        font-weight: 400;
        margin-bottom: 2rem;
    }

    .framePayment {
        width: 100%;
        height: 50vh;
        border: 1px solid  ${({ theme }) => theme.COLORS.LIGHT_600};
        border-radius: 10px;
        
        display: flex;
        flex-wrap: wrap;
        
        .pix, .credit {
            width: 50%;
            height: 3.5rem;
            align-content: center;
            align-items: center;
            text-align: center;
            border-bottom: 1px solid ${({ theme }) => theme.COLORS.LIGHT_600};

            cursor: pointer;

            img {
                margin-right: 5px;
                vertical-align: -3px;
            }
        }

        .pix {
            border-right: 1px solid ${({ theme }) => theme.COLORS.LIGHT_600};
        }

        .pix:hover, .credit:hover {
            background-color: ${({ theme }) => theme.COLORS.LIGHT_700};
        }

        .qr_code {
            width: 100%;
            text-align: center;
        }
    }

    @media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
        width: auto;

        h2 {
            font-size: 1.5rem;
            font-weight: 400;
            margin-bottom: 2rem;
        }

        .framePayment {
            height: 34vh;
            .qr_code {
                img {
                    width: 11rem;
                    height: 11rem;
                }
            }
        }
    }
`;