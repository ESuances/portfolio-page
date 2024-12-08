// noinspection LanguageDetectionInspection

import {Canvas} from "@react-three/fiber";
import {PerspectiveCamera} from "@react-three/drei";
import HackerRoom from "../components/HackerRoom.jsx";
import {Suspense} from "react";
import CanvasLoader from "../components/CanvasLoader.jsx";
//import {Leva, useControls} from "leva"
import {useMediaQuery} from "react-responsive";
import {calculateSizes} from "../constants/index.js";
import JavaLogo from "../components/JavaLogo.jsx";
import ReactLogo from "../components/ReactLogo.jsx";
import Cplusplus from "../components/Cplusplus.jsx";
import Unreal_Logo from "../components/Unreal_Logo.jsx";
import HeroCamera from "../components/HeroCamera.jsx";

const Hero = () => {
    /*
    const controls = useControls('HackerRoom', {
        positionX: {
            value: 2.5,
            min: -10,
            max: 10,
        },
        positionY: {
            value: 2.5,
            min: -10,
            max: 10,
        },
        positionZ: {
            value: 2.5,
            min: -10,
            max: 10,
        },
        rotationX: {
            value: 2.5,
            min: -10,
            max: 10,
        },
        rotationY: {
            value: 2.5,
            min: -10,
            max: 10,
        },
        rotationZ: {
            value: 2.5,
            min: -10,
            max: 10,
        },
        scale: {
            value: 1,
            min: 0.1,
            max: 10,
        }
    })

     */
    const isSmall = useMediaQuery({maxWidth: 440});
    const isMobile = useMediaQuery({maxWidth: 768});
    const isTablet = useMediaQuery({minWidth: 768, maxWidth: 1024});

    const sizes = calculateSizes(isSmall, isMobile, isTablet);
    return (
        <section className="min-h-screen w-full flex flex-col relative">
            <div className="w-full mx-auto flex flex-col sm:mt-36 mt-20 c-space gap-3">
                <p className="sm:text-3xl text-xl font-medium text-white text-center font-generalsans">Hi, Im Erick Suances / ESuances <span className="waving-hand">👋️</span></p>
                <p className="hero_tag text-gray_gradient">Bulding games, apps and Saas</p>
            </div>
            <div className="w-full h-full absolute inset-0">
                {/*<Leva />*/}
                <Canvas className="w-full h-full">
                    <Suspense fallback={<CanvasLoader />}>
                        <PerspectiveCamera makeDefault position={[0,0,20]} />
                        <HeroCamera isMobile={isMobile}>
                            <HackerRoom
                                /*
                                scale={isMobile ? 0.07 : 0.1}
                                position={[1.1,-10.0,-10.0]}
                                rotation={[0.1,-3.1,0.0]}
                                */
                                scale={sizes.deskScale}
                                position={sizes.deskPosition}
                                rotation={[0.1,-3.1,0.0]}
                                //Controls to properly setup a 3D object on the scene
                                //scale={[controls.scale, controls.scale, controls.scale]}
                                //position={[controls.positionX,controls.positionY,controls.positionZ]}
                                //rotation={[controls.rotationX,controls.rotationY,controls.rotationZ]}
                            />
                        </HeroCamera>
                        <group>
                            <JavaLogo position={sizes.JavaLogoPosition}/>
                            <ReactLogo position={sizes.reactLogoPosition}/>
                            <Cplusplus position={sizes.cubePosition}/>
                            <Unreal_Logo position={sizes.ringPosition}/>
                        </group>
                        <ambientLight intensity={1}/>
                        <directionalLight position={[10,10,10]} intensity={1}/>
                    </Suspense>
                </Canvas>
            </div>
        </section>
    )
}
export default Hero
