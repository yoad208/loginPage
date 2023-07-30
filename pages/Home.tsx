import React from 'react';
import {useSearchParams} from "next/navigation";


function Home() {
    const searchParams = useSearchParams()
    return (
        <div>
            <h1 style={{
                textAlign: 'center',
            }}>Welcome</h1>
            <div style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '1rem',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '1rem',
                border: '1px solid black',
                borderRadius: '1rem',
                width: '100%',
                margin: 'auto',
                height: '100%',
                boxSizing: 'border-box',
                maxWidth: '500px',
                maxHeight: '500px',

            }}>
                <p>{searchParams?.get('username')}</p>
                <p>{searchParams?.get('email')}</p>
            </div>
        </div>
    );
}

export default Home;