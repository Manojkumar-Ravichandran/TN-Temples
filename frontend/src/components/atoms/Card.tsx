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
            className={`bg-white rounded-xl shadow-md overflow-hidden transition-transform hover:shadow-lg ${onClick ? 'cursor-pointer transform hover:-translate-y-1' : ''
                } ${className}`}
        >
            {image && (
                <img
                    className="h-48 w-full object-cover"
                    src={image}
                    alt={title || 'Card Image'}
                />
            )}
            <div className="p-5">
                {title && <h3 className="text-xl font-bold text-gray-900 mb-2">{title}</h3>}
                <div className="text-gray-600 text-sm">{children}</div>
            </div>
        </div>
    );
};

export default Card;
