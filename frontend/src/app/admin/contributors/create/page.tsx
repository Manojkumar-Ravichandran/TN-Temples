'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import DashboardLayout from '@/components/templates/DashboardLayout';
import {
    ChevronRight,
    Search,
    Bell,
    Link as LinkIcon,
    User,
    ShieldCheck,
    Info,
    Save,
    Send,
    Eye,
    EyeOff
} from 'lucide-react';
export default function CreateContributor() {
    const router = useRouter();
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        password: '',
        role: 'Contributor',
        district: '',
        requestId: ''
    });
    const [showPassword, setShowPassword] = useState(false);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const [success, setSuccess] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleCreate = async () => {
        if (!formData.name || !formData.email || !formData.password || !formData.district) {
            setError('Please fill in all required fields (Name, Email, Password, District)');
            return;
        }

        setLoading(true);
        setError('');

        try {
            const response = await fetch('http://localhost:5000/api/v1/auth/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    name: formData.name,
                    email: formData.email,
                    password: formData.password,
                    role: formData.role,
                    district: formData.district
                }),
            });

            const data = await response.json();

            if (response.ok) {
                setSuccess(true);
                setTimeout(() => {
                    router.push('/admin/contributors');
                }, 1500);
            } else {
                setError(data.message || 'Failed to create contributor');
            }
        } catch (err) {
            setError('Connection error. Is the backend running?');
        } finally {
            setLoading(false);
        }
    };

    return (
        <DashboardLayout role="Admin">
            <div className="max-w-4xl mx-auto space-y-8">
                {/* Breadcrumbs */}
                <div className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-muted-foreground">
                    <Link href="/admin/contributors" className="hover:text-primary transition-colors">User Management</Link>
                    <ChevronRight size={12} />
                    <span className="text-foreground">Create Contributor</span>
                </div>

                {/* Header Section */}
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                    <div>
                        <h1 className="text-4xl font-black text-foreground tracking-tighter">Create Contributor</h1>
                        <p className="text-muted-foreground font-bold mt-1 italic">Manually provision a new account for temple information management.</p>
                    </div>
                    <button className="px-6 py-2.5 bg-secondary-bg border border-border rounded-xl text-xs font-black text-muted-foreground uppercase tracking-widest hover:text-foreground transition-all shadow-sm">
                        Manual Creation
                    </button>
                </div>

                {/* Form Container */}
                <div className="bg-secondary-bg border border-border rounded-[3rem] p-10 space-y-12 shadow-sm">

                    {/* Reference Link Section */}
                    <section className="space-y-6">
                        <div className="flex items-center gap-3 text-primary">
                            <LinkIcon size={20} />
                            <h2 className="text-sm font-black uppercase tracking-[0.2em]">Reference Link</h2>
                        </div>
                        <div className="bg-background border border-border rounded-[2rem] p-8 border-dashed border-primary/30 shadow-sm relative overflow-hidden group">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                                <div>
                                    <label className="block text-[10px] font-black text-muted-foreground uppercase tracking-widest mb-3">Access Request ID (Optional)</label>
                                    <div className="relative">
                                        <span className="absolute left-5 top-1/2 -translate-y-1/2 text-muted-foreground font-bold">#</span>
                                        <input
                                            type="text"
                                            name="requestId"
                                            value={formData.requestId}
                                            onChange={handleChange}
                                            placeholder="e.g. REQ-2023-8901"
                                            className="w-full bg-secondary-bg border border-border rounded-2xl py-4 pl-10 pr-6 text-sm text-foreground focus:outline-none focus:border-primary/50 transition-all font-mono"
                                        />
                                    </div>
                                </div>
                                <div className="flex gap-4 p-4 bg-accent/5 rounded-2xl border border-border">
                                    <Info className="text-primary flex-shrink-0" size={20} />
                                    <p className="text-[11px] font-bold text-muted-foreground leading-relaxed italic">
                                        Linking a request will automatically notify the applicant once credentials are generated.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Profile Details Section */}
                    <section className="space-y-6">
                        <div className="flex items-center gap-3 text-orange-500">
                            <User size={20} />
                            <h2 className="text-sm font-black uppercase tracking-[0.2em]">Profile Details</h2>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div className="space-y-3">
                                <label className="block text-[10px] font-black text-muted-foreground uppercase tracking-widest pl-2">Full Name</label>
                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    placeholder="Enter legal name"
                                    className="w-full bg-background border border-border rounded-2xl py-4 px-6 text-sm text-foreground focus:outline-none focus:border-primary/50 transition-all font-bold"
                                />
                            </div>
                            <div className="space-y-3">
                                <label className="block text-[10px] font-black text-muted-foreground uppercase tracking-widest pl-2">Email Address</label>
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    placeholder="personal@example.com"
                                    className="w-full bg-background border border-border rounded-2xl py-4 px-6 text-sm text-foreground focus:outline-none focus:border-primary/50 transition-all font-bold"
                                />
                            </div>
                            <div className="space-y-3">
                                <label className="block text-[10px] font-black text-muted-foreground uppercase tracking-widest pl-2">Phone Number</label>
                                <input
                                    type="tel"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    placeholder="+91 XXXXX XXXXX"
                                    className="w-full bg-background border border-border rounded-2xl py-4 px-6 text-sm text-foreground focus:outline-none focus:border-primary/50 transition-all font-bold"
                                />
                            </div>
                            <div className="space-y-3">
                                <label className="block text-[10px] font-black text-muted-foreground uppercase tracking-widest pl-2">Initial Password</label>
                                <div className="relative">
                                    <input
                                        type={showPassword ? "text" : "password"}
                                        name="password"
                                        value={formData.password}
                                        onChange={handleChange}
                                        placeholder="Enter temporary password"
                                        className="w-full bg-background border border-border rounded-2xl py-4 pl-6 pr-12 text-sm text-foreground focus:outline-none focus:border-primary/50 transition-all font-bold"
                                    />
                                    <button
                                        type="button"
                                        onClick={() => setShowPassword(!showPassword)}
                                        className="absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
                                    >
                                        {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                                    </button>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Role & Regional Scope Section */}
                    <section className="space-y-6">
                        <div className="flex items-center gap-3 text-primary">
                            <ShieldCheck size={20} />
                            <h2 className="text-sm font-black uppercase tracking-[0.2em]">Role & Regional Scope</h2>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div className="space-y-3">
                                <label className="block text-[10px] font-black text-muted-foreground uppercase tracking-widest pl-2">Initial Role Assignment</label>
                                <select
                                    name="role"
                                    value={formData.role}
                                    onChange={handleChange}
                                    className="w-full bg-background border border-border rounded-2xl py-4 px-6 text-sm text-foreground focus:outline-none focus:border-primary/50 transition-all font-bold appearance-none"
                                >
                                    <option value="Contributor">Contributor (Standard)</option>
                                    <option value="Moderator">Moderator</option>
                                    <option value="Admin">District Admin</option>
                                </select>
                            </div>
                            <div className="space-y-3">
                                <label className="block text-[10px] font-black text-muted-foreground uppercase tracking-widest pl-2">Assigned District / Region</label>
                                <select
                                    name="district"
                                    value={formData.district}
                                    onChange={handleChange}
                                    className="w-full bg-background border border-border rounded-2xl py-4 px-6 text-sm text-foreground focus:outline-none focus:border-primary/50 transition-all font-bold appearance-none"
                                >
                                    <option value="">Select District Scope</option>
                                    <option value="Chennai">Chennai</option>
                                    <option value="Madurai">Madurai</option>
                                    <option value="Coimbatore">Coimbatore</option>
                                </select>
                            </div>
                        </div>
                    </section>

                    {error && (
                        <div className="p-4 bg-red-500/10 border border-red-500/20 text-red-500 rounded-2xl text-xs font-bold animate-in fade-in slide-in-from-top-2">
                            {error}
                        </div>
                    )}

                    {success && (
                        <div className="p-4 bg-green-500/10 border border-green-500/20 text-green-500 rounded-2xl text-xs font-bold animate-in fade-in slide-in-from-top-2">
                            Contributor successfully created! Redirecting...
                        </div>
                    )}

                    {/* Footer Actions */}
                    <div className="pt-10 border-t border-border flex flex-col md:flex-row justify-between items-center gap-6">
                        <div className="flex items-center gap-3 text-muted-foreground group cursor-pointer hover:text-foreground transition-colors">
                            <ShieldCheck size={20} className="text-primary opacity-50 group-hover:opacity-100 transition-opacity" />
                            <p className="text-[11px] font-bold uppercase tracking-widest">All system actions are logged for audit purposes.</p>
                        </div>
                        <div className="flex items-center gap-4 w-full md:w-auto">
                            <button
                                onClick={() => router.back()}
                                className="flex-1 md:flex-none text-sm font-black text-muted-foreground hover:text-foreground px-8 transition-colors"
                            >
                                Cancel
                            </button>
                            <button
                                onClick={handleCreate}
                                disabled={loading}
                                className="flex-1 md:flex-none flex items-center justify-center gap-3 bg-gradient-to-r from-primary to-orange-600 hover:scale-105 disabled:opacity-50 disabled:hover:scale-100 text-white font-black px-10 py-4 rounded-2xl transition-all shadow-xl shadow-primary/20"
                            >
                                {loading ? 'Creating...' : 'Generate & Send Credentials'}
                                <Send size={18} />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </DashboardLayout>
    );
}
