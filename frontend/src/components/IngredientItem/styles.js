import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    align-items: center;

    background-color: ${({ theme, isNew }) => isNew ? "transparent" : theme.COLORS.LIGHT_600};
    
    border: ${({ theme, isNew }) => isNew ? `2px dashed ${theme.COLORS.LIGHT_500}` : `2px solid ${theme.COLORS.LIGHT_600}`};
    
    border-radius: 8px;
    margin-right: 16px;
    
    > button {
        border: none;
        background: none;
        padding: 5px 16px 0 0;
    }
    
    .button-delete {
        color: ${({ theme }) => theme.COLORS.LIGHT_100};
    }
    
    .button-add {
        color: ${({ theme }) => theme.COLORS.LIGHT_500};
    }
    
    > input {
        width: 145px;
        padding: 5px 0 5px 16px;
        
        font-family: "Roboto", sans-serif;
        font-size: 1rem;
        color: ${({ theme }) => theme.COLORS.LIGHT_100};
        background: transparent;

        border: none;
        
        &::placeholder {
            color: ${({ theme }) => theme.COLORS.LIGHT_500};
        }
    }
`;