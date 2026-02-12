'use client';

import React from 'react';

interface CardProps {
    title?: string;
    tag?: string;
    children: React.ReactNode;
    className?: string;
    onClick?: () => void;
    image?: string;
}

const Card: React.FC<CardProps> = ({
    title,
    tag,
    children,
    className = '',
    onClick,
    image,
}) => {
    return (
        <div
            onClick={onClick}
            className={`group relative bg-secondary-bg rounded-[2.5rem] overflow-hidden border border-white/5 hover:border-primary/40 transition-all duration-700 hover:shadow-[0_20px_50px_rgba(236,127,19,0.15)] ${onClick ? 'cursor-pointer active:scale-[0.98]' : ''
                } ${className}`}
        >
            {image && (
                <>
                    <div className="absolute inset-0 overflow-hidden">
                        <img
                            className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                            src={image}
                            alt={title || 'Card Image'}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent opacity-90" />
                    </div>
                </>
            )}
            <div className={`relative h-full flex flex-col justify-end p-8 sm:p-9 z-10 transition-all duration-300`}>
                {tag && (
                    <span className="text-primary font-black text-[10px] uppercase tracking-[0.2em] mb-2 block">
                        {tag}
                    </span>
                )}
                {title && (
                    <h3 className="text-2xl sm:text-3xl font-black text-white mb-2 tracking-tight leading-tight group-hover:translate-x-1 transition-transform duration-500">
                        {title}
                    </h3>
                )}
                <div className="text-white/60 text-[11px] font-bold group-hover:text-white/90 transition-colors">
                    {children}
                </div>
            </div>
        </div>
    );
};

export default Card;
