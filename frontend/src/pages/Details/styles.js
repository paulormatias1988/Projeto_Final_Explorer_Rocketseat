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

    > div {
        padding: 40px 9% 28px 9%;
        min-height: 77vh;
        
        .backLink {
            align-items: center;
            justify-content: left;
            margin-bottom: 2.5rem;
            
            > a, label {
                font-size: 1.5rem;
                font-weight: bold;
                vertical-align:9px;
                color: ${({ theme }) => theme.COLORS.LIGHT_300};
                cursor: pointer;
            }
        }
        
        .main {
            display: flex;
            > img {
                width: 390px;
                height: 389px;
            }
            > div {
                display: block;
                padding: 45px 0 44px 47px;
                
                > h3 {
                    font-size: 2.5rem;
                }
                
                > p {
                    padding-top: 24px;
                    font-size: 1.5rem;
                }
                
                .ingredients {
                    padding-top: 24px;
                    font-size: 1.5rem;
                }
                
                .lineBuy {
                    padding-top: 48px;
                    display: flex;
                    align-items: center;
                    
                    > span {
                        padding: 0 14px 0 14px;
                        font-size: 1.5rem;
                    }
                    
                    > svg {
                        cursor: pointer;
                    }
                    
                    > button {
                        width: fit-content;
                        height: 48px;
                        margin-left: 33px;
                        font-weight: bold;
                    }
                }
            }

            @media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
                display: block;
                .lineBuy {
                    display: flex;
                    justify-content: center;
                }
            }
        }
    }
`;