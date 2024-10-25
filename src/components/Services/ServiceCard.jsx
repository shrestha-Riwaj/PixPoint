import { FaStar } from "react-icons/fa";
import seriesCard from '../../api/servicesCard.json'

export const ServiceCard = () =>{

    const iconMap = {
        FaStar:<FaStar />
    }
    return(

        <>
        
        {/* Service card section */}

        <section className=" rounded-md flex flex-wrap justify-between gap-28">
            {
                seriesCard.map((currentData)=>{
                    const {icon, title, desc} = currentData;
                    return(
                        <>
                        <div className="bg-gray-300 my-4 p-1 rounded-md flex flex-col items-center justify-center px-2 w-1/3 max-w-[260px]">
                            <div className="w-20 h-20 flex items-center justify-center bg-gray-800 rounded-full">
                                <i>{iconMap[icon]} </i>
                            </div>
                                <h1 className="font-bold text-lg">{title} </h1>
                                <p>{desc}</p>
                        </div>

                        </>
                    )
                })
            }
        </section>
        </>
    )
}