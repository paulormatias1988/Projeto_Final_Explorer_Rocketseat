import styled from 'styled-components';

export const Container = styled.section`
    width: 100%;
    max-width: 100vw;
    
    > h2 {
        padding-top: 44px;
        font-size: 2rem;
        font-family: "Poppins", sans-serif;
        font-weight: bold;
    
        color: ${({ theme }) => theme.COLORS.LIGHT_300};
    }

    > div {
        position: relative;
        .carousel {
            //border: 2px solid red;
            display: flex;
            position: relative;
            
            padding-top: 23px;
            overflow-x: auto;
            scroll-behavior: smooth;
            white-space: nowrap;
            -webkit-overflow-scrolling: touch;
            overflow-x: hidden;
            
            -webkit-mask: linear-gradient(90deg, transparent, black 40%, black 60%, transparent);
            mask: linear-gradient(90deg, transparent, black 40%, black 60%, transparent);

            .space {
                padding-left: 7rem;
            }
        }
    
        .buttonLeft,.buttonRight {
            position: absolute;
            height: 100%;
            top: 0;
    
            display: flex;
            align-items: center;
            
            > button {
                margin: 2vh;
                font-size: 2.5rem;
                background: none;
                border: none;
                color: ${({ theme }) => theme.COLORS.LIGHT_100};
            }
        }
        
        .buttonLeft {
            left: 0;
        }
        
        .buttonRight {
            right: 0;
        }
    }

`;