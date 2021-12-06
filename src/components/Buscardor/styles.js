

/*STYLED COMPONENT 
PARA CAMBIAR A ESTE ESTILO APARTE DE LO VISTO EN CLASE ME GUIO EN LA SIGUIENTE PAGINA 
https://styled-components.com/

Y ESTE VIDEO DE LA INTRODUCCION https://www.youtube.com/watch?v=LoTUrtvZQhQ
*/

import styled from 'styled-components'



export const Contenedor = styled.div`
width: 300px;
height: 30px;
display: flex;
align-items: center;
background-color: white;
`
export const Input = styled.input`
    height: 90%;
    width: 100%;
`
export const Button = styled.button`
    border: none;
    background-color: transparent;
    cursor: pointer;
    height: 90%;
`