import React from 'react'
import './style.css'
export default function Loading(){
    return <div className = "loading">
        <div id = "message">Loading</div>
        <div id = "dot-1">.</div>
        <div id = "dot-2">.</div>
        <div id = "dot-3">.</div>
    </div>
}