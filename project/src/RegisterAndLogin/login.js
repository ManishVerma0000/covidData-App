
import React, { useState } from "react";
import './registerPage.css'
import './login.css'
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom"
import { ToastContainer, toast } from 'react-toastify';
function Login() {
    const navigate = useNavigate()
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const data = {
        email: email,
        password: password
    }
    const submit = () => {
        fetch("http://localhost:5000/login",
            {
                method: "POST",
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            }).then((data) => {
                console.log(data.status)
                if(data.status===400){
                    navigate('/login')
                }else{
                    data.json().then((response) => {
                        alert(response.message)
                        toast(response.message)
                        navigate("/covidData")
                    }).catch((err) => {
                        console.log(err, 'this is the err')
                    })
                }
               


            })
    }

    return (<>
        <div className="Registerpagediv">
            <div className="innerpageDiv">
                <div className="loginImage">

                </div>
                <h1 className="headingpage">Login here</h1>
                <div className="registerformdiv">
                    <form>
                        <input type='email' placeholder="enter your email here" value={email} onChange={(e) => {
                            setEmail(e.target.value)
                        }}></input>

                        {email.length === 0 ? <span className="errordetails">please enter the details</span> : null}
                        <input type='password' placeholder="enter your password here" value={password} onChange={(e) => {
                            setPassword(e.target.value)
                        }} ></input>
                        {password.length === 0 ? <span className="errordetails">please enter the details</span> : null}


                    </form>
                    <button className="submithere" onClick={submit}>Submit Here</button>
                    <button ><Link to='/'> Register Here</Link></button>
                </div>

            </div>
        </div>
        <ToastContainer />
    </>)
}

export default Login;