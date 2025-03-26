import React from "react";

import { useRegister } from "../../api/authApi";
import { useUserContext } from "../../contexts/UserContext";
import { useNavigate } from "react-router";

import './register.css'

export default function Register() {
    const navigate = useNavigate();
    const { register } = useRegister();
    const { userLoginHandler } = useUserContext();

    const registerHandler = async (formData) => {
        const { email, password } = Object.fromEntries(formData);

        const confirmPassword = formData.get('confirm-password');

        if (password !== confirmPassword) {
            console.log('Password missmatch');

            return;
        }

        const authData = await register(email, password);

        userLoginHandler(authData);

        navigate('/');
    }

    return (
        <div className="register-container">
            <form id="register" action={registerHandler}>
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" name="email" required />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" name="password" required />
                </div>
                <div className="form-group">
                    <label htmlFor="confirm-password"> Confirm Password</label>
                    <input type="password" id="confirm-password" name="confirm-password" required />
                </div>
                <button type="submit" value="Register">Register</button>
            </form>
        </div>
    );
};
