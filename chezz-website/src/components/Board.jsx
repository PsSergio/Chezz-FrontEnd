import Square from "./Square"

export default function Board(){

    let squars = []
    let isRed = true
    const lettersHouse = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'].reverse()


        for(let i = 0; i < 8; i++){
            
            if(i > 0 && isRed){
                isRed = false
            }else {
                isRed = true
            }
            
            for(let j = 0; j < 8; j++){
                if(isRed){
                    squars.push(<Square isRed={!isRed} letter={lettersHouse[j]} number={i+1}/>)
                    isRed=false
                    continue;
                }

                isRed=true
                squars.push(<Square isRed={isRed} letter={lettersHouse[j]} number={i+1}/>)
                
            }
            
        }


    return squars.reverse()

}   