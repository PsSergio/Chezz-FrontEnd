import LogoutImage from '../assets/logout.png'

function UserInfo({username, rating, mode}){

    if(mode == "Cellphone"){

        return(
            <div className="user-info-container-cellphone default-color add-shadow w-screen flex p-5 justify-start items-center mb-12">
                
                <img className="profile-img" src="https://picsum.photos/100" alt="Profile image" width={50} height={50}/>
                <div className="user-info">
                    <div>
                        <p className="username">{username}</p>
                        <p className="rating">({rating})</p>
                    </div>

                    <img src={LogoutImage} alt="" className="logout" width={20}/>
                </div>
            </div>
        )

    }

    return (

        <div className="user-info-container default-color add-shadow">
            <img className="profile-img" src="https://picsum.photos/200" alt="Profile image" width={100} height={100}/>

            <div className="user-info">
                <div>
                    <p className="username">{username}</p>
                    <p className="rating">({rating})</p>
                </div>

                <img src={LogoutImage} alt="" className="logout" width={20} height={20}/>
            </div>
        </div>

    )

}

export default UserInfo;