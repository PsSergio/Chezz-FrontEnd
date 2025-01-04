// import { Router, Routes, Route} from 'react-router-dom';
import Board from '../components/Board';
import DefaultPieces from '../components/DefaultPieces';
import Logo from '../components/Logo';
import PlayButton from '../components/PlayButton';
import UserInfo from '../components/UserInfo';
import { useLocation } from 'react-router-dom';
// import { useState } from 'react';


 
export default function HomePage(){
    // const [session, setSession] = useState({sessionId}) 
    const location = useLocation()

     
    const { username, rating, sessionId} = location.state;

    return (
        
        <section className="container-bkg">
            
            <div className="container-home-phone-response phone-mode flex flex-col items-center">
                <div className="userInfo">
                    <UserInfo username={username} rating={rating} mode={"Cellphone"} sessionId={sessionId}/>
                </div>
                <div className='board-container w-screen flex flex-col justify-center items-center'>
                    <div className="board">
                        <Board/>

                    </div>
                    <div className="buttons-container">
                        <PlayButton text={"Jogar online"}/>
                        <PlayButton text={"Jogar com bots"}/>
                    </div>
                </div>
            </div>
            <div className='container-home-desktop-response desktop-mode'>
                <div className="left-side-home ">
                    <Logo _width={200}/>

                    <UserInfo username={username} rating={rating} mode={"Desktop"} sessionId={sessionId}/>

                    <div className='buttons-container default-color add-shadow mb-4 mt-6'>

                        <PlayButton text={"Jogar online"}/>
                        <PlayButton text={"Jogar com bots"}/>

                    </div>
                </div>
                <div className='board-container xl:ml-10 md:ml-5'>
                    <div className="board">
                        <Board/>
                        <DefaultPieces/>

                    </div>
                </div>
            </div>
        </section>

    )
}