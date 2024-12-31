import Board from '../components/Board';
import Logo from '../components/Logo';
import PlayButton from '../components/PlayButton';
import UserInfo from '../components/UserInfo';
// import { boardSize } from '../globals';

export default function HomePage(){
    return (

        <section className="container-bkg">
            <div className='container-home'>
                <div className="left-side-home mr-10">
                    <Logo _width={200}/>

                    <UserInfo username={"PsCost"} rating="1500"/>

                    <div className='buttons-container default-color add-shadow'>

                        <PlayButton text={"Jogar online"}/>
                        <PlayButton text={"Jogar com bots"}/>

                    </div>
                </div>
                <div className='board-container ml-10'>
                    <div className="board">
                        <Board/>

                    </div>
                </div>
            </div>
        </section>

    )
}