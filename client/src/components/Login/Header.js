import React from "react";
import {Link} from 'react-router-dom'

function Header(){
    return (
        <header>
            <h1 className="text-center">Login</h1>
            <nav>
                <ul>
                    <li className="login-link"> <Link to='/login'>Login</Link></li>
                    <li className="register-link"> <Link to='/register'>Register</Link></li>
                </ul>
            </nav>
           
        </header>
    )
}


export default Header