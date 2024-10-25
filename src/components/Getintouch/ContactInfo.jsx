import { Contact } from "../header/Contact"
import contactInfo from "../../api/footerContact.json"
import { IoIosCall } from "react-icons/io";
import { MdEmail } from "react-icons/md";
import { MdPlace } from "react-icons/md";

export const ContactInfo = () =>{

    const iconMap = {
        MdPlace: <MdPlace />,
        IoIosCall:<IoIosCall />,
        MdEmail: <MdEmail />
    }
    return(
        <>
        <section className="mx-10">
        <h1 className="font-bold text-blue-500">Contact Information</h1>
        <div className="border-l-4 border-blue-600 px-1 flex gap-10 flex-col">
            <div className="flex gap-2">
            <i className="text-xl">
                {iconMap.IoIosCall}
            </i>
            <h2>1234567</h2>
            </div>
            
            <div className="flex gap-2">
            <i className="text-xl">
                {iconMap.MdEmail}
            </i>
            <h2>pixpoint@1234</h2>
            </div>
            <div className="flex gap-2">
            <i className="text-xl">
                {iconMap.MdPlace}
            </i>
            <h2>Baneshwor</h2>
            </div>

        </div>
        </section>
        
        </>
    )
}