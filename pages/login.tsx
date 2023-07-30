import React, {useEffect, useRef} from 'react';
import '../styles/login.css';
import axios from "axios";
function Login() {

    const emailRef = useRef<HTMLInputElement | null>(null);
    const passwordRef = useRef<HTMLInputElement | null>(null);
    const [isSubmitting, setIsSubmitting] = React.useState(false);

    const login = async () => {
        const {data} = await axios.post("http://localhost:3000/api/login", {
            email: emailRef.current?.value,
            password: passwordRef.current?.value,
        })

        if (data?.success) {
            await axios.post('http://localhost:3000/api/actionsTracker', {
                status: 201,
                action: 'Login',
                message: 'Login successful',
            })
            window.location.href = `/Home?username=${data?.user?.name}&email=${data?.user?.email}`
        } else {
            await axios.post('http://localhost:3000/api/actionsTracker', {
                status: 403,
                action: 'Login',
                message: data?.error,
            })
            alert(data?.error);
            window.location.reload()
        }
    }

    useEffect(() => {

        if (isSubmitting) {
            login()
        }

    }, [isSubmitting])



    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        fetch('http://localhost:3000/api/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                email: emailRef.current?.value,
                password: passwordRef.current?.value,
            }),
        }).then(() => {
            setIsSubmitting(true)
        });
    }

    return (
        <div>
            <h2 style={{textAlign: 'center'}}>Login to your account!</h2>
            <form onSubmit={handleSubmit}>
                <div className='inputStyle'>
                    <label htmlFor='email'>Email</label>
                    <input ref={emailRef} type='email' placeholder='email' name='email'/>
                </div>
                <div className='inputStyle'>
                    <label htmlFor='password'>Password</label>
                    <input ref={passwordRef} type='password' placeholder='password' name='password'/>
                </div>

                <button className='submitButton' type='submit'>Login</button>
            </form>

        </div>
    );
}

export default Login;