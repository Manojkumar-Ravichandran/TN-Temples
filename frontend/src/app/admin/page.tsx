'use client';

import React from 'react';
import DashboardLayout from '@/components/templates/DashboardLayout';
import {
    Users,
    Database,
    AlertCircle,
    ArrowUpRight,
    Clock,
    Plus,
    Activity,
    ShieldCheck,
    ChevronRight
} from 'lucide-react';

export default function AdminDashboard() {
    const stats = [
        { label: 'Pending Approvals', value: '12', icon: AlertCircle, color: 'text-red-500', trend: 'High Priority', trendColor: 'text-red-500' },
        { label: 'Total Temples', value: '42,103', icon: Database, color: 'text-primary', trend: '+ 24 this week', trendColor: 'text-green-500' },
        { label: 'Active Contributors', value: '156', icon: Users, color: 'text-blue-500', trend: 'Stable', trendColor: 'text-gray-500' },
    ];

    const quickActions = [
        { name: 'Add New Temple', icon: Plus, color: 'bg-primary/10 text-primary' },
        { name: 'System Logs', icon: Activity, color: 'bg-blue-500/10 text-blue-500' },
        { name: 'Security Audit', icon: ShieldCheck, color: 'bg-green-500/10 text-green-500' },
        { name: 'API Status', icon: Database, color: 'bg-orange-500/10 text-orange-500' },
    ];

    return (
        <DashboardLayout role="Admin">
            <div className="space-y-10">
                {/* Header */}
                <div className="flex justify-between items-center">
                    <div>
                        <h1 className="text-4xl font-black text-foreground tracking-tight leading-none mb-3">Admin Command Center</h1>
                        <p className="text-muted-foreground font-bold">Monitor system health and oversee contributor activity.</p>
                    </div>
                    <button className="flex items-center gap-3 bg-secondary-bg border border-border text-foreground font-black px-8 py-4 rounded-2xl hover:bg-accent/5 transition-all">
                        <Activity size={20} className="text-primary" />
                        View Live Logs
                    </button>
                </div>

                {/* Stats Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {stats.map((stat, i) => {
                        const Icon = stat.icon;
                        return (
                            <div key={i} className="bg-secondary-bg border border-border p-8 rounded-[2.5rem] relative overflow-hidden group hover:border-primary/30 transition-all">
                                <div className="flex justify-between items-start mb-6">
                                    <div className={`p-4 rounded-2xl bg-primary/10 ${stat.color}`}>
                                        <Icon size={32} />
                                    </div>
                                    <div className={`text-[10px] font-black ${stat.trendColor} uppercase tracking-widest bg-accent/5 px-3 py-1 rounded-full`}>
                                        {stat.trend}
                                    </div>
                                </div>
                                <p className="text-xs font-bold text-muted-foreground uppercase tracking-widest mb-1">{stat.label}</p>
                                <p className="text-4xl font-black text-foreground">{stat.value}</p>
                            </div>
                        );
                    })}
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
                    {/* Recent Alerts */}
                    <div className="lg:col-span-8 bg-secondary-bg border border-border rounded-[3.5rem] overflow-hidden">
                        <div className="p-10 border-b border-border flex justify-between items-center">
                            <h2 className="text-2xl font-black text-foreground">Critical Review Queue</h2>
                            <button className="text-primary font-black text-sm hover:underline flex items-center gap-2">
                                View Full Queue <ChevronRight size={18} />
                            </button>
                        </div>
                        <div className="divide-y divide-border">
                            {[1, 2, 3].map((idx) => (
                                <div key={idx} className="p-10 flex items-center justify-between hover:bg-accent/5 transition-all group">
                                    <div className="flex items-center gap-6">
                                        <div className="w-16 h-16 rounded-2xl bg-background border border-border flex items-center justify-center text-4xl shadow-xl transition-all">
                                            🏛️
                                        </div>
                                        <div>
                                            <h4 className="text-lg font-black text-foreground mb-1">Temple Submission {idx === 1 ? 'Srirangam' : 'Kailasanathar'}</h4>
                                            <p className="text-sm font-bold text-muted-foreground flex items-center gap-2">
                                                <Users size={14} /> Contributor: {idx === 1 ? 'Arun Raj' : 'Meena S'} • <Clock size={14} /> 1{idx} mins ago
                                            </p>
                                        </div>
                                    </div>
                                    <div className="flex gap-4 opacity-0 group-hover:opacity-100 transition-all">
                                        <button className="px-6 py-3 bg-background border border-border rounded-xl text-foreground font-bold text-sm hover:bg-secondary-bg">Review</button>
                                        <button className="px-6 py-3 bg-primary text-white rounded-xl font-bold text-sm hover:scale-105 transition-transform shadow-lg shadow-primary/20">Approve</button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Quick Management */}
                    <div className="lg:col-span-4 space-y-8">
                        <div className="bg-secondary-bg border border-border rounded-[3rem] p-10">
                            <h2 className="text-xl font-black text-foreground mb-8">Quick Management</h2>
                            <div className="grid grid-cols-2 gap-4">
                                {quickActions.map((action, i) => {
                                    const Icon = action.icon;
                                    return (
                                        <button key={i} className="flex flex-col items-center justify-center p-8 bg-background border border-border rounded-3xl hover:border-primary/50 transition-all group shadow-sm">
                                            <div className={`p-4 rounded-xl mb-4 transition-transform group-hover:scale-110 ${action.color}`}>
                                                <Icon size={24} />
                                            </div>
                                            <span className="text-xs font-black text-foreground uppercase tracking-widest text-center">{action.name}</span>
                                        </button>
                                    );
                                })}
                            </div>
                        </div>

                        {/* System Health */}
                        <div className="bg-gradient-to-br from-primary/5 to-orange-600/5 border border-primary/20 p-10 rounded-[3rem] relative overflow-hidden group">
                            <div className="relative z-10">
                                <h3 className="text-lg font-black text-foreground mb-2 flex items-center gap-2">
                                    <Activity size={20} className="text-primary" />
                                    System Status
                                </h3>
                                <p className="text-3xl font-black text-foreground mb-1">All Systems OK</p>
                                <p className="text-xs font-bold text-muted-foreground uppercase tracking-widest leading-none">Last sync: 2 mins ago</p>
                            </div>
                            <Activity className="absolute right-[-20px] bottom-[-20px] w-48 h-48 text-primary opacity-5 group-hover:opacity-10 transition-opacity" />
                        </div>
                    </div>
                </div>
            </div>
        </DashboardLayout>
    );
}
