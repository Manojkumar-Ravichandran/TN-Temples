'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

const Header: React.FC = () => {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 0);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header
            className={`sticky top-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
                }`}
        >
            <div className="container mx-auto px-6 flex justify-between items-center">
                <Link href="/" className="flex items-center gap-2">
                    <span className="text-2xl font-bold text-orange-600">TN Temples</span>
                </Link>
                <nav className="hidden md:flex items-center gap-8">
                    <Link href="/festivals" className="text-gray-700 hover:text-orange-600 font-medium transition-colors">Festivals</Link>
                    <Link href="/nearby" className="text-gray-700 hover:text-orange-600 font-medium transition-colors">Nearby</Link>
                    <Link href="/login" className="text-gray-700 hover:text-orange-600 font-medium transition-colors">Login</Link>
                    <Link href="/request-contributor" className="px-4 py-2 rounded-full border-2 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white font-bold transition-all">
                        Join as Contributor
                    </Link>
                </nav>
            </div>
        </header>
    );
};

export default Header;
