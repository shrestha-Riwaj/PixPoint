import { Button } from "../Button";

export default function Newsletter(){

    return <>
    

    {/* Newsletter Section */}
    <section className="flex flex-col">
        <h1 className="font-bold text-lg">Newsletter</h1>
        <p>Receive the latest product trends and industry updates
            directly in your inbox.</p>
        <div className="w-fit rounded-md  bg-white mt-4">
            <input className="outline-none" type="email" name="email" />
            <Button text={"Subscribe"}/>
        </div>
    </section>
    </>
}