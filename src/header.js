import styled from "styled-components";
function Header(props){
    return(
        
        <Head>
            <Logo>
            <img src="/logo12.png" alt=""/>
            </Logo>
            <Menu>
            <a href="info.js">Home</a>
            <a href="#">About</a>
            <a href="#">Projects</a>
            <a href="#">Contacts</a>
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
width:50%;
max-width:50px;
`;
const Hero=styled.div``;
export default Header;