'use client'
import Image from 'next/image'
import styles from './page.module.css'
import {useRouter} from 'next/navigation'
import Link from 'next/link';

export default function Home() {

  const router = useRouter();

  return (
    <main className={styles.main}>
      <h1>Home Page of Beta Debug</h1>
      <button onClick={()=>router.push("/login")} id="login">Login</button>
      <Link href="/about/company">About</Link>
    </main>
  )
}
