'use client';

import React from 'react';

const DeityHero = () => {
    return (
        <section className="relative h-[400px] md:h-[500px] flex flex-col items-center justify-center px-6 overflow-hidden rounded-[2rem] mx-6 mt-8">
            {/* Background Image with Overlay */}
            <div
                className="absolute inset-0 z-0"
                style={{
                    backgroundImage: `url('https://images.unsplash.com/photo-1610459341764-469b27560249?q=80&w=2000&auto=format&fit=crop')`,
                    backgroundPosition: 'center',
                    backgroundSize: 'cover'
                }}
            >
                <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />
            </div>

            <div className="relative z-10 text-center max-w-4xl mx-auto text-white">
                <h1 className="text-4xl md:text-6xl font-black mb-6 tracking-tight leading-tight">
                    Discover Temples by Deity
                </h1>
                <p className="text-white/80 text-lg md:text-xl font-medium max-w-2xl mx-auto mb-10">
                    Explore the sacred abodes across Tamil Nadu, categorized by the manifestation of the divine.
                </p>

                <div className="max-w-2xl mx-auto relative group">
                    <div className="absolute inset-y-0 left-6 flex items-center pointer-events-none">
                        <span role="img" aria-label="temple" className="text-white/40 text-xl">🏛️</span>
                    </div>
                    <input
                        type="text"
                        placeholder="Search for a deity (e.g. Murugan, Amman)..."
                        className="w-full bg-white/10 border border-white/20 backdrop-blur-md rounded-2xl py-5 pl-16 pr-4 sm:pr-40 text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                    />
                    <button className="mt-4 sm:mt-0 sm:absolute sm:right-2 sm:top-2 sm:bottom-2 w-full sm:w-auto bg-primary hover:bg-primary/90 text-white font-black py-3 sm:py-0 px-8 rounded-xl transition-all shadow-lg active:scale-95 flex items-center justify-center gap-2">
                        <span role="img" aria-label="search">🔍</span>
                        Search
                    </button>
                </div>
            </div>
        </section>
    );
};

export default DeityHero;
