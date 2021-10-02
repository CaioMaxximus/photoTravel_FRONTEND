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
            window.localStorage = res;
            history.push("app/gallery");
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
            <form className="form-user-area">
                <label htmlFor="name">NickName or Email</label>
                <input type="text" name="nick-email" />
                <label htmlFor="password">Password</label>
                <input type="password" name="password" />
                <button>Login</button>
            </form>
            <div>
                    <Link to={`register`}>Ainda Não possuo uma conta</Link>

            </div>

        </div>)
}