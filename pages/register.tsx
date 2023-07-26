import React, {useRef} from 'react';
import '../styles/login.css';

function Register() {

    const nameRef = useRef<HTMLInputElement>(null);
    const emailRef = useRef<HTMLInputElement>(null);
    const passwordRef = useRef<HTMLInputElement>(null);

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        fetch('http://localhost:3000/api/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                name: nameRef.current?.value,
                email: emailRef.current?.value,
                password: passwordRef.current?.value
            })
        }).then(() => {
            window.location.href = '/login';
        })
    }

    return (
        <div>
            <h2 style={{textAlign: 'center'}}>create account here!</h2>
            <form onSubmit={handleSubmit}>
                <div className='inputStyle'>
                    <label htmlFor='username'>Username</label>
                    <input ref={nameRef} type='text' placeholder='full name' name='username'/>
                </div>
                <div className='inputStyle'>
                    <label htmlFor='email'>Email</label>
                    <input ref={emailRef} type='email' placeholder='email' name='email'/>
                </div>
                <div className='inputStyle'>
                    <label htmlFor='password'>Password</label>
                    <input ref={passwordRef} type='password' placeholder='password' name='password'/>
                </div>

                <button className='submitButton' type='submit'>Register</button>
            </form>
        </div>
    );
}

export default Register;