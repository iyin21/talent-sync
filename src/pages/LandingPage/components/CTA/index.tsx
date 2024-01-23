import Button from "../../../../components/Core/Button/button"
import { FaRegCheckCircle } from "react-icons/fa"
import ScreenMockup from "../../../../assets/images/screenmockup.png"

const CTA = () => {
    return (
        <div className="lg:flex lg:pl-20 md:pl-10 pl-6 py-14 lg:pr-0 pr-6 gap-4">
            <div className="lg:w-[45%]">
                <h3 className="lg:text-xl text-gray-900">
                    Ready to clear the path to perfect communication?
                </h3>
                <div className="ml-4">
                    <div className="flex mt-4 items-center mb-4">
                        <FaRegCheckCircle color="#175CD3" size={22} />
                        <h5 className="ml-2 text-gray-600 lg:text-lg">
                            30 days free trial
                        </h5>
                    </div>
                    <div className="flex items-center mb-4">
                        <FaRegCheckCircle color="#175CD3" size={22} />
                        <h5 className="ml-2 text-gray-600 lg:text-lg">
                            Cancel at any time
                        </h5>
                    </div>
                    <div className="flex items-center mb-4">
                        <FaRegCheckCircle color="#175CD3" size={22} />
                        <h5 className="ml-2 text-gray-600 lg:text-lg">
                            Access to all features
                        </h5>
                    </div>
                    <div className="flex items-center mb-4">
                        <FaRegCheckCircle color="#175CD3" size={22} />
                        <h5 className="ml-2 text-gray-600 lg:text-lg">
                            Peronalized onboarding
                        </h5>
                    </div>
                </div>

                <div className="flex items-center mt-2">
                    <Button variant="white" className="">Talk to sales</Button>
                    <Button variant="primary" className="ml-2 ">Start your free trial</Button>
                </div>
            </div>
            <div className="lg:w-[55%] lg:block flex justify-center lg:mt-0 mt-10">
                <img src={ScreenMockup} alt="" />
            </div>
        </div>
    )
}

export default CTA
