import React, { useState } from 'react'
// import Routes from './routes'
import './App.css'
// import { createHashHistory } from 'history'
import { Switch, Router, Route, BrowserRouter } from 'react-router-dom'

import PostCreator from './Components/PostCreator/PostCreator.js'
import CredentialConnect from './views/CredentialConnect'
import Application from './views/Application'

// const history = createHashHistory()


const background = require('./assets/images/antoine-julien-r9QZo2VJx6w-unsplash.jpg')
const logo = require('./assets/images/InfiteTravelLogoNotBackground.png')
function App() {
    return (<BrowserRouter>
        <div>

            <div className="views">

                {/* <Route path="we"  component = {}></Route>
                <Route path="contact" component = {} ></Route> */}
                {/* <CredentialConnect ></CredentialConnect> */}
                <Switch>
                    <Route exact path="/app" >
                        <Application />
                    </Route>
                    <Route path="/credentials">
                        <CredentialConnect />
                    </Route>

                </Switch>

            </div>
        </div>            </BrowserRouter>
    )


}

export default App