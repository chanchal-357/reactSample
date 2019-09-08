import React from 'react';
import { Link } from 'react-router-dom';
const RegisterSuccess = () => {
    return (
        <div>
            <p>Registration Success!</p>
            <p><Link to="/">home</Link> page.</p>
        </div>
    );
};

export default RegisterSuccess