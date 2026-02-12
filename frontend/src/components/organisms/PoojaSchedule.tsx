'use client';

import React from 'react';
import { Clock } from 'lucide-react';

interface Ritual {
    name: string;
    time: string;
    significance: string;
}

interface PoojaScheduleProps {
    rituals: Ritual[];
}

const PoojaSchedule: React.FC<PoojaScheduleProps> = ({ rituals }) => {
    return (
        <section className="py-12">
            <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 bg-orange-500/10 rounded-2xl flex items-center justify-center">
                    <Clock className="text-primary" size={24} />
                </div>
                <h2 className="text-3xl font-black tracking-tight">
                    Timings & Daily Pooja Schedule
                </h2>
            </div>

            <div className="overflow-hidden rounded-2xl border border-border bg-secondary-bg/50 backdrop-blur-sm">
                <table className="w-full text-left border-collapse">
                    <thead>
                        <tr className="border-b border-border bg-secondary-bg/80">
                            <th className="px-6 py-4 text-xs font-bold uppercase tracking-widest text-muted-foreground">Ritual Name</th>
                            <th className="px-6 py-4 text-xs font-bold uppercase tracking-widest text-muted-foreground">Timing</th>
                            <th className="px-6 py-4 text-xs font-bold uppercase tracking-widest text-muted-foreground">Significance</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-border">
                        {rituals.map((ritual, index) => (
                            <tr key={index} className="hover:bg-white/5 transition-colors group">
                                <td className="px-6 py-5 font-bold text-primary group-hover:translate-x-1 transition-transform">{ritual.name}</td>
                                <td className="px-6 py-5 font-medium text-foreground">{ritual.time}</td>
                                <td className="px-6 py-5 text-muted-foreground">{ritual.significance}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <p className="mt-4 text-sm text-muted-foreground italic">
                Note: Timings may vary during festival days and solar/lunar eclipses.
            </p>
        </section>
    );
};

export default PoojaSchedule;
