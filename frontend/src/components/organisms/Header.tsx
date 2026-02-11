'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useTheme } from 'next-themes';
import { Sun, Moon, Monitor, Menu, X } from 'lucide-react';

const Header: React.FC = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const { theme, resolvedTheme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleTheme = () => {
        if (theme === 'system') setTheme('dark');
        else if (theme === 'dark') setTheme('light');
        else setTheme('system');
    };

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled || isMobileMenuOpen
                ? 'bg-background/80 backdrop-blur-lg border-b border-border py-3'
                : 'bg-transparent py-6'
                }`}
        >
            <div className="container mx-auto px-6 flex justify-between items-center">
                <Link href="/" className="flex items-center gap-3 group">
                    <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center group-hover:rotate-12 transition-transform shadow-lg shadow-primary/20">
                        <span className="text-white text-xl">🏛️</span>
                    </div>
                    <div className="flex flex-col">
                        <span className="text-lg font-black tracking-tighter leading-none text-foreground uppercase">TN Temples</span>
                        <span className="text-[10px] text-primary font-bold tracking-widest uppercase">Divine Heritage</span>
                    </div>
                </Link>

                {/* Desktop Navigation */}
                <nav className="hidden lg:flex items-center gap-10">
                    <Link href="/districts" className="text-sm font-bold text-muted-foreground hover:text-foreground transition-colors">Districts</Link>
                    <Link href="/deities" className="text-sm font-bold text-muted-foreground hover:text-foreground transition-colors">Deities</Link>
                    <Link href="/festivals" className="text-sm font-bold text-muted-foreground hover:text-foreground transition-colors">Festivals</Link>
                </nav>

                <div className="flex items-center gap-4 md:gap-6">
                    <button
                        onClick={toggleTheme}
                        className="p-2 rounded-full border border-border bg-secondary-bg hover:bg-accent/10 transition-colors text-foreground flex items-center gap-2"
                        aria-label="Toggle theme"
                    >
                        {mounted && (
                            <>
                                {theme === 'system' ? <Monitor size={20} /> : theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
                                <span className="text-[10px] font-bold uppercase hidden xl:block">
                                    {theme === 'system' ? 'Auto' : theme === 'dark' ? 'Dark' : 'Light'}
                                </span>
                            </>
                        )}
                        {!mounted && <div className="w-5 h-5" />}
                    </button>

                    <Link href="/request-contributor" className="hidden sm:block">
                        <button className="flex items-center gap-2 bg-primary hover:bg-primary/90 text-white text-sm font-bold px-6 py-2.5 rounded-full transition-all shadow-lg shadow-primary/20 active:scale-95">
                            <span className="text-lg">👤+</span>
                            <span className="hidden md:inline">Request Access</span>
                        </button>
                    </Link>

                    <button className="text-muted-foreground hover:text-foreground transition-colors hidden sm:block">
                        <span className="text-xl">🔍</span>
                    </button>

                    <div className="w-10 h-10 rounded-full border border-border flex items-center justify-center bg-secondary-bg cursor-pointer hover:bg-accent/10 transition-colors overflow-hidden sm:flex hidden">
                        <span className="text-muted-foreground text-lg">👤</span>
                    </div>

                    {/* Mobile Menu Toggle */}
                    <button
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        className="lg:hidden p-2 rounded-lg border border-border bg-secondary-bg hover:bg-accent/10 transition-colors text-foreground"
                        aria-label="Toggle mobile menu"
                    >
                        {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </div>

            {/* Mobile Navigation Overlay */}
            {isMobileMenuOpen && (
                <div className="lg:hidden absolute top-full left-0 right-0 bg-background/95 backdrop-blur-xl border-b border-border py-8 px-6 transition-all duration-300 animate-in slide-in-from-top-4">
                    <nav className="flex flex-col gap-6">
                        <Link
                            href="/districts"
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="text-lg font-bold text-foreground hover:text-primary transition-colors"
                        >
                            Districts
                        </Link>
                        <Link
                            href="/deities"
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="text-lg font-bold text-foreground hover:text-primary transition-colors"
                        >
                            Deities
                        </Link>
                        <Link
                            href="/festivals"
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="text-lg font-bold text-foreground hover:text-primary transition-colors"
                        >
                            Festivals
                        </Link>
                        <div className="pt-6 border-t border-border flex flex-col gap-4">
                            <Link
                                href="/request-contributor"
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="flex items-center justify-center gap-2 bg-primary text-white font-bold py-4 rounded-2xl"
                            >
                                Request Access
                            </Link>
                            <div className="flex justify-center gap-8">
                                <button className="text-muted-foreground hover:text-foreground transition-colors">
                                    <span className="text-2xl">🔍 Search</span>
                                </button>
                                <button className="text-muted-foreground hover:text-foreground transition-colors">
                                    <span className="text-2xl">👤 Profile</span>
                                </button>
                            </div>
                        </div>
                    </nav>
                </div>
            )}
        </header>
    );
};

export default Header;
