import Footer from "../Footer/Footer"
import Header from "../header/Header"
import { About } from "./About"
import { HeroSection } from "./HeroSection"
import { Principles } from "./Principles"
import { Services } from "./Services"


export const HomePage = () =>{

    return (
        <>
        <Header />
        <HeroSection />
        <Principles />
        <About />
        <Services />
        <Footer />
        </>
        
    )
}