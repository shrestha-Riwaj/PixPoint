import { Button } from "../Button"

export const WorkTogethere = () =>{

    return(
        <>
        {/* Work Together Section */}
        <section className="max-w-[1000px] m-auto rounded-md my-3 font-mono">
            <div className="flex flex-col gap-3 items-center py-10 mx-10">
                <p className="font-mono text-center">At PixPoint Solutions, we turn your vision into 
                    reality with expert, transparent service. Trust
                    us to guide your brand and deliever the results you deserve. 
                </p>

                <div className="w-[100px] rounded-full">
                    <img className="w-[100px] rounded-full" src="dummy.png" alt="" />
                </div>
                <h2 className="font-bold text-lg">Your Journey Starts Here</h2>
                <Button text={"Work Together"}/>
            </div>

        </section>
        </>
    )
}