import React from 'react'

const loginPage = () => {
  return (
    <div>
        <form className='login'>
            <h1>Login</h1>
            <input type='text' placeholder='Mobile no. / username'/>
            <input type='password' placeholder='password' />
            <button>Login</button>
        </form>
    </div>
  )
}

export default loginPage