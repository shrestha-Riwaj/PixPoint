export const Card = (props)=>{
    const {num, type, img} = props

    return(
        <>
        {/* card Section */}
        <section>
            <div className="w-[200px] mx-4  flex flex-col items-center gap-1 my-3 justify-center rounded-md bg-gray-300">
                <i className="text-lg">{num} </i>
                <h2 className="text-sm font-semibold text-black">{type}</h2>
                <div className="w-[70px] h-[70px] bg-gray-700 mb-1"></div>
            </div>
        </section>
        
        </>
    )
}