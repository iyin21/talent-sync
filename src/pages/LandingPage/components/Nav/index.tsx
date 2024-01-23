import Logo from "../../../../assets/icons/logo.svg"
import { RiArrowDropDownLine } from "react-icons/ri";
import Button from "../../../../components/Core/Button/button"
import MobileNav from "./mobileNav";
import { HiMenuAlt2 } from "react-icons/hi";
import { useState } from "react";

const Navbar = () => {
    const routes = [
        { title: "Products", submenu: true },
        { title: "Solutions", submenu: true },
        { title: "Resources", submenu: true },
        { title: "Pricing", submenu: true },
        { title: "", submenu: false },
    ]
    const [openNav, setOpenNav] = useState(false);
    return (
        <nav className="flex justify-between items-center bg-gray-100 border-gray-300 rounded-full p-4 px-6">
            <img src={Logo} alt="" />
            <ul className="lg:flex gap-4 hidden">
                {routes.map((item, index) =>
                    item.submenu ? (
                        <li key={index} className="text-gray-500">
                            <a href="" className="flex items-center">{item.title}<RiArrowDropDownLine color="#667085" size="30px" /></a>
                        </li>
                    ) : (
                        <li key={index} className="text-gray-500">
                            <a href="">{item.title}</a>
                        </li>
                    )
                )}
            </ul>
            <div className="lg:flex  hidden ">
                <Button variant="white">Talk to Sales</Button>
                <Button variant="primary" className="ml-2">
                    Sign up for free
                </Button>
            </div>
            <div className="lg:hidden block cursor-pointer"><HiMenuAlt2 size={28} onClick={() => setOpenNav(true)} color="#667085" /></div>
            <MobileNav setOpenNav={setOpenNav} openNav={openNav}/>
        </nav>
    )
}

export default Navbar
