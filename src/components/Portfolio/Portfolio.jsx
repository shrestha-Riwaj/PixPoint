import Footer from "../Footer/Footer"
import { ServiceCard } from "../Services/ServiceCard"
import Header from "../header/Header"
import { OurClients } from "./OurClient"
import { PortfolioCard } from "./PortfolioCard"
import { PortfolioHeading } from "./PortfolioHeading"

export const PortfolioPage = () =>{

    return(

        <>
        <Header />
       <PortfolioHeading />
       {/* Serive and porfolio card are same */}
       <ServiceCard />
       <OurClients ></OurClients>
       <PortfolioCard />
       <Footer />
        
        </>
    )
}