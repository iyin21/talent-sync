import Shopify from "../../../../assets/icons/shopify.svg"
import Dropbox from "../../../../assets/icons/dropbox.svg";
import Coinbase from "../../../../assets/icons/coinbase.svg";
import Intercom from "../../../../assets/icons/intercom.svg";
import Marvel from "../../../../assets/icons/marvel.svg";
import Automattic from "../../../../assets/icons/automattic.svg";

const SocialProof = () => {
    return (
        <div className="lg:px-20 md:px-10 px-6 py-14">
            <h5 className="text-center text-gray-600 font-normal">
                Join 1,500+ companies already video conferencing the ClearLink
                way
            </h5>
            <div className="mt-6 flex justify-between gap-4 gap-y-8 flex-wrap">
                <img src={Shopify} alt="" />
                <img src={Coinbase} alt="" />
                <img src={Dropbox} alt="" />
                <img src={Intercom} alt="" />
                <img src={Marvel} alt="" />
                <img src={Automattic} alt="" />
                
                
            </div>
        </div>
    )
}

export default SocialProof
