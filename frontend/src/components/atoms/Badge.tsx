import React from 'react';

interface BadgeProps {
    text: string;
    variant?: 'success' | 'warning' | 'error' | 'info';
    className?: string;
}

const Badge: React.FC<BadgeProps> = ({
    text,
    variant = 'info',
    className = '',
}) => {
    const variants = {
        success: 'bg-success/10 text-success border border-success/20',
        warning: 'bg-warning/10 text-warning border border-warning/20',
        error: 'bg-error/10 text-error border border-error/20',
        info: 'bg-info/10 text-info border border-info/20',
    };

    return (
        <span
            className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${variants[variant]} ${className}`}
        >
            {text}
        </span>
    );
};

export default Badge;
