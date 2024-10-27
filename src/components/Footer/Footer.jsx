import { FaTiktok } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import Newsletter from "./Newsletter";
import { Contact } from "../header/Contact";

export default function Footer(){

    return <>
    
    {/* Footer Section */}
    <footer className="max-w-[1200px] m-auto rounded-md my-1 bg-gray-300">
        <div className="grid grid-cols-2 mx-10">
            {/* company logo */}
            <div className="flex flex-col mx-2 my-2 items-center justify-center">
                <div className="max-w-[200px]  mb-1">
                    <img src="pixpointLogo.png" alt="" />
                    <div className="flex text-gray-800 gap-4 text-xl my-2 justify-center items-center">
                        <a className="hover:text-black hover:transition-all duration-150" href="#"><FaTiktok /></a>
                        <a className=" hover:text-blue-500 hover:transition-all duration-150" href="#"><FaFacebookSquare /></a>
                        <a className=" hover:text-red-500 hover:transition-all duration-150" href="#"><FaInstagram /></a>
                    </div>
                </div>    
            </div>
            {/* Newsletter */}
            <div className="my-3 ">
                <Newsletter />
            </div>
        </div>
        <div className="mx-2 mt-10 mb-3 py-2">
            <Contact />
        </div>
        <div>
            <p className="text-sm text-center pb-3">&copy; 2024 PixPoints Solutions. All right reserved</p>
        </div>
    </footer>
    </>
}