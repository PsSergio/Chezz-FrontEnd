import { useState } from "react"
import SingButton from "./SingButton"
import {useNavigate} from 'react-router-dom'
// import HomePage from "../pages/HomePage"

export default function SingupForm(){
    const navigate = useNavigate()
    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [isSending, setIsSending] = useState(false)

    const [emailErrorMsg, setEmailErrorMsg] = useState("")

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

        if(isSending) return

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
            if(response.ok){
                response.json().then((value) => {
                    const data = {
                        'username': value.username, 
                        'rating': value.rating, 
                        'sessionId': value.sessionId }
                    navigate('/home', {state: data})
                })
                return
            }
            response.json().then((value) => { 
                setEmailErrorMsg(value.message)
            })
        })
        setIsSending(false)
    }
    
    return (
        
        <div className="sing-container flex flex-col justify-center items-center">

            <div className="container-form default-color add-shadow w-full">
                <input type="text" className="username-singup input-singin-and-singup placeholder-white" placeholder="nome de usuario" onChange={changeUsername}></input>
                <input type="text" className="email-singup input-singin-and-singup placeholder-white" placeholder="email" onChange={changeEmail}></input>
                <div className="email-msg-container">
                    <p className="email-warning-error error-msg">{emailErrorMsg}</p>
                </div>
                <input type="password" className="senha-singup input-singin-and-singup placeholder-white" placeholder="senha" onChange={changePassword}></input>
                <div className="toSingin-container mb-7 w-full">
                    <p className="toSingin text-sm font-semibold text-gray-300 underline italic hover:text-gray-50">já tenho uma conta</p>
                </div>
            </div>
            <SingButton text={"Criar usuário"} bkgColor={"#EB6161"} borderColor={"#9B3535"} onclick_func={singinPlayer}/>
            <div className="cellphone-singin-btn-container w-full mt-5">
                <SingButton text={"Já tenho uma conta"} bkgColor={"#747474"} borderColor={"#414141"} onclick_func={() => {}}/>
            </div>
            
        </div>
            
        
    )
}