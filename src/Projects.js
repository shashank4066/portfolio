import styled from "styled-components";
function Projects(){
    return(
        <SProjects>
            <Heading>
            <h2>My Recent Work</h2></Heading>
            <Subheading>Here are some of the projects i've Worked on.</Subheading>
            <Card>
                <Carda src="./image1.png"/>
                <Cardb><h3></h3><p></p></Cardb>
                <Cardc><h3></h3><p></p></Cardc>
            </Card>
            <Card>
                <Carda><h3></h3><p></p></Carda>
                <Cardb><h3></h3><p></p></Cardb>
                <Cardc><h3></h3><p></p></Cardc>
            </Card>
        </SProjects>
    );
}

const SProjects=styled.section`
display:flex;

flex-direction:column;
justify-content:center;
align-items:center;
font-size:28px;
`;
const Heading=styled.div``;
const Subheading=styled.div``;
const Card=styled.div`
display:flex;
flex-wrap:wrap;
flex-direction:row;
padding-left:40px;
padding-right:40px;
margin-top:50px;

`;
const Carda=styled.div`
border:1px solid black;

width:25% ;
height:200px;
margin:10px 20px;
display:flex;
flex-direction:column;
align-items:center;
justify-content:center;
min-width:300px;
background-image: url('1.png');
background-size: cover;
background-position: center;
background-repeat: no-repeat;
h3{
    color:white;
}
:hover{
    cursor:poiner;
}
`;
const Cardb=styled.div`
border:1px solid black;
width:25%;
margin:10px 20px;
display:flex;
flex-direction:column;
align-items:center;
justify-content:center;
min-width:300px;
background-image: url('2.png');
background-size: cover;
background-position: center;
background-repeat: no-repeat;
`;
const Cardc=styled.div`
border:1px solid black;
width:25%;
margin:10px 20px;
display:flex;
flex-wrap:wrap;
flex-direction:column;
align-items:center;
justify-content:center;
min-width:300px;
background-image: url('3.png');
background-size: cover;
background-position: center;
background-repeat: no-repeat;
`;
export default Projects;