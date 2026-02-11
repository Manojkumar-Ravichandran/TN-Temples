'use client';

import React from 'react';
import PublicLayout from '@/components/templates/PublicLayout';
import Badge from '@/components/atoms/Badge';
import Button from '@/components/atoms/Button';

// Note: In real app, this would be a dynamic server component fetching data based on slug
const TempleDetail = ({ params }: { params: { slug: string } }) => {
    // Dummy data for visualization
    const temple = {
        name: 'Meenakshi Amman Temple',
        slug: 'meenakshi-amman-temple',
        deity: 'Meenakshi (Parvati) & Sundareswarar (Shiva)',
        district: 'Madurai',
        history: 'Built by the Pandyan rulers, the temple has been mentioned in Tamil literature for centuries. The current structure was primarily built between 1623 and 1655 CE.',
        timings: {
            morning: '5:00 AM - 12:30 PM',
            evening: '4:00 PM - 10:00 PM'
        },
        images: ['https://upload.wikimedia.org/wikipedia/commons/thumb/1/1d/Meenakshi_Amman_Temple_Madurai.jpg/1200px-Meenakshi_Amman_Temple_Madurai.jpg'],
        festivals: [
            { name: 'Meenakshi Tirukalyanam', month: 'Chithirai (April-May)' },
            { name: 'Float Festival', month: 'Thai (January-February)' }
        ]
    };

    return (
        <PublicLayout>
            <div className="max-w-6xl mx-auto py-8">
                {/* Breadcrumb */}
                <div className="flex gap-2 text-sm text-gray-400 mb-6">
                    <span>Home</span> / <span>District</span> / <span>{temple.district}</span> / <span className="text-primary font-medium">{temple.name}</span>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                    {/* Main Content */}
                    <div className="lg:col-span-2">
                        <img
                            src={temple.images[0]}
                            alt={temple.name}
                            className="w-full h-[400px] object-cover rounded-3xl shadow-xl mb-8"
                        />

                        <div className="flex flex-wrap items-center gap-4 mb-6">
                            <h1 className="text-4xl font-extrabold text-gray-900">{temple.name}</h1>
                            <Badge text={temple.district} variant="info" className="text-sm px-3 py-1" />
                        </div>

                        <div className="prose prose-neutral dark:prose-invert max-w-none">
                            <h2 className="text-2xl font-bold mb-4">Temple History</h2>
                            <p className="text-gray-700 leading-relaxed mb-8">{temple.history}</p>

                            <h2 className="text-2xl font-bold mb-4">Deity</h2>
                            <p className="text-gray-700 mb-8">{temple.deity}</p>

                            <h2 className="text-2xl font-bold mb-4">Festivals</h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                                {temple.festivals.map(f => (
                                    <div key={f.name} className="bg-primary/5 p-4 rounded-xl border border-primary/10">
                                        <h3 className="font-bold text-primary">{f.name}</h3>
                                        <p className="text-sm text-primary/70">{f.month}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Sidebar Info */}
                    <div className="space-y-8">
                        <div className="bg-white p-6 rounded-3xl shadow-lg border border-gray-100">
                            <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                                <span>🕒</span> Opening Hours
                            </h3>
                            <div className="space-y-3">
                                <div className="flex justify-between border-b pb-2">
                                    <span className="text-gray-500">Morning</span>
                                    <span className="font-medium">{temple.timings.morning}</span>
                                </div>
                                <div className="flex justify-between border-b pb-2">
                                    <span className="text-gray-500">Evening</span>
                                    <span className="font-medium">{temple.timings.evening}</span>
                                </div>
                            </div>
                            <Button label="View Pooja Schedule" variant="outline" className="w-full mt-6" />
                        </div>

                        <div className="bg-white p-6 rounded-3xl shadow-lg border border-gray-100">
                            <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                                <span>📍</span> Location
                            </h3>
                            <div className="bg-gray-200 h-48 rounded-xl mb-4 flex items-center justify-center text-gray-500 italic">
                                Map Integration Placeholder
                            </div>
                            <Button label="Get Directions" className="w-full" />
                        </div>

                        <div className="bg-primary text-white p-6 rounded-3xl shadow-lg">
                            <h3 className="text-xl font-bold mb-2">Help us improve!</h3>
                            <p className="text-sm opacity-90 mb-4">Notice something wrong? Suggest an edit to keep our information accurate.</p>
                            <Button label="Suggest Edit" variant="outline" className="w-full border-white text-white hover:bg-white hover:text-primary" />
                        </div>
                    </div>
                </div>
            </div>
        </PublicLayout>
    );
};

export default TempleDetail;
