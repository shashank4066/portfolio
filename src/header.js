import styled from "styled-components";
import React from "react";
function header(props){
    return(
    <Head>
        <Logo>
            <img src="./images/logo2.png" alt=""/>
        </Logo>
        <Menu>
            <a>Home </a>
            <a>About Me </a>
            <a>My Projects </a>
            <a>Contact </a>
        </Menu>
        </Head>
    );
}

const Head=styled.section`
width:100%;
background-color:black;
`;
const Menu=styled.div`
display:flex;
align-items:center;
justify-content:center;
padding-bottom:20px;
a{
    cursor:pointer;
    padding:10px 15px;
    color:white;    
    font-weight:bold;
    text-transform:uppercase;
}
a:hover{
    color:red;
    background-color:white;
    border:1px solid white;
    border-radius:5px;
    transition:0.5s ease;
}
`; 
const Logo=styled.image`
width:100%;
`;
const Hero=styled.div``;
export default header;