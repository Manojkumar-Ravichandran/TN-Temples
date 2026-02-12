'use client';

import React from 'react';
import Button from '../atoms/Button';
import { MapPin, BookOpen, Star } from 'lucide-react';

interface TempleHeroProps {
    name: string;
    description: string;
    image: string;
    tags: string[];
}

const TempleHero: React.FC<TempleHeroProps> = ({ name, description, image, tags }) => {
    return (
        <section className="relative w-full h-[500px] md:h-[600px] overflow-hidden rounded-3xl group">
            {/* Background Image with Overlay */}
            <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                style={{ backgroundImage: `url(${image})` }}
            />
            <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/40 to-transparent" />

            {/* Content */}
            <div className="absolute inset-0 flex flex-col justify-end p-8 md:p-16 max-w-4xl">
                <div className="flex flex-wrap gap-2 mb-4">
                    {tags.map((tag, index) => (
                        <span
                            key={index}
                            className="px-3 py-1 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-[10px] font-bold uppercase tracking-wider text-white"
                        >
                            {tag}
                        </span>
                    ))}
                </div>

                <h1 className="text-5xl md:text-7xl font-black text-white mb-4 tracking-tighter">
                    {name}
                </h1>

                <p className="text-lg md:text-xl text-white/80 max-w-2xl mb-8 leading-relaxed font-medium">
                    {description}
                </p>

                <div className="flex flex-wrap gap-4">
                    <Button
                        label="Book Pooja"
                        className="bg-primary hover:bg-primary/90 text-white border-none py-4 px-8"
                    />
                    <button className="flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 text-white px-8 py-3.5 rounded-full font-bold transition-all active:scale-95">
                        <MapPin size={20} className="text-primary" />
                        <span>Get Directions</span>
                    </button>
                </div>
            </div>
        </section>
    );
};

export default TempleHero;
