'use client';

import React from 'react';
import Image from 'next/image';
import { Deity } from '@/data/deities';

interface PopularDeityCardProps {
    deity: Deity;
}

const PopularDeityCard = ({ deity }: PopularDeityCardProps) => {
    return (
        <div className="group cursor-pointer">
            <div className="relative h-[400px] rounded-3xl overflow-hidden mb-4 bg-secondary-bg">
                <Image
                    src={deity.image}
                    alt={deity.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />

                {/* Sect Tag */}
                <div className="absolute bottom-6 left-6">
                    <span className="px-3 py-1 bg-primary text-white text-[10px] font-black uppercase tracking-widest rounded-lg">
                        {deity.sect}
                    </span>
                </div>
            </div>

            <div>
                <h3 className="text-xl font-black text-foreground mb-1 group-hover:text-primary transition-colors">
                    {deity.name}
                </h3>
                <p className="text-muted-foreground text-sm font-medium">
                    {deity.count.toLocaleString()} Temples registered
                </p>
            </div>
        </div>
    );
};

export default PopularDeityCard;
