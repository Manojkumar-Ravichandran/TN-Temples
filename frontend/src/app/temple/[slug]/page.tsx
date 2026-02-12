'use client';

import React from 'react';
import PublicLayout from '@/components/templates/PublicLayout';
import TempleHero from '@/components/organisms/TempleHero';
import TempleHistory from '@/components/organisms/TempleHistory';
import PoojaSchedule from '@/components/organisms/PoojaSchedule';
import TempleGallery from '@/components/organisms/TempleGallery';
import TempleMap from '@/components/organisms/TempleMap';
import {
    FestivalsSidebar,
    NearbyTemplesSidebar,
    PlanVisitCTA
} from '@/components/molecules/SidebarComponents';

const TempleDetail = ({ params }: { params: { slug: string } }) => {
    // Extensive dummy data matching the provided design
    const temple = {
        name: 'Meenakshi Amman Temple',
        slug: 'meenakshi-amman-temple',
        description: 'An architectural masterpiece dedicated to Goddess Meenakshi and Lord Sundareswarar in the heart of the temple city, Madurai.',
        district: 'Madurai',
        tags: ['UNESCO Heritage', 'Active Site'],
        history: [
            'The Meenakshi Amman Temple dates back to the early centuries of the Common Era, though most of its present structure was built during the reign of the Nayak dynasty between the 16th and 18th centuries. Legend states that the temple was founded by Indra, the King of Gods, while he was on a pilgrimage to atone for his misdeeds.',
            'The complex is a physical representation of the <span class="text-primary font-bold">Dravidian architectural style</span>, featuring 14 massive gopurams (gateway towers), the tallest being the southern tower which rises to over 170 feet. The temple is centered around the two primary shrines of Meenakshi and her consort, Lord Sundareswarar.'
        ],
        featuredQuote: 'The temple is often cited as a candidate for the New Seven Wonders of the World due to its intricate carvings and spiritual magnetism.',
        rituals: [
            { name: 'Thiruvananthal Pooja', time: '05:00 AM - 06:00 AM', significance: 'Early morning awakening ritual' },
            { name: 'Kaasandhi Pooja', time: '06:30 AM - 07:15 AM', significance: 'Morning prayers & offerings' },
            { name: 'Uchikala Pooja', time: '10:30 AM - 11:15 AM', significance: 'Mid-day ritual' },
            { name: 'Sayarakshai Pooja', time: '04:30 PM - 05:15 PM', significance: 'Evening lighting ceremony' },
            { name: 'Palliarai Pooja', time: '09:30 PM - 10:00 PM', significance: 'Closing nightly procession' }
        ],
        images: [
            'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?q=80&w=2070&auto=format&fit=crop', // Main
            'https://images.unsplash.com/photo-1621319011735-275bc217fc44?q=80&w=2070&auto=format&fit=crop', // Gallery 1
            'https://images.unsplash.com/photo-1625505826533-5c80aca7d138?q=80&w=2069&auto=format&fit=crop', // Gallery 2
            'https://images.unsplash.com/photo-1600675281904-67ad10851ecf?q=80&w=2070&auto=format&fit=crop', // Gallery 3
            'https://images.unsplash.com/photo-1619441207978-3d326c46e2c9?q=80&w=2069&auto=format&fit=crop', // Gallery 4
        ],
        totalPhotos: 124,
        address: 'Madurai Main, Tamil Nadu 625001',
        coordinates: { lat: 9.9195, lng: 78.1193 },
        festivals: [
            { name: 'Chithirai Festival', date: 'APR 14', description: '12-day celestial wedding celebration', isHighlight: true },
            { name: 'Navaratri Festival', date: 'OCT 24', description: 'Golu display and classical concerts' }
        ],
        nearbyTemples: [
            { name: 'Koodal Azhagar Temple', distance: '1.2 km away', image: 'https://images.unsplash.com/photo-1600675281904-67ad10851ecf?q=80&w=100' },
            { name: 'Thiruparankundram', distance: '8.5 km away', image: 'https://images.unsplash.com/photo-1625505826533-5c80aca7d138?q=80&w=100' },
            { name: 'Alagar Koyil', distance: '21 km away', image: 'https://images.unsplash.com/photo-1621319011735-275bc217fc44?q=80&w=100' }
        ]
    };

    return (
        <PublicLayout>
            <div className="bg-background pt-24 pb-16">
                <div className="container mx-auto px-6">
                    {/* Breadcrumb */}
                    <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-muted-foreground mb-8">
                        <span className="hover:text-primary cursor-pointer transition-colors">Home</span>
                        <span className="text-primary/30">/</span>
                        <span className="hover:text-primary cursor-pointer transition-colors">Districts</span>
                        <span className="text-primary/30">/</span>
                        <span className="hover:text-primary cursor-pointer transition-colors">{temple.district}</span>
                        <span className="text-primary/30">/</span>
                        <span className="text-primary">{temple.name}</span>
                    </div>

                    {/* Hero Section */}
                    <TempleHero
                        name={temple.name}
                        description={temple.description}
                        image={temple.images[0]}
                        tags={temple.tags}
                    />

                    {/* Content Grid */}
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mt-16">
                        {/* Left Column: Main Content */}
                        <div className="lg:col-span-8">
                            <TempleHistory
                                history={temple.history}
                                featuredQuote={temple.featuredQuote}
                            />

                            <hr className="border-border my-8" />

                            <PoojaSchedule rituals={temple.rituals} />

                            <hr className="border-border my-8" />

                            <TempleGallery
                                images={temple.images}
                                totalPhotos={temple.totalPhotos}
                            />

                            <hr className="border-border my-8" />

                            <TempleMap
                                name={temple.name}
                                address={temple.address}
                                coordinates={temple.coordinates}
                            />
                        </div>

                        {/* Right Column: Sidebar */}
                        <div className="lg:col-span-4 space-y-8">
                            <FestivalsSidebar festivals={temple.festivals} />
                            <NearbyTemplesSidebar temples={temple.nearbyTemples} />
                            <PlanVisitCTA />
                        </div>
                    </div>
                </div>
            </div>
        </PublicLayout>
    );
};

export default TempleDetail;
