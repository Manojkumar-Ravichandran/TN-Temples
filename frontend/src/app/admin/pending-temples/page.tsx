'use client';

import React, { useEffect, useState } from 'react';
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
    Clock,
    AlertCircle
} from 'lucide-react';

interface Submission {
    _id: string;
    templeData: {
        name: string;
        district: string;
        deity: string;
        location: {
            address: string;
        };
    };
    contributor: {
        _id: string;
        name: string;
        email: string;
    };
    status: string;
    createdAt: string;
}

export default function ReviewQueue() {
    const [submissions, setSubmissions] = useState<Submission[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    useEffect(() => {
        fetchSubmissions();
    }, []);

    const fetchSubmissions = async () => {
        try {
            setLoading(true);
            const userData = localStorage.getItem('user');
            if (!userData) {
                setError('Session expired. Please log in again.');
                return;
            }
            const { token } = JSON.parse(userData);

            const response = await fetch('http://localhost:5000/api/v1/submissions/pending', {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            });
            if (!response.ok) throw new Error('Failed to fetch submissions');
            const data = await response.json();
            setSubmissions(data);
        } catch (err) {
            setError('Error loading submissions. Please try again.');
            console.error(err);
        } finally {
            setLoading(false);
        }
    };

    const handleAction = async (id: string, action: 'approve' | 'reject') => {
        try {
            const adminComment = action === 'reject' ? prompt('Please enter a reason for rejection:') : '';
            if (action === 'reject' && adminComment === null) return;

            const userData = localStorage.getItem('user');
            if (!userData) return;
            const { token } = JSON.parse(userData);

            const response = await fetch(`http://localhost:5000/api/v1/submissions/${id}/${action}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
                body: JSON.stringify({ adminComment })
            });

            if (response.ok) {
                alert(`Submission ${action}d successfully`);
                fetchSubmissions();
            } else {
                const data = await response.json();
                alert(`Error: ${data.message}`);
            }
        } catch (err) {
            console.error(err);
            alert(`Failed to ${action} submission`);
        }
    };

    return (
        <DashboardLayout role="Admin">
            <div className="space-y-10">
                {/* Header */}
                <div className="flex justify-between items-end">
                    <div>
                        <h1 className="text-4xl font-black text-foreground mb-2">Review Queue</h1>
                        <p className="text-muted-foreground font-bold">Review and approve temple submissions from contributors.</p>
                    </div>
                    <div className="flex gap-4">
                        <div className="bg-orange-500/10 border border-orange-500/20 px-6 py-3 rounded-2xl flex items-center gap-3 shadow-sm">
                            <Clock className="text-orange-500" size={20} />
                            <span className="text-foreground font-black">{submissions.length} Pending</span>
                        </div>
                    </div>
                </div>

                {/* Filters */}
                <div className="bg-secondary-bg border border-border p-4 rounded-3xl flex justify-between items-center shadow-sm">
                    <div className="flex gap-4 flex-1 max-w-2xl">
                        <div className="relative flex-1">
                            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" size={18} />
                            <input
                                type="text"
                                placeholder="Search by temple name or contributor..."
                                className="w-full bg-background border border-border rounded-xl py-3 pl-12 pr-4 text-sm text-foreground focus:outline-none focus:border-primary/50"
                            />
                        </div>
                    </div>
                </div>

                {error && (
                    <div className="p-6 bg-red-500/10 border border-red-500/20 rounded-2xl flex items-center gap-4 text-red-500 font-bold">
                        <AlertCircle size={24} />
                        {error}
                        <button onClick={fetchSubmissions} className="ml-auto underline">Retry</button>
                    </div>
                )}

                <div className="space-y-6">
                    {loading ? (
                        <div className="py-20 text-center text-muted-foreground font-bold animate-pulse">
                            Loading submissions from divine scrolls...
                        </div>
                    ) : submissions.length === 0 ? (
                        <div className="py-20 text-center text-muted-foreground font-bold">
                            No pending submissions found.
                        </div>
                    ) : (
                        submissions.map((item) => (
                            <div key={item._id} className="bg-secondary-bg border border-border rounded-[2.5rem] p-8 hover:border-primary/20 transition-all group relative overflow-hidden shadow-sm">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-bl-[5rem] -translate-y-10 translate-x-10 -z-10 group-hover:translate-y-0 group-hover:translate-x-0 transition-transform duration-700" />

                                <div className="flex flex-col lg:flex-row justify-between gap-8">
                                    <div className="space-y-6 flex-1">
                                        <div className="flex items-center gap-4">
                                            <div className="w-14 h-14 rounded-2xl bg-background border border-border flex items-center justify-center text-3xl shadow-xl transition-all">
                                                🏛️
                                            </div>
                                            <div>
                                                <div className="flex items-center gap-3 mb-1">
                                                    <h3 className="text-2xl font-black text-foreground">{item.templeData.name}</h3>
                                                    <span className="text-[10px] font-black text-muted-foreground border border-border px-2 py-0.5 rounded uppercase tracking-widest">{item._id.slice(-6)}</span>
                                                </div>
                                                <div className="flex items-center gap-4 text-xs font-bold text-muted-foreground">
                                                    <span className="flex items-center gap-1.5"><MapPin size={14} /> {item.templeData.district}</span>
                                                    <span className="opacity-10">•</span>
                                                    <span className="flex items-center gap-1.5"><Calendar size={14} /> Submitted {new Date(item.createdAt).toLocaleDateString()}</span>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="flex items-center gap-3 p-4 bg-background border border-border rounded-2xl w-fit shadow-sm">
                                            <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-primary font-black text-[10px]">
                                                {item.contributor.name.charAt(0)}
                                            </div>
                                            <div>
                                                <p className="text-[10px] font-black text-muted-foreground uppercase tracking-widest leading-none mb-1">Contributor</p>
                                                <p className="text-sm font-bold text-foreground">{item.contributor.name}</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="flex flex-col justify-between items-end gap-6">
                                        <div className="flex gap-3">
                                            <button className="w-12 h-12 rounded-xl bg-background border border-border flex items-center justify-center text-muted-foreground hover:text-primary transition-all shadow-sm">
                                                <Eye size={20} />
                                            </button>
                                        </div>
                                        <div className="flex gap-4">
                                            <button
                                                onClick={() => handleAction(item._id, 'reject')}
                                                className="flex items-center gap-2 px-8 py-4 bg-red-500/10 border border-red-500/20 text-red-500 font-black rounded-2xl hover:bg-red-500 hover:text-white transition-all"
                                            >
                                                <XCircle size={20} />
                                                Reject
                                            </button>
                                            <button
                                                onClick={() => handleAction(item._id, 'approve')}
                                                className="flex items-center gap-2 px-8 py-4 bg-primary text-white font-black rounded-2xl shadow-xl shadow-primary/20 hover:scale-105 active:scale-95 transition-all"
                                            >
                                                <CheckCircle2 size={20} />
                                                Approve Submission
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))
                    )}
                </div>
            </div>
        </DashboardLayout>
    );
}
