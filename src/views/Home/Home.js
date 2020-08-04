import React from 'react'
import './style.css'

const panelImg1 = require('../../assets/pictures/mostafa-meraji-l7mA-KmHXnc-unsplash.jpg')
const panelImg2 = require('../../assets/pictures/mostafa-meraji-TtWStH-JuL8-unsplash.jpg')
const panelImg3 = require('../../assets/pictures/mostafa-meraji-Z_WogC_UONo-unsplash.jpg')
const panelImg4 = require('../../assets/pictures/svetlana-gumerova-CPJ1yQSa3L0-unsplash.jpg')

function Home() {


    return (<div id = "homepage">


        <div className="panel">
            <img src={panelImg1} alt="" />
            <img src={panelImg2} alt="" />
            <img src={panelImg3} alt="" />
            <img src={panelImg4} alt="" />
        </div>

        <div className="content">
            adasdadasda
            dasdad
            dadasda
        </div>
    </div>)
}

export default Home