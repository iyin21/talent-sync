import { useState } from "react"
import { HiOutlinePlusCircle, HiOutlineMinusCircle } from "react-icons/hi"

const Toggle = ({ title, content }: { title: string; content: string }) => {
    const [openFAQ, setOpenFAQ] = useState(false)

    return (
        <div
            className={`${openFAQ ? "bg-gray-200 rounded-2xl " : "bg-white"}  p-4 mb-4`}
            onClick={() => setOpenFAQ(!openFAQ)}
        >
            <div className="flex justify-between items-center">
                <p className="text-[20px] font-semibold text-gray-900">
                    {title}
                </p>
                <div>
                {openFAQ ? (
                    <HiOutlineMinusCircle
                        color="#98A2B3"
                        size={"24px"}
                        className="cursor-pointer rounded-2xl ml-2"
                    />
                ) : (
                    <HiOutlinePlusCircle
                        color="#98A2B3"
                        size={24}
                        className="cursor-pointer"
                    />
                )}
                </div>
                
            </div>
            {openFAQ && <p className="mt-2 text-gray-600">{content}</p>}
        </div>
    )
}

export default Toggle
