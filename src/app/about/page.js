"use client"
import Link from "next/link";
import {useRouter} from 'next/navigation'

export default function About(){
    
    const router = useRouter();
    const nav = (name) =>{
        router.push("/about/"+ name)
    }
    
    return(
        <div>
            <h1>About Page</h1>
            <Link href="/">Home</Link>
            <br/>
            <br/>
            <br/>
            <br/>
            <button onClick={()=>nav("company")}>Company</button>
            <br/>
            <br/>
            <button onClick={()=>nav("staff")}>Staff</button>
            <br/>
            <br/>
            <br/>
            <br/>
            <button onClick={router.back}>One Step Back</button>
        </div>
    )
}