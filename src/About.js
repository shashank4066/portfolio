import styled from "styled-components";
function About(props){
    return(
        <Section>
            <Heading>
                <h1>About Me</h1>
            </Heading>
            <Card>
            <One>
                <h2>Designer</h2>
            </One>
            <Two>
                <h2>Frontend Developer</h2>
            </Two>
            <Three>
                <h2>Student</h2>
            </Three>
            </Card>
        </Section>
    );
}
const Heading=styled.h1`
display:flex;
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
align-items:center;
justify-content:center;
flex-direction:row;
gap:300px;
margin: 0 40px;
`;
const Section=styled.section``;
const One=styled.section``;
const Two=styled.section``;
const Three=styled.section``;

export default About;