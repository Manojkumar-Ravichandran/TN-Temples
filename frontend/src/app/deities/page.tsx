'use client';

import React, { useState } from 'react';
import PublicLayout from '@/components/templates/PublicLayout';
import DeityHero from '@/components/organisms/DeityHero';
import PopularDeityCard from '@/components/molecules/PopularDeityCard';
import DeityCategoryCard from '@/components/molecules/DeityCategoryCard';
import Footer from '@/components/organisms/Footer';
import Link from 'next/link';
import { popularDeities, allDeities } from '@/data/deities';

export default function DeitiesPage() {
    const [activeFilter, setActiveFilter] = useState('A-Z');

    return (
        <PublicLayout>
            <div className="container mx-auto px-6 py-6 border-b border-border/50">
                <nav className="flex items-center gap-2 text-sm font-medium text-muted-foreground">
                    <Link href="/" className="hover:text-foreground transition-colors">Home</Link>
                    <span className="text-border">/</span>
                    <span className="text-foreground">Deities</span>
                </nav>
            </div>

            <DeityHero />

            <div className="container mx-auto px-6 py-20">
                {/* Popular Deities Section */}
                <section className="mb-24">
                    <div className="flex justify-between items-end mb-10">
                        <div>
                            <div className="flex items-center gap-2 mb-2">
                                <span className="text-primary text-xl">⭐</span>
                                <h2 className="text-3xl md:text-4xl font-black text-foreground tracking-tight">Popular Deities</h2>
                            </div>
                            <p className="text-muted-foreground font-medium">Most visited deity-specific shrines</p>
                        </div>
                        <Link href="/deities/all" className="flex items-center gap-2 text-primary font-black hover:gap-3 transition-all">
                            View All <span role="img" aria-label="arrow" className="text-xl">→</span>
                        </Link>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        {popularDeities.map((deity) => (
                            <PopularDeityCard key={deity.id} deity={deity} />
                        ))}
                    </div>
                </section>

                {/* All Deity Categories Section */}
                <section>
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-8">
                        <div>
                            <h2 className="text-3xl md:text-4xl font-black text-foreground mb-2 tracking-tight">All Deity Categories</h2>
                            <p className="text-muted-foreground font-medium">A comprehensive list of deities worshiped in registered temples</p>
                        </div>

                        <div className="flex items-center bg-secondary-bg p-1 rounded-2xl border border-border">
                            {['A-Z', 'Sects', 'Region'].map((filter) => (
                                <button
                                    key={filter}
                                    onClick={() => setActiveFilter(filter)}
                                    className={`px-6 py-2.5 rounded-xl text-xs font-black uppercase tracking-widest transition-all ${activeFilter === filter
                                            ? 'bg-primary text-white shadow-lg'
                                            : 'text-muted-foreground hover:bg-background'
                                        }`}
                                >
                                    {filter}
                                </button>
                            ))}
                        </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 mb-16">
                        {allDeities.map((deity) => (
                            <DeityCategoryCard key={deity.id} deity={deity} />
                        ))}
                    </div>

                    <div className="flex justify-center">
                        <button className="px-12 py-4 bg-transparent border-2 border-primary/20 text-primary font-black rounded-2xl hover:bg-primary/5 hover:border-primary transition-all active:scale-95">
                            Load More Deities
                        </button>
                    </div>
                </section>
            </div>

            <Footer />
        </PublicLayout>
    );
}
