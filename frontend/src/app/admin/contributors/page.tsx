'use client';

import React from 'react';
import DashboardLayout from '@/components/templates/DashboardLayout';
import {
    Users,
    Zap,
    Search,
    ChevronDown,
    Filter,
    MoreVertical,
    ChevronLeft,
    ChevronRight,
    Plus,
    Bell
} from 'lucide-react';
import Link from 'next/link';

const contributors = [
    {
        id: '1',
        name: 'Rajesh Kumar',
        email: 'rajesh.k@example.com',
        status: 'Trusted',
        points: '12,450',
        approved: 142,
        joinDate: 'Oct 12, 2022',
        avatar: 'RK'
    },
    {
        id: '2',
        name: 'Anjali Sharma',
        email: 'anjali.s@example.com',
        status: 'Active',
        points: '3,120',
        approved: 28,
        joinDate: 'Feb 05, 2023',
        avatar: 'AS'
    },
    {
        id: '3',
        name: 'Priya Sundaram',
        email: 'priya.s@example.com',
        status: 'Pending Review',
        points: '150',
        approved: 0,
        joinDate: 'Just now',
        avatar: 'PS'
    },
    {
        id: '4',
        name: 'Senthil Prabhu',
        email: 'senthil@temple.tn',
        status: 'Trusted',
        points: '8,940',
        approved: 112,
        joinDate: 'Aug 20, 2022',
        avatar: 'SP'
    }
];

export default function ManageContributors() {
    return (
        <DashboardLayout role="Admin">
            <div className="space-y-8">
                {/* Header Section */}
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                    <div>
                        <h1 className="text-3xl font-black text-foreground tracking-tight">Manage Contributors</h1>
                        <p className="text-muted-foreground font-bold mt-1">Oversee and verify community members.</p>
                    </div>
                    <div className="flex items-center gap-4">
                        <Link href="/admin/contributors/create">
                            <button className="flex items-center gap-2 bg-primary hover:bg-primary-hover text-white font-black px-6 py-3 rounded-xl transition-all shadow-lg shadow-primary/20">
                                <Plus size={20} />
                                Create Contributor
                            </button>
                        </Link>
                        <button className="p-3 bg-secondary-bg border border-border rounded-xl text-muted-foreground hover:text-white transition-colors">
                            <Bell size={20} />
                        </button>
                    </div>
                </div>

                {/* Stats Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="bg-secondary-bg border border-border p-8 rounded-[2rem] relative overflow-hidden group shadow-sm">
                        <div className="flex justify-between items-start mb-4">
                            <div>
                                <p className="text-xs font-black text-muted-foreground uppercase tracking-widest mb-1">Total Contributors</p>
                                <p className="text-4xl font-black text-foreground">1,284</p>
                            </div>
                            <div className="p-3 bg-primary/10 rounded-xl text-primary">
                                <Users size={24} />
                            </div>
                        </div>
                        <p className="text-xs font-bold text-green-500 flex items-center gap-1">
                            <Zap size={12} fill="currentColor" /> +12% from last month
                        </p>
                    </div>

                    <div className="bg-secondary-bg border border-border p-8 rounded-[2rem] relative overflow-hidden group">
                        <div className="flex justify-between items-start mb-4">
                            <div>
                                <p className="text-xs font-black text-muted-foreground uppercase tracking-widest mb-1">Active Today</p>
                                <p className="text-4xl font-black text-foreground">42</p>
                            </div>
                            <div className="p-3 bg-green-500/10 rounded-xl text-green-500">
                                <Zap size={24} />
                            </div>
                        </div>
                        <p className="text-xs font-bold text-gray-500">Online in the last 24h</p>
                    </div>

                    <div className="bg-secondary-bg border border-border p-8 rounded-[2rem] relative overflow-hidden group">
                        <div className="flex justify-between items-start mb-4">
                            <div>
                                <p className="text-xs font-black text-muted-foreground uppercase tracking-widest mb-1">New Requests</p>
                                <p className="text-4xl font-black text-foreground">18</p>
                            </div>
                            <div className="p-3 bg-yellow-500/10 rounded-xl text-yellow-500">
                                <Users size={24} />
                            </div>
                        </div>
                        <button className="text-xs font-bold text-primary hover:underline">View verification queue</button>
                    </div>
                </div>

                {/* Filters Section */}
                <div className="bg-secondary-bg border border-border p-4 rounded-3xl flex flex-col lg:flex-row items-center gap-4">
                    <div className="relative flex-1 w-full">
                        <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" size={18} />
                        <input
                            type="text"
                            placeholder="Search by name, email or ID..."
                            className="w-full bg-background border border-border rounded-2xl py-3 pl-12 pr-4 text-sm focus:outline-none focus:border-primary/50 transition-all text-foreground placeholder:text-muted-foreground/50"
                        />
                    </div>
                    <div className="flex flex-wrap items-center gap-3 w-full lg:w-auto">
                        <button className="flex items-center gap-2 bg-background border border-border px-4 py-3 rounded-2xl text-sm font-bold text-foreground hover:border-primary transition-all">
                            All Districts <ChevronDown size={16} />
                        </button>
                        <button className="flex items-center gap-2 bg-background border border-border px-4 py-3 rounded-2xl text-sm font-bold text-foreground hover:border-primary transition-all">
                            All Status <ChevronDown size={16} />
                        </button>
                        <button className="flex items-center gap-2 bg-background border border-border px-4 py-3 rounded-2xl text-sm font-bold text-foreground hover:border-primary transition-all">
                            <Filter size={16} /> More Filters
                        </button>
                    </div>
                </div>

                {/* Table Section */}
                <div className="bg-secondary-bg border border-border rounded-[2.5rem] overflow-hidden">
                    <div className="overflow-x-auto">
                        <table className="w-full text-left border-collapse">
                            <thead>
                                <tr className="border-b border-border bg-accent/5">
                                    <th className="px-8 py-6 text-[10px] font-black text-muted-foreground uppercase tracking-widest">Contributor</th>
                                    <th className="px-8 py-6 text-[10px] font-black text-muted-foreground uppercase tracking-widest">Status</th>
                                    <th className="px-8 py-6 text-[10px] font-black text-muted-foreground uppercase tracking-widest">Points</th>
                                    <th className="px-8 py-6 text-[10px] font-black text-muted-foreground uppercase tracking-widest">Approved</th>
                                    <th className="px-8 py-6 text-[10px] font-black text-muted-foreground uppercase tracking-widest">Join Date</th>
                                    <th className="px-8 py-6 text-[10px] font-black text-muted-foreground uppercase tracking-widest text-right">Actions</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-border">
                                {contributors.map((user) => (
                                    <tr key={user.id} className="hover:bg-accent/5 transition-colors group">
                                        <td className="px-8 py-6">
                                            <div className="flex items-center gap-4">
                                                <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-primary/20 to-orange-600/20 flex items-center justify-center text-primary font-black text-sm border border-primary/10">
                                                    {user.avatar}
                                                </div>
                                                <div>
                                                    <p className="font-black text-foreground leading-none mb-1">{user.name}</p>
                                                    <p className="text-xs font-bold text-muted-foreground">{user.email}</p>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="px-8 py-6">
                                            <span className={`px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest ${user.status === 'Trusted' ? 'bg-blue-500/10 text-blue-500' :
                                                user.status === 'Active' ? 'bg-green-500/10 text-green-500' :
                                                    'bg-yellow-500/10 text-yellow-500'
                                                }`}>
                                                {user.status}
                                            </span>
                                        </td>
                                        <td className="px-8 py-6 font-bold text-foreground">{user.points}</td>
                                        <td className="px-8 py-6 font-bold text-foreground">{user.approved}</td>
                                        <td className="px-8 py-6 text-sm font-bold text-muted-foreground">{user.joinDate}</td>
                                        <td className="px-8 py-6 text-right">
                                            <button className="p-2 text-gray-500 hover:text-white transition-colors">
                                                <MoreVertical size={20} />
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                    {/* Pagination */}
                    <div className="px-8 py-6 border-t border-white/5 flex flex-col sm:row justify-between items-center gap-4">
                        <p className="text-xs font-bold text-gray-500">Showing 1 to 10 of 1,284 contributors</p>
                        <div className="flex items-center gap-2">
                            <button className="p-2 bg-white/5 border border-white/10 rounded-lg text-gray-500 hover:text-white transition-all disabled:opacity-50" disabled>
                                <ChevronLeft size={18} />
                            </button>
                            <button className="w-10 h-10 flex items-center justify-center rounded-lg bg-primary text-white font-black text-sm">1</button>
                            <button className="w-10 h-10 flex items-center justify-center rounded-lg bg-white/5 border border-white/10 text-gray-500 hover:text-white font-black text-sm transition-all">2</button>
                            <button className="w-10 h-10 flex items-center justify-center rounded-lg bg-white/5 border border-white/10 text-gray-500 hover:text-white font-black text-sm transition-all">3</button>
                            <button className="p-2 bg-white/5 border border-white/10 rounded-lg text-gray-500 hover:text-white transition-all">
                                <ChevronRight size={18} />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </DashboardLayout>
    );
}
