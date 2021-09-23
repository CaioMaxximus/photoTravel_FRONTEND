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
    let state = false;


    function changeStep() {
       
        let $form = document.getElementsByClassName("form-user-area")[0];
        // $form.style.transition = "transition: 1s linear 0.1s both";

        if (state){
            $form.style.transform = `rotateY(${0}deg)`;
            $form.style.backgroundColor = "blue";
            state = false;
      
        }else{
            $form.style.transform = `rotateY(${-180}deg)`;
            $form.style.backgroundColor = "red"
            state = true;
            // $first_step.style.opacity = 0;
            console.log("aq");
    }

    console.log($form.style.transform)
        
    }


    function registerUser() {

        if (verifyData) {
            api.post("/users", {
                nickname,
                email,
                description,
                password
            }).then(() => {

                window.open("/gallery");
            }).catch((e) => {
                alert(e);
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
                    <input name="nickname" type="text" value={nickname} onChange={(e) => setNickname(e.target.value)} />

                    <label htmlFor="email">Email:</label>
                    <input name="email" type="text" value={email} onChange={(e) => setEmail(e.target.value)} />

                    <label htmlFor="password">Password: </label>
                    <input name="password" type="text" value={password} onChange={(e) => setPassword(e.target.value)} />

                    <label htmlFor="confirm-password">Confirm Password </label>
                    <input name="confirm-password" type="text" value={passwordConfirm} onChange={(e) => setPasswordConfirm(e.target.value)} />
                    <button onClick={() =>changeStep()} >Continue </button>                  
                </div>

                <div id="in-second-step">
                    <label htmlFor="description">Add a description about you: </label>
                    <input type="text" />

                    <button onClick={() =>changeStep()} > Back</button>                  
                    <button onClick={() => { registerUser() }} > Registe</button>

                </div>
                
            </div>
            <div id="next-position">
                </div>
        </div>

    </div>)
}