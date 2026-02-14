'use client';

import React from 'react';
import DashboardLayout from '@/components/templates/DashboardLayout';
import {
    Zap,
    Search,
    Calendar,
    ChevronDown,
    Download,
    History,
    ShieldAlert,
    Activity,
    ChevronLeft,
    ChevronRight,
    Filter
} from 'lucide-react';

const logs = [
    {
        id: '1',
        timestamp: '2023-10-27 14:22:01',
        user: 'Arul Kumar',
        initials: 'AK',
        action: 'Approved edit request: Meenakshi Amman Temple',
        module: 'TEMPLES',
        ip: '192.168.1.45',
        status: 'INFO',
        statusColor: 'text-green-500'
    },
    {
        id: '2',
        timestamp: '2023-10-27 14:18:42',
        user: 'System',
        initials: 'S',
        action: 'Multiple failed login attempts detected',
        module: 'AUTH',
        ip: '104.28.14.92',
        status: 'ERROR',
        statusColor: 'text-red-500'
    },
    {
        id: '3',
        timestamp: '2023-10-27 14:15:10',
        user: 'Priya M.',
        initials: 'PM',
        action: 'Deleted festival image attachment',
        module: 'FESTIVALS',
        ip: '172.16.254.1',
        status: 'WARNING',
        statusColor: 'text-yellow-500'
    },
    {
        id: '4',
        timestamp: '2023-10-27 13:55:22',
        user: 'Arul Kumar',
        initials: 'AK',
        action: 'Updated system SMTP settings',
        module: 'SETTINGS',
        ip: '192.168.1.45',
        status: 'INFO',
        statusColor: 'text-green-500'
    },
    {
        id: '5',
        timestamp: '2023-10-27 13:40:05',
        user: 'John Smith',
        initials: 'JS',
        action: 'Added new user: Venkatesh R.',
        module: 'USERS',
        ip: '110.44.12.5',
        status: 'INFO',
        statusColor: 'text-green-500'
    }
];

export default function SystemLogs() {
    return (
        <DashboardLayout role="Admin">
            <div className="space-y-8">
                {/* Header Section */}
                <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6">
                    <div>
                        <h1 className="text-4xl font-black text-foreground tracking-tighter mb-2">System Activity Logs</h1>
                        <p className="text-muted-foreground font-bold">Monitor real-time administrative actions and security events.</p>
                    </div>
                    <div className="flex items-center gap-4 w-full lg:w-auto">
                        <div className="bg-secondary-bg border border-border px-4 py-2 rounded-xl flex items-center gap-4">
                            <span className="text-[10px] font-black uppercase tracking-widest text-gray-500">Live Stream</span>
                            <div className="w-10 h-5 bg-primary/20 rounded-full relative cursor-pointer">
                                <div className="absolute top-1 right-1 w-3 h-3 bg-primary rounded-full shadow-lg" />
                            </div>
                        </div>
                        <button className="flex items-center gap-2 bg-secondary-bg border border-border hover:bg-accent/5 text-foreground font-bold px-6 py-3 rounded-xl transition-all shadow-sm">
                            <Download size={18} />
                            Export CSV
                        </button>
                    </div>
                </div>

                {/* Stats Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="bg-secondary-bg border border-border p-8 rounded-[2.5rem] relative overflow-hidden group shadow-sm">
                        <div className="flex justify-between items-start mb-4">
                            <div>
                                <p className="text-xs font-black text-muted-foreground uppercase tracking-widest mb-1">Total Actions Today</p>
                                <p className="text-3xl font-black text-foreground">1,284 <span className="text-sm font-bold text-green-500 ml-2">+15%</span></p>
                            </div>
                            <div className="p-3 bg-primary/10 rounded-xl text-primary">
                                <Zap size={24} />
                            </div>
                        </div>
                        <div className="h-1 w-full bg-accent/10 rounded-full overflow-hidden">
                            <div className="h-full bg-primary w-[65%]" />
                        </div>
                    </div>

                    <div className="bg-secondary-bg border border-border p-8 rounded-[2.5rem] relative overflow-hidden group shadow-sm">
                        <div className="flex justify-between items-start mb-4">
                            <div>
                                <p className="text-xs font-black text-muted-foreground uppercase tracking-widest mb-1">Failed Logins</p>
                                <p className="text-3xl font-black text-foreground">12 <span className="text-sm font-bold text-red-500 ml-2">+2%</span></p>
                            </div>
                            <div className="p-3 bg-red-500/10 rounded-xl text-red-500">
                                <ShieldAlert size={24} />
                            </div>
                        </div>
                        <div className="h-1 w-full bg-accent/10 rounded-full overflow-hidden">
                            <div className="h-full bg-red-500 w-[12%]" />
                        </div>
                    </div>

                    <div className="bg-secondary-bg border border-border p-8 rounded-[2.5rem] relative overflow-hidden group shadow-sm">
                        <div className="flex justify-between items-start mb-4">
                            <div>
                                <p className="text-xs font-black text-muted-foreground uppercase tracking-widest mb-1">Active Sessions</p>
                                <p className="text-3xl font-black text-foreground">5 <span className="text-sm font-bold text-muted-foreground ml-2">Stable</span></p>
                            </div>
                            <div className="p-3 bg-blue-500/10 rounded-xl text-blue-500">
                                <Activity size={24} />
                            </div>
                        </div>
                        <div className="h-1 w-full bg-accent/10 rounded-full overflow-hidden">
                            <div className="h-full bg-blue-500 w-[40%]" />
                        </div>
                    </div>
                </div>

                {/* Filters Section */}
                <div className="bg-secondary-bg border border-border p-4 rounded-[2rem] space-y-4">
                    <div className="flex flex-col lg:flex-row gap-4">
                        <div className="relative flex-1">
                            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" size={18} />
                            <input
                                type="text"
                                placeholder="Search by action, user or IP..."
                                className="w-full bg-background border border-border rounded-2xl py-3 pl-12 pr-4 text-sm focus:outline-none focus:border-primary/50 transition-all text-foreground placeholder:text-muted-foreground/50"
                            />
                        </div>
                        <div className="flex flex-wrap items-center gap-3">
                            <button className="flex items-center gap-3 bg-background border border-border px-6 py-3 rounded-2xl text-xs font-black text-foreground uppercase tracking-widest hover:border-primary transition-all shadow-sm">
                                <Calendar size={16} className="text-muted-foreground" />
                                Oct 27, 2023 - Today
                            </button>
                            <button className="flex items-center gap-3 bg-background border border-border px-6 py-3 rounded-2xl text-xs font-black text-foreground uppercase tracking-widest hover:border-primary transition-all shadow-sm">
                                Severity: <span className="text-primary">All Severities</span>
                                <ChevronDown size={14} />
                            </button>
                        </div>
                    </div>
                    <div className="pt-4 border-t border-border flex items-center gap-4">
                        <span className="text-[10px] font-black uppercase tracking-widest text-muted-foreground">Quick Filters:</span>
                        <div className="flex items-center gap-2">
                            <button className="px-4 py-2 bg-primary/10 text-primary border border-primary/20 rounded-full text-[10px] font-black uppercase tracking-widest shadow-sm">All Roles</button>
                            <button className="px-4 py-2 bg-background text-muted-foreground border border-border rounded-full text-[10px] font-black uppercase tracking-widest hover:text-foreground transition-colors shadow-sm">Admin Only</button>
                            <button className="px-4 py-2 bg-background text-muted-foreground border border-border rounded-full text-[10px] font-black uppercase tracking-widest hover:text-foreground transition-colors shadow-sm">Auth Failures</button>
                        </div>
                        <button className="ml-auto text-muted-foreground hover:text-primary transition-colors p-2">
                            <Filter size={18} />
                        </button>
                    </div>
                </div>

                {/* Table Section */}
                <div className="bg-secondary-bg border border-border rounded-[3rem] overflow-hidden shadow-sm">
                    <div className="overflow-x-auto">
                        <table className="w-full text-left border-collapse">
                            <thead>
                                <tr className="border-b border-border bg-accent/5">
                                    <th className="px-8 py-6 text-[10px] font-black text-muted-foreground uppercase tracking-widest">Timestamp</th>
                                    <th className="px-8 py-6 text-[10px] font-black text-muted-foreground uppercase tracking-widest">User</th>
                                    <th className="px-8 py-6 text-[10px] font-black text-muted-foreground uppercase tracking-widest">Action</th>
                                    <th className="px-8 py-6 text-[10px] font-black text-muted-foreground uppercase tracking-widest">Module</th>
                                    <th className="px-8 py-6 text-[10px] font-black text-muted-foreground uppercase tracking-widest">IP Address</th>
                                    <th className="px-8 py-6 text-[10px] font-black text-muted-foreground uppercase tracking-widest text-right">Status</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-border">
                                {logs.map((log) => (
                                    <tr key={log.id} className="hover:bg-accent/5 transition-colors group">
                                        <td className="px-8 py-6 font-mono text-xs text-muted-foreground">{log.timestamp}</td>
                                        <td className="px-8 py-6">
                                            <div className="flex items-center gap-3">
                                                <div className="w-8 h-8 rounded-lg bg-background border border-border flex items-center justify-center text-[10px] font-black text-primary transition-colors">
                                                    {log.initials}
                                                </div>
                                                <span className="text-sm font-bold text-foreground tracking-tight">{log.user}</span>
                                            </div>
                                        </td>
                                        <td className="px-8 py-6">
                                            <p className="text-sm font-medium text-foreground/80">
                                                {log.action.split(':').map((part, i) => (
                                                    <span key={i} className={i === 1 ? 'text-primary' : ''}>
                                                        {part}{i === 0 && log.action.includes(':') ? ':' : ''}
                                                    </span>
                                                ))}
                                            </p>
                                        </td>
                                        <td className="px-8 py-6">
                                            <span className="px-3 py-1 bg-background border border-border rounded-lg text-[10px] font-black text-muted-foreground uppercase tracking-[0.2em]">
                                                {log.module}
                                            </span>
                                        </td>
                                        <td className="px-8 py-6 font-mono text-xs text-muted-foreground">{log.ip}</td>
                                        <td className="px-8 py-6 text-right">
                                            <div className="flex justify-end items-center gap-2">
                                                <div className={`w-2 h-2 rounded-full ${log.status === 'ERROR' ? 'bg-red-500' : log.status === 'WARNING' ? 'bg-yellow-500' : 'bg-green-500'}`} />
                                                <span className={`text-[10px] font-black uppercase tracking-widest ${log.statusColor}`}>
                                                    {log.status}
                                                </span>
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                    {/* Pagination */}
                    <div className="px-8 py-8 border-t border-border flex flex-col md:row justify-between items-center gap-6 bg-accent/5">
                        <p className="text-xs font-bold text-muted-foreground uppercase tracking-widest">Showing 1 to 20 of 1,284 logs</p>
                        <div className="flex items-center gap-4">
                            <button className="flex items-center gap-2 px-6 py-3 bg-background border border-border rounded-xl text-xs font-black text-muted-foreground uppercase tracking-widest hover:text-foreground transition-all shadow-sm">
                                <ChevronLeft size={16} /> Previous
                            </button>
                            <div className="flex items-center gap-2">
                                <button className="w-10 h-10 flex items-center justify-center rounded-xl bg-primary text-white font-black text-sm shadow-lg shadow-primary/20">1</button>
                                <button className="w-10 h-10 flex items-center justify-center rounded-xl bg-background border border-border text-muted-foreground hover:text-foreground font-black text-sm transition-all shadow-sm">2</button>
                                <button className="w-10 h-10 flex items-center justify-center rounded-xl bg-background border border-border text-muted-foreground hover:text-foreground font-black text-sm transition-all shadow-sm">3</button>
                                <span className="text-muted-foreground font-black">...</span>
                                <button className="w-10 h-10 flex items-center justify-center rounded-xl bg-background border border-border text-muted-foreground hover:text-foreground font-black text-sm transition-all shadow-sm">64</button>
                            </div>
                            <button className="flex items-center gap-2 px-6 py-3 bg-background border border-border rounded-xl text-xs font-black text-muted-foreground uppercase tracking-widest hover:text-foreground transition-all shadow-sm">
                                Next <ChevronRight size={16} />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </DashboardLayout>
    );
}
