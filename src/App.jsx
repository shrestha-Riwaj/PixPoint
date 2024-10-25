import { About } from "./components/HomePage/About"
import { AboutPage } from "./components/AboutPage/AboutPage"
import { Card } from "./components/HomePage/Card"
import Footer from "./components/Footer/Footer"
import { ContactInfo } from "./components/Getintouch/ContactInfo"
import { Contact } from "./components/header/Contact"
import Header from "./components/header/Header"
import { HeroSection } from "./components/HomePage/HeroSection"
import Navigation from "./components/header/Navigation"
import Newsletter from "./components/Footer/Newsletter"
import { Principles } from "./components/HomePage/Principles"
import { Services } from "./components/HomePage/Services"
import { Service } from "./components/Services/Service"

import './index.css'


function App() {
  

  return (
    <>
     <Header />
     <HeroSection />
     <Principles />
     <About />
     {/* <Services /> */}
      {/* <Navigation /> */}
      {/* <Newsletter /> */}
      {/* <Footer /> */}
      {/* <Contact /> */}
     {/* <AboutPage /> */}
     <Service />
     <ContactInfo />
    </>
  )
}

export default App
