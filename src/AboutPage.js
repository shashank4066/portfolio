import styled from "styled-components";
import Header from "./header";
import Info from "./info";
import Footer from "./Footer";
function Page(){
    return(
        <Data>
            <Header/>
            <Info/>
            <Footer/>
        </Data>
    );
}
const Data=styled.div``;
export default Page;