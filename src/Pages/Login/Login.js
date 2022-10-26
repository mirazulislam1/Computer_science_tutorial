import { GoogleAuthProvider } from 'firebase/auth';
import React from 'react';
import { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Form from 'react-bootstrap/Form';
import { FaGoogle, FaGithub } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import './Login.css'

const Login = () => {
    const {googleLogin, signIn} = useContext(AuthContext)

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
        .catch(error => console.error(error))

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
                <p className='register-link mt-2'>New to this website ? please <Link to='/register'>Register</Link></p>
                <ButtonGroup vertical className='login-btn'>
                    <Button onClick={handleGoogleSignIn} className='mb-2 mt-4' > <FaGoogle></FaGoogle> Login with Google</Button>
                    <Button> <FaGithub></FaGithub> Login with Github</Button>
                </ButtonGroup>



                <Form.Text className="text-muted">

                </Form.Text>
            </Form>
        </div>
    );
};

export default Login;