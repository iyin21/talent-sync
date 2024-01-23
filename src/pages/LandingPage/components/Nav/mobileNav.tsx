import { Drawer } from "@mantine/core"
import { Dispatch, SetStateAction } from "react"
import Button from "../../../../components/Core/Button/button"
import { IoCloseOutline } from "react-icons/io5"
import { RiArrowDropDownLine } from "react-icons/ri"

interface MobileNavInterface {
    setOpenNav: Dispatch<SetStateAction<boolean>>
    openNav: boolean
}
const routes = [
    { title: "Products", submenu: true },
    { title: "Solutions", submenu: true },
    { title: "Resources", submenu: true },
    { title: "Pricing", submenu: true },
    { title: "", submenu: false },
]
const MobileNav = ({ setOpenNav, openNav }: MobileNavInterface) => {
    return (
        <Drawer
            opened={openNav}
            onClose={() => setOpenNav(false)}
            //size="75%"
            withCloseButton={false}
            //overlayBlur={2}
            //overlayColor="#132013"
            //overlayOpacity={0.5}
        >
            <div>
                <div className="flex justify-end cursor-pointer">
                    <IoCloseOutline
                        onClick={() => setOpenNav(false)}
                        size="2em"
                    />
                </div>
                <ul className=" gap-y-4 text-lg flex flex-col justify-center text-center">
                    {routes.map((item, index) =>
                        item.submenu ? (
                            <li key={index} className="text-gray-500">
                                <a href="" className="flex justify-center items-center">
                                    {item.title}
                                    <RiArrowDropDownLine
                                        color="#667085"
                                        size="36px"
                                    />
                                </a>
                            </li>
                        ) : (
                            <li key={index} className="text-gray-500">
                                <a href="">{item.title}</a>
                            </li>
                        )
                    )}
                </ul>
                <Button variant="white" className="w-full">Talk to Sales</Button>
                <Button variant="primary" className="w-full mt-4">
                    Sign up for free
                </Button>
            </div>
        </Drawer>
    )
}

export default MobileNav
