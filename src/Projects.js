import styled from "styled-components";
function Projects(){
    return(
        <SProjects>
            <Heading>
            <h2>My Recent Work</h2></Heading>
            <Subheading>Here are some of the projects i've Worked on.</Subheading>
            <Card>
                <Carda><h3>Website1</h3><p>A good website</p></Carda>
                <Cardb><h3>Website1</h3></Cardb>
                <Cardc><h3>Website1</h3></Cardc>
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
flex-direction:row;
padding-left:40px;
padding-right:40px;
margin-top:50px;

`;
const Carda=styled.div`
border:1px solid black;
width:33.33% ;
margin:10px 20px;
display:flex;
flex-direction:column;
align-items:center;
justify-content:center;
min-width:300px;
`;
const Cardb=styled.div`
border:1px solid black;
width:33.3%;
margin:10px 20px;
`;
const Cardc=styled.div`
border:1px solid black;
width:33.3%;
margin:10px 20px;
`;
export default Projects;