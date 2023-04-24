import styled from "styled-components";

function Hero(props){
    return(

        <LeftColumn>
            <Left>
                <h2>Hello I'm,</h2>
            </Left>
            <Right src='image1.png'>
            </Right>
        </LeftColumn>
        
    );
}

const LeftColumn=styled.section`

width:100%;
background-color:black;
height:100vh;
padding:0;
display:flex;

flex-direction:row;
overflow-x:hidden;
overflow-y:hidden;
`;
const Left=styled.h2`
color:white;
font-weight:bold;
display:flex;

flex-direction:column;
width:100%;
margin:0;
padding-left:7%;
padding-top:10%;
align-items:flex-start;
font-size:32px;
margin-left:5%;
span{
    display:flex;
    justify-content:center;
    align-items:center;
}
.spin{
    color:red;
}
&:after{
    content:"";
    animation:spin 3s linear infinite;
    color:red;
    align-items:center;
    font-size:72px;

}
@keyframes spin{
    0% { 
        width:0;
        content:"Shashank";}
    50% { content:"Student";}
    100% { content:"Web Developer";}
}
`;
const Change=styled.div`
color:white;
display:flex;

flex-direction:row;
h3{
    font-size:25px;
}
`;
const Right=styled.img`
width:80%;
display:flex;
max-width:200px;
justify-content:flex-end;
max-width:700px;
margin-right:5%;
@media screen and (max-width: 768px) {
    display:none
}
`;
export default Hero;