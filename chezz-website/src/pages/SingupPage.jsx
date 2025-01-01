import BackButton from "../components/BackButton";
import Logo from "../components/Logo";
import SingupForm from "../components/SingupForm";

export default function SingupPage(){

    return(

        <div className="singup-container w-screen flex flex-col justify-center items-center mt-2">
            <BackButton/>
            <div className="logo-container flex flex-col justify-center items-center">
                <Logo _width={20}/>
                <p className="sub-text-singing-singup mt-0">Se cadastre para evoluir no xadrez!</p>
            </div>

            <SingupForm/>
                
            
        </div>

    )

}