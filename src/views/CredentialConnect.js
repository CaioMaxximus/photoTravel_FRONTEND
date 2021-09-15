import React from 'react'
import { HashRouter ,Route } from 'react-router-dom'
import Register from '.Register'
import Login from '.Login'


export default function CredentialConnect() {

    return <HashRouter>
        <Route path="/register" component={Register}></Route>
        <Route path="/login" component={Login}></Route>
    </HashRouter>
}