import { React, useContext, useActionState } from "react";
import { useNavigate } from 'react-router';

import { useLogin } from "../../api/authApi";
import { UserContext } from "../../contexts/UserContext";

import './login.css'

export default function Login() {
    const navigate = useNavigate();
    const { userLoginHandler } = useContext(UserContext);
    const { login } = useLogin();

    const loginHandler = async (_, formData) => {
        const values = Object.fromEntries(formData);

        const authData = await login(values.email, values.password);


        userLoginHandler(authData);
        console.log("login works");

        navigate(-1);
    };

    const [_, loginAction, isPending] = useActionState(loginHandler, { email: '', password: '' });

    return (
        <div className="login-container">
            <form id="login" action={loginAction}>
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" name="email"  required/>
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" name="password" required />
                </div>
                <button type="submit" value="Login" disabled={isPending}>Login</button>
            </form>
        </div>
    );
};