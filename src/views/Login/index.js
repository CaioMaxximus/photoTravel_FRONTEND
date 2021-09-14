import React, { useState } from 'react'
import { HashRouter, Link, NavLink ,useHistory} from 'react-router-dom';
import api from '../../resources/api';
import './style.css'


export default function Login(props) {

    let [nickname, setNickname] = useState("");
    let [email, setEmail] = useState("");
    let [password, setPassword] = useState("");

    async function login() {
        await api.post("user/authenticate", {
            nickname, email, password
        }).then((res) => {

        }).catch(err => {

        });
    }

    function useHandleRegister(e){

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
                <HashRouter>
                    <Link to="/register">Ainda Não possuo uma conta</Link>
                </HashRouter>
            </div>

        </div>)
}