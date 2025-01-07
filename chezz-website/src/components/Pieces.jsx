import { useEffect } from 'react'
// import ReactDOM from 'react-dom'


export default function Pieces({side, piece, house, id}){

    const handleDragStart = (event) =>{
        event.dataTransfer.setData('id', `id-${side}-${piece}-${id}`)
        event.dataTransfer.setData('side', side)
        event.dataTransfer.setData('piece', piece)

        const letter = event.target.parentElement.className[event.target.parentElement.className.length-2]
        const number = event.target.parentElement.className[event.target.parentElement.className.length-1]

        event.dataTransfer.setData('house', letter+number) // house before move
    }

    const imageSrc = `/pieces/${side}-${piece}.png`

    useEffect(() => {

        const squares = document.getElementsByClassName(`piece-house ${house}`)

        squares.item(0).textContent = ''
        squares.item(1).textContent = ''
        
        const pieceM = document.createElement('img')
        
        pieceM.src=imageSrc
        pieceM.className=`piece-img w-full block ${side} ${piece} id-${side}-${piece}-${id}`
        pieceM.draggable = true
        pieceM.ondragstart = (e) => handleDragStart(e) 
        squares.item(0).appendChild(pieceM)

        const pieceD = document.createElement('img')
        pieceD.src=imageSrc
        pieceD.className=`piece-img w-full block ${side} ${piece} id-${side}-${piece}-${id}`
        pieceD.draggable = true
        pieceD.ondragstart = (e) => handleDragStart(e)
        squares.item(1).appendChild(pieceD)
        
    },)

    return null

} 