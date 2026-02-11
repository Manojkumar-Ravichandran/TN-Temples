'use client';

import React from 'react';
import Link from 'next/link';

const Footer: React.FC = () => {
    return (
        <footer className="bg-secondary-bg border-t border-border pt-20 pb-10">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
                    {/* Brand Section */}
                    <div className="space-y-6">
                        <Link href="/" className="flex items-center gap-3">
                            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                                <span className="text-white text-xl">🏛️</span>
                            </div>
                            <div className="flex flex-col">
                                <span className="text-lg font-black tracking-tighter leading-none text-foreground uppercase">TN Temples</span>
                                <span className="text-[10px] text-primary font-bold tracking-widest uppercase">Divine Heritage</span>
                            </div>
                        </Link>
                        <p className="text-muted-foreground text-sm leading-relaxed max-w-xs">
                            Dedicated to preserving and sharing the rich spiritual and architectural heritage of Tamil Nadu's sacred spaces. Join our community of contributors today.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-foreground font-bold mb-6">Quick Links</h4>
                        <ul className="space-y-4">
                            {['Featured Temples', 'Browse Districts', 'Deity Encyclopedia', 'Festival Calendar'].map((link) => (
                                <li key={link}>
                                    <Link href="#" className="text-muted-foreground hover:text-primary text-sm transition-colors">{link}</Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contribute */}
                    <div>
                        <h4 className="text-foreground font-bold mb-6">Contribute</h4>
                        <ul className="space-y-4">
                            {['Submit a Temple', 'Photography Guidelines', 'Editor Access', 'Contact Admin'].map((link) => (
                                <li key={link}>
                                    <Link href="#" className="text-muted-foreground hover:text-primary text-sm transition-colors">{link}</Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Branding/Badge - Large Hidden on Mobile */}
                    <div className="hidden lg:flex flex-col items-end justify-start">
                        <div className="w-32 h-32 opacity-10 dark:invert-0 invert transition-all">
                            <span className="text-9xl">🏛️</span>
                        </div>
                    </div>
                </div>

                <div className="pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-muted-foreground text-xs text-center md:text-left">
                        &copy; {new Date().getFullYear()} Tamil Nadu Divine Heritage Project. All rights reserved.
                    </p>
                    <div className="flex flex-wrap justify-center gap-8">
                        <Link href="#" className="text-muted-foreground hover:text-foreground text-xs transition-colors">Privacy Policy</Link>
                        <Link href="#" className="text-muted-foreground hover:text-foreground text-xs transition-colors">Terms of Service</Link>
                        <Link href="#" className="text-muted-foreground hover:text-foreground text-xs transition-colors">SEO Sitemap</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
