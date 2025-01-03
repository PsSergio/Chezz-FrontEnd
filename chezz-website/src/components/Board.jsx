export default function Board(){
    
    let squars = []
    let isRed = true

        for(let i = 0; i < 8; i++){
            
            if(i > 0 && isRed){
                isRed = false
            }else {
                isRed = true
            }
            
            for(let j = 0; j < 8; j++){
                if(isRed){
                    squars.push(<div className="square square-red"></div>)
                    isRed=false
                    continue;
                }

                isRed=true
                squars.push(<div className="square square-white"></div>)
                
            }
            
        }

    return squars
}   