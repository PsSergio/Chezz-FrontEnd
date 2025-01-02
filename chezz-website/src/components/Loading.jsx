import Lottie from "react-lottie";
import loadingAnimation from '../assets/lotties/loading.json' 

export default function Loading({isVisible}){
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: loadingAnimation,
        rendererSettings: {
          preserveAspectRatio: "xMidYMid slice"
        }
      };
    return (
        <div className="w-screen h-screen loading-container flex justify-center items-center" style={{display: isVisible ? 'block' : 'none'}}>
                <Lottie
                    options={defaultOptions}
                    isClickToPauseDisabled={true}
                    height={50}
                    width={50}
                />
        </div>
    )
}