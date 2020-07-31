import React from 'react'
// import Routes from './routes'
import './App.css'
// import { createHashHistory } from 'history'
import { Route, NavLink, HashRouter } from 'react-router-dom'
import Home from './views/Home/Home'
import Gallery from './views/Gallery/Gallery'
// const history = createHashHistory()


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
                <div className="views">
                    <Route exact path="/" component={Home}></Route>
                    <Route path="/gallery" component={Gallery}></Route>
                    {/* <Route path="we"  component = {}></Route>
                <Route path="contact" component = {} ></Route> */}
                </div>
            </HashRouter>
        </div>
    )

}

export default App