import React from 'react'
import PostCreator from '../../Components/PostCreator/PostCreator'
import PostsGallery from '../../Components/PostGallery/PostsGallery'
import './style.css'
import api from '../../resources/api.js'

const panelImg1 = require('../../assets/images/mostafa-meraji-l7mA-KmHXnc-unsplash.jpg')
const panelImg2 = require('../../assets/images/mostafa-meraji-TtWStH-JuL8-unsplash.jpg')
const panelImg3 = require('../../assets/images/mostafa-meraji-Z_WogC_UONo-unsplash.jpg')
const panelImg4 = require('../../assets/images/svetlana-gumerova-CPJ1yQSa3L0-unsplash.jpg')

function Home() {



    ///Coleta os dados do perfil do usuario
    function getUserData(){
        const userData = await api.get("")
    }


    return (<div id="user-profile">


        <div className="profile-content">

            <div id = "lateral-bar">
                <div id  = "user-perfil-photo">
                    Foto usuario
                </div>
                <div id = "user-perfil-description">
                    descricao usuario
                </div>
                <div>
                    
                </div>
            </div>

            <div className="content-section">
                <h3>YOUR POSTS</h3>
                <div id = "user-posts-gallery">
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
        </div>



    </div>)
}

export default Home