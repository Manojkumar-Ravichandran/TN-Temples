'use client';

import React from 'react';

interface ButtonProps {
    label: string;
    onClick?: () => void;
    type?: 'button' | 'submit' | 'reset';
    variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
    className?: string;
    disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({
    label,
    onClick,
    type = 'button',
    variant = 'primary',
    className = '',
    disabled = false,
}) => {
    const baseStyles = 'px-4 py-2 rounded-md font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2';
    const variants = {
        primary: 'bg-orange-600 text-white hover:bg-orange-700 focus:ring-orange-500',
        secondary: 'bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500',
        outline: 'border-2 border-orange-600 text-orange-600 hover:bg-orange-50 hover:border-orange-700 focus:ring-orange-500',
        ghost: 'text-gray-600 hover:bg-gray-100 focus:ring-gray-400',
    };

    return (
        <button
            type={type}
            onClick={onClick}
            disabled={disabled}
            className={`${baseStyles} ${variants[variant]} ${className} ${disabled ? 'opacity-50 cursor-not-allowed' : ''}`}
        >
            {label}
        </button>
    );
};

export default Button;
