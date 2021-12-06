
/*STYLED COMPONENT 
PARA CAMBIAR A ESTE ESTILO APARTE DE LO VISTO EN CLASE ME GUIO EN LA SIGUIENTE PAGINA 
https://styled-components.com/

Y ESTE VIDEO DE LA INTRODUCCION https://www.youtube.com/watch?v=LoTUrtvZQhQ
*/

import styled, { css } from 'styled-components'

export const Container = styled.article`
    border: 1px solid rgba(0, 0, 0, 0.1);
    border-radius: 5px;
    box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.1);
    box-sizing: border-box;
    margin-bottom: 30px;
    padding: 20px;
    text-align: center;
    width: 450px;
`

export const Image = styled.div`
    background-repeat: no-repeat;
    background-position: center;
    background-size: contain;
    height: 250px;
    ${props => css`
        background-image: url(${props.imagen})
    `}
`

export const ProductName = styled.h4`
    font-size: 22pt;
    margin-bottom: 0
`

export const Price = styled.p`
    color: #4c4c4c;
    font-size: 18pt;
    margin-top: 4px;
`