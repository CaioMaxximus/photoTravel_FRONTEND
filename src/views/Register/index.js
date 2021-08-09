import { React, useState } from 'react'
import api from './../../resources/api.js'

export default function Register(props) {


    let [nickname, setNickname];[email, setEmail];[description, setDescription];[password, setPassword];[passwordConfirm, setPasswordConfirm] = useState("");



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


    return (
        <div id="register-screen">
            <div class="form-user-area">
                <div id="in-first-step">
                    <label htmlFor="nickname">NickName: </label>
                    <input name = "nickname" type="text" value={nickname} onChange={setNickname} />

                    <label htmlFor="email">Email:</label>
                    <input name = "email" type="text" value={email} onChange={setEmail} />

                    <label htmlFor="password">Password: </label>
                    <input name = "password" type="text" value={password} onChange={setPassword} />

                    <label htmlFor="confirm-password">Confirm Password </label>
                    <input name = "confirm-password" type="text" value={passwordConfirm} onChange={setPasswordConfirm} />
                </div>
                <div id="in-second-step">
                    <label htmlFor="description">Add a description about you: </label><textarea name="description" id="" cols="30" rows="10"></textarea>
                </div>
                <button onClick={() => { registerUser() }} >REGISTER</button>
            </div>
        </div>)
}