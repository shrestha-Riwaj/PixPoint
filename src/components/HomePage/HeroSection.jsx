import { Button } from "../Button"

export const HeroSection = () =>{

    return(
        <>
        
        {/* Hero Section */}
        <section className="w-[1200px] m-auto h-automy-1  grid grid-cols-2">
            {/* text div */}
            <div className=" flex flex-col items-start mx-10 justify-center px-2 py-2">
                <h1 className="text-black uppercase font-bold">Your partner in</h1>
                <h2 className="uppercase font-semibold text-blue-600">Digital Advertising <b className="text-black">Excellence!</b></h2>
                <Button text={"Read more"}/>
            </div>

            {/* second div  */}
            <div>
                <img src="dummy.png" alt="" />
            </div>
        </section>
        </>
    )
}