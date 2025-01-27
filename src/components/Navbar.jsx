import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa";
import { FiSearch } from "react-icons/fi";
import { IoIosArrowDown } from "react-icons/io";
import { CiMenuFries } from "react-icons/ci";
import { RxCross2 } from "react-icons/rx";

import logo from "../assets/logo.png"

import { useState } from "react";

function Navbar() {
    const [menu,setMenu] = useState(false);

    function openmenu(){
        setMenu(true);
        return;
    }
    function closemenu(){
        setMenu(false);
        return;
    }

  return (
    <>
        <div className="topbar text-white py-2" style={{backgroundColor:"#1C4670"}}>
            <div className="lg:container mx-auto flex flex-row flex-wrap gap-5 items-center justify-end px-5">
                <div className="flex flex-row gap-1 items-center border-r-2 pr-5">
                    <MdEmail />
                    <span>www.registerkaro.in</span>
                </div>
                <div className="flex flex-row gap-1 items-center border-r-2 pr-5">
                    <FaPhoneAlt />
                    <span>+918447746183</span>
                </div>
                <div className="flex flex-row gap-3 items-center">
                    <FaInstagram />
                    <FaFacebook />
                    <FaTwitter />
                    <FaPinterest />
                </div>
            </div>
        </div>

        <nav>
            <div className="lg:container mx-auto px-5 py-2">
                <div className="navbar flex flex-row justify-between items-center">
                    <div className="logo">
                        <img src={logo} alt="Register Karo"  style={{width:"220px"}}/>
                    </div>
                    <div className="toggle-menu lg:hidden font-bold text-xl" >
                        <button onClick={openmenu}><CiMenuFries /></button>
                    </div>
                    <ul className="navlist hidden lg:flex flex-row justify-between items-center gap-5">
                        <li><a href="/">Home</a></li>
                        <li><a href="/" className="flex flex-row gap-1 items-center">Our Services <IoIosArrowDown /></a></li>
                        <li><a href="/">Blog</a></li>
                        <li><a href="/">Contact Us</a></li>
                        <li><a href="/">About Us</a></li>
                        <div className="flex flex-row gap-4 items-center">
                            <FiSearch />
                            <button className="text-white bg-orange-400 py-2 px-3 rounded-sm font-semibold">Talk An Expert</button>
                        </div>
                    </ul>
                </div>
            </div>

                    <ul className="navlist flex flex-col gap-5 h-fit min-h-screen absolute top-0 right-0 bg-white p-4 pt-10 w-full sm:w-auto z-50" style={{transform: menu ? "translateX(0%)" : "translateX(100%)", transition:"all .6s"}}>
                        <li className="flex flex-row gap-8 justify-between items-center text-xl font-bold">
                            <img src={logo} alt="Register Karo"  style={{width:"140px"}}/>
                            <button onClick={closemenu}>
                                <RxCross2 />
                            </button>

                        </li>
                        <li><a href="/">Home</a></li>
                        <li><a href="/" className="flex flex-row gap-1 items-center">Our Services <IoIosArrowDown /></a></li>
                        <li><a href="/">Blog</a></li>
                        <li><a href="/">Contact Us</a></li>
                        <li><a href="/">About Us</a></li>
                        
                    </ul>

        </nav>
    </>
  )
}

export default Navbar