import React from 'react'
import SignupForm from './SignupForm'
import LoginForm from './LoginForm'
import './UserForm.scss'
import Banner from '../Banner'

interface UserFormProps {
    type: string, 
}

const UserForm: React.FC<UserFormProps> = ({ type }) => {
  return (
    <>
    <section className="UserForm">
            {type === 'signup' ?
                <Banner style="center" title='Sign up'>Create your account</Banner>
                :
                <Banner style="center" title='Welcome Back'>Enter your credentials to login</Banner>
            }
        <form className='UserForm flex column' >
            {type === 'signup' ?
                <SignupForm/>
                :
                <LoginForm/>
            }
        </form>
    </section>
    </>
  )
}

export default UserForm