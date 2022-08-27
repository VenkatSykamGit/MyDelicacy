import React from 'react'
import './Login.css'

function Login() {
  return (
    <div className='login'>
        <div className="login__container">
            <h1>Sign into your MyDelicacy account</h1>
            <form className='login__info'>
                <input type="text" placeholder='Email...'/>
                <input type="text" placeholder='Password...'/>
                <button className='login__signInButton'>Sign in</button>
            </form>

            <p className="login__forgotPassword">Forgot password?</p>
            <button className='login__createAccount'>Create your MyDelicacy Account</button>

        </div>
    </div>
  )
}

export default Login