'use client'
import Link from "next/link";
import './about.css'
import { usePathname } from "next/navigation";

export default function AboutLayout({ children }) {

    const pathName = usePathname();

    return (
        <div>
            <ul className="nav-menu">
                {pathName !== "/about/company" ?
                    <li><Link href="/about/company">Company</Link></li>
                    :
                    <li><Link href="/about/staff">Employee</Link></li>}
            </ul>
            {children}
        </div>
    )
}