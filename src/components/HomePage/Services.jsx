import { Card } from "./Card"

export const Services = () =>{

    return(
        <>
        
        {/* Services section */}
        <section className="max-w-[1200px] h-[250px] m-auto my-4 ">
            <div className="max-w-[1200px] h-[150px] relative m-auto my-4 bg-gray-700 rounded-md"> 
               <div className=" mx-4 absolute left-0 top-14">
                <div className="flex justify-between w-[900px] h-auto mx-28 ">
                    <Card num="1" type="Branding"/>
                    <Card num="2" type="Advertising"/>
                    <Card num="3" type="IT Solutions"/>
                </div>
                
                </div> 
            </div>
        </section>

        </>
    )

}