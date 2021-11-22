import React from 'react';
import { Link } from 'react-router-dom';
import './header.css'
const Header = () => {
    return (
        <div className='d-flex justify-content-center'>
            <Link to='/login' className='me-2 x'>Sign Up</Link>
        </div>
    );
};

export default Header;