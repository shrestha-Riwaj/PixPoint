export const Mission = () =>{

    return(
        <>
        {/* Mission Section */}
        <section className="max-w-[1200px] m-auto rounded-md my-3 font-mono bg-gray-300">
            <div className="grid grid-cols-3">
                
                <div className=" mx-1 my-4 rounded-full  ml-10 col-span-1">
                    <div className="relative">
                        <img className="w-[200px] h-[200px] rounded-full" src="dummy.png" alt="" />
                        <div className="absolute top-0 left-28">
                            <img className="w-[200px] h-[200px] rounded-full" src="dummy.png" alt="" />
                        </div>
                    </div>
                </div>
                <div className="flex flex-col col-span-2 text-lg items-center justify-center mx-10">
                    <h1 className="font-bold text-xl text-black">Our Mission</h1>
                    <p className="text-black mx-4">Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                        Dolor quasi itaque saepe nulla perspiciatis totam?</p>
                </div>
            </div>
        </section>
        </>
    )
}