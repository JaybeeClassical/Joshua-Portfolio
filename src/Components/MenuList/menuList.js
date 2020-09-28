import React from 'react'
import styled from 'styled-components'


const Ul = styled.ul`
    flex-flow: column nowrap;
    list-style: none;

    background-color: #FFFDF3;
    position: fixed;
    right: ${({open}) => open ? '70px' : '0'};
    top: 40px;
    padding: 50px 20px;
    height: auto;
    width: 250px;
    transform: ${({open}) => open ? 'translateX(0)' : 'translateX(100%)'};
    transition: transform 0.3s ease-in-out;
    z-index: -44;

    li{
        font-size: 25px;
        padding: 18px 10px; 
    }

    @media (max-width: 768px){
        width: 100vw;
        height: 100vh;
    }
`;

const MenuList = ({open}) => {
    return (
        <Ul open={open}>
            <li>About</li>
            <li>Projects</li>
            <li>Contact</li>
            <li>Blog</li>
        </Ul>
    )
}

export default MenuList