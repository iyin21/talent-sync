import Shopify from "../../../../assets/icons/shopify.svg"
import Avatar from "../../../../assets/icons/avatar.svg"
import ArrowLeft from "../../../../assets/icons/arrowLeft.svg"
import ArrowRight from "../../../../assets/icons/arrowRight.svg"
import Content from "../../../../assets/images/Contents.png"
import { FaStar } from "react-icons/fa"

const Testimonial = () => {
    return (
        <div className="lg:flex justify-between bg-gray-50 py-16 px-20 lg:px-20 md:px-10 px-6  lg:gap-20">
            <div className="lg:w-[50%]">
                <img src={Shopify} alt="" />{" "}
                <div className="flex my-8">
                    <FaStar color="#FDB022" />
                    <FaStar color="#FDB022" />
                    <FaStar color="#FDB022" />
                    <FaStar color="#FDB022" />
                    <FaStar color="#FDB022" />
                </div>
                <h4 className="font-semibold lg:text-2lg">
                    ClearLink has upgraded our remote meetings. High-quality
                    video, screen sharing, and top-notch security make it
                    essential for our team.
                </h4>
                <div className="flex mt-6 justify-between">
                    <div className="flex">
                        <img src={Avatar} alt="" />
                        <div className="ml-4">
                            <h5 className="text-gray-900 font-semibold ">
                                Sarah Thompson
                            </h5>
                            <h6 className="text-gray-600">
                                Project Manager, Shopify
                            </h6>
                        </div>
                    </div>

                    <div className="flex">
                        <img
                            src={ArrowLeft}
                            className="cursor-pointer"
                            alt=""
                        />
                        <img
                            src={ArrowRight}
                            className="ml-10 cursor-pointer"
                            alt=""
                        />
                    </div>
                </div>
            </div>
            <div className="lg:w-[50%] flex justify-center lg:block mt-10 lg:mt-0">
                <img src={Content} alt="" />
            </div>
        </div>
    )
}

export default Testimonial
