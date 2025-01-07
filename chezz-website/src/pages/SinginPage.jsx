import BackButton from "../components/BackButton";
import Logo from "../components/Logo";
import SinginForm from "../components/SinginForm";

export default function SingingPage(){

    return (

        <div className="singup-container w-screen flex flex-col justify-center items-center mt-2">
            <BackButton/>
            <div className="logo-container flex flex-col justify-center items-center mt-24">
                <Logo _width={20}/>
                <p className="sub-text-singing-singup mt-0">Entre na sua conta!</p>
            </div>
            <SinginForm/>
        </div>

    )
}