import { Button } from "../Button"

export const Serviceheading = () =>{

    return(
        <>
        {/* Services Heading Section */}
        <section className="max-w-[800px] m-auto rounded-md my-0 font-mono">
            <div className="flex flex-col gap-3 items-center py-1 mb-1 mx-10">
            <h2 className="font-bold text-xl">Services</h2>
            <div className="w-[80px] h-[80px] rounded-full bg-gray-600">
                    {/* <img className="w-[100px] rounded-full" src="dummy.png" alt="" /> */}
                </div>
                <p className="font-mono text-center ">At PixPoint Solutions, we turn your vision into 
                    reality with expert, transparent service. Trust
                    us to guide your brand and deliever the results you deserve. 
                </p>

                
                
                
            </div>

        </section>
        </>
    )
}