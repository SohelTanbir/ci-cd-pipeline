import Link from 'next/link'
import React from 'react'

export default function about() {
    return (
        <>
            <nav>
                <ul className="flex justify-center gap-2">
                    <li>
                        <Link href='/'>Home</Link>
                    </li>
                    <li>
                        <Link href='/about'>About</Link>
                    </li>
                    <li>
                        <Link href='/users'>Users</Link>
                    </li>
                </ul>
            </nav>
            about
        </>
    )
}
