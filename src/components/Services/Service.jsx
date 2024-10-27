import { WorkTogethere } from "../AboutPage/WorkTogether"
import Footer from "../Footer/Footer"
import Header from "../header/Header"
import { ServiceCard } from "./ServiceCard"
import { Serviceheading } from "./ServiceHeading"

export const Service = ()=>{

    return(
        <>
        
        {/* Service section */}
        <div className="mx-2 my-1">
        <Header />
        </div>
        
        <section className="max-w-[1200px] m-auto my-0">
           
            <Serviceheading />
            <ServiceCard />
            <div className="max-w-[800px] m-auto">
                <WorkTogethere desc={"At PixPoint Solutions, we turn your vision into  reality with expert, transparent service. Trust  us to guide your brand and deliever the results you deserve. "}
                heading={""} img={""}/>
            </div>
        
            <Footer />

        </section>
        </>
    )
}