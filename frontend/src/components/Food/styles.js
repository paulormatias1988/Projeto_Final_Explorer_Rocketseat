import styled from "styled-components";

export const Container = styled.button`
    background: transparent;
    position: relative;
    
    width: 304px;
    min-width: 304px;
    height: 462px;

    //flex: none;
    border: 2px solid rgba(173, 216, 230, 0.04);
    border-radius: 20px;

    padding-left: 24px;
    padding-right: 24px;

    .unlike {
        margin: 0;
        padding: 0;
        position: absolute;
        top: 16px; right: 18px;
        > svg {
            color: ${({ theme }) => theme.COLORS.LIGHT_300};
            font-size: 1.5rem;
            &:hover {
                color: ${({ theme }) => theme.COLORS.LIGHT_100};
                stroke-width: 2.5;
            }
        }
    }

    .like {
        margin: 0;
        padding: 0;
        position: absolute;
        top: 16px; right: 18px;
        > svg {
            color: ${({ theme }) => theme.COLORS.TOMATO_200};
            fill: ${({ theme }) => theme.COLORS.TOMATO_300};
            font-size: 1.5rem;
            &:hover {
                color: ${({ theme }) => theme.COLORS.TOMATO_400};
                fill: ${({ theme }) => theme.COLORS.TOMATO_400};
                stroke-width: 2.5;
            }
        }
    }

    .edit {
        margin: 0;
        padding: 0;
        position: absolute;
        top: 16px; right: 18px;
        > svg {
            color: ${({ theme }) => theme.COLORS.LIGHT_200};
            fill: ${({ theme }) => theme.COLORS.LIGHT_200};
            font-size: 1.5rem;
            stroke-width: 5;
            &:hover {
                color: ${({ theme }) => theme.COLORS.LIGHT_400};
                fill: ${({ theme }) => theme.COLORS.LIGHT_400};
                stroke-width: 10;
            }
        }
    }

    img {
        width: 176px;
        height: 176px;
        cursor: pointer;
    }
    
    h2, h3, div, span {
        font-family: "Roboto", sans-serif;
    }
    
    h2, h3 {
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }

    h1{
        color: ${({ theme }) => theme.COLORS.LIGHT_300};
        font-size: 1.5rem;
        font-weight: bold;
        cursor: pointer;
        
        display: -webkit-box;
        -webkit-line-clamp: 2; /* Número máximo de linhas a serem exibidas */
        -webkit-box-orient: vertical;
        overflow: hidden;
    }

    h2{
        color: ${({ theme }) => theme.COLORS.LIGHT_400};
        font-size: 0.87rem;
        font-weight: 100;

        padding-top: 15px;
    }

    h3{
        color: ${({ theme }) => theme.COLORS.CAKE_200};
        font-size: 2rem;
        font-weight: 300;

        padding-top: 15px;
    }

    > div {
        margin-top: 15px;
        align-items: center;
        justify-content: center;

        gap: 10px;
        display: flex;
        padding: 0px 43px 0 43px;
        
        > div, .quantity {
            color: ${({ theme }) => theme.COLORS.LIGHT_300};
            background: transparent;
            font-size: 1.5rem;
        }
        
        .quantity {
            font-size: 1.2rem;
            font-weight: bold;
        }
        
        svg {
            cursor: pointer;
        }

        > button {
            width: 92px;
            height: 48px;
            font-weight: 300;
        }

    }

    &:hover {
        cursor: auto;
    }
`;