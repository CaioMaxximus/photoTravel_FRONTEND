import React, { useState } from 'react'
import api from './../../resources/api.js'
import './style.css';

export default function Register() {


    let [nickname, setNickname] = useState("");
    let [email, setEmail] = useState("");
    let [description, setDescription] = useState("");
    let [password, setPassword] = useState("");
    let [passwordConfirm, setPasswordConfirm] = useState("");



    function registerUser() {

        if (verifyData) {
            api.post("users", {
                nickname,
                email,
                description,
                password
            }).then(() => {
                ///vai para a tela de posts!!
            }).catch((e) => {
                console.log(e);
                ///exibe o erro para o user
            })
        }


    }

    function verifyData() {
        return false;
    }


    return (<div id="register">
        <div className="content">
            <div className="form-user-area">
                <div id="in-first-step">
                    
                    <label htmlFor="nickname">NickName: </label>
                    <input name="nickname" type="text" value={nickname} onChange={setNickname} />

                    <label htmlFor="email">Email:</label>
                    <input name="email" type="text" value={email} onChange={setEmail} />

                    <label htmlFor="password">Password: </label>
                    <input name="password" type="text" value={password} onChange={setPassword} />

                    <label htmlFor="confirm-password">Confirm Password </label>
                    <input name="confirm-password" type="text" value={passwordConfirm} onChange={setPasswordConfirm} />
                </div>
                <div id="in-second-step">
                    <label htmlFor="description">Add a description about you: </label><textarea name="description" id="" cols="30" rows="10"></textarea>
                </div>
                <button onClick={() => { registerUser() }} >REGISTER</button>
            </div>
        </div>

    </div>)
}