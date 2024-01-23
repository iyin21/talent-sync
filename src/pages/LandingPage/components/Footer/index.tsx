import Logo from "../../../../assets/icons/logo.svg"
import Googleplay from "../../../../assets/images/googleplay.png"
import Appstore from "../../../../assets/images/googleplay.png"
import {
    FaLinkedin,
    FaTwitter,
    FaFacebook,
    FaInstagram,
    FaYoutube,
    FaGithub
} from "react-icons/fa"

const Footer = () => {
    return (
        <footer className="">
            <div className="grid md:grid-cols-7 sm:grid-cols-3 gap-4 text-2sm lg:px-20 md:px-10 px-6 py-14">
                <div className="col-span-2">
                    <img src={Logo} alt="" />
                    <h6 className="text-gray-600 mt-4">
                        ClearLink is your gateway to effortless, high-quality
                        video conferencing. Join us in shaping the future of
                        communication!
                    </h6>
                </div>
                <div className="flex flex-col">
                    <p className="text-gray-500">Product</p>
                    <a href="" className="text-gray-600">
                        Overview
                    </a>
                    <a href="" className="text-gray-600">
                        Features
                    </a>
                    <a href="" className="text-gray-600">
                        Solutions
                    </a>
                    <a href="" className="text-gray-600">
                        Tutorials
                    </a>
                    <a href="" className="text-gray-600">
                        Pricing
                    </a>
                </div>
                <div className="flex flex-col">
                    <p className="text-gray-500">Company</p>
                    <a href="" className="text-gray-600">
                        About us
                    </a>
                    <a href="" className="text-gray-600">
                        Careers
                    </a>
                    <a href="" className="text-gray-600">
                        Press
                    </a>
                    <a href="" className="text-gray-600">
                        News
                    </a>
                    <a href="" className="text-gray-600">
                        Contact
                    </a>
                </div>
                <div className="flex flex-col">
                    <p className="text-gray-500">Resources</p>
                    <a href="" className="text-gray-600">
                        Blog
                    </a>
                    <a href="" className="text-gray-600">
                        Events
                    </a>
                    <a href="" className="text-gray-600">
                        Help centre
                    </a>
                    <a href="" className="text-gray-600">
                        Tutorials
                    </a>
                    <a href="" className="text-gray-600">
                        Support
                    </a>
                </div>
                <div className="flex flex-col">
                    <p className="text-gray-500">Legal</p>
                    <a href="" className="text-gray-600">
                        Terms
                    </a>
                    <a href="" className="text-gray-600">
                        Privacy
                    </a>
                    <a href="" className="text-gray-600">
                        Cookies
                    </a>
                    <a href="" className="text-gray-600">
                        Licenses
                    </a>
                    <a href="" className="text-gray-600">
                        Contact
                    </a>
                </div>
                <div>
                    <p className="text-gray-500 mb-2">Get the app</p>
                    <img src={Appstore} alt="" />
                    <img src={Googleplay} alt="" className="mt-2" />
                </div>
            </div>
            <div className="sm:flex justify-between bg-gray-50 lg:px-20 md:px-10 px-6 py-14">
                <p className="text-gray-500 text-center">
                    © 2023 ClearLink. All rights reserved.
                </p>
                <div className="flex gap-4 sm:mt-0 mt-4 justify-center">
                    <FaLinkedin color="#98A2B3" size={24} />
                    <FaTwitter color="#98A2B3" size={24} />
                    <FaFacebook color="#98A2B3" size={24} />
                    <FaInstagram color="#98A2B3" size={24} />
                    <FaGithub color="#98A2B3" size={24} />
                    <FaYoutube color="#98A2B3" size={24} />
                </div>
            </div>
        </footer>
    )
}

export default Footer
