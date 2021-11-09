import React, { useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { Link } from 'react-router-dom'
import { login } from '../../redux/apiCalls';
import './login.scss';

const Login = () => {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const dispatch = useDispatch();
    const { isFetching, error } = useSelector(state => state.user);

    const handleClick = e => {
        e.preventDefault();
        login(dispatch, { username, password });
    };

    return (
        <div className="login">
            <div className="wrapper">
                <div className="titleWrapper">
                    <Link to="/login"><h2 className="log">LOGIN</h2></Link>
                    <Link to="/register"><h2>REGISTER</h2></Link>
                </div>
                <form>
                    <input placeholder="username" onChange={e => setUsername(e.target.value)} />
                    <input placeholder="password" type="password" onChange={e => setPassword(e.target.value)} />
                    <div className="buttonWrapper">
                        <button onClick={handleClick} disabled={isFetching}>LOGIN</button>
                        <button>Remember Me</button>
                        <button>Forgot Your Password?</button>
                    </div>
                    {error && <span>Something went wrong...</span>}
                </form>
            </div>
        </div>
    )
}

export default Login
