import React, { useState } from 'react'

function Form() {
    const [data, setData] = useState({ username: '', password: '' })
    const { username, password } = data;

    const handleChange = e => {
        setData({ ...data, [e.target.name]: [e.target.value] })
    }

    const handleSubmit = e => {
        e.preventDefault();
        console.log(data)
    }

    return (
        <div>
            <center>
                <form onSubmit={handleSubmit}>
                    <label>Username</label>
                    <input type='text' name='username' value={username} 
                    onChange={handleChange} autoComplete='off' /><br />
                    <label>Password</label>
                    <input type='password' name='password' value={password} 
                    onChange={handleChange} autoComplete='off' /><br />
                    <input type='submit' name='submit' />
                </form>
            </center >
        </div>
    )
}

export default Form
