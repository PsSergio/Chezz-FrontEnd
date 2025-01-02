import { useState } from "react"
import SingButton from "./SingButton"
import {useNavigate} from 'react-router-dom'
import Loading from "./Loading"

export default function SingupForm(){
    const navigate = useNavigate()

    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [isSending, setIsSending] = useState(false)

    const [emailErrorMsg, setEmailErrorMsg] = useState("")
    const [usernameErrorMsg, setusernameErrorMsg] = useState("")

    const [loadingVisible, setLoadingVisible] = useState(false)

    function resetErrors(){
        setEmailErrorMsg("")
        setusernameErrorMsg("")
    }

    function changeUsername(event) {
        setUsername(event.target.value)
    }

    function changeEmail(event){
        setEmail(event.target.value)
    }

    function changePassword(event){
        setPassword(event.target.value)
    }

    async function singinPlayer(){
        resetErrors()
        if(isSending) return

        setLoadingVisible(true)

        
        if(username == "" || email == "" || password == "") return
        

        const player = { username, email, password}

        setIsSending(true)
        fetch(
            'http://10.0.0.181:8080/player/save',
            {
            method:'POST',
            headers: {'Content-Type': "application/json"},
            body: JSON.stringify(player)
            }
        ).then(response =>{
                response.json().then((value) => {
                    if(response.ok){

                        const data = {
                            'username': value.username, 
                            'rating': value.rating, 
                            'sessionId': value.sessionId }
                        navigate('/home', {state: data})

                        return

                    }
                    if(value.type == "UsernameExists"){
                        setusernameErrorMsg(value.message)
                        return
                    }
                    setEmailErrorMsg(value.message)
                })
            })
    }

    function goToSinginPage(){
        navigate("/singin")
    }
    
    return (
        <div>
            <Loading isVisible={loadingVisible}/>
        <div className="sing-container flex flex-col justify-center items-center">

            <div className="container-form default-color add-shadow w-full">
                <div className="username-container input-container">
                    <input type="text" className="username-singup input-singin-and-singup placeholder-white" placeholder="nome de usuario" onChange={changeUsername}></input>
                    <p className="username-warning-error error-msg">{usernameErrorMsg}</p>
                </div>
                <div className="email-container input-container">
                    <input type="text" className="email-singup input-singin-and-singup placeholder-white" placeholder="email" onChange={changeEmail}></input>
                    <p className="email-warning-error error-msg">{emailErrorMsg}</p>
                </div>
                <div className="password-container input-container">
                    <input type="password" className="senha-singup input-singin-and-singup placeholder-white" placeholder="senha" onChange={changePassword}></input>
                </div>
                <div className="toSingin-container mb-7 w-full">
                    <p className="toSingin text-sm font-semibold text-gray-300 underline italic hover:text-gray-50" onClick={goToSinginPage}>já tenho uma conta</p>
                </div>
            </div>
            <SingButton text={"Criar usuário"} bkgColor={"#EB6161"} borderColor={"#9B3535"} onclick_func={() => {
                singinPlayer()
                setLoadingVisible(false)
                setIsSending(false)
            }}/>
            <div className="cellphone-singin-btn-container w-full mt-5">
                <SingButton text={"Já tenho uma conta"} bkgColor={"#747474"} borderColor={"#414141"} onclick_func={goToSinginPage}/>
            </div>
            
        </div>
        </div>
        
    )
}