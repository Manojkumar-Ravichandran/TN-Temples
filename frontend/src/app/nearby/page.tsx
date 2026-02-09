'use client';

import React, { useState, useEffect } from 'react';
import PublicLayout from '@/components/templates/PublicLayout';
import Card from '@/components/atoms/Card';
import Badge from '@/components/atoms/Badge';
import Button from '@/components/atoms/Button';

export default function NearbyTemples() {
    const [locationError, setLocationError] = useState('');
    const [loading, setLoading] = useState(false);

    // Mock data for UI demonstration
    const nearbyTemples = [
        { name: 'Kapaleeshwarar Temple', distance: '1.2 km', deity: 'Shiva', district: 'Chennai' },
        { name: 'Parthasarathy Temple', distance: '2.5 km', deity: 'Vishnu', district: 'Chennai' },
        { name: 'Marundeeswarar Temple', distance: '4.8 km', deity: 'Shiva', district: 'Chennai' },
    ];

    const requestLocation = () => {
        setLoading(true);
        if (!navigator.geolocation) {
            setLocationError('Geolocation is not supported by your browser');
            setLoading(false);
            return;
        }

        navigator.geolocation.getCurrentPosition(
            (position) => {
                console.log(position.coords.latitude, position.coords.longitude);
                setLoading(false);
            },
            () => {
                setLocationError('Unable to retrieve your location. Please check permissions.');
                setLoading(false);
            }
        );
    };

    return (
        <PublicLayout>
            <div className="max-w-6xl mx-auto py-12">
                <div className="text-center mb-16">
                    <h1 className="text-4xl font-extrabold text-gray-900 mb-4">Temples Near You</h1>
                    <p className="text-gray-600 max-w-2xl mx-auto mb-8">
                        Find the nearest portals to the divine. We use your GPS location to suggest पवित्र (sacred) places within your reach.
                    </p>
                    <Button
                        label={loading ? "Locating..." : "Find Nearby Temples"}
                        onClick={requestLocation}
                        disabled={loading}
                        className="px-10 py-4 text-lg"
                    />
                    {locationError && <p className="text-red-500 mt-4 text-sm font-medium">{locationError}</p>}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {nearbyTemples.map((temple) => (
                        <Card key={temple.name} title={temple.name}>
                            <div className="flex justify-between items-center mb-4">
                                <Badge text={temple.distance} variant="success" />
                                <span className="text-sm font-medium text-gray-500">{temple.deity}</span>
                            </div>
                            <p className="text-sm text-gray-400">Located in {temple.district}, Tamil Nadu</p>
                            <Button label="View Directions" variant="outline" className="w-full mt-6" />
                        </Card>
                    ))}
                </div>

                <div className="mt-20 bg-gray-900 text-white rounded-[3rem] p-12 overflow-hidden relative">
                    <div className="relative z-10 max-w-2xl">
                        <h2 className="text-3xl font-bold mb-4">Planning a pilgrimage?</h2>
                        <p className="text-gray-400 text-lg mb-8">Access detailed routes, festival schedules, and pooja timings for over 50,000 temples across the state.</p>
                        <div className="flex gap-4">
                            <Button label="Browse Map" variant="primary" className="bg-orange-600" />
                            <Button label="Festival Calendar" variant="outline" className="border-white text-white hover:bg-white hover:text-gray-900" />
                        </div>
                    </div>
                    <div className="absolute top-0 right-0 w-1/3 h-full bg-orange-600 opacity-20 transform skew-x-12 translate-x-20"></div>
                </div>
            </div>
        </PublicLayout>
    );
}
