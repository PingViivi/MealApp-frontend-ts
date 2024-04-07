import React from 'react'
import Button from '../Button/Button'
import { Link } from 'react-router-dom'
import InputField from '../InputField/InputField'
import { IInputField } from '../InputField/InputField';

const fields: IInputField[] = [
    {
        name: 'username',
        type: 'text',
        label: 'Username',
        required: true,
    },
    {
        name: 'email',
        type: 'email',
        label: 'Email',
        required: true,
    },
    {
        name: 'password',
        type: 'password',
        label: 'Password',
        required: true,
    },
    {
        name: 'password',
        type: 'password',
        label: 'Confirm Password',
        required: true,
    },
]

const SignupForm = () => {
  return (
    <>
        {
            fields.map((field, i) => (
                <InputField field={field} key={i}/>
            ))
        }
        <Button type="submit">Sign up</Button>
        <div>
            Already have an account? <Link to="/login">Login</Link>
        </div> 
    </>
  )
}

export default SignupForm