export const BlogCard  = () =>{

    return(
        <>
        {/* Blog Card */}
        <section className=" mx-2 my-2 px-1">
            <div className="flex flex-col gap-2 rounded-md">
                <div className=" rounded-md">
                    <img className="rounded-md object-contain w-full" src="dummy.png" alt="" />
                </div>
                <div>
                    <h1 className="font-bold text-lg text-black">Heading</h1>
                    <p className="font-normal text-base text-black">Short description</p>
                </div>
            </div>
        </section>
        
        </>
    )
}