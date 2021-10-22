import React, { useState } from 'react'
import { Route, NavLink, BrowserRouter, useRouteMatch } from 'react-router-dom'
import PostCreator from '../Components/PostCreator/PostCreator.js'
import { HashRouter, Switch, Router, Link, useParams, useHistory } from 'react-router-dom'
import Home from '../views/Home'
import Gallery from '../views/Gallery'
import "./Application.css"

const logo = require('../assets/images/InfiteTravelLogoNotBackground.png')

export default function Application() {


  let [search_opt, setSearchOpt] = useState("posts");
  let [visibility, setVisibility] = useState("none");
  let [creatorStatus , setCreatorStatus] = useState("Create Post");
  const match = useRouteMatch()

  const userToken = localStorage.getItem("user-local-token");
  
  function componentWillMount(){
    console.log("mounted");
  }
  // console.log(matchPage.url, matchPage.path);

  // console.log(`${matchPage.url}/gallery`)
  // console.log(`${matchPage.path}/perfil`)

  function changeCreatorVisibility(){
    if(creatorStatus == "Create Post"){
      document.getElementById("creator").style.display = "block";
      setCreatorStatus("Hide");
    }else{
      document.getElementById("creator").style.display = "none";
      setCreatorStatus("Create Post");

    }
  }
  return (
    
    <BrowserRouter >
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
                <button >
                  Search
                </button>
            </div>
            <div id="tools-bar">
              <nav>
                <ul className="menu">
                  <li>
                    <Link to={`${match.url}/perfil`}   ><button>Home</button></Link>
                  </li>
                  <li>
                    <Link to={`${match.url}/gallery`} ><button >Gallery</button></Link>
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
          <div id = "creator-btn">
            <button onClick = {() =>{changeCreatorVisibility()}}>{creatorStatus}</button>
          </div>
          
        </div>
        <div id="creator" >
            <PostCreator></PostCreator>
          </div>
        <div id="views">
          <Switch>
            <Route path={`${match.path}/perfil`} >
              a
              <Home />
            </Route>
            <Route  path={`${match.path}/gallery`} >
              Gallery
              <Gallery />
            </Route>


          </Switch>



        </div>

      </div></BrowserRouter>
  )


}

