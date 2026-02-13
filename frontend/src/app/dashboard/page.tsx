'use client';

import React from 'react';
import DashboardLayout from '@/components/templates/DashboardLayout';
import Badge from '@/components/atoms/Badge';
import {
    Send,
    CheckCircle2,
    Clock,
    Trophy,
    ArrowUpRight,
    MoreHorizontal,
    Filter,
    Edit3,
    RotateCcw,
    Rocket,
    PlusCircle
} from 'lucide-react';

export default function ContributorDashboard() {
    const stats = [
        { label: 'Total Submissions', value: '128', icon: Send, color: 'text-blue-500', trend: '+ 12%', trendColor: 'text-green-500' },
        { label: 'Approved', value: '94', icon: CheckCircle2, color: 'text-green-500', trend: '+ 5%', trendColor: 'text-green-500' },
        { label: 'Pending Review', value: '32', icon: Clock, color: 'text-orange-500', status: 'Stable' },
        { label: 'Points Earned', value: '1,250', icon: Trophy, color: 'text-yellow-500', badge: 'Pro' },
    ];

    const recentActivity = [
        {
            name: 'Brihadisvara Temple',
            date: 'Oct 24, 2023',
            status: 'Approved',
            seo: 92,
            image: '🏛️'
        },
        {
            name: 'Meenakshi Amman',
            date: 'Oct 22, 2023',
            status: 'Pending',
            seo: 65,
            image: '🏯'
        },
        {
            name: 'Shore Temple',
            date: 'Oct 19, 2023',
            status: 'Rejected',
            seo: 35,
            image: '🧱'
        },
    ];

    return (
        <DashboardLayout role="Contributor">
            <div className="space-y-10">
                {/* Header Section */}
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
                    <div>
                        <h1 className="text-4xl font-black text-foreground tracking-tight leading-none mb-3">Contributor Dashboard</h1>
                        <p className="text-muted-foreground font-bold">Track your impact and manage your submitted temple data.</p>
                    </div>
                    <button className="flex items-center gap-3 bg-gradient-to-r from-primary to-[#dc2626] text-white font-black px-8 py-4 rounded-2xl shadow-2xl shadow-primary/20 hover:scale-[1.02] active:scale-95 transition-all">
                        <PlusCircle size={24} />
                        Submit New Temple
                    </button>
                </div>

                {/* Stats Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {stats.map((stat, i) => {
                        const Icon = stat.icon;
                        return (
                            <div key={i} className="bg-secondary-bg border border-border p-6 rounded-[2rem] relative overflow-hidden group hover:border-primary/20 transition-all">
                                <div className="flex justify-between items-start mb-4">
                                    <div className={`p-3 rounded-xl bg-background border border-border ${stat.color}`}>
                                        <Icon size={24} />
                                    </div>
                                    {stat.trend && (
                                        <div className={`flex items-center gap-1 text-[10px] font-black ${stat.trendColor} bg-success/10 px-2 py-1 rounded-full uppercase tracking-widest`}>
                                            <ArrowUpRight size={12} />
                                            {stat.trend}
                                        </div>
                                    )}
                                    {stat.status && (
                                        <div className="text-[10px] font-black text-muted-foreground bg-background border border-border px-2 py-1 rounded-full uppercase tracking-widest">
                                            {stat.status}
                                        </div>
                                    )}
                                    {stat.badge && (
                                        <div className="text-[10px] font-black text-primary bg-primary/10 px-2 py-1 rounded-full uppercase tracking-widest">
                                            {stat.badge}
                                        </div>
                                    )}
                                </div>
                                <p className="text-xs font-bold text-muted-foreground uppercase tracking-widest mb-1">{stat.label}</p>
                                <p className="text-3xl font-black text-foreground">{stat.value}</p>
                            </div>
                        );
                    })}
                </div>

                {/* Activity List */}
                <div className="bg-secondary-bg border border-border rounded-[2.5rem] overflow-hidden">
                    <div className="p-8 border-b border-border flex justify-between items-center">
                        <h2 className="text-xl font-black text-foreground">Recent Submission Activity</h2>
                        <div className="flex gap-4">
                            <button className="p-2 text-muted-foreground hover:text-foreground transition-colors">
                                <Filter size={20} />
                            </button>
                            <button className="p-2 text-muted-foreground hover:text-foreground transition-colors">
                                <MoreHorizontal size={20} />
                            </button>
                        </div>
                    </div>
                    <div className="overflow-x-auto">
                        <table className="w-full text-left">
                            <thead>
                                <tr className="border-b border-border">
                                    <th className="px-8 py-5 text-[10px] font-black text-muted-foreground uppercase tracking-widest">Temple Name</th>
                                    <th className="px-8 py-5 text-[10px] font-black text-muted-foreground uppercase tracking-widest">Submitted Date</th>
                                    <th className="px-8 py-5 text-[10px] font-black text-muted-foreground uppercase tracking-widest text-center">SEO Score</th>
                                    <th className="px-8 py-5 text-[10px] font-black text-muted-foreground uppercase tracking-widest">Status</th>
                                    <th className="px-8 py-5 text-[10px] font-black text-muted-foreground uppercase tracking-widest text-right">Actions</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-border">
                                {recentActivity.map((activity, i) => (
                                    <tr key={i} className="hover:bg-accent/5 transition-colors group">
                                        <td className="px-8 py-6">
                                            <div className="flex items-center gap-4">
                                                <div className="w-10 h-10 rounded-lg bg-background border border-border flex items-center justify-center text-xl grayscale group-hover:grayscale-0 transition-all">
                                                    {activity.image}
                                                </div>
                                                <span className="font-black text-foreground">{activity.name}</span>
                                            </div>
                                        </td>
                                        <td className="px-8 py-6 text-sm font-bold text-muted-foreground">{activity.date}</td>
                                        <td className="px-8 py-6">
                                            <div className="flex items-center gap-3 justify-center">
                                                <div className="w-24 h-1.5 bg-background border border-border rounded-full overflow-hidden">
                                                    <div
                                                        className={`h-full rounded-full transition-all duration-1000 ${activity.seo > 80 ? 'bg-green-500' : activity.seo > 50 ? 'bg-orange-500' : 'bg-red-500'
                                                            }`}
                                                        style={{ width: `${activity.seo}%` }}
                                                    />
                                                </div>
                                                <span className={`text-[10px] font-black ${activity.seo > 80 ? 'text-green-500' : activity.seo > 50 ? 'text-orange-500' : 'text-red-500'
                                                    }`}>
                                                    {activity.seo}%
                                                </span>
                                            </div>
                                        </td>
                                        <td className="px-8 py-6">
                                            <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest ${activity.status === 'Approved' ? 'bg-green-500/10 text-green-500' :
                                                activity.status === 'Pending' ? 'bg-orange-500/10 text-orange-500' :
                                                    'bg-red-500/10 text-red-500'
                                                }`}>
                                                <div className={`w-1.5 h-1.5 rounded-full ${activity.status === 'Approved' ? 'bg-green-500' :
                                                    activity.status === 'Pending' ? 'bg-orange-500' :
                                                        'bg-red-500'
                                                    }`} />
                                                {activity.status}
                                            </div>
                                        </td>
                                        <td className="px-8 py-6 text-right">
                                            <button className="p-2 text-muted-foreground hover:text-foreground transition-colors">
                                                {activity.status === 'Rejected' ? <RotateCcw size={18} /> : <Edit3 size={18} />}
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* Bottom Row */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {/* SEO Banner */}
                    <div className="bg-gradient-to-br from-[#ec7f13] to-[#dc2626] p-10 rounded-[2.5rem] relative overflow-hidden group">
                        <div className="relative z-10 max-w-sm">
                            <h3 className="text-3xl font-black text-white mb-4">Boost your SEO Score</h3>
                            <p className="text-white/80 font-bold mb-8">Complete submissions with high-resolution images and verified historical descriptions to earn more points.</p>
                            <button className="bg-white text-primary font-black px-6 py-3 rounded-xl hover:scale-105 transition-all shadow-xl shadow-black/20">
                                View Guidelines
                            </button>
                        </div>
                        <Rocket className="absolute right-[-20px] bottom-[-20px] w-64 h-64 text-white/10 -rotate-12 group-hover:rotate-0 transition-transform duration-700" />
                    </div>

                    {/* Progress Card */}
                    <div className="bg-secondary-bg border border-border p-10 rounded-[2.5rem] flex items-center gap-10">
                        <div className="relative w-32 h-32 flex-shrink-0">
                            <svg className="w-full h-full transform -rotate-90">
                                <circle
                                    cx="64"
                                    cy="64"
                                    r="58"
                                    stroke="currentColor"
                                    strokeWidth="12"
                                    fill="transparent"
                                    className="text-muted-foreground/10"
                                />
                                <circle
                                    cx="64"
                                    cy="64"
                                    r="58"
                                    stroke="currentColor"
                                    strokeWidth="12"
                                    fill="transparent"
                                    strokeDasharray={364.4}
                                    strokeDashoffset={364.4 * 0.3}
                                    className="text-primary"
                                />
                            </svg>
                            <div className="absolute inset-0 flex items-center justify-center">
                                <span className="text-2xl font-black text-foreground">70%</span>
                            </div>
                        </div>
                        <div>
                            <h3 className="text-2xl font-black text-foreground mb-2">Tier 4 Completion</h3>
                            <p className="text-muted-foreground font-bold text-sm mb-4 leading-relaxed">You need 250 more points to reach Master Contributor status and unlock direct publishing rights.</p>
                            <div className="flex items-center gap-2 text-[10px] font-black text-muted-foreground uppercase tracking-widest">
                                <span className="text-primary text-lg">✨</span>
                                Badge Progress
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </DashboardLayout>
    );
}
