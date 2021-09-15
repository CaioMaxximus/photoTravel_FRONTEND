import React from 'react'
import { HashRouter } from 'react-router-dom'
import Home from '.Home'
import Gallery from '.Gallery'
export default function Application() {

    return <HashRouter>
        <Route exact path="/" component={Home}></Route>
        <Route path="/gallery" component={Gallery}></Route>
    </HashRouter>
}
