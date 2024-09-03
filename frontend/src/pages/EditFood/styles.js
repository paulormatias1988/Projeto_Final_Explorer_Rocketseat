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
    overflow-y: auto;
    
    > div {
        padding: 28px 9% 28px 9%;
        margin-bottom: 116px;
    
        .backLink {
            align-items: center;
            justify-content: left;
    
            > a, label {
                font-size: 1.5rem;
                font-weight: bold;
                vertical-align:9px;
                color: ${({ theme }) => theme.COLORS.LIGHT_300};
                cursor: pointer;
            }
        }
    
        > h1 {
            padding-top: 24px;
        }
    
        .lineOne {
            display: grid;
            grid-template-columns: 19% auto 30%;
            gap: 32px;
            
            .selectImage {
                > h2 {
                    padding-top: 32px;
                    padding-bottom: 16px;
                    color: ${({ theme }) => theme.COLORS.LIGHT_400};
                    font-family: "Roboto", sans-serif;
                    font-size: 1rem;
                    font-weight: 300;
                }

                > label {
                    display: flex;
                    width: 100%;
                    height: 48px;
                    align-items: center;
                    
                    font-size: 1rem;
                    font-weight: 300;
                    
                    background-color: ${({ theme }) => theme.COLORS.DARK_800};
                    border-radius: 5px;
                    
                    &:hover {
                        cursor: pointer;
                    }
                    
                    > svg {
                        min-width: 24px;
                        min-height: 24px;
                        color: ${({ theme }) => theme.COLORS.LIGHT_400};
                        margin-left: 1rem;
                    }

                    span {
                        padding-left: 8px;
                        color: ${({ theme }) => theme.COLORS.LIGHT_100};
                    }
                    
                    input {
                        display: none;
                    }
                    
                }
            }

            .selected {
                > label {
                    background-color: ${({ theme }) => theme.COLORS.MINT_100};
        
                    > svg, > span{
                        font-weight: 400;
                        color: ${({ theme }) => theme.COLORS.DARK_400};
                    }
                }
            }
        }
    
        .lineTwo {
            display: grid;
            grid-template-columns: 75% auto;
            //grid-template-rows: 48px auto;
            gap: 32px;

            section > div {
                gap: 15px;
            }
        }
        
        .buttonsActions {
            margin-top: 32px;
            display: flex;
            justify-content: end;
        }
    
        .buttonDelete, .buttonSave {
            > button {
                width: 190px;
                height: 48px;
                padding-left: 32px;
                background-color: ${({ theme }) => theme.COLORS.TOMATO_400};
                font-weight: 300;
            }
    
            > button:hover {
                background-color: ${({ theme }) => theme.COLORS.TOMATO_300};
            }
        }
    
        .buttonDelete {
            background-color: ${({ theme }) => theme.COLORS.DARK_400};
    
            > button {
                margin-right: 32px;
                background-color: ${({ theme }) => theme.COLORS.DARK_800};
            }
    
            > button:hover {
                background-color: ${({ theme }) => theme.COLORS.DARK_1000};
            }
        }

        @media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
            .lineOne, .lineTwo {
                display: block;
            }
        }
    }
`;