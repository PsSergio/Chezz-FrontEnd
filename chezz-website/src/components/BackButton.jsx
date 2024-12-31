import BackImg from '../assets/back.png'

export default function BackButton(){
    return (
        <button>
            <img src={BackImg} alt='Para voltar' className='back-btn w-8'/>
        </button>
    )
}