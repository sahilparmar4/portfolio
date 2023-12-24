import About from "./About";
import Header from "./Header";
import Portfolio from "./PortFolio";
import Service from "./Service";

export default function Home(){
    return(
        <>
            <Header/>
            <About />
            <Service />
            <Portfolio />
        </>
    )
}