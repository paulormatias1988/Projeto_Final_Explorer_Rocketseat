import styled from "styled-components";

export const Container = styled.div`
    width: 100%;

    > h2 {
        padding-top: 32px;
        padding-bottom: 16px;
        color: ${({ theme }) => theme.COLORS.LIGHT_400};
        font-family: "Roboto", sans-serif;
        font-size: 1rem;
        font-weight: 300;
    }
    
    > div {
        display: flex;
        align-items: center;
        
        background-color: ${({ theme }) => theme.COLORS.DARK_800};
        color: ${({ theme }) => theme.COLORS.LIGHT_400};
        border-radius: 5px;
        
        > svg {
            min-width: 24px;
            min-height: 24px;
            color: ${({ theme }) => theme.COLORS.LIGHT_400};
            margin-left: 1.5rem;
            
            &:hover {
                cursor: pointer;
            }
        }

        > input {
            width: 100%;
            height: 48px;
            padding-left: 0.87rem;
            
            font-size: 1rem;
            font-weight: 300;
            
            color: ${({ theme }) => theme.COLORS.LIGHT_100};
            background: transparent;
            border: 0;

            &::placeholder {
                color: ${({ theme }) => theme.COLORS.LIGHT_500};
            }
            
        }

        > svg:last-child {
            text-align: end;
        }
    }
`;