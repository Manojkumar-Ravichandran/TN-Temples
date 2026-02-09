'use client';

import React, { useState } from 'react';
import PublicLayout from '@/components/templates/PublicLayout';
import Input from '@/components/atoms/Input';
import Button from '@/components/atoms/Button';

export default function RequestContributor() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        reason: '',
        location: '',
    });
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Simulate API call
        console.log('Request Sent:', formData);
        setSubmitted(true);
    };

    return (
        <PublicLayout>
            <div className="max-w-2xl mx-auto py-12 px-6">
                <div className="text-center mb-12">
                    <h1 className="text-4xl font-extrabold text-orange-900 mb-4">Request Contributor Access</h1>
                    <p className="text-gray-600">
                        Join our mission to document every temple in Tamil Nadu. As a contributor, you can add new temples, suggest edits, and earn points.
                    </p>
                </div>

                {submitted ? (
                    <div className="bg-green-50 border border-green-200 rounded-2xl p-8 text-center">
                        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center text-green-600 mx-auto mb-4 text-3xl">
                            ✓
                        </div>
                        <h2 className="text-2xl font-bold text-green-900 mb-2">Request Sent Successfully!</h2>
                        <p className="text-green-700">
                            Our admin team will review your request and contact you via email once approved.
                        </p>
                        <Button
                            label="Back to Home"
                            variant="outline"
                            className="mt-6"
                            onClick={() => window.location.href = '/'}
                        />
                    </div>
                ) : (
                    <form onSubmit={handleSubmit} className="bg-white p-8 rounded-3xl shadow-xl border border-gray-100 space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <Input
                                label="Full Name"
                                placeholder="Manoj Kumar"
                                value={formData.name}
                                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            />
                            <Input
                                label="Email Address"
                                placeholder="manoj@example.com"
                                type="email"
                                value={formData.email}
                                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            />
                        </div>
                        <Input
                            label="Your Location (District)"
                            placeholder="e.g. Madurai"
                            value={formData.location}
                            onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                        />
                        <div className="flex flex-col gap-1">
                            <label className="text-sm font-semibold text-gray-700">Why do you want to be a contributor?</label>
                            <textarea
                                rows={4}
                                placeholder="Tell us about your interest in temple heritage..."
                                className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                                value={formData.reason}
                                onChange={(e) => setFormData({ ...formData, reason: e.target.value })}
                            ></textarea>
                        </div>
                        <Button
                            label="Submit Request"
                            type="submit"
                            className="w-full py-4 text-lg font-bold"
                        />
                        <p className="text-xs text-center text-gray-400 mt-4">
                            By submitting, you agree to our terms of data accuracy and heritage preservation.
                        </p>
                    </form>
                )}
            </div>
        </PublicLayout>
    );
}
