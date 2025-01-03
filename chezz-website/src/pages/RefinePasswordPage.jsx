import BackButton from "../components/BackButton";
import SingButton from "../components/SingButton"
import { useState, useRef} from "react";
import {motion} from "framer-motion"
import Loading from "../components/Loading";
import { useNavigate } from "react-router-dom";

export default function RefinePasswordPage(){
    const navigate = useNavigate()

    const inputs = [useRef(), useRef(), useRef(), useRef(), useRef(), useRef()]

    const [email, setEmail] = useState("")
    const [emailValidated, setEmailValidated] = useState("")

    const [code, setCode] = useState("")

    const [emailErrorMsg, setEmailErrorMsg] = useState("")
    const [codeErrorMsg, setCodeErrorMsg] = useState("")

    const [toCodeStep, setToCodeStep] = useState(false)
    const [toRefinePasswordStep, setToRefinePasswordStep] = useState(false)

    const [isSending, setIsSending] = useState(false)
    const [isLoading, setIsLoading] = useState(false)

    function changeEmail(event){
        setEmail(event.target.value)
    }

    async function fetchSendEmailAPI(){
        return  await fetch(
            `http://10.0.0.181:8080/code/sendEmail/${email}`,
            {
                method: "POST",
                headers: {'Content-Type': "application/json"},
            }
        ).then(response => {
            if(response.ok){
                setToCodeStep(true)
                setEmailValidated(email)
                return
            }

            response.json().then((value) =>{

                setEmailErrorMsg(value.message)

            })
        })
    }

    async function fetchCodeAPI(){
        return await fetch(
            `http://10.0.0.181:8080/code/validate/${emailValidated}/${code}`,
            {
                method: 'GET',
                headers: {'Content-Type': "application/json"},
            }
            
        ).then(response => {
            if(response.ok){
                
                setToRefinePasswordStep(true)
                return
            }

            response.json().then((value) =>{

                setCodeErrorMsg(value.message)

            })
        })
    }

    async function sendCode(){

        if(code.length!=6 || isSending || isNaN(code) ) return
        setIsLoading(true)
        setIsSending(true)

        await fetchCodeAPI()

        setIsLoading(false)
        setIsSending(false)

        setCodeErrorMsg("")

    }

    async function sendEmail(){
        
        if(email == "" || isSending ) return
        setIsLoading(true)
        setIsSending(true)

        await fetchSendEmailAPI()

        setIsLoading(false)
        setIsSending(false)

        setEmail("")
        setEmailErrorMsg("")

    }

    function animation() {
        // toCodeStep ? 0 : window.innerWidth
        if(toCodeStep) return 0
        else if(!toCodeStep) return window.innerWidth
        else if(toRefinePasswordStep) return -window.innerWidth
        else return 0
    }

    return (
        <div>        
        <Loading isVisible={isLoading}/>
        <div className="singup-container w-screen flex flex-col justify-center items-center mt-2">
            <BackButton onClick={() =>{
                if(toCodeStep) setToCodeStep(!toCodeStep)
                else if(toRefinePasswordStep) setToRefinePasswordStep(!toRefinePasswordStep)
                else navigate("/singin")
            }}/>

            <div className="h-screen flex justify-center items-center" >
                <motion.div className="send-email-step flex flex-col justify-evenly items-center h-full absolute" style={{visibility:"visible"}} animate={{x: toCodeStep ? -window.innerWidth : 0}} transition={{duration: 1}}>
                    <div className="flex flex-col items-center">
                    <h1 className="text-white font-bold text-2xl">Esqueceu a senha senha?</h1>
                    <p className="text-gray-300 font-bold text-xl w-3/4 text-center">Coloque o seu email para enviarmos um código de confirmação</p>
                    </div>
                    <div className="email-container input-container">
                        <input type="text" value={email} className="email-singup input-singin-and-singup placeholder-white" placeholder="email" onChange={changeEmail}></input>
                        <p className="email-warning-error font-bold" style={{color: "#EB6161"}}>{emailErrorMsg}</p>
                    </div>
                    <div className="w-64">
                        <SingButton text={"Mandar email"} bkgColor={"#EB6161"} borderColor={"#9B3535"} onclick_func={() => {
                            sendEmail()
 
                        }}/>
                    </div>
                </motion.div>

                <motion.div className="send-code-step flex flex-col justify-evenly items-center h-full absolute" style={{visibility:"visible", }}
                 animate={{
                    x: animation()
                    }}
                 transition={{duration: 1}}
                 initial={{x: window.innerWidth}}>
                    <div className="flex flex-col items-center">
                        <h1 className="text-white font-bold text-2xl">Enviamos um código para o email</h1>
                        <p className="font-bold text-lg w-3/4 text-center" style={{color: "#EB6161"}}>{emailValidated}</p>
                    </div>
                    <div className="flex flex-col items-center">
                        <div className="flex justify-center items-center">
                            <input ref={inputs[0]} type="text" className="code-input" placeholder="0" maxLength={1}></input>
                            <input ref={inputs[1]} type="text" className="code-input" placeholder="0" maxLength={1}></input>
                            <input ref={inputs[2]} type="text" className="code-input" placeholder="0" maxLength={1}></input>
                            <input ref={inputs[3]} type="text" className="code-input" placeholder="0" maxLength={1}></input>
                            <input ref={inputs[4]} type="text" className="code-input" placeholder="0" maxLength={1}></input>
                            <input ref={inputs[5]} type="text" className="code-input" placeholder="0" maxLength={1}></input>
                        </div>
                        <p className="code-warning-error font-bold" style={{color: "#EB6161"}}>{codeErrorMsg}</p>
                    </div>

                    <div className="w-64">
                        <SingButton text={"Mandar código"} bkgColor={"#EB6161"} borderColor={"#9B3535"} onclick_func={() =>{
                            let tempCode = ""
                            for(let i = 0; i < inputs.length; i++){
                                tempCode+=inputs[i].current.value
                            }
                            setCode(tempCode)
                            console.log(code)
                            sendCode()
                        }}/>
                    </div>
                </motion.div>

                <motion.div className="refine-password-step flex flex-col justify-evenly items-center h-full absolute" style={{visibility:"visible"}}
                animate={{x: toRefinePasswordStep ? 0 : window.innerWidth}} 
                transition={{duration: 1}}
                initial={{x: window.innerWidth}}>
                    <div className="flex flex-col items-center">
                    <h1 className="text-white font-bold text-2xl">Esqueceu a senha senha?</h1>
                    <p className="text-gray-300 font-bold text-xl w-3/4 text-center">Coloque o seu email para enviarmos um código de confirmação</p>
                    </div>
                    <div className="email-container input-container">
                        <input type="text" value={email} className="email-singup input-singin-and-singup placeholder-white" placeholder="email" onChange={changeEmail}></input>
                        <p className="error-msg text-red-500">{emailErrorMsg}</p>
                    </div>
                    <div className="w-64">
                        <SingButton text={"Mandar código"} bkgColor={"#EB6161"} borderColor={"#9B3535"} onclick_func={() => {
                            sendEmail()
 
                        }}/>
                    </div>
                </motion.div>
            </div>
            
        </div>
        </div>
    )

}