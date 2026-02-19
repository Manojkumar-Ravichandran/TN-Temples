'use client';

import React from 'react';
import { Deity } from '@/data/deities';

interface DeityCategoryCardProps {
    deity: Deity;
}

const DeityCategoryCard = ({ deity }: DeityCategoryCardProps) => {
    return (
        <div className="flex items-center gap-6 p-6 bg-secondary-bg/50 border border-border rounded-3xl hover:border-primary/20 hover:bg-secondary-bg transition-all group cursor-pointer">
            <div className="w-16 h-16 rounded-2xl bg-white dark:bg-zinc-800 flex items-center justify-center text-2xl shadow-sm group-hover:scale-110 transition-transform">
                {deity.icon || '🏛️'}
            </div>

            <div>
                <h4 className="text-lg font-bold text-foreground mb-0.5 group-hover:text-primary transition-colors">
                    {deity.name}
                </h4>
                <p className="text-muted-foreground text-xs font-semibold uppercase tracking-wider">
                    {deity.count.toLocaleString()} Temples
                </p>
            </div>
        </div>
    );
};

export default DeityCategoryCard;
