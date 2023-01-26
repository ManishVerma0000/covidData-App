import React, { useState } from "react";
import './registerPage.css'
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function Register() {
    const navigate = useNavigate()
    const [name, setName] = useState("");
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [phone, setPhone] = useState('');
    const [cpassword, setCpassword] = useState('')
    const data = {
        email: email,
        name: name,
        password: password,
        cpassword: cpassword,
        phone: phone

    }

    console.log(data, 'this is the data')
    const submit = () => {

        fetch("http://localhost:5000/register",
            {
                method: "POST",
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            }).then((data) => {
       
                if (data.status === 400) {
                    navigate("/")
                } else {
                    data.json().then((response) => {
                        console.log(response);
                        alert(response.message)
                        toast(response.message)
                        navigate("/login")
                    }).catch((err) => {
                        console.log(err, 'this is the err')
                    })
                }

            })

    }

    return (<>
        <div className="Registerpagediv">
            <div className="innerpageDiv">
                <h1 className="headingpage">Sign Up here</h1>
                <div className="registerimage"></div>
                <div className="registerformdiv">
                    <form>
                        <input type='text' placeholder="enter your name here" value={name} onChange={(e) => {
                            setName(e.target.value)

                        }} ></input>
                        {name.length === 0 ? <span className="errordetails">please enter the details</span> : null}
                        <input type='phone' placeholder="enter your phone here" value={phone} onChange={(e) => {
                            setPhone(e.target.value)
                        }} ></input>
                        {phone.length === 0 ? <span className="errordetails">please enter the details</span> : null}
                        <input type='email' placeholder="enter your email here" value={email} onChange={(e) => {
                            setEmail(e.target.value)
                        }}></input>
                        {email.length === 0 ? <span className="errordetails">please enter the details</span> : null}
                        <input type='password' placeholder="enter your password here" value={password} onChange={(e) => {
                            setPassword(e.target.value)
                        }} ></input>
                        {password.length === 0 ? <span className="errordetails">please enter the details</span> : null}
                        <input type='password' placeholder="enter your confirm password here" value={cpassword} onChange={(e) => {
                            setCpassword(e.target.value)
                        }}></input>
                        {cpassword.length === 0 ? <span className="errordetails">please enter the details</span> : null}

                    </form>
                    <button className="submithere" onClick={submit}>Submit Here</button>
                    <button className="loginbutton">   <Link to='/login'> Login</Link></button>
                </div>

            </div>
        </div>
        <ToastContainer />
    </>)
}
export default Register;