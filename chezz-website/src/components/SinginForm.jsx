export default function SinginForm(){

    return(
    <div className="container-form default-color add-shadow w-full">
        <input type="text" className="email-singup input-singin-and-singup placeholder-white" placeholder="email"></input>
        <input type="password" className="senha-singup input-singin-and-singup placeholder-white" placeholder="senha"></input>
        <div className="toSingin-container mb-7 w-full flex justify-between">
            <p className="toSingin text-sm font-semibold text-gray-300 underline italic hover:text-gray-50">já tenho uma conta</p>
            <p className="toSingin text-sm font-semibold text-gray-300 underline italic hover:text-gray-50">esqueci minha senha</p>
        </div>
        <p className="toSingin text-sm font-semibold text-red-400 underline italic hover:text-red-500 w-full">Esqueci minha senha</p>

    </div>
    )

}