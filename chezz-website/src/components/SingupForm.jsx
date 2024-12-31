export default function SingupForm(){
    return (
        <div className="container-form default-color add-shadow w-full">
            <input type="text" className="username-singup input-singin-and-singup placeholder-white" placeholder="nome de usuario"></input>
            <input type="text" className="email-singup input-singin-and-singup placeholder-white" placeholder="email"></input>
            <input type="text" className="senha-singup input-singin-and-singup placeholder-white" placeholder="senha"></input>
            <div className="toSingin-container mb-7 w-full">
                <p className="toSingin text-sm font-semibold text-gray-300 underline italic hover:text-gray-50">já tenho uma conta</p>
            </div>
        </div>
    )
}