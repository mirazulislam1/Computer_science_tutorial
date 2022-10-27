import { GithubAuthProvider, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import React from 'react';
import { useState } from 'react';
import { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Form from 'react-bootstrap/Form';
import { FaGoogle, FaGithub } from "react-icons/fa";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import './Login.css'

const Login = () => {
    const [error, setError] = useState('');
    const {googleLogin, githubLogin, signIn} = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || '/';

    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);

        signIn(email, password)
        .then(result =>{
            const user = result.user;
            console.log(user);
            form.reset();
            setError('')
            navigate(from, {replace: true});
        })
        .catch(error=>console.error(error))
    }
    //google signIn method
    const googleProvider = new GoogleAuthProvider()

    const handleGoogleSignIn = () =>{
        googleLogin(googleProvider)
        .then(result =>{
            const user = result.user;
            console.log(user);
           
        })
        .catch(error => {
            console.error(error)
            setError(error.message);
            })

    }
    //github signIn method
    const githubProvider = new GithubAuthProvider()

    const handleGithubSignIn = () =>{
        githubLogin(githubProvider)
        .then(result =>{
            const user = result.user;
            console.log(user);
        })
        .catch(error => {
            console.error(error)
            setError(error.message);
            })


    }

    return (
        <div className='login-form'>
            <Form onSubmit={handleSubmit} className=''>
                <h2 className='text-center'>Login Form</h2>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control name='email' type="email" placeholder="Enter email" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control name='password' type="password" placeholder="Password" required />
                </Form.Group>

                <input className='login-btn' type="submit" value="Login" />
                <Form.Text className="text-danger">
                    {error}
                </Form.Text>
                <p className='register-link mt-2'>New to this website ? please <Link to='/register'>Register</Link></p>
                <ButtonGroup vertical className='login-btn'>
                    <Button onClick={handleGoogleSignIn} className='mb-2 mt-4' > <FaGoogle></FaGoogle> Login with Google</Button>
                    <Button onClick={handleGithubSignIn}> <FaGithub></FaGithub> Login with Github</Button>
                </ButtonGroup>

                
            </Form>
        </div>
    );
};

export default Login;