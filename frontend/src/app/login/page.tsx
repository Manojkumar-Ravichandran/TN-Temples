'use client';

import React, { useState } from 'react';
import PublicLayout from '@/components/templates/PublicLayout';
import Input from '@/components/atoms/Input';
import Button from '@/components/atoms/Button';
import { useRouter } from 'next/navigation';

export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const router = useRouter();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setError('');

        try {
            const response = await fetch('http://localhost:5000/api/v1/auth/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, password }),
            });

            const data = await response.json();

            if (response.ok) {
                // Store user info and token in localStorage for session persistence
                localStorage.setItem('user', JSON.stringify(data));

                // Redirect based on role
                if (data.role === 'Admin') {
                    router.push('/admin');
                } else {
                    router.push('/dashboard');
                }
            } else {
                setError(data.message || 'Login failed');
            }
        } catch (err) {
            setError('Connection error. Is the backend running?');
        } finally {
            setLoading(false);
        }
    };

    return (
        <PublicLayout>
            <div className="max-w-md mx-auto py-20 px-6">
                <div className="bg-white p-10 rounded-[2.5rem] shadow-2xl border border-gray-100">
                    <div className="text-center mb-10">
                        <h1 className="text-3xl font-black text-gray-900 mb-2">Welcome Back</h1>
                        <p className="text-gray-500">Log in to manage your contributions</p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-6">
                        <Input
                            label="Email Address"
                            type="email"
                            placeholder="admin@tntemples.com"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="bg-gray-50 border-transparent focus:bg-white transition-all"
                        />
                        <Input
                            label="Password"
                            type="password"
                            placeholder="••••••••"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="bg-gray-50 border-transparent focus:bg-white transition-all"
                        />

                        {error && (
                            <div className="p-4 bg-red-50 text-red-600 rounded-xl text-sm font-medium border border-red-100 animate-pulse">
                                {error}
                            </div>
                        )}

                        <Button
                            label={loading ? "Authenticating..." : "Login to Portal"}
                            type="submit"
                            disabled={loading}
                            className="w-full py-4 text-lg font-bold shadow-lg shadow-primary/20"
                        />

                        <div className="text-center mt-6">
                            <p className="text-sm text-gray-400">
                                Don't have access? <a href="/request-contributor" className="text-primary font-bold hover:underline">Request Contributor Access</a>
                            </p>
                        </div>
                    </form>
                </div>

                {/* Quick Help for User */}
                <div className="mt-8 text-center bg-primary/5 p-4 rounded-2xl border border-primary/10">
                    <p className="text-xs text-primary">
                        <b>Admin Login:</b> admin@tntemples.com / password123
                    </p>
                </div>
            </div>
        </PublicLayout>
    );
}
