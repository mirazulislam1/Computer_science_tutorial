import React from 'react';
import { useContext } from 'react';
import { Spinner } from 'react-bootstrap';
import { Navigate, useNavigate } from 'react-router-dom';
import  { AuthContext } from '../../contexts/AuthProvider/AuthProvider';

/*
1. only allow authentication user to visit the route
2.
3.Redirect user to the route they wanted to go before
*/ 

const PrivateRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext);
    const location = useNavigate(); 

    if(loading){
        return <Spinner animation="border" variant="info" />
    }

    if(!user){
        return <Navigate to="/login" state={{from: location}} replace></Navigate>
    }
    return children;

};

export default PrivateRoute;