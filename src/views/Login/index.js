import React, { useState } from 'react'
import {BrowserRouter , useRouteMatch, Link, useHistory  } from 'react-router-dom';
import api from '../../resources/api';
import './style.css'


export default function Login(props) {

    const match = useRouteMatch();
    const history = useHistory();

    let [nickname, setNickname] = useState("");
    let [email, setEmail] = useState("");
    let [password, setPassword] = useState("");

    async function login() {
        await api.post("/login", {
            nickname, password
        }).then((res) => {
            console.log(res.data)
            window.localStorage.setItem("user-local-token", res.data);
            history.replace("/app/gallery");
            window.location.reload();
        }).catch(err => {
            alert("dados inválidos");
        });
    }

    function useHandleRegister(e) {

        let history = useHistory();
        history.push("/register");

    }



    return (
        <div id="login-screen">
            <div  className="form-user-area">
                <label htmlFor="name">NickName or Email</label>
                <input type="text" name="nick-email" value ={nickname} onChange = {(e) => setNickname(e.target.value)}/>
                <label htmlFor="password">Password</label>
                <input type="password" name="now-password" value = {password} onChange = {(e) => setPassword(e.target.value)}/>
                <button onClick = {() => login()}>Login</button>
            </div>
            <div>
                    <Link to={`register`}>Ainda Não possuo uma conta</Link>

            </div>

        </div>)
}