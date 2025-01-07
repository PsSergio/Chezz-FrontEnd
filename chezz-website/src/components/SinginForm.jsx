import { useState } from "react"
import SingButton from "./SingButton"
import { useNavigate } from "react-router-dom"
import Loading from "./Loading"
import getPublicIP from "../global"

export default function SinginForm(){
    
    const navigate = useNavigate()
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("") 
    const [isSending, setIsSending] = useState(false)
    const [emailErrorMsg, setEmailErrorMsg] = useState("")

    const [isLoadingVisible, setIsLoadingVisible] = useState(false)

    function resetErrors(){
        setEmailErrorMsg("")
    }

    function changeEmail(event){
        setEmail(event.target.value)
    }
    function changePassword(event){
        setPassword(event.target.value)
    }

    async function singinPlayer(){
        setIsLoadingVisible(true)
        resetErrors()

        if(isSending || email == "" || password == "") return

        setIsSending(true)
        fetch(`http://${getPublicIP()}/player/login/${email}/${password}`,
            {
                method:"GET",
                headers: {'Content-Type': "application/json"},

            }
        ).then(response =>{ 

            response.json().then((value) =>{

                if(response.ok){
                    const data = {
                        'username': value.username, 
                        'rating': value.rating, 
                        'sessionId': value.sessionId }
                    navigate('/home', {state: data})
                    return
                }

                setEmailErrorMsg(value.message)
                
            })

        })
    }

    function gotoSingupPage(){
        navigate("/singup")
    }

    return(
    <div className="flex justify-center items-center w-screen">
    <Loading isVisible={isLoadingVisible}/>
    <div className="sing-container flex flex-col justify-center items-center">
        <div className="container-form default-color add-shadow w-full">
            <div className="email-container input-container">
                <input type="text" value={email} className="email-singup input-singin-and-singup placeholder-white" placeholder="email" onChange={changeEmail}></input>
                <p className="email-warning-error error-msg">{emailErrorMsg}</p>
            </div>
            <div className="password-container input-container">
                <input type="password" value={password} className="senha-singup input-singin-and-singup placeholder-white" placeholder="senha" onChange={changePassword}></input>

            </div>
            <div className="toSingin-container mb-7 w-full flex justify-between">
                <p className="toSingin text-sm font-semibold text-gray-300 underline italic hover:text-gray-50" onClick={gotoSingupPage}>Não tenho uma conta</p>
                <p className="toSingin text-sm font-semibold text-gray-300 underline italic hover:text-gray-50" onClick={() => {
                    navigate("/refine")
                }}>esqueci minha senha</p>
            </div>
            <p className="toSingin text-sm font-semibold text-red-400 underline italic hover:text-red-500 w-full" onClick={() => {navigate("/refine")}}>Esqueci minha senha</p>
        </div>
        
        <div className="w-full">
            <SingButton text={"Entrar na conta"} bkgColor={"#EB6161"} borderColor={"#9B3535"} onclick_func={() => {
                singinPlayer()
                setIsLoadingVisible(false)
                setIsSending(false)
                setEmail("")
                setPassword("")
            }}/>
                <div className="cellphone-singin-btn-container w-full mt-5">
                    <SingButton text={"Não tenho uma conta"} bkgColor={"#747474"} borderColor={"#414141"} onclick_func={gotoSingupPage}/>
                </div>
        </div>
    </div>
    </div>
    )

}