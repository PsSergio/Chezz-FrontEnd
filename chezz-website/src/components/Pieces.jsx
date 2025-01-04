import { useEffect } from 'react'
// import ReactDOM from 'react-dom'


export default function Pieces({side, piece, house}){

    const imageSrc = `/pieces/${side}-${piece}.png`
    // const imageSrc = `/pieces/white-knight.png`

    useEffect(() => {
        // const otherSquares = document.getElementsByClassName('piece-house')
        // for(let i = 0; i < otherSquares.length; i++){
        //     otherSquares.item(i).textContent = ''
        // }

        const squares = document.getElementsByClassName(`piece-house ${house}`)

        squares.item(0).textContent = ''
        squares.item(1).textContent = ''
        
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