import Toggle from "./toggle"
const FAQs = [
    {
        title: "How many participants can join a ClearLink video conference?",
        content:
            "ClearLink offers flexible meeting options. Depending on your subscription plan, you can host meetings with varying numbers of participants. Our plans are designed to accommodate small team collaborations and large-scale webinars, ensuring you have the right fit for your needs.",
    },
    { title: "Can I use ClearLink on multiple devices?", content: "" },
    {
        title: "Is ClearLink compatible with other video conferencing platforms?",
        content: "",
    },
    {
        title: "How does ClearLink ensure the security of my video conferences?",
        content: "",
    },
    {
        title: "Do I need to download any software to use ClearLink?",
        content: "",
    },
    {
        title: "What kind of customer support does ClearLink provide?",
        content: "",
    },
]
const Support = () => {
    return (
        <div className=" lg:flex lg:px-20 md:px-10 px-6 py-14 gap-10">
            <div className="lg:w-[40%]">
                <h6 className="text-blue-700 font-semibold">Support</h6>
                <h2 className="font-semibold text-gray-800 mt-4">FAQs</h2>
                <h5 className="text-gray-500 mt-2 lg:text-lg">
                    Everything you need to know about the product and billing.
                    Can’t find the answer you’re looking for? Please chat to our
                    friendly team.
                </h5>
            </div>
            <div className="lg:w-[60%] mt-6 lg:mt-0">
                {FAQs.map((item, index) => (
                    <Toggle
                        key={index}
                        title={item.title}
                        content={item.content}
                    />
                ))}
            </div>
        </div>
    )
}

export default Support
