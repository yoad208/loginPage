import styles from './page.module.css'
import react, {FC, useEffect} from "react";
import Link from "next/link";

const Page: FC = () => {

    return (
        <main className={styles.main}>
            <div style={{
                display: 'flex',
                gap: '1rem',
                justifyContent: 'center',
                padding: '.2rem',
                border: '1px solid black',
                borderRadius: '1rem',
                width: '100%',
                margin: '0 auto',
                height: '100%',
                boxSizing: 'border-box',
                maxWidth: '500px',
                maxHeight: '500px',
            }}>
                <Link href="/login">
                    <button             style={{
                backgroundColor: 'black',
                color: 'white',
                borderRadius: '5px',
                padding: '5px 10px',
                margin: '10px auto',
                cursor: 'pointer'
            }}>
                        Login
                    </button>
                </Link>
                <Link href="/register">
                    <button             style={{
                backgroundColor: 'black',
                color: 'white',
                borderRadius: '5px',
                padding: '5px 10px',
                margin: '10px auto',
                cursor: 'pointer'
            }}>
                        Register
                    </button>
                </Link>
                <Link href="/actions">
                    <button             style={{
                backgroundColor: 'black',
                color: 'white',
                borderRadius: '5px',
                padding: '5px 10px',
                margin: '10px auto',
                cursor: 'pointer'
            }}>
                        Actions
                    </button>
                </Link>
            </div>
        </main>
    )
}

export default Page