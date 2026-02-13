'use client';

import React from 'react';
import DashboardLayout from '@/components/templates/DashboardLayout';
import {
    Search,
    Filter,
    CheckCircle2,
    XCircle,
    MessageSquare,
    Eye,
    ChevronDown,
    MapPin,
    Calendar,
    User,
    Clock
} from 'lucide-react';

export default function ReviewQueue() {
    const pendingList = [
        {
            id: 'T-1025',
            name: 'Srirangam Temple',
            location: 'Trichy, Tamil Nadu',
            contributor: 'Arun Raj',
            status: 'Pending',
            date: '10 mins ago',
            tags: ['Gopuram', 'History']
        },
        {
            id: 'T-1024',
            name: 'Tiruchendur Temple',
            location: 'Tiruchendur, Tamil Nadu',
            contributor: 'Meena S',
            status: 'Pending',
            date: '45 mins ago',
            tags: ['Festival', 'Sea Shore']
        },
    ];

    return (
        <DashboardLayout role="Admin">
            <div className="space-y-10">
                {/* Header */}
                <div className="flex justify-between items-end">
                    <div>
                        <h1 className="text-4xl font-black text-white mb-2">Review Queue</h1>
                        <p className="text-gray-500 font-bold">Review and approve temple submissions from contributors.</p>
                    </div>
                    <div className="flex gap-4">
                        <div className="bg-orange-500/10 border border-orange-500/20 px-6 py-3 rounded-2xl flex items-center gap-3">
                            <Clock className="text-orange-500" size={20} />
                            <span className="text-white font-black">12 Pending</span>
                        </div>
                    </div>
                </div>

                {/* Filters */}
                <div className="bg-[#141414] border border-white/5 p-4 rounded-3xl flex justify-between items-center">
                    <div className="flex gap-4 flex-1 max-w-2xl">
                        <div className="relative flex-1">
                            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-600" size={18} />
                            <input
                                type="text"
                                placeholder="Search by temple name or contributor..."
                                className="w-full bg-black/40 border border-white/10 rounded-xl py-3 pl-12 pr-4 text-sm text-white focus:outline-none focus:border-primary/50"
                            />
                        </div>
                        <button className="flex items-center gap-2 px-6 py-3 bg-white/5 border border-white/10 rounded-xl text-gray-400 font-bold text-sm">
                            <Filter size={18} />
                            Filters
                            <ChevronDown size={14} />
                        </button>
                    </div>
                </div>

                {/* Queue List */}
                <div className="space-y-6">
                    {pendingList.map((item) => (
                        <div key={item.id} className="bg-[#141414] border border-white/5 rounded-[2.5rem] p-8 hover:border-primary/20 transition-all group relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-bl-[5rem] -translate-y-10 translate-x-10 -z-10 group-hover:translate-y-0 group-hover:translate-x-0 transition-transform duration-700" />

                            <div className="flex flex-col lg:flex-row justify-between gap-8">
                                <div className="space-y-6 flex-1">
                                    <div className="flex items-center gap-4">
                                        <div className="w-14 h-14 rounded-2xl bg-[#1a1a1a] flex items-center justify-center text-3xl shadow-xl grayscale group-hover:grayscale-0 transition-all">
                                            🏛️
                                        </div>
                                        <div>
                                            <div className="flex items-center gap-3 mb-1">
                                                <h3 className="text-2xl font-black text-white">{item.name}</h3>
                                                <span className="text-[10px] font-black text-gray-700 border border-white/5 px-2 py-0.5 rounded uppercase tracking-widest">{item.id}</span>
                                            </div>
                                            <div className="flex items-center gap-4 text-xs font-bold text-gray-500">
                                                <span className="flex items-center gap-1.5"><MapPin size={14} /> {item.location}</span>
                                                <span className="text-white/10">•</span>
                                                <span className="flex items-center gap-1.5"><Calendar size={14} /> Submitted {item.date}</span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="flex gap-2">
                                        {item.tags.map(tag => (
                                            <span key={tag} className="text-[10px] font-black text-primary bg-primary/10 px-3 py-1 rounded-full uppercase tracking-widest border border-primary/20">{tag}</span>
                                        ))}
                                    </div>

                                    <div className="flex items-center gap-3 p-4 bg-white/5 rounded-2xl border border-white/5 w-fit">
                                        <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-primary font-black text-[10px]">A</div>
                                        <div>
                                            <p className="text-[10px] font-black text-gray-500 uppercase tracking-widest leading-none mb-1">Contributor</p>
                                            <p className="text-sm font-bold text-white">{item.contributor}</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="flex flex-col justify-between items-end gap-6">
                                    <div className="flex gap-3">
                                        <button className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-white transition-all">
                                            <Eye size={20} />
                                        </button>
                                        <button className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-white transition-all">
                                            <MessageSquare size={20} />
                                        </button>
                                    </div>
                                    <div className="flex gap-4">
                                        <button className="flex items-center gap-2 px-8 py-4 bg-red-500/10 border border-red-500/20 text-red-500 font-black rounded-2xl hover:bg-red-500 hover:text-white transition-all">
                                            <XCircle size={20} />
                                            Reject
                                        </button>
                                        <button className="flex items-center gap-2 px-8 py-4 bg-primary text-white font-black rounded-2xl shadow-xl shadow-primary/20 hover:scale-105 active:scale-95 transition-all">
                                            <CheckCircle2 size={20} />
                                            Approve Submission
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </DashboardLayout>
    );
}
