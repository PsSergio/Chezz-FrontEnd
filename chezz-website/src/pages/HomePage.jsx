import Board from '../components/Board';
import Logo from '../components/Logo';
import PlayButton from '../components/PlayButton';
import UserInfo from '../components/UserInfo';
// import { boardSize } from '../globals';

export default function HomePage(){
    return (

        <section className="container-bkg">
            <div className='container-home'>
                <div className="left-side-home ">
                    <Logo _width={200}/>

                    <UserInfo username={"PsCosta"} rating="1500"/>

                    <div className='buttons-container default-color add-shadow mb-4 mt-6'>

                        <PlayButton text={"Jogar online"}/>
                        <PlayButton text={"Jogar com bots"}/>

                    </div>
                </div>
                <div className='board-container xl:ml-10 md:ml-5'>
                    <div className="board">
                        <Board/>

                    </div>
                </div>
            </div>
        </section>

    )
}