'use client';

import React from 'react';
import { Calendar, MapPin, ExternalLink, Sparkles, MessageSquare } from 'lucide-react';
import Button from '../atoms/Button';

// Festival Card Component
interface Festival {
    name: string;
    date: string;
    description: string;
    isHighlight?: boolean;
}

export const FestivalsSidebar: React.FC<{ festivals: Festival[] }> = ({ festivals }) => (
    <div className="glass-card overflow-hidden">
        <div className="bg-orange-500/10 p-5 flex items-center gap-3 border-b border-border">
            <Calendar className="text-primary" size={20} />
            <h3 className="font-black uppercase tracking-widest text-sm">Upcoming Festivals</h3>
        </div>
        <div className="p-5 space-y-6">
            {festivals.map((f, i) => (
                <div key={i} className="flex gap-4 group">
                    <div className="flex-shrink-0 w-12 h-14 bg-secondary-bg border border-border rounded-xl flex flex-col items-center justify-center group-hover:bg-primary/5 group-hover:border-primary/20 transition-colors">
                        <span className="text-[10px] font-bold text-muted-foreground uppercase">{f.date.split(' ')[0]}</span>
                        <span className="text-xl font-black text-foreground">{f.date.split(' ')[1]}</span>
                    </div>
                    <div className="flex-grow">
                        <h4 className="font-bold text-sm mb-1 group-hover:text-primary transition-colors">{f.name}</h4>
                        <p className="text-xs text-muted-foreground line-clamp-1">{f.description}</p>
                        {f.isHighlight && (
                            <div className="mt-2 flex items-center gap-1 text-[10px] text-orange-500 font-bold uppercase tracking-wider">
                                <Sparkles size={10} />
                                High Crowd Expected
                            </div>
                        )}
                    </div>
                </div>
            ))}
            <button className="w-full py-3 text-xs font-bold text-muted-foreground hover:text-primary border-t border-border mt-2 transition-colors">
                Full Festival Calendar
            </button>
        </div>
    </div>
);

// Nearby Temples Card Component
interface NearbyTemple {
    name: string;
    distance: string;
    image: string;
}

export const NearbyTemplesSidebar: React.FC<{ temples: NearbyTemple[] }> = ({ temples }) => (
    <div className="glass-card overflow-hidden">
        <div className="p-5 border-b border-border flex items-center gap-3">
            <span className="text-xl">🚩</span>
            <h3 className="font-black uppercase tracking-widest text-sm text-foreground">Nearby Temples</h3>
        </div>
        <div className="p-5 space-y-4">
            {temples.map((t, i) => (
                <div key={i} className="flex items-center gap-3 group cursor-pointer">
                    <div className="w-12 h-12 rounded-lg overflow-hidden flex-shrink-0">
                        <img src={t.image} alt={t.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                    </div>
                    <div className="flex-grow">
                        <h4 className="font-bold text-sm leading-tight group-hover:text-primary transition-colors">{t.name}</h4>
                        <div className="flex items-center gap-1 text-[10px] text-muted-foreground">
                            <MapPin size={10} />
                            {t.distance}
                        </div>
                    </div>
                </div>
            ))}
            <button className="w-full py-3 text-xs font-bold text-primary hover:underline mt-2 flex items-center justify-center gap-2">
                View Madurai City Map
                <ExternalLink size={12} />
            </button>
        </div>
    </div>
);

// Plan Your Visit CTA Component
export const PlanVisitCTA: React.FC = () => (
    <div className="orange-gradient p-8 rounded-3xl shadow-2xl relative overflow-hidden group">
        <div className="absolute -top-10 -right-10 w-40 h-40 bg-white/10 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-700" />

        <h3 className="text-2xl font-black text-white mb-3 relative z-10">Plan Your Visit</h3>
        <p className="text-white/80 text-sm mb-8 relative z-10 leading-relaxed font-medium">
            Need a personal guide or specialized rituals? We offer curated experiences for devotees.
        </p>

        <button className="w-full bg-white text-primary font-black py-4 rounded-2xl shadow-xl hover:shadow-white/20 hover:-translate-y-1 transition-all active:scale-95 flex items-center justify-center gap-3 relative z-10">
            <MessageSquare size={20} />
            Contact Official Trust
        </button>
    </div>
);
