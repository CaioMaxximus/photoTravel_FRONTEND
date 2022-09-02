import React, { useState } from 'react'
import { Route, NavLink, BrowserRouter ,useRouteMatch } from 'react-router-dom'
import PostCreator from '../Components/PostCreator/PostCreator.js'
import { HashRouter, Switch, Router, Link, useParams, useHistory } from 'react-router-dom'
import Home from '../views/Home'
import Gallery from '../views/Gallery'
import TopBar from '../Components/TopBar/TopBar.js'
import "./Application.css"


export default function Application() {


  const match = useRouteMatch()
  console.log(match, "APP")

  let [creatorStatus, setCreatorStatus] = useState("Create Post");

  const userToken = localStorage.getItem("user-local-token");

  function componentWillMount() {
    console.log("mounted");
  }
  // console.log(matchPage.url, matchPage.path);

  // console.log(`${matchPage.url}/gallery`)
  // console.log(`${matchPage.path}/perfil`)

  function changeCreatorVisibility() {
    if (creatorStatus == "Create Post") {
      document.getElementById("creator").style.display = "block";
      setCreatorStatus("Hide");
    } else {
      document.getElementById("creator").style.display = "none";
      setCreatorStatus("Create Post");

    }
  }
  return (

    
    <BrowserRouter  forceRefresh = {true}>
      <div>
      <TopBar path = {match.path}></TopBar>


          </div>
          <div id="creator-btn">
            <button onClick={() => { changeCreatorVisibility() }}>{creatorStatus}</button>
          </div>

        <div id="creator" >
          <PostCreator></PostCreator>
        </div>
        <div id="views">
          <Switch exact>
            <Route  path={`${match.path}/perfil`} >
              <Home />
            </Route>
            <Route  path={`${match.path}/gallery`} >
              Gallery
              {match.path}

              <Gallery />
            </Route>
            


          </Switch>



        </div>

    </BrowserRouter >
    )


}

