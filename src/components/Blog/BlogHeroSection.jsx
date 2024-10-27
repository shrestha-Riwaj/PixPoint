export const BlogHeroSection = () =>{

    return(
        <>
        {/* Hero Section */}
        <section className="w-[1200px] m-auto my-2 py-10  grid grid-cols-2">
            {/* text div */}
            <div className="py-5 px-3 mx-10 my-3  flex flex-col items-center justify-center">
                <h1 className="font-bold font-mono text-xl text-black">Read latest blog from</h1>
                <h1 className="font-bold font-mono text-xl text-blue-600">PixPoint</h1>
            </div>

            {/* second div  */}
            <div className=" flex items-center justify-center">
                <img className="w-[200px] m-1 " src="dummy.png" alt="" />
                
            </div>
        </section>

        </>
    )
}