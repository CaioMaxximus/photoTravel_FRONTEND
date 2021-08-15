import React from 'react'
// import Routes from './routes'
import './App.css'
// import { createHashHistory } from 'history'
import { Route, NavLink, HashRouter } from 'react-router-dom'
import Home from './views/Home'
import Gallery from './views/Gallery'
import Register from './views/Register'
import Login from './views/Login'
// const history = createHashHistory()


const background = require('./assets/images/antoine-julien-r9QZo2VJx6w-unsplash.jpg')
const logo = require('./assets/images/InfiteTravelLogoNotBackground.png')
function App() {




    return (
        <div>

            <div id="header">
                <div id="logo">
                    <img src={logo} alt="InfiniteTravelLogo"></img>
                </div>

                <div id="search-bar">
                    <div id="search-options">Users
                        <ul>
                            <li><button>users</button></li>
                            <li><button>posts</button></li>
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
            <div className="views">
                <HashRouter>
                    <Route exact path="/" component={Home}></Route>
                    <Route path="/gallery" component={Gallery}></Route>
                    {/* <Route path="we"  component = {}></Route>
                <Route path="contact" component = {} ></Route> */}
                    <Route path="/register" component={Register}></Route>
                    <Route path="/login" component={Login}></Route>
                </HashRouter>
            </div>

        </div>
    )

}

export default App