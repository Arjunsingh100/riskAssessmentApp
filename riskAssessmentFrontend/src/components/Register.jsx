import React, { useState } from 'react'
import { json } from 'react-router-dom';
import styled from 'styled-components'
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

const Register = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');

    const handleRegister = async (e) => {
        e.preventDefault();
        const { data } = await axios.post('http://localhost:4000/api/v1/auth/register', { firstName, lastName, email, password });
        if (data.success) {
            toast.success(data.message)
            navigate('/');
            console.log(data)
        }
        else {
            toast.error(data.message)
        }

    }
    return (
        <Container>
            <div className="blankContainer"></div>
            <div className="loginContainer">
                <div className="loginForm">
                    <form onSubmit={handleRegister}>
                        <h2>Log in to BlueOcean</h2>
                        <div className="loginInputs">
                            <input type='email' placeholder='Enter Email' onChange={(e) => { setEmail(e.target.value) }} />
                            <input type='text' placeholder='Enter firstname' onChange={(e) => { setFirstName(e.target.value) }} />
                            <input type='text' placeholder='Enter lastname' onChange={(e) => { setLastName(e.target.value) }} />
                            <input type='password' placeholder='Enter Password' onChange={(e) => { setPassword(e.target.value) }} />
                        </div>
                        <button type='submit'>Sign Up</button>
                        <h5>Want to know more about BlueOcean?<Link to='/'>Sign In</Link></h5>
                    </form>
                </div>
            </div>
            <ToastContainer />
        </Container>
    )
}

const Container = styled.div`
height:100%;
display:flex;
flex-direction:row;
align-items:center;
justify-content:center;
gap:20px;
.blankContainer {
width:40vw;
height:85vh;
background-color:gray;
border-radius:12px;
}
.loginContainer {
width:40vw;
height:auto;
form {
display:flex;
flex-direction:column;
align-items:center;
justify-content:center;
gap:25px;
button {
width:300px;
padding:10px;
text-align:center;
background-color:blue;
color:white;
border:none;
outline:none;
border-radius:18px;
}
.loginInputs {
display:flex;
flex-direction:column;
gap:20px;
input {
width:300px;
padding:10px;
border-radius:8px;
}
}
}
}
Link {
color:blue;
font-size:19px;
}
`

export default Register
