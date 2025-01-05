 export default function Square({isRed, letter, number}) {

    function isPawnMoveValid(event){



    }

    function capturePiece(event, id){
        const opSide = event.dataTransfer.getData('side') == "white" ? "black" : "white"
        if(!event.target.className.split(' ').some(function(w){return w === opSide})) return
        
        const house = event.target.parentElement
        const pieces = document.getElementsByClassName(event.target.className)
        pieces.item(0).remove()
        pieces.item(0).remove()

        putPieceInHouse(house, id)

    }

    function isHouseValid(event){
        console.log()
        // if(event.target.nodeName == "IMG") return false

        return true
    }

    function isMoveValid(event){
        if(!isHouseValid(event)) return false
        return true
    }

    function putPieceInHouse(piece, id){
        const pieces = document.getElementsByClassName(id)

        const squares = document.getElementsByClassName(piece.className)

        squares.item(0).appendChild(pieces.item(0))
        squares.item(1).appendChild(pieces.item(1))
    }

    function handleDrop(event){
        if(!isMoveValid(event)) return
        
        event.preventDefault()

        const id = event.dataTransfer.getData('id')
        
        if(event.target.nodeName == "IMG"){
            capturePiece(event, id)
            return
        }
        putPieceInHouse(event.target, id)

    }

    function handleDragOver(event){
        event.preventDefault()
    }

    if(isRed) return <div className={`square-red piece-house ${letter}${number}`}
    onDragOver={handleDragOver}
    onDrop={handleDrop}></div>

    return <div className={`square-white piece-house ${letter}${number}`}
    onDragOver={handleDragOver}
    onDrop={handleDrop}></div>
}