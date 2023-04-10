import styled from "styled-components";
function top(props){
    return(
        <Heading>
            <h2>Hi, I’m Shashank. Nice to meet you.</h2>
            <p>I'm currently a student, but my interest in web development
                started as a hobby. I enjoyed creating websites so much that I<br/>
                decided to turn it into a freelancing career. It's been exciting
                to collaborate with clients to create digital products that meet<br/>
                their needs. I'm always looking for ways to improve my skills
                and deliver top-notch results.
            </p>
        </Heading>
    );
}
const Heading=styled.section`
color:white;
background-color:black;
margin-top:-30px;
padding:0;
diplay:flex;
flex:direction:column;
justify-content:center;
align-items:center;
padding-top:50px;
h2{
    display:flex;
    justify-content:center;
    padding-top:100px;
    font-size:40px;
}
p{
    display:flex;
    justify-content:center;
    line-height:1.5;
    padding-top:30px;
    padding-bottom:450px;
    font-size:18px;
    font;weight:400;
}
`;
export default top;