import React, { useState } from 'react'
import api from './../../resources/api.js'
import './style.css';

export default function Register() {


    let [nickname, setNickname] = useState("");
    let [email, setEmail] = useState("");
    let [description, setDescription] = useState("");
    let [password, setPassword] = useState("");
    let [passwordConfirm, setPasswordConfirm] = useState("");

    const window_size = window.innerWidth;
    console.log(window_size);


    function changeStep() {
       
        let $first_step = document.getElementById("in-first-step");
        $first_step.style.transition = "1s ease-out ";

        $first_step.style.transform = `translate(${-500}px) scaleX(0.5)`;
        console.log("aq");
        
    }


    function registerUser() {

        if (verifyData) {
            api.post("users", {
                nickname,
                email,
                description,
                password
            }).then(() => {

                window.open("/gallery");
            }).catch((e) => {
                alert(e);
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
                    <input name="nickname" type="text" value={nickname} onChange={(e) => setNickname(e.target.value)} />

                    <label htmlFor="email">Email:</label>
                    <input name="email" type="text" value={email} onChange={(e) => setEmail(e.target.value)} />

                    <label htmlFor="password">Password: </label>
                    <input name="password" type="text" value={password} onChange={(e) => setPassword(e.target.value)} />

                    <label htmlFor="confirm-password">Confirm Password </label>
                    <input name="confirm-password" type="text" value={passwordConfirm} onChange={(e) => setPasswordConfirm(e.target.value)} />
                    <button> NextStep</button>
                </div>

                <div id="in-second-step">
                    <label htmlFor="description">Add a description about you: </label>
                    <input type="text" />
                </div>

                <div id="next-position">
                    <button onClick={() =>changeStep()} ></button>
                </div>
                <button onClick={() => { registerUser() }} >REGISTER</button>
            </div>
        </div>

    </div>)
}