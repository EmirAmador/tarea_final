/*STYLED COMPONENT 
PARA CAMBIAR A ESTE ESTILO APARTE DE LO VISTO EN CLASE ME GUIO EN LA SIGUIENTE PAGINA 
https://styled-components.com/

Y ESTE VIDEO DE LA INTRODUCCION https://www.youtube.com/watch?v=LoTUrtvZQhQ
*/



import styled from 'styled-components'

export const Nav= styled.nav`
backdrop-filter: blur(20px);
background: rgba(76, 76, 76, 0.8);
box-sizing: border-box;
color: rgb(255, 255, 255);
display: flex;
justify-content: space-between;
padding: 2px 20px;
position: fixed;
top: 0px;
width: 100%;
height: 60px;
align-items: center;
`