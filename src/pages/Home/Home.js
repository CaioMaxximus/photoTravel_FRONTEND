import React from 'react'
import './style.css'
const background = require('../../pictures/antoine-julien-r9QZo2VJx6w-unsplash.jpg')
const logo = require('../../pictures/logo_size.jpg')
const panelImg1 = require('../../pictures/mostafa-meraji-l7mA-KmHXnc-unsplash.jpg')
const panelImg2 = require('../../pictures/mostafa-meraji-TtWStH-JuL8-unsplash.jpg')
const panelImg3 = require('../../pictures/mostafa-meraji-Z_WogC_UONo-unsplash.jpg')
const panelImg4 = require('../../pictures/svetlana-gumerova-CPJ1yQSa3L0-unsplash.jpg')

function Home() {


    return (
        <div>

            <div id="background">
                <img src={background} alt="background" />
            </div>
            <div id="header">
                <div id="name"> InfiniteTravel</div>
                <div id="logo">
                    <img src={logo} alt="InfiniteTravelLogo"></img>
                </div>
            </div>


            <div className="panel">
                <img src={panelImg1} alt="" />
                <img src={panelImg2} alt="" />
                <img src={panelImg3} alt="" />
                <img src={panelImg4} alt="" />
            </div>

            <div class="content">
                adasdadasda
                dasdad
                dadasda
        </div>
        </div>)
}

export default Home