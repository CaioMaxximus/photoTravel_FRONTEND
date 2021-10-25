import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import api from './../../resources/api.js'
import './style.css';

export default function Register() {

    const history = useHistory();

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

        if (state) {
            $form.style.transform = `rotateY(${0}deg)`;
            state = false;

        } else {
            $form.style.transform = `rotateY(${-180}deg)`;
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
                description,
                email,
                password
            }).then(() => {
                history.replace("/credentials/login");
                window.location.reload();
            }).catch((e) => {
                alert(e);
                console.log(e);
                ///exibe o erro para o user
            })
        }


    }

    function verifyData() {
        return true;
    }


    return (<div id="register">
        <div className="content">
            <div className="form-user-area">

                <div id="in-first-step">
                    <form action="">
                        <div className="form-separator" id="form-s-1">
                            <label htmlFor="nickname">NickName: </label>
                            <input name="nickname" type="text" value={nickname} onChange={(e) => setNickname(e.target.value)} />
                            <div className="floating-message" id="flt-msg-1">
                                <p>The nick name must have between 5-15 characters and can
                                    contain numbers, upper and lower letters
                                </p>
                            </div>
                        </div>
                        <div className="form-separator" id="form-s-2">
                            <label htmlFor="email">Email:</label>
                            <input name="email" type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
                            <div className="floating-message" id="flt-msg-2">
                                <p>
                                    Insert a valid email adresse
                                </p>
                            </div>
                        </div>
                        <div className="form-separator" id="form-s-3">
                            <label htmlFor="password">Password: </label>
                            <input name="password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                            <div className="floating-message" id="flt-msg-3">
                                <p>
                                    The password must contain at least one symbol({"{^?=+-@"}),
                                    one number, one upper and one lower case letter, and should
                                    have between 6-15 characters
                                </p>
                            </div>
                        </div>

                        <div className="form-separator">
                            <label htmlFor="confirm-password">Confirm Password </label>
                            <input name="confirm-password" type="password" value={passwordConfirm} onChange={(e) => setPasswordConfirm(e.target.value)} />
                        </div>


                    </form>

                    <button onClick={() => changeStep()} >{">>>>"} </button>
                </div>

                <div id="in-second-step">
                    
                        <button onClick={() => changeStep()} > Back</button>

                    
                    <div>
                        <label htmlFor="description">Add a description about you: </label>
                        <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} />

                        <button onClick={() => { registerUser() }} > Registe</button>

                    </div>

                </div>

            </div>
            <div id="next-position">
            </div>
        </div>

    </div>)
}