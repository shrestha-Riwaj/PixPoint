import { Button } from "../Button"

export const WorkTogethere = ({heading, desc, img}) =>{
    const data = {
        heading: heading,
        desc:desc,
        img:img
    }

    return(
        <>
        {/* Work Together Section */}
        <section className="max-w-[1000px] m-auto rounded-md my-3 font-mono">
            <div className="flex flex-col gap-2 items-center py-10 mx-10">
                <p className="font-mono text-center">{desc}
                </p>

                <div className="w-[100px] rounded-full">
                    <img className="w-[100px] rounded-full" src={img} alt="" />
                </div>
                <h2 className="font-bold text-lg">{heading} </h2>
                <Button text={"Work Together"}/>
            </div>

        </section>
        </>
    )
}