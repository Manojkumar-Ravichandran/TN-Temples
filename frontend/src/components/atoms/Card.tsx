'use client';

import React from 'react';

interface CardProps {
    title?: string;
    children: React.ReactNode;
    className?: string;
    onClick?: () => void;
    image?: string;
}

const Card: React.FC<CardProps> = ({
    title,
    children,
    className = '',
    onClick,
    image,
}) => {
    return (
        <div
            onClick={onClick}
            className={`group bg-secondary-bg rounded-2xl overflow-hidden border border-border hover:border-accent/20 transition-all duration-500 hover:shadow-2xl hover:shadow-accent/10 ${onClick ? 'cursor-pointer active:scale-[0.98]' : ''
                } ${className}`}
        >
            <div className="relative">
                {image && (
                    <div className="relative h-64 overflow-hidden">
                        <img
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                            src={image}
                            alt={title || 'Card Image'}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
                    </div>
                )}
                <div className={`p-6 ${image ? 'absolute bottom-0 left-0 right-0' : ''}`}>
                    {title && <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-accent transition-colors tracking-tight">{title}</h3>}
                    <div className="text-muted-foreground text-sm leading-relaxed">{children}</div>
                </div>
            </div>
        </div>
    );
};

export default Card;
