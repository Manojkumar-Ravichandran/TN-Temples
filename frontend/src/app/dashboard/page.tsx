'use client';

import React from 'react';
import DashboardLayout from '@/components/templates/DashboardLayout';
import Card from '@/components/atoms/Card';
import Badge from '@/components/atoms/Badge';
import Button from '@/components/atoms/Button';

export default function ContributorDashboard() {
    const stats = [
        { label: 'Total Submissions', value: '12', color: 'bg-blue-500' },
        { label: 'Approved', value: '8', color: 'bg-green-500' },
        { label: 'Points Earned', value: '450', color: 'bg-orange-500' },
    ];

    const recentActivity = [
        { name: 'Brihadeeswarar Temple', date: '2 hours ago', status: 'Pending', type: 'Edit' },
        { name: 'Kapaleeshwarar Temple', date: 'Yesterday', status: 'Approved', type: 'New' },
        { name: 'Shore Temple', date: '3 days ago', status: 'Rejected', type: 'New' },
    ];

    return (
        <DashboardLayout role="Contributor">
            <div className="space-y-8">
                <div className="flex justify-between items-center">
                    <h1 className="text-3xl font-extrabold text-gray-900">My Dashboard</h1>
                    <Button label="+ Submit New Temple" />
                </div>

                {/* Stats Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {stats.map((stat) => (
                        <div key={stat.label} className="bg-white p-6 rounded-3xl shadow-sm border border-gray-100 flex items-center gap-4">
                            <div className={`w-12 h-12 rounded-2xl ${stat.color} flex items-center justify-center text-white text-xl font-bold`}>
                                {stat.label[0]}
                            </div>
                            <div>
                                <p className="text-sm text-gray-500 font-medium">{stat.label}</p>
                                <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Content Tabs area - Placeholder */}
                <div className="bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden">
                    <div className="p-6 border-b flex justify-between items-center">
                        <h2 className="text-xl font-bold text-gray-900">Recent Submissions</h2>
                        <button className="text-orange-600 font-bold hover:underline">View All</button>
                    </div>
                    <div className="overflow-x-auto">
                        <table className="w-full text-left">
                            <thead className="bg-gray-50 border-b">
                                <tr>
                                    <th className="px-6 py-4 text-xs font-bold text-gray-400 uppercase tracking-widest">Temple Name</th>
                                    <th className="px-6 py-4 text-xs font-bold text-gray-400 uppercase tracking-widest">Type</th>
                                    <th className="px-6 py-4 text-xs font-bold text-gray-400 uppercase tracking-widest">Date</th>
                                    <th className="px-6 py-4 text-xs font-bold text-gray-400 uppercase tracking-widest">Status</th>
                                    <th className="px-6 py-4 text-xs font-bold text-gray-400 uppercase tracking-widest">Actions</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y">
                                {recentActivity.map((activity, i) => (
                                    <tr key={i} className="hover:bg-gray-50 transition-colors">
                                        <td className="px-6 py-4 font-bold text-gray-800">{activity.name}</td>
                                        <td className="px-6 py-4 text-gray-500">{activity.type}</td>
                                        <td className="px-6 py-4 text-gray-400">{activity.date}</td>
                                        <td className="px-6 py-4">
                                            <Badge
                                                text={activity.status}
                                                variant={activity.status === 'Approved' ? 'success' : activity.status === 'Pending' ? 'warning' : 'error'}
                                            />
                                        </td>
                                        <td className="px-6 py-4">
                                            <button className="text-gray-400 hover:text-orange-600 transition-colors">Details</button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* Helpful Tips Section */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
                    <div className="bg-orange-50 border border-orange-100 p-8 rounded-3xl">
                        <h3 className="text-xl font-bold text-orange-900 mb-2">Pro Tip: Images Matter!</h3>
                        <p className="text-orange-800 opacity-80">Submissions with clear photos of the Gopuram and main deity are 3x more likely to be approved quickly.</p>
                    </div>
                    <div className="bg-blue-50 border border-blue-100 p-8 rounded-3xl">
                        <h3 className="text-xl font-bold text-blue-900 mb-2">Earn Trusted Badge</h3>
                        <p className="text-blue-800 opacity-80">Once you have 10 approved submissions, you'll be promoted to Trusted Contributor automatically!</p>
                    </div>
                </div>
            </div>
        </DashboardLayout>
    );
}
