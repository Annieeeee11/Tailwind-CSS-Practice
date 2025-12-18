// for better structure put navbar in layout.tsx
import React from 'react'

export default function Navbar() {
    const Links = [
        {
            title: 'About',
            href: '#'
        },
        {
            title: 'pricing',
            href: '#'
        },
        {
            title: 'Contact',
            href: '#'
        }
    ]
    return (
        <div className="navbar-root">
            <div className="logo">Fintech</div>
            <div className="links">
                {Links.map((link, idx) => (
                    <a className="links-item" href={link.href} key={link.title}>{link.title}</a>
                ))}
                <button className="btn">Start Free Trial</button>
            </div>
        </div>
    )
}