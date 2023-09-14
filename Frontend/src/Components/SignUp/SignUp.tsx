import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../../Styles/SignUp/SignUp.css";
import Image from "../../Images/logo.png";
import { error } from "console";

const SignUp: React.FC = () => {
    var Navigate = useNavigate();

    const [name, setName] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [confirmPassword, setConfirmPassword] = useState<string>("");

    const [emailError, setEmailError] = useState<string | null>(null);
    const [passwordError, setPasswordError] = useState<string | null>(null);

    const Info = {
        name: name,
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

    const handleSignUp = async () => {
        setEmailError(null);
        setPasswordError(null);

        if (name && email && password && confirmPassword) {
            if (password === confirmPassword) {
                const emailIsValid = validateEmail(email);
                const passwordIsValid = validatePassword(password);

                if (!emailIsValid) {
                    toast.error("Email should be of the format user@jmangroup.com");
                }

                if (!passwordIsValid) {
                    toast.error("Password should contain at least 8 characters with at least one uppercase letter, one lowercase letter, one numeric value, and one special character.");
                }

                if (emailIsValid && passwordIsValid) {
                    const postRequest = await axios.post("http://localhost:8000/signup", Info);
                    if (postRequest.data.message === "User created") {
                        toast.success("You have successfully Signed Up!")
                        // alert("You have successfully Signed Up!");
                        setTimeout(() => {
                            Navigate("/");
                        }, 1000);
                    }
                    
                    if (postRequest.data.message === "User already exists") {
                        toast.success("User already exists");
                        // alert("User already exists");
                        setTimeout(() => {
                            Navigate("/");
                        }, 1000);
                    }
                }
            } else {
                toast.error("Password does not match!");
                // alert("Password does not match!");
            }
        } else {
            toast.error("All fields are required!")
            // alert("All fields are required!");
        }
    };

    return (
        <div className="signUpContainer">
            <div className="singnup_head">
                <img src={Image} className="logo" alt="Logo" />
                <h2 className="signup_h2">Jin</h2>
            </div>

            <form className="signUpForm">
                <div className="name">
                    <label className="lable">Name:</label>
                    <input className="input" type="text" value={name} onChange={(e) => setName(e.target.value)} />
                </div>

                <div className="email">
                    <label className="lable">Email:</label>
                    <input
                        className="input"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        onBlur={handleBlurEmail} // Validate on blur
                    />
                    {emailError && <div className="error-message">{emailError}</div>}
                </div>

                <div className="password">
                    <label className="lable">Password:</label>
                    <input
                        className="input"
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        onBlur={handleBlurPassword} // Validate on blur
                    />
                    {passwordError && <div className="error-message">{passwordError}</div>}
                </div>

                <div className="password">
                    <label className="lable">Confirm Password:</label>
                    <input className="input" type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
                </div>

                <div>
                    <button type="button" className="signup_btn" onClick={handleSignUp}>
                        Sign Up
                    </button>
                </div>

                <div className="signup_footer">
                    <p className="signup_p_tag">
                        Already Registered! <a href="/">Sign In</a>
                    </p>
                </div>
            </form>
            <ToastContainer autoClose={5000} position="top-right" />
        </div>
    );
};

export default SignUp;





// import React from "react";
// import { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import axios from "axios";
// import "../Styles/Style.css";
// import Image from "../Images/logo.png";

// const SignUp: React.FC = () => {
//     var Navigate = useNavigate();

//     const [name, setName] = useState<string>("");
//     const [email, setEmail] = useState<string>("");
//     const [password, setPassword] = useState<string>("");
//     const [confirmPassword, setConfirmPassword] = useState<string>("");

//     const Info = {
//         name: name,
//         email: email,
//         password: password,
//     };

//     const validateEmail = (email: string): boolean => {
//         // Use a regular expression to validate the email format
//         const emailRegex = /^[a-zA-Z0-9._-]+@jmangroup\.com$/;
//         return emailRegex.test(email);
//     };

//     const validatePassword = (password: string): boolean => {
//         // Use a regular expression to validate the password format
//         const passwordRegex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@#$%^&!])[A-Za-z\d@#$%^&!]{8,}$/;
//         return passwordRegex.test(password);
//     };

//     const handleSignUp = async () => {
//         if (name && email && password && confirmPassword) {
//             if (password === confirmPassword) {
//                 if (!validateEmail(email)) {
//                     alert("Email should be of the format user@jmangroup.com");
//                     return;
//                 }

//                 if (!validatePassword(password)) {
//                     alert(
//                         "Password should contain at least 8 characters with at least one uppercase letter, one lowercase letter, one numeric value, and one special character."
//                     );
//                     return;
//                 }

//                 const postRequest = await axios.post("http://localhost:8000/signup", Info);
//                 if (postRequest.data.message === "userCreated") {
//                     alert("You have successfully Signed Up!");
//                     Navigate("/");
//                 }

//                 if (postRequest.data.message === "User already exist") {
//                     alert("User already exists");
//                     Navigate("/");
//                 }
//             } else {
//                 alert("Password does not match!");
//             }
//         } else {
//             alert("All fields are required!");
//         }
//     };

//     return (
//         <div className="signUpContainer">
//             <div className="head">
//                 <img src={Image} className="logo" alt="Logo" />
//                 <h2>My Jin</h2>
//             </div>

//             <form className="signUpForm">
//                 <div className="name">
//                     <label className="lable">Name:</label>
//                     <input className="input" type="text" value={name} onChange={(e) => setName(e.target.value)} />
//                 </div>

//                 <div className="email">
//                     <label className="lable">Email:</label>
//                     <input className="input" type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
//                 </div>

//                 <div className="password">
//                     <label className="lable">Password:</label>
//                     <input className="input" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
//                 </div>

//                 <div className="password">
//                     <label className="lable">Confirm Password:</label>
//                     <input className="input" type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
//                 </div>

//                 <div>
//                     <button type="button" className="btn_up" onClick={handleSignUp}>
//                         Sign Up
//                     </button>
//                 </div>

//                 <div className="footer">
//                     <p className="p_tag_signup">
//                         Already Registered! <a href="/">Sign In</a>
//                     </p>
//                 </div>
//             </form>
//         </div>
//     );
// };

// export default SignUp;
