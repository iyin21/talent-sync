import VideoRecording from "../../../../assets/icons/videoRecording.svg"
import Recording from "../../../../assets/icons/recording01.svg"
import Calendar from "../../../../assets/icons/calendar.svg"
import Lock from "../../../../assets/icons/lock.svg"
import Arrow from "../../../../assets/images/arrow.png"
import Rectangle from "../../../../assets/images/Rectangle.png"

const ClearLinkAdvantage = () => {
    return (
        <div className="lg:flex lg:px-20 md:px-10 px-6 py-14 gap-10">
            <div className="xl:w-[65%] w-[100%]">
                <h6 className="text-blue-700 font-semibold">
                    The ClearLink Advantage
                </h6>
                <h3 className="text-gray-800 mt-2 md:text-xl">
                    Why choose ClearLink?
                </h3>
                <h5 className="text-gray-500 mt-2 lg:text-lg">
                    In a world where connection is everything, ClearLink takes
                    the lead. Our cutting-edge video conferencing app offers:
                </h5>
                <div className="grid md:grid-cols-2 gap-4 gap-y-10 mt-16 ">
                    <div>
                        <img src={VideoRecording} alt="" />
                        <h4 className="text-gray-900 font-semibold mt-2">
                            Crystal-clear HD video
                        </h4>
                        <h6 className="text-gray-600 mt-2">
                            No more pixelation or blurriness – just stunning,
                            lifelike clarity that brings your team closer in
                            meetings.
                        </h6>
                    </div>
                    <div>
                        <img src={Recording} alt="" />
                        <h5 className="text-gray-900 font-semibold mt-2">
                            Noise-canceling audio
                        </h5>
                        <p className="text-gray-600 mt-2">
                            Say goodbye to distractions with our advanced audio
                            tech for crisp, interruption-free conversations.
                        </p>
                    </div>
                    <div>
                        <img src={Calendar} alt="" />
                        <h5 className="text-gray-900 font-semibold mt-2">
                            Scheduling made easy
                        </h5>
                        <p className="text-gray-600 mt-2">
                            Streamline your agenda with ClearLink's intuitive
                            scheduling. Set up meetings, send invitations, and
                            receive reminders in one place.
                        </p>
                    </div>

                    <div>
                        <img src={Lock} alt="" />
                        <h5 className="text-gray-900 font-semibold mt-2">
                            Bank-grade security
                        </h5>
                        <p className="text-gray-600 mt-2">
                            Your privacy is our priority with bank-grade
                            security protocols safeguarding your meetings and
                            data from unwanted intruders.
                        </p>
                    </div>
                </div>
            </div>
            <div className="xl:w-[35%] w-[100%] mt-10 lg:mt-0 lg:block flex justify-center">
                <div>
                    <img src={Arrow} className="z-30 sticky " alt="" />
                    <img src={Rectangle} className="-mt-4 " alt="" />
                </div>
            </div>
        </div>
    )
}

export default ClearLinkAdvantage
