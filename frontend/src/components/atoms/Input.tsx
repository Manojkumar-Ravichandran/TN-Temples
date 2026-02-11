'use client';

import React from 'react';

interface InputProps {
    label?: string;
    placeholder?: string;
    type?: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    className?: string;
    error?: string;
}

const Input: React.FC<InputProps> = ({
    label,
    placeholder,
    type = 'text',
    value,
    onChange,
    className = '',
    error,
}) => {
    return (
        <div className={`flex flex-col gap-1 ${className}`}>
            {label && <label className="text-sm font-semibold text-muted-foreground ml-1">{label}</label>}
            <input
                type={type}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
                className={`px-5 py-3 bg-secondary-bg border rounded-2xl focus:outline-none focus:ring-2 focus:ring-accent/50 backdrop-blur-md transition-all ${error ? 'border-red-500/50' : 'border-border hover:border-accent/50'
                    } text-foreground placeholder:text-muted-foreground`}
            />
            {error && <span className="text-xs text-red-500">{error}</span>}
        </div>
    );
};

export default Input;
