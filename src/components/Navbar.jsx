import React, { useState } from 'react';
// Import useLocation to manage active state reliably
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {

    const { pathname } = useLocation();

    // Define links in an array
    const navLinks = [
    { name: 'Home', path: '/' },
    { 
        name: 'Author', 
        path: '/author', 
        drop: true,
        children: [
            { name: 'Call for papers', path: '/author/call-for-papers' },
            { name: 'Submission Guidelines', path: '/author/submission-guidelines' },
            { name: 'Consent to Publish Form', path: '/author/consent-form' },
            { name: 'Latex Template', path: '/author/latex-template' },
            { name: 'Microsoft word Template', path: '/author/word-template' },
            { name: 'Permission Request Form', path: '/author/permission-form' },
            { name: 'Registration Form', path: '/author/registration-form' },
            { name: 'Publications', path: '/author/publications' },
            { name: 'Accepted Papers', path: '/author/accepted-papers' },
        ]
    },
    { 
        name: 'Registration', 
        path: '/registration'
    },
    { name: 'Speakers', path: '/speakers' },
    { 
        name: 'Committee', 
        path: '/committee', // Corrected spelling,
        drop: true,
        children: [
            { name: 'Advisory Committee', path: '/committee/advisory-committee' },
            { name: 'Program Committee', path: '/committee/program-committee' }, 
            { name: 'Organizing Committee', path: '/committee/organizing-committee' }
        ]
    },
    { 
        name: 'Archive', 
        path: '/archive', // Corrected spelling,
        drop: true,
        children: [
            { name: 'ICCAN 2017', path: 'https://link.springer.com/book/10.1007/978-981-10-7871-2' },
        ]
    },
    { name: 'Travel', path: '/travel' },
    { name: 'About Us', path: '/about' },
    { name: 'Contact Us', path: '/contact' },
];

    return (
        <div className="navbar bg-base-300 shadow-md fixed top-0 z-20">
            
            <div className="navbar-start">
                <Link to="/" className="btn btn-ghost text-xl">ICCAN 2019</Link>
            </div>

            
            <div className="navbar-end hidden lg:flex">
                <ul className="menu menu-horizontal px-1 text-sm">
                    {navLinks.map((link) => (
                        <li key={link.name}>
                            {link.drop ? (
                             
                                <div className="dropdown dropdown-bottom">
                                    <div 
                                        tabIndex={0} 
                                        role="button"
                                        
                                        className={pathname.startsWith(link.path) ? 'underline decoration-2 underline-offset-8' : ''}
                                    >
                                        {link.name}
                                    </div>
                                    <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow-sm">
                                        
                                        {link.children ? link.children.map((child) => (
                                            <li key={child.name}>
                                                <Link to={child.path}>{child.name}</Link>
                                            </li>
                                        )) : (
                                            <>
                                                <li><a>Item 1</a></li>
                                                <li><a>Item 2</a></li>
                                            </>
                                        )}
                                    </ul>
                                </div>
                            ) : (
                                
                                <Link 
                                    to={link.path}
                                    
                                    className={pathname === link.path ? 'underline decoration-2 underline-offset-8' : ''}
                                >
                                    {link.name}
                                </Link>
                            )}
                        </li>
                    ))}
                </ul>
            </div>

            {/* 3. Mobile Menu (Fixed with Dropdown support) */}
            <div className="navbar-end lg:hidden">
                <div className="dropdown dropdown-end">
                    <label tabIndex={0} className="btn btn-ghost btn-circle">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-200 rounded-box w-52">
                        {navLinks.map((link) => (
                            <li key={link.name} className="text-base">
                                {link.drop ? (
                                    
                                    <details>
                                        <summary>{link.name}</summary>
                                        <ul className="p-2 bg-base-100">
                                            {link.children ? link.children.map((child) => (
                                                <li key={child.name}>
                                                    <Link to={child.path}>{child.name}</Link>
                                                </li>
                                            )) : (
                                                <>
                                                    <li><a>Item 1</a></li>
                                                    <li><a>Item 2</a></li>
                                                </>
                                            )}
                                        </ul>
                                    </details>
                                ) : (
                                    
                                    <Link to={link.path}>{link.name}</Link>
                                )}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
            
        </div>
    );
};

export default Navbar;