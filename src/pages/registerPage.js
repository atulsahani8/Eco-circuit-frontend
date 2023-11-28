import React from 'react'

const registerPage = () => {
    return (
        <div>
            <form className='login'>
                <h1>Register</h1>
                <input type='text' placeholder='Mobile Number' />
                <input type='text' placeholder='OTP' />
                <button>Register</button>
            </form>
        </div>
    )
}

export default registerPage