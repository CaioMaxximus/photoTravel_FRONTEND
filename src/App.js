import React, { useState } from 'react'
// import Routes from './routes'
import './App.css'
// import { createHashHistory } from 'history'
import { Route, NavLink, HashRouter } from 'react-router-dom'

import PostCreator from './Components/PostCreator/PostCreator.js'
import CredentialConnect from './views/CredentialConnect'

// const history = createHashHistory()


const background = require('./assets/images/antoine-julien-r9QZo2VJx6w-unsplash.jpg')
const logo = require('./assets/images/InfiteTravelLogoNotBackground.png')
function App() {


    let [search_opt, setSearchOpt] = useState("posts");
    let [visibility, setVisibility] = useState("none");

    
    return (
        <div>

            <div id="top-elements">

                <div id="header">
                    <div id="logo">
                        <img src={logo} alt="InfiniteTravelLogo"></img>
                    </div>

                    <div id="search-bar">
                        <div id="search-options" 
                        onMouseOver = {() => setVisibility("grid")}
                        onMouseOut = {() => setVisibility("none")} 
                        >{search_opt}
                            <ul style={{ display: visibility }}>
                                <li ><button onClick={function() { setSearchOpt("users"); setVisibility("none") }}>users</button></li>
                                <li ><button onClick={function(){ setSearchOpt("posts"); setVisibility("none") }}>posts</button></li>
                            </ul>
                        </div>
                        <input type="text" placeholder="Search.." />

                        <button>
                            Search
                        </button>
                    </div>
                    <HashRouter>
                        <div id="tools-bar">
                            <nav>
                                <ul className="menu">
                                    <li>
                                        <NavLink to="/"><button>Home</button></NavLink>
                                    </li>
                                    <li>
                                        <NavLink to="/gallery"><button >Gallery</button></NavLink>
                                    </li>
                                    <li><button>About</button>
                                        <ul>
                                            <li>
                                                <NavLink to="/we"><button>Who are we?</button></NavLink>
                                            </li>
                                            <li>
                                                <NavLink to="/contact"><button>Contact</button></NavLink>
                                            </li>
                                        </ul>
                                    </li>

                                </ul>
                            </nav>
                        </div>

                    </HashRouter>

                </div>
                <div id="creator" >
                    <PostCreator></PostCreator>
                </div>
            </div>

            <div className="views">
                <HashRouter>
                   
                    {/* <Route path="we"  component = {}></Route>
                <Route path="contact" component = {} ></Route> */}
                   <CredentialConnect>

                   </CredentialConnect>
                    </HashRouter>
            </div>

        </div >
    )

}

export default App