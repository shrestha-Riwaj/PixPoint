import { Button } from "../Button"

export const About = () =>{

    return (
        <>
        
        {/* About us section */}
        <section className=" grid grid-cols-2 max-w-[1200px] m-auto gap-10 my-4 items-center justify-center">
            <div className="">
                <img src="./images/dummy.png" alt="Dummy image" />
            </div>
            <div className="flex flex-col items-start gap-2">
                <h1 className="text-lg text-blue-500">At PixPoint Solutions,</h1>
                <p className="text-black">We revolutionize business communication.
                    By blending technology with creative expertise,
                    we craft tailoreed advetising strategies that captivate, engage, and convert.
                </p>
                <Button text={"Work Together"}/>
            </div>
        </section>
        </>
    )
}