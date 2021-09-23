import React, { useState } from 'react'
import { Route, NavLink, BrowserRouter, useRouteMatch } from 'react-router-dom'
import PostCreator from '../Components/PostCreator/PostCreator.js'
import { HashRouter, Switch, Router, Link, useParams } from 'react-router-dom'
import Home from '../views/Home'
import Gallery from '../views/Gallery'
const logo = require('../assets/images/InfiteTravelLogoNotBackground.png')

export default function Application() {


  let [search_opt, setSearchOpt] = useState("posts");
  let [visibility, setVisibility] = useState("none");

  let match = useRouteMatch()

  // console.log(matchPage.url, matchPage.path);

  // console.log(`${matchPage.url}/gallery`)
  // console.log(`${matchPage.path}/perfil`)
  return (
    <BrowserRouter>

      <div>

        <div id="top-elements">

          <div id="header">
            <div id="logo">
              <img src={logo} alt="InfiniteTravelLogo"></img>
            </div>

            <div id="search-bar">
              <div id="search-options"
                onMouseOver={() => setVisibility("grid")}
                onMouseOut={() => setVisibility("none")}
              >{search_opt}
                <ul style={{ display: visibility }}>
                  <li ><button onClick={function () { setSearchOpt("users"); setVisibility("none") }}>users</button></li>
                  <input type="text" placeholder="Search.." />
                  <li ><button onClick={function () { setSearchOpt("posts"); setVisibility("none") }}>posts</button></li>
                </ul>
              </div>

              <button>
                Search
              </button>
            </div>
            <div id="tools-bar">
              <nav>
                <ul className="menu">
                  <li>
                    <Link to={`${match.url}/perfil`} replace><button>Home</button></Link>
                  </li>
                  <li>
                    <Link to={`${match.url}`} replace><button >Gallery</button></Link>
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


          </div>
          <div id="creator" >
            <PostCreator></PostCreator>
          </div>
        </div>
        <div id="views">
          <Switch>
            <Route path={`${match.path}/perfil`}>
              a
              <Home />
            </Route>
            <Route exact path={`${match.path}`} >
              Gallery
              <Gallery />
            </Route>


          </Switch>

        </div>

      </div>
    </BrowserRouter>)


}


function A() {
  return <div>A</div>
}

function B() {
  return <div>B</div>
}
