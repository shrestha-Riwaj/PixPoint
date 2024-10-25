import Navigation from "../Navigation";
import { Contact } from "./Contact";
import { Logo } from "./Logo";

export default function Header(){

    return <>
    

    {/* Header Section */}
    <header className="bg-gray-800 flex items-center justify-between px-2 py-1">

        {/* Logo Section */}
        <Logo />
        {/* Nav List */}
        <Navigation />
        {/* Contact Us */}
        <Contact />
    </header>
    
    </>
}