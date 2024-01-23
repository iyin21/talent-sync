import Button from "../../../../components/Core/Button/button"
import AIassistant from "../../../../assets/icons/AI-assistant.svg"
import { FaStar } from "react-icons/fa"
import Avatargroup from "../../../../assets/images/Avatargroup.png"
import Frame25 from "../../../../assets/images/Frame25.png"

const HeroSection = () => {
    return (
        <div className="lg:flex justify-between mt-24">
            <div>
                <h3 className="lg:text-2xl md:text-xl">Uniting the world, one video call at a time</h3>
                <h5 className="mt-4 text-gray-500 lg:text-lg">
                    Experience the future of communication with ClearLink –
                    where crystal-clear video conferencing meets unparalleled
                    simplicity.
                </h5>
                <div className="flex mt-8">
                    <Button variant="primary">Start your free trial</Button>
                    <div className="flex cursor-pointer ml-4 items-center">
                        <img src={AIassistant} width={20} alt="" />
                        <p className="text-blue-700 ml-2 font-semibold">
                            Discover AI assistant
                        </p>
                    </div>
                    </div>
                    <div className="flex items-center mt-8">
                        <img src={Avatargroup} alt="" />
                        <div className="ml-2">
                            <div className="flex gap-1 items-center">
                                <FaStar color="#FDB022" />
                                <FaStar color="#FDB022" />
                                <FaStar color="#FDB022" />
                                <FaStar color="#FDB022" />
                                <FaStar color="#FDB022" />
                                <p className="text-gray-700">5.0</p>
                            </div>
                            <p className="text-gray-600">from 3,000+ reviews</p>
                        </div>
                    
                </div>
                
            </div>
            <img src={Frame25} className="lg:w-[500px] xl:w-[600px] mt-10 lg:mt-0" alt="" />
        </div>
    )
}

export default HeroSection
