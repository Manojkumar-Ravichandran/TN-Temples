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
            {label && <label className="text-sm font-semibold text-gray-700">{label}</label>}
            <input
                type={type}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
                className={`px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 ${error ? 'border-red-500' : 'border-gray-300'
                    }`}
            />
            {error && <span className="text-xs text-red-500">{error}</span>}
        </div>
    );
};

export default Input;
