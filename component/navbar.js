'use client'

import Link from "next/link";
import { useRouter } from "next/navigation";
import Image from "next/image";
import home_style from "../styles/home.module.css"

const Navbar = () => {
    const router = useRouter();

    return (
        <nav>
            <div className='logo'>
                <Image
                    src="next.svg"
                    width={40}
                    height={35}
                    alt="LOGO"
                    />
            </div>
            <Link href="/">Home</Link>
            <Link href="/about">About</Link>
            <Link href="/dashboard">Dashboard</Link>
            <button className={home_style.btn} onClick={() => router.push('/dashboard/setting')}>Page Setting</button>
        </nav>
    )
};

export default Navbar;