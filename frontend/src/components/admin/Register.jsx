import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Register.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Register = () => {

    const logInFailed = () => toast.error('Failed to Log In', {
        autoClose: 4000,
        theme: "light",
    });

    const logInSuccess = () => toast.success('Succesfully Logged IN', {
        autoClose: 1500,
        theme: "light",
    });

    const redirect = () => toast.info('Redirecting', {
        autoClose: 1500,
        theme: "light",
    });

    const navigate = useNavigate()

    const [isSignUp, setIsSignUp] = useState(true);

    const handleSignUpClick = () => {
        setIsSignUp(true);
    };

    const handleSignInClick = () => {
        setIsSignUp(false);
    };

    // register
    const [adminData, setAdminData] = useState({ name: '', email: '', password: '' })

    const handleSignupDataChange = (e) => {
        const { name, value } = e.target
        setAdminData({
            ...adminData,
            [name]: value
        })
    }

    const handleSignupDataSubmit = async (e) => {
        e.preventDefault();
        console.log(adminData);

        const { name, email, password } = adminData

        const res = await fetch('https://fms-backend-drab.vercel.app/signup', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ name, email, password })
        })

        // console.log(res)

        // const data = await res.json()
        // console.log(data)

        if (res.status !== 200) {
            window.alert("Failed to register")
            console.log("Failed to register")
        } else {
            window.alert("SUCCESFUL Registration")
            console.log("SUCCESFUL Registration")

            // navigate('/dashboard')
        }

        setAdminData({ name: '', email: '', password: '' })
    }

    // login
    const [adminLoginData, setAdminLoginData] = useState({ email: '', password: '' })

    const handleLoginDataChange = (e) => {
        const { name, value } = e.target
        setAdminLoginData({
            ...adminLoginData,
            [name]: value
        })
    }

    const handleLoginDataSubmit = async (e) => {
        e.preventDefault();

        const { email, password } = adminLoginData

        const res = await fetch('https://fms-backend-drab.vercel.app/login', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ email, password })
        })

        console.log(res)

        // const data = await res.json()
        // console.log(data)

        if (res.status !== 200) {
            // window.alert("Failed to SignIn")
            console.log("Failed to SignIn")
            logInFailed()
        } else {
            // window.alert("SUCCESFULLY Logged in")
            console.log("SUCCESFULLY Logged in")
            logInSuccess()
            setTimeout(() => {
                redirect()
            }, 1000)
            setTimeout(() => {
                navigate('/dashboard')
            }, 3000)

        }

        console.log(adminLoginData);
        setAdminLoginData({ email: '', password: '' })
    }


    return (
        <>
            <div className="div-body" >
                <div className={isSignUp ? 'right-panel-active container' : 'container'} id="container">
                    <div className="form-container sign-up-container">
                        <form>
                            <h1>Create Account</h1>
                            <div className="social-container">
                                <a href="#" className="social"><i className="fab fa-facebook-f"></i></a>
                                <a href="#" className="social"><i className="fab fa-google-plus-g"></i></a>
                                <a href="#" className="social"><i className="fab fa-linkedin-in"></i></a>
                            </div>
                            <span>or use your email for registration</span>
                            <input type="text" placeholder="Name" name='name' value={adminData.name} onChange={handleSignupDataChange} />
                            <input type="email" placeholder="Email" name='email' value={adminData.email} onChange={handleSignupDataChange} />
                            <input type="password" placeholder="Password" name='password' value={adminData.password} onChange={handleSignupDataChange} />
                            <button onClick={handleSignupDataSubmit}>Sign Up</button>
                        </form>
                    </div>
                    <div className="form-container sign-in-container">
                        <form>
                            <h1>Sign in</h1>
                            <div className="social-container">
                                <a href="#" className="social"><i className="fab fa-facebook-f"></i></a>
                                <a href="#" className="social"><i className="fab fa-google-plus-g"></i></a>
                                <a href="#" className="social"><i className="fab fa-linkedin-in"></i></a>
                            </div>
                            <span>or use your account</span>
                            <input type="email" placeholder="Email" name='email' value={adminLoginData.email} onChange={handleLoginDataChange} />
                            <input type="password" placeholder="Password" name='password' value={adminLoginData.password} onChange={handleLoginDataChange} />
                            <a href="#">Forgot your password?</a>
                            <button onClick={handleLoginDataSubmit}>Sign In</button>
                        </form>
                    </div>
                    <div className="overlay-container">
                        <div className="overlay">
                            <div className="overlay-panel overlay-left">
                                <h1>Welcome Back!</h1>
                                <p>To keep connected with us please login with your personal info</p>
                                <button className="ghost" id="signIn" onClick={handleSignInClick}>Sign In</button>
                            </div>
                            <div className="overlay-panel overlay-right">
                                <h1>Hello, Friend!</h1>
                                <p>Enter your personal details and start journey with us</p>
                                <button className="ghost" id="signUp" onClick={handleSignUpClick}>Sign Up</button>
                            </div>
                        </div>
                    </div>
                </div>
                <footer>
                    <p>
                        Made with ❤️
                    </p>
                </footer>
            </div>
            <ToastContainer />
        </>
    );
}
export default Register;
