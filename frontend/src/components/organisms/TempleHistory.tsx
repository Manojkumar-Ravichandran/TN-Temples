'use client';

import React from 'react';
import { Quote } from 'lucide-react';

interface TempleHistoryProps {
    history: string[];
    featuredQuote?: string;
}

const TempleHistory: React.FC<TempleHistoryProps> = ({ history, featuredQuote }) => {
    return (
        <section className="py-12">
            <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center">
                    <span className="text-2xl">📜</span>
                </div>
                <h2 className="text-3xl font-black tracking-tight">
                    Ancient History & Significance
                </h2>
            </div>

            <div className="space-y-6 text-muted-foreground leading-relaxed text-lg">
                {history.map((paragraph, index) => (
                    <p key={index} dangerouslySetInnerHTML={{ __html: paragraph }} />
                ))}
            </div>

            {featuredQuote && (
                <div className="mt-12 p-8 glass-card border-l-4 border-l-primary relative overflow-hidden">
                    <Quote className="absolute -top-4 -right-4 w-24 h-24 text-primary/5 -rotate-12" />
                    <p className="text-xl italic font-medium text-foreground relative z-10">
                        "{featuredQuote}"
                    </p>
                </div>
            )}
        </section>
    );
};

export default TempleHistory;
