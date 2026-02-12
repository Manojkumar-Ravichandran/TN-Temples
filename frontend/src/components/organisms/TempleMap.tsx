'use client';

import React from 'react';
import { MapPin, Navigation } from 'lucide-react';

interface TempleMapProps {
    name: string;
    address: string;
    coordinates: { lat: number; lng: number };
}

const TempleMap: React.FC<TempleMapProps> = ({ name, address }) => {
    return (
        <section className="py-12">
            <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 bg-orange-500/10 rounded-2xl flex items-center justify-center">
                    <MapPin className="text-primary" size={24} />
                </div>
                <h2 className="text-3xl font-black tracking-tight">How to Reach</h2>
            </div>

            <div className="relative w-full h-[400px] rounded-3xl overflow-hidden shadow-2xl border border-border">
                {/* Mock Map Background (Static image for design purposes) */}
                <div
                    className="absolute inset-0 bg-cover bg-center grayscale contrast-125 opacity-40"
                    style={{ backgroundImage: 'url(https://miro.medium.com/v2/resize:fit:1400/1*qV9_6IDiQ0I7q8882JmKkA.png)' }}
                />
                <div className="absolute inset-0 bg-background/20 backdrop-blur-[2px]" />

                {/* Custom Marker Tooltip */}
                <div className="absolute inset-0 flex items-center justify-center">
                    <div className="bg-background/90 backdrop-blur-xl p-4 rounded-2xl shadow-2xl border border-primary/20 flex items-center gap-4 transform -translate-y-8 animate-bounce-slow">
                        <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center text-white shadow-lg shadow-primary/30">
                            <MapPin size={24} />
                        </div>
                        <div>
                            <p className="font-black text-foreground">{name}</p>
                            <p className="text-xs text-muted-foreground">{address}</p>
                        </div>
                        <button className="bg-primary text-white text-[10px] font-bold px-3 py-1.5 rounded-lg ml-2 hover:bg-primary/90 transition-colors uppercase tracking-widest leading-none">
                            Open in Maps
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TempleMap;
