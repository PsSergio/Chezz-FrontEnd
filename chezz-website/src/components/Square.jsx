 export default function Square({isRed, letter, number}) {

    if(isRed) return <div className={`square-red piece-house ${letter}${number}`}></div>

    return <div className={`square-white piece-house ${letter}${number}`}></div>
}