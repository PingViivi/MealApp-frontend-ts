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
      name: 'password',
      type: 'password',
      label: 'Password',
      required: true,
  },
]


const LoginForm = () => {
  return (
    <>
    
        {
            fields.map((field, i) => (
                <InputField field={field} key={i}/>
            ))
        }
        <Button type="submit">Log in</Button>
        <div>
            Don't have an account? <Link to="/signup">Sign up</Link>
        </div>
    </>
  )
}

export default LoginForm