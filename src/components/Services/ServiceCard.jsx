import { FaStar } from "react-icons/fa";
import seriesCard from '../../api/servicesCard.json'

export const ServiceCard = () =>{

    const iconMap = {
        FaStar:<FaStar />
    }
    return(

        <>
        
        {/* Service card section */}

        <section className="max-w-[1000px] m-auto my-10 rounded-md grid grid-cols-3 gap-2">
            {
                seriesCard.map((currentData)=>{
                    const {icon, title, desc} = currentData;
                    return(
                        <>
                        <div className="bg-gray-300 mb-4 w-[290px] h-auto rounded-md flex flex-col m-1 px-2 py-2  items-center ">
                            <div className="w-20 h-20 flex items-center justify-center bg-gray-700 rounded-full">
                                <i>{iconMap[icon]} </i>
                            </div>
                            <div className="text-center my-2">
                                <h1 className="font-bold text-lg">{title} </h1>
                                <p>{desc}</p>
                            </div>
                                
                        </div>

                        </>
                    )
                })
            }
        </section>
        </>
    )
}