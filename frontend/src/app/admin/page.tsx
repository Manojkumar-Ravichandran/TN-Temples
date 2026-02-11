'use client';

import React from 'react';
import DashboardLayout from '@/components/templates/DashboardLayout';
import Button from '@/components/atoms/Button';
import Badge from '@/components/atoms/Badge';

export default function AdminDashboard() {
    const stats = [
        { label: 'Pending Approvals', value: '5', color: 'bg-error' },
        { label: 'Total Temples', value: '42,103', color: 'bg-primary' },
        { label: 'Active Contributors', value: '156', color: 'bg-info' },
    ];

    const pendingSubmissions = [
        { name: 'Srirangam Temple', contributor: 'Arun Raj', date: '10 mins ago' },
        { name: 'Tiruchendur Temple', contributor: 'Meena S', date: '45 mins ago' },
    ];

    return (
        <DashboardLayout role="Admin">
            <div className="space-y-8">
                <div className="flex justify-between items-center">
                    <h1 className="text-3xl font-extrabold text-gray-900">Admin Command Center</h1>
                    <div className="flex gap-4">
                        <Button label="System Logs" variant="outline" />
                        <Button label="Backup Database" variant="secondary" />
                    </div>
                </div>

                {/* Stats Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {stats.map((stat) => (
                        <div key={stat.label} className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100">
                            <p className="text-sm text-gray-400 font-bold uppercase tracking-widest mb-1">{stat.label}</p>
                            <p className={`text-4xl font-black ${stat.color.replace('bg-', 'text-')}`}>{stat.value}</p>
                        </div>
                    ))}
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {/* Pending Approvals */}
                    <div className="bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden">
                        <div className="p-6 border-b bg-error/5 flex justify-between items-center">
                            <h2 className="text-xl font-bold text-error">Pending Approvals</h2>
                            <Badge text="Action Required" variant="error" />
                        </div>
                        <div className="divide-y">
                            {pendingSubmissions.map((sub, i) => (
                                <div key={i} className="p-6 flex justify-between items-center hover:bg-gray-50 transition-colors">
                                    <div>
                                        <p className="font-bold text-gray-900">{sub.name}</p>
                                        <p className="text-sm text-gray-500">Submitted by {sub.contributor} • {sub.date}</p>
                                    </div>
                                    <div className="flex gap-2">
                                        <Button label="Review" variant="outline" className="text-xs py-1" />
                                        <Button label="Approve" className="text-xs py-1" />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Quick Actions */}
                    <div className="bg-white rounded-3xl shadow-xl border border-gray-100 p-8">
                        <h2 className="text-xl font-bold text-gray-900 mb-6">Quick Management</h2>
                        <div className="grid grid-cols-2 gap-4">
                            <button className="flex flex-col items-center justify-center p-6 bg-gray-50 rounded-2xl border border-gray-100 hover:border-primary/20 hover:bg-primary/5 transition-all group">
                                <span className="text-2xl mb-2 group-hover:scale-110 transition-transform">➕</span>
                                <span className="font-bold text-gray-700">Add Temple</span>
                            </button>
                            <button className="flex flex-col items-center justify-center p-6 bg-gray-50 rounded-2xl border border-gray-100 hover:border-info/20 hover:bg-info/5 transition-all group">
                                <span className="text-2xl mb-2 group-hover:scale-110 transition-transform">👤</span>
                                <span className="font-bold text-gray-700">Manage Users</span>
                            </button>
                            <button className="flex flex-col items-center justify-center p-6 bg-gray-50 rounded-2xl border border-gray-100 hover:border-warning/20 hover:bg-warning/5 transition-all group">
                                <span className="text-2xl mb-2 group-hover:scale-110 transition-transform">📅</span>
                                <span className="font-bold text-gray-700">Festivals</span>
                            </button>
                            <button className="flex flex-col items-center justify-center p-6 bg-gray-50 rounded-2xl border border-gray-100 hover:border-success/20 hover:bg-success/5 transition-all group">
                                <span className="text-2xl mb-2 group-hover:scale-110 transition-transform">📢</span>
                                <span className="font-bold text-gray-700">Updates</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </DashboardLayout>
    );
}
