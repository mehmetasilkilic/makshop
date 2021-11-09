import React, { useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { Link } from 'react-router-dom'
import { registerUser } from '../../redux/apiCalls';
import './register.scss'

const Register = () => {

    const [name, setName] = useState("");
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const dispatch = useDispatch();
    const { isFetching, error } = useSelector(state => state.user);

    const handleClick = () => {
        registerUser(dispatch, { name, username, email, password });
    };

    return (
        <div className="register">
            <div className="wrapper">
                <div className="titleWrapper">
                    <Link to="/login"><h2>LOGIN</h2></Link>
                    <Link to="/register" className="reg"><h2>REGISTER</h2></Link>
                </div>
                <form>
                    <input type="text" placeholder="name" onChange={e => setName(e.target.value)} />
                    <input type="text" placeholder="username" onChange={e => setUsername(e.target.value)} />
                    <input type="email" placeholder="email" onChange={e => setEmail(e.target.value)} />
                    <input type="password" placeholder="password" onChange={e => setPassword(e.target.value)} />
                    <div className="regWrapper">
                        <button onClick={handleClick} disabled={isFetching}>CREATE</button>
                        <span>
                            I aggree to the <b>PRIVACY POLICY</b>
                        </span>
                    </div>
                    {error && <span>Something went wrong...</span>}
                </form>
            </div>
        </div>
    )
}

export default Register
