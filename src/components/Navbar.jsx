import React, { useState } from 'react';
// Import useLocation to manage active state reliably
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
    // We'll use the URL to determine the active link, so 'click' state is no longer needed.
    const { pathname } = useLocation();

    // Define links in an array
    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'Author', path: '/author',
            drop: true,
            // Add your dropdown items here
            children: [
                { name: 'Call for papers', path: '/registration/fees' },
                { name: 'Submission Guidlines', path: '/registration/register' },
                { name: 'Consent to Publish Form', path: '/registration/register' },
                { name: 'Latex Template', path: '/registration/register' },
                { name: 'Microsoft word Template', path: '/registration/register' },
                { name: 'Permission Request Form', path: '/registration/register' },
                { name: 'Registration Form', path: '/registration/register' },
                { name: 'Publications', path: '/registration/register' },
                { name: 'Accepted Papers', path: '/registration/register' },
            ]},
        { 
            name: 'Registration', 
            path: '/registration'
            
            
        },
        { name: 'Speakers', path: '/speakers' },
        { name: 'Committee', 
            path: '/commitee',
            drop: true,
             children: [
                { name: 'Advisory Committee', path: '/registration/register' },
                { name: 'Pogram Committee', path: '/registration/register' },
                { name: 'Organizing Committee', path: '/registration/register' }
             ]
        },
        { name: 'Archive', path: '/archieve',drop: true, children: [{ name: 'ICCAN 2017', path: '/registration/register' },]},
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