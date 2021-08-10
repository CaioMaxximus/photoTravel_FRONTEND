import React from 'react'


export default function Login(props) {


    return (
        <div id="login-screen">
            <form className="form-user-area">
                <label htmlFor="name">NickName or Email</label>
                <input type="text" name="nick-email" />
                <label htmlFor="password">Password</label>
                <input type="text" name="password" />
                <button>Login</button>
            </form>

        </div>)
}