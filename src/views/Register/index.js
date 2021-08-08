import { React, useState } from 'react'

export default function register(props) {


    let [nickname, setNickname]; [email , setEmail];[description , setDescription] ;[password , setPassword] ; [passwordConfirm , setPasswordConfirm] = useState(""); 


    return <div id="register-screen">
        <div class="form-user-area">
            <div id = "in-first-step">
                <label htmlFor="">NickName: </label><input type="text"  value= {nickname}  onChange = {setNickname}/>
                <label htmlFor="">Email:</label><input type="text"  value= {email}  onChange = {setEmail}/>
                <label htmlFor="">Password: </label><input type="text"  value= {password}  onChange = {setPassword}/>
                <label htmlFor="">Confirm Password </label><input type="text"  value= {passwordConfirm}  onChange = {setPasswordConfirm} />
            </div>
            <div id = "in-second-step">
                <label htmlFor="">Add a description about you: </label><textarea name="" id="" cols="30" rows="10"></textarea>
            </div>
            <button>REGISTER</button>
        </div>
    </div>
}