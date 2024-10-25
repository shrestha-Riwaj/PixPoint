export default function Navigation(){

    return <>
    

    {/* Navigation Bar Section */}
    <nav>
        <ul className="flex gap-7">
            <li>
                <a className="text-white hover:text-blue-800 font-base" href="#">Home</a>
            </li>
            <li>
                <a className="text-white hover:text-blue-800 font-base" href="#">Learn more</a>
            </li>
            <li>
                <a className="text-white hover:text-blue-800 font-base" href="#">Services</a>
            </li>
            <li>
                <a className="text-white hover:text-blue-800 font-base" href="#">Portfolio</a>
            </li>
            <li>
                <a className="text-white hover:text-blue-800 font-base" href="#">Blog</a>
            </li>
        </ul>
    </nav>
    </>
}