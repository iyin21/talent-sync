import Navbar from "./components/Nav"
import HeroSection from "./components/HeroSection"
import SocialProof from "./components/SocialProof"
import ClearLinkAdvantage from "./components/ClearLinkAdvantage"
import Support from "./components/Support"
import CTA from "./components/CTA"
import Footer from "./components/Footer"
import Testimonial from "./components/Testimonial"

const LandingPage = () => {
    return (
        <div className="font-inter">
            <div className="lg:px-20 md:px-10 px-6 bg-headerBackground bg-center">
                <header className=" py-10  bg-auto bg-no-repeat ">
                    <div className="">
                        <Navbar />
                        <HeroSection />
                    </div>
                </header>
            </div>

            <SocialProof />
            <ClearLinkAdvantage />
            <Testimonial/>
            <Support />
            <CTA />
            <Footer />
        </div>
    )
}

export default LandingPage
