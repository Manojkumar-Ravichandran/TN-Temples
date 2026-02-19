'use client';

import React, { useEffect, useState } from 'react';
import PublicLayout from '@/components/templates/PublicLayout';
import TempleHero from '@/components/organisms/TempleHero';
import TempleHistory from '@/components/organisms/TempleHistory';
import PoojaSchedule from '@/components/organisms/PoojaSchedule';
import TempleGallery from '@/components/organisms/TempleGallery';
import TempleMap from '@/components/organisms/TempleMap';
import { Loader2, AlertCircle } from 'lucide-react';
import {
    FestivalsSidebar,
    NearbyTemplesSidebar,
    PlanVisitCTA
} from '@/components/molecules/SidebarComponents';

interface TempleData {
    name: string;
    description: string;
    district: string;
    deity: string;
    images: string[];
    history?: string;
    location?: {
        coordinates: [number, number];
    };
}

const TempleDetail = ({ params }: { params: Promise<{ slug: string }> }) => {
    const { slug } = React.use(params);
    const [temple, setTemple] = useState<any>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchTemple = async () => {
            try {
                const response = await fetch(`http://localhost:5000/api/v1/temples/${slug}`);
                if (!response.ok) {
                    if (response.status === 404) throw new Error('Temple not found');
                    throw new Error('Failed to fetch temple data');
                }
                const data = await response.json();
                setTemple(data);
            } catch (err: any) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchTemple();
    }, [slug]);

    if (loading) {
        return (
            <PublicLayout>
                <div className="min-h-screen flex items-center justify-center bg-background">
                    <div className="flex flex-col items-center gap-4">
                        <Loader2 className="w-12 h-12 text-primary animate-spin" />
                        <p className="text-muted-foreground font-black uppercase tracking-widest text-xs">Loading Temple Details...</p>
                    </div>
                </div>
            </PublicLayout>
        );
    }

    if (error || !temple) {
        return (
            <PublicLayout>
                <div className="min-h-screen flex items-center justify-center bg-background">
                    <div className="bg-secondary-bg border border-border p-12 rounded-[3rem] text-center max-w-lg shadow-2xl">
                        <AlertCircle className="w-16 h-16 text-red-500 mx-auto mb-6" />
                        <h2 className="text-3xl font-black text-foreground mb-4 tracking-tight">{error || 'Something went wrong'}</h2>
                        <p className="text-muted-foreground font-bold mb-8 italic">We couldn't find the sacred records for this location.</p>
                        <button
                            onClick={() => window.location.href = '/'}
                            className="bg-primary text-white font-black px-8 py-4 rounded-2xl hover:scale-105 transition-all shadow-xl shadow-primary/20"
                        >
                            Back to Home
                        </button>
                    </div>
                </div>
            </PublicLayout>
        );
    }

    // Adapt backend data to frontend structure
    const formattedTemple = {
        name: temple.name,
        description: temple.description,
        district: temple.district,
        tags: [temple.deity, 'Sacred Site'],
        history: temple.history ? [temple.history] : ['History details coming soon...'],
        featuredQuote: `Dedicated to ${temple.deity} in the heart of ${temple.district}.`,
        rituals: [
            { name: 'Morning Pooja', time: '06:00 AM', significance: 'Auspicious start' },
            { name: 'Evening Pooja', time: '06:00 PM', significance: 'Divinity at dusk' }
        ],
        images: temple.images && temple.images.length > 0 ? temple.images : [
            'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?q=80&w=2070&auto=format&fit=crop'
        ],
        totalPhotos: temple.images?.length || 0,
        address: `${temple.district}, Tamil Nadu`,
        coordinates: temple.location?.coordinates ? {
            lat: temple.location.coordinates[1],
            lng: temple.location.coordinates[0]
        } : { lat: 0, lng: 0 },
        festivals: [],
        nearbyTemples: []
    };

    return (
        <PublicLayout>
            <div className="bg-background pt-24 pb-16">
                <div className="container mx-auto px-6">
                    {/* Breadcrumb */}
                    <div className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-muted-foreground mb-8">
                        <span onClick={() => window.location.href = '/'} className="hover:text-primary cursor-pointer transition-colors">Home</span>
                        <span className="text-primary/30">/</span>
                        <span className="text-primary">{formattedTemple.name}</span>
                    </div>

                    {/* Hero Section */}
                    <TempleHero
                        name={formattedTemple.name}
                        description={formattedTemple.description}
                        image={formattedTemple.images[0]}
                        tags={formattedTemple.tags}
                    />

                    {/* Content Grid */}
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mt-16">
                        {/* Left Column: Main Content */}
                        <div className="lg:col-span-8">
                            <TempleHistory
                                history={formattedTemple.history}
                                featuredQuote={formattedTemple.featuredQuote}
                            />

                            <hr className="border-border my-8" />

                            <PoojaSchedule rituals={formattedTemple.rituals} />

                            <hr className="border-border my-8" />

                            <TempleGallery
                                images={formattedTemple.images}
                                totalPhotos={formattedTemple.totalPhotos}
                            />

                            <hr className="border-border my-8" />

                            {formattedTemple.coordinates.lat !== 0 && (
                                <TempleMap
                                    name={formattedTemple.name}
                                    address={formattedTemple.address}
                                    coordinates={formattedTemple.coordinates}
                                />
                            )}
                        </div>

                        {/* Right Column: Sidebar */}
                        <div className="lg:col-span-4 space-y-8">
                            <PlanVisitCTA />
                        </div>
                    </div>
                </div>
            </div>
        </PublicLayout>
    );
};

export default TempleDetail;
