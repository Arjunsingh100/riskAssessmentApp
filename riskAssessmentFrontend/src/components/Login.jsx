import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components'
import axios from 'axios'
import { useAuth } from '../context/auth';

const Login = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [auth,setAuth]=useAuth();

    const handleLogin = async (e) => {
        e.preventDefault();
        const { data } = await axios.post('https://riskassessmentapp.onrender.com/api/v1/auth/login', { email, password });
        if (data.success) {
            const setUser = localStorage.setItem('auth',JSON.stringify(data))
            navigate('/library');
        } 
        else {
            navigate('/')
        }
    }
    return (
        <Container>
            <div className="blankContainer"></div>
            <div className="loginContainer">
                <div className="loginForm">
                    <form onSubmit={handleLogin}>
                        <h2>Log in to BlueOcean</h2>
                        <div className="loginInputs">
                            <input type='text' placeholder='Enter Email' onChange={(e) => { setEmail(e.target.value) }} />
                            <input type='password' placeholder='Enter Password' onChange={(e) => { setPassword(e.target.value) }} />
                        </div>
                        <h5><span>Forgot Password</span></h5>
                        <button type='submit'>Login</button>
                        <h5>Want to know more about BlueOcean?<Link to='/register'>Sign Up</Link></h5>
                    </form>
                </div>
            </div>
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

export default Login
