'use client';

import React from 'react';
import DashboardLayout from '@/components/templates/DashboardLayout';
import {
    Edit2,
    Share2,
    Mail,
    MapPin,
    Calendar,
    ShieldCheck,
    Award,
    Camera,
    Hash,
    Heart
} from 'lucide-react';

export default function Profile() {
    const badges = [
        { name: 'Historical Fact-Checker', date: 'Earned 2 days ago', icon: ShieldCheck, color: 'text-orange-500' },
        { name: 'Top Photographer', date: 'Earned 1 week ago', icon: Camera, color: 'text-blue-500' },
        { name: 'Community Pillar', date: 'Earned 2 weeks ago', icon: Heart, color: 'text-red-500' },
    ];

    return (
        <DashboardLayout role="Contributor">
            <div className="space-y-12">
                {/* Header Actions */}
                <div className="flex justify-between items-center bg-secondary-bg border border-border p-4 rounded-[2rem]">
                    <div className="flex items-center gap-2 px-6">
                        <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                        <span className="text-[10px] font-black text-muted-foreground uppercase tracking-widest">Active Status</span>
                    </div>
                    <div className="flex gap-4">
                        <button className="flex items-center gap-2 px-6 py-3 bg-background border border-border rounded-xl text-foreground font-bold text-sm hover:bg-accent/10 transition-all">
                            <Share2 size={18} />
                            Share Profile
                        </button>
                        <button className="flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-xl font-bold text-sm hover:scale-105 transition-all">
                            <Edit2 size={18} />
                            Edit Profile
                        </button>
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
                    {/* Left Column - Profile Card */}
                    <div className="lg:col-span-4 space-y-6">
                        <div className="bg-secondary-bg border border-border rounded-[3rem] overflow-hidden group">
                            <div className="h-32 bg-gradient-to-br from-primary/20 to-orange-600/30 relative">
                                <div className="absolute -bottom-16 left-1/2 -translate-x-1/2 w-32 h-32 rounded-3xl bg-background border-4 border-secondary-bg p-1 shadow-2xl overflow-hidden">
                                    <div className="w-full h-full rounded-2xl bg-secondary-bg/50 border border-border flex items-center justify-center text-4xl grayscale group-hover:grayscale-0 transition-all duration-700">
                                        👨🏽‍💻
                                    </div>
                                    <div className="absolute bottom-2 right-2 w-6 h-6 bg-primary rounded-lg border-2 border-secondary-bg flex items-center justify-center">
                                        <ShieldCheck size={12} className="text-white" />
                                    </div>
                                </div>
                            </div>
                            <div className="pt-20 pb-10 px-8 text-center">
                                <h2 className="text-3xl font-black text-foreground mb-1">Arjun Kumar</h2>
                                <div className="flex justify-center items-center gap-4 mb-6">
                                    <span className="bg-primary/10 text-primary text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-widest border border-primary/20">Master Contributor</span>
                                    <span className="text-muted-foreground font-bold text-sm">• Tier 3</span>
                                </div>
                                <p className="text-muted-foreground font-bold text-sm leading-relaxed mb-8 px-4">
                                    History enthusiast and photographer documenting the architectural marvels of Chola dynasty temples across Tamil Nadu.
                                </p>

                                <div className="flex justify-center gap-3">
                                    {[1, 2, 3, 4].map(idx => (
                                        <div key={idx} className="w-10 h-10 rounded-xl bg-background border border-border flex items-center justify-center text-muted-foreground hover:text-primary transition-all cursor-pointer">
                                            {idx === 1 ? <ShieldCheck size={18} /> : idx === 2 ? <Camera size={18} /> : idx === 3 ? <Award size={18} /> : <ShieldCheck size={18} />}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Contact Info */}
                        <div className="bg-secondary-bg border border-border rounded-[2.5rem] p-8 space-y-6">
                            <div className="flex items-center gap-4">
                                <div className="w-10 h-10 rounded-xl bg-background border border-border flex items-center justify-center text-muted-foreground">
                                    <Mail size={18} />
                                </div>
                                <div>
                                    <p className="text-[10px] font-black text-muted-foreground lowercase tracking-widest mb-1">Email Address</p>
                                    <p className="font-bold text-foreground text-sm">arjun.k@example.com</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-4">
                                <div className="w-10 h-10 rounded-xl bg-background border border-border flex items-center justify-center text-muted-foreground">
                                    <MapPin size={18} />
                                </div>
                                <div>
                                    <p className="text-[10px] font-black text-muted-foreground lowercase tracking-widest mb-1">Location</p>
                                    <p className="font-bold text-foreground text-sm">Chennai, Tamil Nadu</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Column - Stats & History */}
                    <div className="lg:col-span-8 space-y-8">
                        {/* Points History Placeholder */}
                        <div className="bg-secondary-bg border border-border rounded-[3rem] p-10 h-80 relative group overflow-hidden">
                            <div className="flex justify-between items-center mb-10">
                                <div>
                                    <h3 className="text-xl font-black text-foreground">Points History</h3>
                                    <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest mt-1">Total earned: 1,250 pts</p>
                                </div>
                                <select className="bg-background border border-border rounded-xl px-4 py-2 text-xs font-bold text-foreground focus:outline-none appearance-none pr-8">
                                    <option>Last 6 Months</option>
                                    <option>All Time</option>
                                </select>
                            </div>
                            {/* Simple SVG Chart Placeholder */}
                            <div className="absolute inset-0 top-32 px-10 flex items-end justify-between opacity-50 group-hover:opacity-100 transition-opacity duration-700">
                                {[30, 45, 25, 60, 80, 75].map((h, i) => (
                                    <div key={i} className="flex flex-col items-center gap-4 flex-1">
                                        <div className="w-full max-w-[40px] bg-background border border-border rounded-t-xl relative overflow-hidden h-32">
                                            <div className="absolute bottom-0 left-0 right-0 bg-primary/20 transition-all duration-1000 delay-300" style={{ height: `${h}%` }} />
                                        </div>
                                        <span className="text-[10px] font-black text-muted-foreground uppercase tracking-widest">
                                            {['MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT'][i]}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {/* Badges Section */}
                            <div className="bg-secondary-bg border border-border rounded-[3rem] p-10 space-y-8">
                                <h3 className="text-xl font-black text-foreground">Recently Earned Badges</h3>
                                <div className="space-y-6">
                                    {badges.map((badge, i) => (
                                        <div key={i} className="flex items-center gap-4 group cursor-pointer">
                                            <div className={`w-14 h-14 rounded-2xl bg-background border border-border flex items-center justify-center ${badge.color} group-hover:scale-110 transition-transform`}>
                                                <badge.icon size={24} />
                                            </div>
                                            <div>
                                                <h4 className="font-black text-foreground text-sm">{badge.name}</h4>
                                                <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest mt-1">{badge.date}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Tier Progress Card */}
                            <div className="bg-secondary-bg border border-border rounded-[3rem] p-10 flex flex-col justify-between">
                                <div>
                                    <h3 className="text-xl font-black text-foreground">Tier 4 Completion</h3>
                                    <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest mt-1">Next rank: Master Contributor Elite</p>
                                </div>
                                <div className="space-y-4">
                                    <div className="flex justify-between items-end">
                                        <p className="text-2xl font-black text-foreground">750 <span className="text-muted-foreground/40">/ 1000</span></p>
                                        <span className="text-sm font-black text-primary">75%</span>
                                    </div>
                                    <div className="w-full h-3 bg-background border border-border rounded-full overflow-hidden">
                                        <div className="w-[75%] h-full bg-primary shadow-[0_0_20px_rgba(236,127,19,0.5)] transition-all duration-1000 delay-500" />
                                    </div>
                                </div>
                                <p className="text-[10px] font-bold text-muted-foreground italic leading-relaxed">
                                    * Unlock direct publishing rights and a featured profile by reaching 1000 points.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </DashboardLayout>
    );
}
