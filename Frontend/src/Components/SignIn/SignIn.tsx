import Cookies from "js-cookie";
import React from "react";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../../Styles/SignIn/SignIn.css";
import Image from "../../Images/logo.png";

const SignIn: React.FC = () => {
    var Navigate = useNavigate();
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");

    const [emailError, setEmailError] = useState<string | null>(null);
    const [passwordError, setPasswordError] = useState<string | null>(null);


    const Info = {
        email: email,
        password: password,
    };

    const validateEmail = (email: string): boolean => {
        const emailRegex = /^[a-zA-Z0-9._-]+@jmangroup\.com$/;
        return emailRegex.test(email);
    };

    const validatePassword = (password: string): boolean => {
        const passwordRegex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@#$%^&!])[A-Za-z\d@#$%^&!]{8,}$/;
        return passwordRegex.test(password);
    };

    const handleBlurEmail = () => {
        if (email && !validateEmail(email)) {
            toast.error("Email should be of the format user@jmangroup.com");
        } 
    };

    const handleBlurPassword = () => {
        if (password && !validatePassword(password)) {
            toast.error("Password should contain at least 8 characters with at least one uppercase letter, one lowercase letter, one numeric value, and one special character.");
        }
    };

    const handleSignIn = async () => {
        if (email && password) {
            try {
                const emailIsValid = validateEmail(email);
                const passwordIsValid = validatePassword(password);

                if (!emailIsValid) {
                    toast.error("Email should be of the format user@jmangroup.com");
                }

                if (!passwordIsValid) {
                    toast.error("Password should contain at least 8 characters with at least one uppercase letter, one lowercase letter, one numeric value, and one special character.");
                }
                const response = await axios.post("http://localhost:8000/signin", Info);
                const responseData = response.data; 
                console.log(responseData);
                
                if (responseData.message === "Login Successfully") {
                    toast.success("You have successfully logged in!");
                    Cookies.set("userInfo", email);
                    setTimeout(() => {
                        Navigate("/myprofile");
                    }, 1000);
                    
                }

                if (responseData.message === "Password Incorrect") {
                    toast.error("Invalid credentials");
                }

                if (responseData.message === "User does not exist") {
                    toast.error("User does not exist");
                }

                // if (responseData.message === "All fields are required") {
                //     alert("All fields are required");
                // }

            } catch (error) {
                console.error("Error signing in:", error);
            }

        } else {
            toast.error("All fields are required!");
        }

    };

    return (
        <>
            <div className="signInContainer">
                <div className="signin_head">
                    <img src={Image} className="logo" alt="Logo" />
                    <h2 className="signin_h2">Jin</h2>                   
                </div>

                <form className="signInForm">
                    <div className="email">
                        <label className="lable">Email:</label>
                        <input className="input"
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            onBlur={handleBlurEmail}
                        />
                    </div>

                    <div className="password">
                        <label className="lable">Password:</label>
                        <input className="input"
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            onBlur={handleBlurPassword} 
                        />
                    </div>

                    <div>
                        <button type="button" className="signin_btn" onClick={handleSignIn}>
                            Sign In
                        </button>
                    </div>

                    <div className="signin_footer">
                        <p className="signin_p_tag">Not Registered? <a href="/signup">Sign Up</a></p>          
                    </div>
                    
                </form>
                <ToastContainer autoClose={5000} position="top-right" />
            </div>
        </>
    );
};

export default SignIn;
