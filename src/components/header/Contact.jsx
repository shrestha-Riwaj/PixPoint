import { Button } from "../Button"
import footerContact from "../../api/footerContact.json"
import { IoIosCall } from "react-icons/io";
import { MdEmail } from "react-icons/md";
import { MdPlace } from "react-icons/md";

export const Contact = () =>{

    const iconMap = {
        MdPlace: <MdPlace />,
        IoIosCall:<IoIosCall />,
        MdEmail: <MdEmail />
    }

    return (
        <>
        <section>
            <div className="grid grid-cols-3">
                {
                    footerContact.map((currentData,index)=>{
                        const {icon, title, details} = currentData;
                        return(
                            <>
                            <div key={index} className="flex items-center gap-[2px] mx-10">
                                <div>
                                    {iconMap[icon]}
                                </div>
                                <div className="flex gap-1">
                                    <p>{title}: </p>
                                    <p>{details} </p>
                                </div>
                            </div>
                            </>
                        )
                    })
                }
            </div>
        </section>
        </>
    )
}