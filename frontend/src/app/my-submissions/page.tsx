'use client';

import React from 'react';
import DashboardLayout from '@/components/templates/DashboardLayout';
import {
    Search,
    Filter,
    ChevronLeft,
    ChevronRight,
    Eye,
    Edit3,
    Trash2,
    Info
} from 'lucide-react';

export default function MySubmissions() {
    const submissions = [
        { name: 'Brihadisvara Temple', location: 'Thanjavur, Tamil Nadu', date: 'Oct 24, 2023', status: 'Approved', points: '+150', image: '🏛️' },
        { name: 'Meenakshi Amman', location: 'Madurai, Tamil Nadu', date: 'Oct 22, 2023', status: 'Pending', points: '—', image: '🏯' },
        { name: 'Shore Temple', location: 'Mahabalipuram, Tamil Nadu', date: 'Oct 19, 2023', status: 'Rejected', points: '0', image: '🧱' },
    ];

    return (
        <DashboardLayout role="Contributor">
            <div className="space-y-10">
                {/* Header */}
                <div className="flex justify-between items-center">
                    <div>
                        <h1 className="text-3xl font-black text-foreground mb-2">My Submissions</h1>
                        <p className="text-muted-foreground font-bold">Manage and track your temple contributions.</p>
                    </div>
                    <button className="bg-primary text-white font-black px-6 py-3 rounded-xl hover:scale-105 transition-all">
                        + New Submission
                    </button>
                </div>

                {/* Stats Summary */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-secondary-bg border border-border p-8 rounded-[2rem] flex items-center gap-6">
                        <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary border border-primary/20">
                            <span className="text-2xl font-black">🏅</span>
                        </div>
                        <div>
                            <p className="text-xs font-bold text-muted-foreground uppercase tracking-widest mb-1">Total Points</p>
                            <p className="text-3xl font-black text-foreground">1,250</p>
                        </div>
                    </div>
                    <div className="bg-secondary-bg border border-border p-8 rounded-[2rem] flex items-center gap-6">
                        <div className="w-14 h-14 rounded-2xl bg-green-500/10 flex items-center justify-center text-green-500 border border-success/20">
                            <span className="text-2xl font-black">✅</span>
                        </div>
                        <div>
                            <p className="text-xs font-bold text-muted-foreground uppercase tracking-widest mb-1">Success Rate</p>
                            <p className="text-3xl font-black text-foreground">82%</p>
                        </div>
                    </div>
                </div>

                {/* Submission Table */}
                <div className="bg-secondary-bg border border-border rounded-[2.5rem] overflow-hidden">
                    <div className="p-8 border-b border-border flex justify-between items-center">
                        <h2 className="text-xl font-black text-foreground">Submission History</h2>
                        <div className="flex gap-4">
                            <div className="relative">
                                <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" size={16} />
                                <input
                                    type="text"
                                    placeholder="Search my submissions..."
                                    className="bg-background border border-border rounded-xl py-2 px-10 text-sm focus:outline-none focus:border-primary/50 text-foreground placeholder:text-muted-foreground/30"
                                />
                            </div>
                            <button className="flex items-center gap-2 px-4 py-2 bg-background border border-border rounded-xl text-muted-foreground hover:text-foreground transition-all text-sm font-bold">
                                <Filter size={16} />
                                Filter
                            </button>
                        </div>
                    </div>

                    <div className="overflow-x-auto">
                        <table className="w-full text-left">
                            <thead>
                                <tr className="border-b border-border">
                                    <th className="px-8 py-5 text-[10px] font-black text-muted-foreground uppercase tracking-widest">Temple Name</th>
                                    <th className="px-8 py-5 text-[10px] font-black text-muted-foreground uppercase tracking-widest">Date Submitted</th>
                                    <th className="px-8 py-5 text-[10px] font-black text-muted-foreground uppercase tracking-widest">Status</th>
                                    <th className="px-8 py-5 text-[10px] font-black text-muted-foreground uppercase tracking-widest">Points</th>
                                    <th className="px-8 py-5 text-[10px] font-black text-muted-foreground uppercase tracking-widest text-right">Actions</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-border">
                                {submissions.map((sub, i) => (
                                    <tr key={i} className="hover:bg-accent/5 transition-colors group">
                                        <td className="px-8 py-6">
                                            <div className="flex items-center gap-4">
                                                <div className="w-10 h-10 rounded-lg bg-background border border-border flex items-center justify-center text-xl grayscale group-hover:grayscale-0 transition-all">
                                                    {sub.image}
                                                </div>
                                                <div>
                                                    <p className="font-black text-foreground leading-none mb-1">{sub.name}</p>
                                                    <p className="text-[10px] text-muted-foreground font-bold uppercase tracking-widest">{sub.location}</p>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="px-8 py-6 text-sm font-bold text-muted-foreground">{sub.date}</td>
                                        <td className="px-8 py-6">
                                            <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest ${sub.status === 'Approved' ? 'bg-green-500/10 text-green-500' :
                                                sub.status === 'Pending' ? 'bg-orange-500/10 text-orange-500' :
                                                    'bg-red-500/10 text-red-500'
                                                }`}>
                                                <div className={`w-1.5 h-1.5 rounded-full ${sub.status === 'Approved' ? 'bg-green-500' :
                                                    sub.status === 'Pending' ? 'bg-orange-500' :
                                                        'bg-red-500'
                                                    }`} />
                                                {sub.status}
                                            </div>
                                        </td>
                                        <td className="px-8 py-6">
                                            <span className={`text-sm font-black ${sub.status === 'Approved' ? 'text-green-500' : 'text-muted-foreground'}`}>
                                                {sub.points}
                                            </span>
                                        </td>
                                        <td className="px-8 py-6 text-right">
                                            <div className="flex justify-end gap-2">
                                                <button className="p-2 text-muted-foreground hover:text-foreground transition-colors">
                                                    <Eye size={18} />
                                                </button>
                                                <button className="p-2 text-muted-foreground hover:text-foreground transition-colors">
                                                    <Edit3 size={18} />
                                                </button>
                                                {sub.status === 'Rejected' && (
                                                    <button className="p-2 text-red-500/50 hover:text-red-500 transition-colors">
                                                        <Trash2 size={18} />
                                                    </button>
                                                )}
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                    <div className="p-8 border-t border-border flex justify-between items-center text-muted-foreground text-sm font-bold">
                        <p>Showing 1-3 of 128 submissions</p>
                        <div className="flex items-center gap-4">
                            <div className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest px-4 border-r border-border">
                                Show 10 <span className="text-muted-foreground/50">▼</span>
                            </div>
                            <div className="flex gap-1">
                                <button className="p-2 rounded-lg bg-background border border-border text-muted-foreground hover:text-foreground transition-all"><ChevronLeft size={16} /></button>
                                <button className="w-10 h-10 rounded-lg bg-primary text-white font-black">1</button>
                                <button className="w-10 h-10 rounded-lg bg-background border border-border text-muted-foreground hover:text-foreground transition-all">2</button>
                                <button className="w-10 h-10 rounded-lg bg-background border border-border text-muted-foreground hover:text-foreground transition-all">3</button>
                                <button className="p-2 rounded-lg bg-background border border-border text-muted-foreground hover:text-foreground transition-all"><ChevronRight size={16} /></button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Policy Note */}
                <div className="bg-blue-500/5 border border-blue-500/20 p-8 rounded-[2rem] flex gap-6">
                    <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center text-blue-500 flex-shrink-0">
                        <Info size={24} />
                    </div>
                    <div>
                        <h4 className="text-lg font-black text-white mb-1">Submission Review Policy</h4>
                        <p className="text-gray-500 font-bold leading-relaxed">
                            All submissions are reviewed by the temple administration within 3-5 business days. Once approved, points are automatically credited to your account and the temple profile goes live on the public portal.
                        </p>
                    </div>
                </div>
            </div>
        </DashboardLayout>
    );
}
