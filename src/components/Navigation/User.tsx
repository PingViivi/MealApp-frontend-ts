import React from 'react'
import Button from '../Button/Button'
import PersonRoundedIcon from '@mui/icons-material/PersonRounded';
import { Link } from 'react-router-dom';
import './User.scss';

const User = () => {
    const loggedIn = false
    return (
        <div className='User flex-item flex'>
            {loggedIn ?
                <Link className='profile' to="/profile">
                    <PersonRoundedIcon/>
                </Link>
                :
            <div className="login">
                <Link className='link' to="/signup">Sign up</Link>
                <Link className='button' to="/login">Log in</Link>
            </div>
            }
        </div>
    )
}

export default User