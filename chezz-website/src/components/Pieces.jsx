import { useEffect } from 'react'
// import ReactDOM from 'react-dom'
import a from "../assets/pieces/white-knight.png"

export default function Pieces({side, piece, house}){
    // const imageSrc = `../assets/pieces/${side}-${piece}.png`
    const imageSrc = `../assets/pieces/white-knight.png`

    useEffect(() => {
        const otherSquares = document.getElementsByClassName('piece-house')
        for(let i = 0; i < otherSquares.length; i++){
            otherSquares.item(i).textContent = ''
        }

        const squares = document.getElementsByClassName(`piece-house ${house}`)
        
        const pieceM = document.createElement('img')
        pieceM.src=imageSrc
        pieceM.className="piece-img w-full block"
        squares.item(0).appendChild(pieceM)

        const pieceD = document.createElement('img')
        pieceD.src=imageSrc
        pieceD.className="piece-img w-full block"
        squares.item(1).appendChild(pieceD)
        
    },)

    return null

} 