import React, { useState } from 'react'
import PostCreator from '../../Components/PostCreator/PostCreator'
import PostsGallery from '../../Components/PostGallery/PostsGallery'
import './style.css'
import api from '../../resources/api.js'
import { BrowserRouter, Link, NavLink, useHistory } from 'react-router-dom'
import Loading from '../../Components/Loading/Loading'


function Home(props) {


    const history = useHistory();
    let [loginStatus, setLoginStatus] = useState(null);
    const [nickname,setNickname] = useState("");
    const [description , setDescription] = useState("");

    // ///Coleta os dados do perfil do usuario
    // async function getUserData() {
    //     const userData = await api.get("users/",{'Authorization': `Bearer ${}`})
    // }

    function loadUser() {
        const token = localStorage.getItem("user-local-token");
        console.log(`Bearer ${token}`);
        if (!token) {

            history.replace("/credentials/login");
            window.reload();
            alert("you must be logged to acess this page!");
        } else {
            var conf = {
                headers :{Authorization :  `Bearer ${token}`   }
            }
            api.get("/users/personal",
                {headers : { "Authorization": `Bearer ${token}` }}).
                then((r) =>{
                    setLoginStatus("logged")
                    setNickname(r.data.nickname)
                    setDescription(r.data.description)
                    console.log(r)}).catch(e => {
                        history.replace("/credentials/login");
                        window.location.reload();
                        alert("you must be logged to acess this page!");
                    })
        }
    }

    function viewReturn(loginStatus) {

        if (loginStatus) {
            return (<div className="profile-content">
                
                <div id="lateral-bar">
                    <div id="user-perfil-photo">
                        Foto usuario
                    </div>
                    <div id="user-perfil-options">
                        <div>
                            <button onClick={function () { history.replace("/credentials/login"); window.location.reload() }}>Sair-da Conta</button>
                        </div>
                        <div>
                            <button >Editar Perfil</button>
                        </div>

                    </div>
                    <div id="user-perfil-description">
                        <p>NickName : {nickname}</p>
                        <p>Description : {description} </p>

                    </div>

                    <div>

                    </div>
                </div>

                <div className="content-section">
                    <h3>YOUR POSTS</h3>
                    <div id="user-posts-gallery">
                        <PostsGallery></PostsGallery>
                    </div>

                </div>
            

                {/* 
            <div className="panel">
                <img src={panelImg1} alt="" />
                <img src={panelImg2} alt="" />
                <img src={panelImg3} alt="" />
                <img src={panelImg4} alt="" />
            </div> */}
            </div>)
        } else {
            return <Loading />
        }




    }


    loadUser();



    return (<BrowserRouter>
        <div id="user-profile">
            {viewReturn(loginStatus)}
        </div>
    </BrowserRouter>)

}

export default Home