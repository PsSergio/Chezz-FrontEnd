import BackButton from "../components/BackButton";
import Logo from "../components/Logo";
import SingButton from "../components/SingButton";
import SinginForm from "../components/SinginForm";

export default function SingingPage(){
    return (

        <div className="singup-container w-screen flex flex-col justify-center items-center mt-2">
            <BackButton/>
            <div className="logo-container flex flex-col justify-center items-center">
                <Logo _width={20}/>
                <p className="sub-text-singing-singup mt-0">Entre na sua conta!</p>
            </div>
            <div className="sing-container flex flex-col justify-center items-center">
                <SinginForm/>
                <SingButton text={"Entrar na conta"} bkgColor={"#EB6161"} borderColor={"#9B3535"}/>
                <div className="cellphone-singin-btn-container w-full mt-5">
                    <SingButton text={"Não tenho uma conta"} bkgColor={"#747474"} borderColor={"#414141"}/>
                </div>
            </div>
        </div>

    )
}