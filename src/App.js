import React from 'react'
import Home from './views/Home/Home'
import './App.css'
const background = require('./pictures/antoine-julien-r9QZo2VJx6w-unsplash.jpg')
const logo = require('./pictures/InfiteTravelLogoNotBackground.png')

function App() {

    return (
        <div>
            <div id="background">
                <img src={background} alt="background" />
            </div>
            <div id="header">
                <div id="logo">
                    <img src={logo} alt="InfiniteTravelLogo"></img>
                </div>
            </div>
            <div id="tools-bar">
                <nav>
                    <ul className="menu">
                        <li>
                            <button>Home</button>
                        </li>
                        <li>
                            <button>Gallery</button>
                        </li>
                        <li><button>About</button>
                            <ul>
                                <li>
                                    <button>Who are we?</button>
                                </li>
                                <li>
                                    <button>Contact</button>
                                </li>
                            </ul>
                        </li>

                    </ul>
                </nav>
            </div>
            <Home></Home>
        </div>
        )

}

export default App