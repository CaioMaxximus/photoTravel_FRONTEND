import React from 'react'
import { useRouteMatch, Route, Switch, BrowserRouter } from 'react-router-dom'
import Register from '../views/Register'
import Login from '../views/Login'
import "./Credential.css"

const logo = require("../assets/images/InfiteTravelLogoNotBackground.png")



export default function CredentialConnect() {

    const match = useRouteMatch();

    return <BrowserRouter>
        <div id = "logo-area">
            <img src={logo} alt="" />
        </div>
            <div id="credencial-area">

            <Switch>
                <Route path={`${match.path}/register`} component={Register}></Route>
                <Route path={`${match.path}/login`} component={Login}></Route>
            </Switch>
        </div>

    </BrowserRouter>

}