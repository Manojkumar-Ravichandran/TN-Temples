'use client';

import React from 'react';
import PublicLayout from '@/components/templates/PublicLayout';
import Card from '@/components/atoms/Card';
import Button from '@/components/atoms/Button';
import Input from '@/components/atoms/Input';

import Link from 'next/link';
import Footer from '@/components/organisms/Footer';

export default function Home() {
  return (
    <PublicLayout>
      {/* Hero Section */}
      <section className="relative min-h-screen flex flex-col items-center justify-center pt-32 pb-20 px-6 overflow-hidden bg-dot-pattern">
        {/* Background Gradients */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full pointer-events-none">
          <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary/20 blur-[120px] rounded-full" />
          <div className="absolute bottom-[10%] right-[-10%] w-[30%] h-[30%] bg-red-600/10 blur-[100px] rounded-full" />
        </div>

        <div className="relative z-10 text-center max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-8xl font-black text-foreground mb-6 tracking-tighter leading-[0.9]">
            Discover the Divine Heritage <br />
            of <span className="text-orange-gradient">Tamil Nadu</span>
          </h1>
          <p className="text-muted-foreground text-lg md:text-xl font-medium max-w-2xl mx-auto mb-12">
            Explore thousands of ancient temples, vibrant festivals, and sacred deities <br className="hidden md:block" />
            across the spiritual heartland of the South.
          </p>

          <div className="max-w-2xl mx-auto mb-8 relative px-4 sm:px-0">
            <div className="absolute inset-y-0 left-8 sm:left-6 flex items-center pointer-events-none">
              <span role="img" aria-label="search" className="text-muted-foreground text-xl">🔍</span>
            </div>
            <input
              type="text"
              placeholder="Temple Name, District..."
              className="w-full bg-secondary-bg/50 border border-border rounded-2xl py-5 pl-16 pr-4 sm:pr-32 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all backdrop-blur-xl"
            />
            <button className="mt-4 sm:mt-0 sm:absolute sm:right-2 sm:top-2 sm:bottom-2 w-full sm:w-auto bg-primary hover:bg-primary/90 text-white font-black py-4 sm:py-0 px-8 rounded-xl transition-all shadow-lg active:scale-95">
              Search
            </button>
          </div>

          <div className="flex flex-wrap justify-center gap-4 text-sm px-6">
            <span className="text-muted-foreground font-bold uppercase tracking-widest text-[10px]">Trending:</span>
            {['Meenakshi Amman', 'Brihadeeswarar', 'Tiruchendur Murugan'].map((tag) => (
              <Link key={tag} href="#" className="text-muted-foreground hover:text-foreground transition-colors underline underline-offset-4 decoration-border">{tag}</Link>
            ))}
          </div>
        </div>
      </section>

      <div className="container mx-auto px-6 space-y-32 pb-32">
        {/* Featured Temples */}
        <section>
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-12 gap-6">
            <div>
              <h2 className="text-3xl md:text-4xl font-black text-foreground mb-2 tracking-tight">Featured Temples</h2>
              <p className="text-primary font-bold text-sm uppercase tracking-widest">Timeless wonders of architectural brilliance</p>
            </div>
            <Link href="/temples" className="flex items-center gap-2 text-primary font-black hover:gap-3 transition-all">
              View All Temples <span role="img" aria-label="arrow" className="text-xl">→</span>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card
              title="Meenakshi Amman Temple"
              image="https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&q=80&w=1000"
              className="h-[450px]"
            >
              <div className="flex flex-col gap-2">
                <span className="text-primary font-bold text-[10px] uppercase tracking-widest">Madurai</span>
                <p className="text-xs text-muted-foreground">Temple City • Spiritual Capital of Tamil Nadu</p>
                <div className="flex items-center gap-1 mt-2">
                  <span role="img" aria-label="location" className="text-primary">📍</span>
                  <span className="text-[10px] text-muted-foreground">Madurai District</span>
                </div>
              </div>
            </Card>

            <Card
              title="Brihadeeswarar Temple"
              image="https://images.unsplash.com/photo-1621319330248-6a566f1030e4?auto=format&fit=crop&q=80&w=1000"
              className="h-[450px]"
            >
              <div className="flex flex-col gap-2">
                <span className="text-primary font-bold text-[10px] uppercase tracking-widest">Thanjavur</span>
                <p className="text-xs text-muted-foreground">The Great Living Chola Temple • UNESCO Heritage</p>
                <div className="flex items-center gap-1 mt-2">
                  <span role="img" aria-label="location" className="text-primary">📍</span>
                  <span className="text-[10px] text-muted-foreground">Great Living Chola Temples</span>
                </div>
              </div>
            </Card>

            <Card
              title="Ramanathaswamy Temple"
              image="https://images.unsplash.com/photo-1608659597669-b4551172ebf6?auto=format&fit=crop&q=80&w=1000"
              className="h-[450px]"
            >
              <div className="flex flex-col gap-2">
                <span className="text-primary font-bold text-[10px] uppercase tracking-widest">Rameswaram</span>
                <p className="text-xs text-muted-foreground">Char Dham Pilgrimage • Longest Corridors</p>
                <div className="flex items-center gap-1 mt-2">
                  <span role="img" aria-label="location" className="text-primary">📍</span>
                  <span className="text-[10px] text-muted-foreground">Char Dham Pilgrimage</span>
                </div>
              </div>
            </Card>

            <Card
              title="Shore Temple"
              image="https://images.unsplash.com/photo-1627844718626-4a6b963baacf?auto=format&fit=crop&q=80&w=1000"
              className="h-[450px]"
            >
              <div className="flex flex-col gap-2">
                <span className="text-primary font-bold text-[10px] uppercase tracking-widest">Mahabalipuram</span>
                <p className="text-xs text-muted-foreground">Pallava Architecture • UNESCO World Heritage Site</p>
                <div className="flex items-center gap-1 mt-2">
                  <span role="img" aria-label="location" className="text-primary">📍</span>
                  <span className="text-[10px] text-muted-foreground">UNESCO World Heritage</span>
                </div>
              </div>
            </Card>
          </div>
        </section>

        {/* Sacred Festivals Section */}
        <section>
          <div className="flex items-center gap-2 mb-4">
            <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-primary font-black text-xs uppercase tracking-[0.2em]">Happening Now</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-foreground mb-12 tracking-tight">Today's Sacred Festivals</h2>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="bg-secondary-bg p-8 rounded-3xl border border-border hover:border-primary/20 transition-colors group">
              <div className="flex justify-between items-start mb-6">
                <span className="px-3 py-1 bg-primary/10 text-primary text-[10px] font-black uppercase tracking-widest rounded-full border border-primary/20">Today</span>
                <span role="img" aria-label="celebration" className="text-primary text-xl font-bold italic">🎊</span>
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors">Panguni Uthiram</h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-8">
                Celebrated in the month of Panguni, signifying the marriage of Lord Shiva and Goddess Parvati.
              </p>
              <div className="flex items-center gap-3 pt-6 border-t border-border">
                <div className="w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center">
                  <span role="img" aria-label="temple" className="text-primary text-sm font-bold">🏛️</span>
                </div>
                <span className="text-xs text-muted-foreground font-medium">Majority of Palani & Mylapore</span>
              </div>
            </div>

            <div className="bg-secondary-bg p-8 rounded-3xl border border-border hover:border-primary/20 transition-colors group">
              <div className="flex justify-between items-start mb-6">
                <span className="px-3 py-1 bg-background/50 text-muted-foreground text-[10px] font-black uppercase tracking-widest rounded-full border border-border">Tomorrow</span>
                <span role="img" aria-label="calendar" className="text-muted-foreground text-xl">📅</span>
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors">Chithirai Thiruvizha</h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-8">
                The grand celebration of Madurai, marking the celestial wedding of Meenakshi Amman.
              </p>
              <div className="flex items-center gap-3 pt-6 border-t border-border">
                <div className="w-8 h-8 rounded-lg bg-background/50 flex items-center justify-center">
                  <span role="img" aria-label="temple" className="text-muted-foreground text-sm font-bold">🏛️</span>
                </div>
                <span className="text-xs text-muted-foreground font-medium">Madurai District</span>
              </div>
            </div>

            <div className="bg-secondary-bg p-8 rounded-3xl border border-border hover:border-primary/20 transition-colors group opacity-60">
              <div className="flex justify-between items-start mb-6">
                <span className="px-3 py-1 bg-background/50 text-muted-foreground text-[10px] font-black uppercase tracking-widest rounded-full border border-border">Upcoming</span>
                <span role="img" aria-label="wave" className="text-muted-foreground text-xl">🌊</span>
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors">Aadi Perukku</h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-8">
                Festival of prosperity, celebrating the monsoon season and rising water levels.
              </p>
              <div className="flex items-center gap-3 pt-6 border-t border-border">
                <div className="w-8 h-8 rounded-lg bg-background/50 flex items-center justify-center">
                  <span role="img" aria-label="temple" className="text-muted-foreground text-sm font-bold">🏛️</span>
                </div>
                <span className="text-xs text-muted-foreground font-medium">River Kaveri Banks</span>
              </div>
            </div>
          </div>
        </section>

        {/* Nearby Banner */}
        <section className="relative p-8 md:p-20 rounded-[40px] overflow-hidden">
          <div className="absolute inset-0 orange-gradient opacity-90" />
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-20" />

          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-12 text-center lg:text-left">
            <div className="max-w-xl">
              <h2 className="text-4xl md:text-5xl font-black text-white mb-6 tracking-tight">Find Temples Near You</h2>
              <p className="text-white/80 text-lg leading-relaxed mb-10">
                Enable location access to discover hidden spiritual gems and ancient architecture within your immediate vicinity.
              </p>
              <div className="flex flex-col sm:flex-row flex-wrap gap-4 justify-center lg:justify-start">
                <button className="flex items-center justify-center gap-2 bg-white text-primary font-black px-8 py-4 rounded-2xl hover:bg-orange-50 transition-all shadow-xl active:scale-95">
                  <span role="img" aria-label="location" className="text-xl">📍</span>
                  Use My Current Location
                </button>
                <button className="bg-black/20 hover:bg-black/30 border border-white/20 text-white font-black px-8 py-4 rounded-2xl transition-all active:scale-95">
                  Enter Pin Code
                </button>
              </div>
            </div>

            <div className="hidden lg:block w-72 h-72 bg-white/10 rounded-full blur-3xl animate-pulse" />
          </div>
        </section>
      </div>

      <Footer />
    </PublicLayout>
  );
}
