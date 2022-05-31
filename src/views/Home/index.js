import React, { useState } from 'react'
import PostCreator from '../../Components/PostCreator/PostCreator'
import PostsGallery from '../../Components/PostGallery/PostsGallery'
import './style.css'
import api from '../../resources/api.js'
import { BrowserRouter, Link, NavLink, useHistory } from 'react-router-dom'
import Loading from '../../Components/Loading/Loading'

const panelImg1 = require('../../assets/images/mostafa-meraji-l7mA-KmHXnc-unsplash.jpg')
const panelImg2 = require('../../assets/images/mostafa-meraji-TtWStH-JuL8-unsplash.jpg')
const panelImg3 = require('../../assets/images/mostafa-meraji-Z_WogC_UONo-unsplash.jpg')
const panelImg4 = require('../../assets/images/svetlana-gumerova-CPJ1yQSa3L0-unsplash.jpg')

function Home(props) {


    const history = useHistory();
    let [loginStatus, setLoginStatus] = useState(null);


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
                {headers : { "Authorization": `Bearer ${token}` }}).then(() =>
                    setLoginStatus("logged")).catch(e => {
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
                        <span>NickName : { }</span>
                        <span>Description : { } </span>

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