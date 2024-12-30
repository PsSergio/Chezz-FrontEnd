import Logo from '../components/Logo';
import PlayButton from '../components/PlayButton';
import UserInfo from '../components/UserInfo';

function HomePage(){
    return (

        <section className="container-bkg">
            <div className='container'>
                <div className="left-side-home">
                    <Logo _width={200}/>

                    <UserInfo username={"PsCosta"} rating="1500"/>

                    <div className='buttons-container default-color add-shadow'>

                        <PlayButton text={"Jogar online"}/>
                        <PlayButton text={"Jogar com bots"}/>

                    </div>
                </div>
                <div className="board"></div>
            </div>
        </section>

    )
}

export default HomePage;