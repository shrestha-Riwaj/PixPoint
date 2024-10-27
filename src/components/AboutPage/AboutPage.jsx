import Footer from "../Footer/Footer"
import { Vision } from "./Vision"
import Header from "../header/Header"
import { Mission } from "./Mission"
import { WorkTogethere } from "./WorkTogether"

export const AboutPage = () =>{

    return(
        <>
        <Header />
        <Vision />
        <Mission />
        <WorkTogethere heading={"Your Journey Starts Here"}
         img={"dummy.png"}
         desc={"At PixPoint Solutions, we turn your vision into  reality with expert, transparent service. Trust  us to guide your brand and deliever the results you deserve. "} />
        <section className="max-w-[1000px] m-auto rounded-md my-3 font-mono">
        <Footer />
        </section>
        
        </>
    )
}