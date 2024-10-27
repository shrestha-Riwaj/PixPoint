import Navigation from "./Navigation";
import { Contact } from "./Contact";
import { Logo } from "./Logo";
import { Button } from "../Button";

export default function Header(){

    return <>
    

    {/* Header Section */}
    <header className="bg-gray-800 flex items-center rounded-md justify-between px-2 py-1">

        {/* Logo Section */}
        <Logo />
        {/* Nav List */}
        <Navigation />
        {/* Contact Us */}
        <Button text={"Contact Us"} />
    </header>
    
    </>
}