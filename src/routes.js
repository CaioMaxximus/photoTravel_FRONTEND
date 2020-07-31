import {BrowserRouter, Switch , Route} from 'react-router-dom'
import React from 'react'
import Gallery from './views/Gallery/Gallery'
import Home from './views/Home/Home'

export default function Routes(){

    return <BrowserRouter>
        <Switch>
        <Route path = "/home"  exact  component = {Home}> </Route>
        <Route path = "/gallery" component = {Gallery}></Route>
        <Route path = "/about" ></Route>
        </Switch>
    </BrowserRouter>
} 

