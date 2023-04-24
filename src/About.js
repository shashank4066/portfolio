import styled from "styled-components";

function About(props){
    return(
        <Section>
            <Heading>
            </Heading>
            
            <Card>
            <One>
                <h2>Designer</h2>
                <img src="icon1.svg"/>
                <p>UX/UI design</p>
                <p>Responsive design</p>
                <p>Typography</p>
                <p>Branding</p>
                
            </One>
            <Two>
                <h2>Frontend Developer</h2>
                <img src="icon2.svg"/>
                <p>JavaScript</p>
                <p>React</p>
                <p>Bootstrap</p>
                <p>Git/GitHub</p>
            </Two>
            <Three>
                <h2>Student</h2>
                <img src="icon3.svg"/>
                <p>Computer Science</p>
                <p>Graphic Design</p>
                <p>Data Science</p>
                <p>Business Analytics</p>
            </Three>
            </Card>
        </Section>
    );
}

const Heading=styled.h1`
display:flex;
flex-wrap:wrap;
justify-content:center;
font-size:46px;
color:red;
&:hover{
    color:black;
    cursor:pointer;
}
`;
const Card=styled.section`
display:flex;
flex-wrap:wrap;

align-items:center;
justify-content:center;
padding-left:40px;
padding-right:40px;
flex-direction:row;
margin-top:-300px;



@media (max-width: 800px) {
    .flex-container {
      flex-direction: column;
    }
  }
`;
const Section=styled.section``;
const One=styled.section`

display:flex;
flex-wrap:wrap;
min-width:300px;
flex-direction:column;
align-items:center;
justify-content:center;
border:1px solid #E6ECF8;
width:30% !important;
background-color:white;
padding-top:50px;
border-top-left-radius: 10px;
border-bottom-left-radius: 10px;
img{
    width:100%;
    max-width:100px;
    height:100px;
    min-height:100px;
    max-height:100px;
}
`;
const Two=styled.section`
display:flex;
flex-wrap:wrap;
min-width:300px;
flex-direction:column;
align-items:center;
justify-content:center;
border:1px solid #E6ECF8;
width:30% !important;
background-color:white;
padding-top:50px;
img{
    width:100%;
    max-width:100px;
    height:100px;
    min-height:100px;
    max-height:100px;
}`;
const Three=styled.section`
display:flex;
flex-wrap:wrap;
min-width:300px;
flex-direction:column;
align-items:center;
justify-content:center;
border:1px solid #E6ECF8;
width:30% !important;
background-color:white;
padding-top:50px;
border-top-right-radius: 10px;
border-bottom-right-radius: 10px;
img{
    width:100%;
    max-width:100px;
    height:100px;
    min-height:100px;
    max-height:100px;
}`;

export default About;