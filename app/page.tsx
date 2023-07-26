import styles from './page.module.css'
import {useSearchParams} from 'next/navigation'
import react, {FC, useEffect} from "react";
import Link from "next/link";

const Page: FC = () => {

    return (
        <main className={styles.main}>
            <div>
                <Link href="/login">
                    <button>
                        Login
                    </button>
                </Link>
                <Link href="/register">
                    <button>
                        Register
                    </button>
                </Link>
            </div>
        </main>
    )
}

export default Page