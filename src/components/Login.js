import React from 'react'
import './Login.css'

function Login(){
  return (
    <div class="root">
      <div class="container">
        <h1>Welcome Back</h1>
        <h1>Login</h1>
        <h2>Email</h2>
        <input placeholder="Enter your Email"></input>
        <h2>Password</h2>
        <input placeholder="Enter your password"></input>
        <br></br>
        <button class="button">Submit</button>
      </div>
    </div>
  )
}

export default Login