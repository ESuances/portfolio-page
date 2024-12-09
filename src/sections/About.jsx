import Globe from "react-globe.gl";
import Buttom from "../components/Buttom.jsx";
import {useState} from "react";

const About = () => {
    const hour = new Date().getHours(); //Obtenemos la hora en la que el user entra al portafolio
    const DayStart = 6;
    const DayEnd = 18;
    const isDay = hour >= DayStart && hour <= DayEnd;

    const [hasCopiedEmail, setHasCopiedEmail] = useState(false)
    const [hasCopiedPhone, setHasCopiedPhone] = useState(false)



    const handleCopyEmail = () => {
        navigator.clipboard.writeText("erick.s.suances.arc@gmail.com");
        setHasCopiedEmail(true)
        setTimeout(() => {
            setHasCopiedEmail(false);
        }, 2000)
    }

    const handleCopyPhone = () => {
        navigator.clipboard.writeText("9991002349");
        setHasCopiedPhone(true)
        setTimeout(() => {
            setHasCopiedPhone(false);
        }, 2000)
    }

    return (
        <section className="c-space my-20">
            <div className="grid xl:grid-cols-3 xsl:grid-cols-6 md:grid-cols-2 grid-cols-1 gap-5 h-full">
                <div className="col-span-1 xl:row-span-3">
                    <div className="grid-container">
                        <img src="/assets/grid1.png" alt="grid-1" className="w-full sm:h-[276] h-fit object-contain"/>
                        <div>
                            <p className="grid-headtext">Hi, Im Erick!</p>
                            <p className="grid-subtext">With 5 years of experience I have honed my skills in fullstack development, now focusing on animated 3D websites creating my own 3D models</p>
                        </div>
                    </div>
                </div>
                <div className="col-span-1 xl:row-span-3">
                    <div className="grid-container">
                        <img src="/assets/grid2.png" alt="grid-2" className="w-full sm:h-[276] h-fit object-contain" />
                        <div>
                            <p className="grid-headtext">Tech Stack</p>
                            <p className="grid-subtext">Currently specializing in Javascrpit/TypeScript with a focus on React, Next.Js ecosystems and React Native</p>
                        </div>
                    </div>
                </div>
                <div className="col-span-1 xl:row-span-4">
                    <div className="grid-container">
                        <div className="rounded-3x1 w-full sm:h-[326px] h-fit flex justify-center items-center">
                            {isDay ? (
                                <Globe
                                    height={326}
                                    width={326}
                                    backgroundColor="rgba(0,0,0,0)"
                                    backgroundImageOpacity={0.5}
                                    showAtmosphere={true}
                                    showGraticules={true}
                                    globeImageUrl="//unpkg.com/three-globe/example/img/earth-day.jpg"
                                    bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
                                    labelsData={[{
                                        lat: 40, lng: -100, text: "I'm here currently!", color: "white", size: 100,
                                    }]}
                                />
                            ) : (
                                <Globe
                                    height={326}
                                    width={326}
                                    backgroundColor="rgba(0,0,0,0)"
                                    backgroundImageOpacity={0.5}
                                    showAtmosphere={true}
                                    showGraticules={true}
                                    globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
                                    bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
                                    labelsData={[{
                                        lat: 20.5, lng: -89, text: "I'm here currently!", color: "white", size: 100,
                                    }]}
                                />
                            )}
                        </div>
                        <div>
                            <p className="grid-headtext">I work remotely across most timezones.</p>
                            <p className="grid-subtext">I'm currently based in Mexico, with availability to relocate anywhere, and with remote work available.</p>
                            <Buttom name="Contact Me" isBeam containerClass="w-full mt-10"/>
                        </div>
                    </div>
                </div>
                <div className="xl:col-span-2 xl:row-span-3">
                    <div className="grid-container">
                        <img src="/assets/grid3.png" alt="grid-3" className="w-full sm:h-[266] h-fit object-contain" />
                        <div>
                            <p className="grid-headtext">My passion for coding</p>
                            <p className="grid-subtext">I love solving problems and building things through code. Coding isn't just my profession - it is my passion since I wrote down my first HTML tag.</p>
                        </div>
                    </div>
                </div>
                <div className="xl:col-span-1 xl:row-span-2">
                    <div className="grid-container">
                        <img src="/assets/grid4.png" alt="grid-4" className="w-full md:h-[126] sm:h-[276px] h-fit object-cover sm:object-top" />
                        <div className="space-y-2">
                            <p className="grid-subtext text-center">Contact me</p>
                            <div className="copy-container" onClick={handleCopyEmail}>
                                <img src={hasCopiedEmail ? "assets/tick.svg" : "assets/copy.svg"} alt="copy me"/>
                                <p className="lg:text-xl md:text-xl font-medium text-gray_gradient text-white">erick.s.suances.arc@gmail.com</p>
                            </div>
                            <div className="copy-container" onClick={handleCopyPhone}>
                                <img src={hasCopiedPhone ? "assets/tick.svg" : "assets/copy.svg"} alt="copy me"/>
                                <p className="lg:text-xl md:text-xl font-medium text-gray_gradient text-white">9991002349</p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    )
}
export default About
