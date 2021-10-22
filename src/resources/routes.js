import { BrowserRouter, Switch, Route } from 'react-router-dom'
import React from 'react'
import Gallery from '../views/Gallery/Gallery'
import Home from './views/Home/Home'
import Register from './views/Register/Register'

export default function Routes() {

    return <BrowserRouter>
        {/* <Switch>
            <Route path="/home" exact component={Home}> </Route>
            <Route path="/gallery" component={Gallery}></Route>
            <Route path="/about" component={ } ></Route>
            <Route path="/register" component={Register} ></Route>

        </Switch> */}
    </BrowserRouter>
}

