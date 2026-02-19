'use client';

import React, { useState } from 'react';
import DashboardLayout from '@/components/templates/DashboardLayout';
import {
    ChevronRight,
    MapPin,
    Camera,
    FileText,
    Check,
    Save,
    Info,
    ChevronLeft,
    XCircle
} from 'lucide-react';
import { useRouter } from 'next/navigation';

export default function SubmitTemple() {
    const router = useRouter();
    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState({
        name: '',
        deity: '',
        description: '',
        district: 'Thanjavur',
        address: '',
        location: {
            coordinates: [79.1318, 10.7828] // [lng, lat]
        },
        images: [] as string[],
        history: '',
        timings: {
            morning: '',
            evening: '',
            specialNotes: ''
        },
        festivals: [] as { name: string, month: string, description: string }[]
    });

    const steps = [
        { id: 1, name: 'BASIC INFO', icon: Info, status: step > 1 ? 'complete' : step === 1 ? 'active' : 'pending' },
        { id: 2, name: 'LOCATION', icon: MapPin, status: step > 2 ? 'complete' : step === 2 ? 'active' : 'pending' },
        { id: 3, name: 'MEDIA', icon: Camera, status: step > 3 ? 'complete' : step === 3 ? 'active' : 'pending' },
        { id: 4, name: 'NARRATIVE', icon: FileText, status: step > 4 ? 'complete' : step === 4 ? 'active' : 'pending' },
    ];

    const handleNext = () => {
        if (step < 4) setStep(step + 1);
        else handleSubmit();
    };

    const handleBack = () => {
        if (step > 1) setStep(step - 1);
    };

    const handleSubmit = async () => {
        try {
            const userData = localStorage.getItem('user');
            if (!userData) {
                alert('Session expired. Please log in again.');
                router.push('/login');
                return;
            }

            const { token } = JSON.parse(userData);

            const response = await fetch('http://localhost:5000/api/v1/submissions', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
                body: JSON.stringify({
                    templeData: formData,
                    submissionType: 'new'
                })
            });

            if (response.ok) {
                alert('Temple submitted successfully for review!');
                router.push('/dashboard');
            } else {
                const error = await response.json();
                alert(`Error: ${error.message}`);
            }
        } catch (error) {
            console.error('Submission error:', error);
            alert('Failed to submit temple.');
        }
    };

    const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
        const files = e.target.files;
        if (!files) return;

        // Mock upload: in a real app, you'd upload to S3/Cloudinary and get a URL
        // Here we'll just add the names as placeholders to show it's working
        const newImages = Array.from(files).map(file => `https://images.unsplash.com/photo-1548013146-72479768bbaa?q=80&w=1000&auto=format&fit=crop`);
        setFormData(prev => ({
            ...prev,
            images: [...prev.images, ...newImages]
        }));
        alert(`${files.length} images added to gallery.`);
    };

    return (
        <DashboardLayout role="Contributor">
            <div className="flex flex-col h-[calc(100vh-11rem)] max-h-[calc(100vh-11rem)] space-y-4 overflow-hidden">
                {/* Header - Fixed Height */}
                <div className="flex justify-between items-end flex-shrink-0">
                    <div>
                        <h1 className="text-3xl font-black text-foreground mb-1">New Temple Submission</h1>
                        <p className="text-muted-foreground font-bold text-sm">Fill out the detailed information for cataloging.</p>
                    </div>
                    <div className="flex items-center gap-6">
                        <button className="text-xs font-black text-muted-foreground hover:text-foreground transition-colors uppercase tracking-widest">Save Draft</button>
                        <div className="h-6 w-px bg-border" />
                        <div className="flex items-center gap-2">
                            <span className="text-[10px] font-black text-primary uppercase tracking-widest">Step {step} of 4</span>
                        </div>
                    </div>
                </div>

                {/* Stepper - Fixed Height */}
                <div className="relative flex justify-between items-center max-w-4xl mx-auto px-10 w-full flex-shrink-0 py-2">
                    <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-border -translate-y-1/2 -z-10 mx-20" />
                    <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-primary -translate-y-1/2 -z-10 mx-20 transition-all duration-500" style={{ width: `${(step - 1) * 33.33}%`, transformOrigin: 'left' }} />

                    {steps.map((s) => (
                        <div key={s.id} className="flex flex-col items-center gap-2">
                            <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-all duration-500 z-10 ${s.status === 'complete' ? 'bg-primary text-white shadow-lg shadow-primary/20' :
                                s.status === 'active' ? 'bg-background border-2 border-primary text-primary shadow-xl shadow-primary/10 scale-110' :
                                    'bg-background border border-border text-muted-foreground'
                                }`}>
                                {s.status === 'complete' ? <Check size={14} strokeWidth={3} /> : <s.icon size={14} />}
                            </div>
                            <span className={`text-[8px] font-black uppercase tracking-[0.2em] ${s.status === 'active' ? 'text-primary' : 'text-muted-foreground/60'
                                }`}>{s.name}</span>
                        </div>
                    ))}
                </div>

                {/* Form Card - Flexible Height, Internal Scroll */}
                <div className="bg-secondary-bg border border-border rounded-[2.5rem] flex flex-col flex-1 overflow-hidden shadow-2xl relative">
                    <div className="flex-1 overflow-y-auto p-10 custom-scrollbar">
                        {step === 1 && (
                            <div className="space-y-10 animate-in fade-in slide-in-from-bottom-4 duration-500">
                                <div className="flex items-center gap-4">
                                    <div className="p-2.5 bg-primary/10 rounded-xl text-primary border border-primary/20">
                                        <Info size={20} />
                                    </div>
                                    <h2 className="text-xl font-black text-foreground">Basic Information</h2>
                                </div>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="space-y-3">
                                        <label className="text-[10px] font-black text-muted-foreground uppercase tracking-widest px-1">Temple Name</label>
                                        <input
                                            type="text"
                                            value={formData.name}
                                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                            placeholder="Enter temple name"
                                            className="w-full bg-background border border-border rounded-2xl p-3.5 text-foreground font-bold focus:outline-none focus:border-primary/50 transition-all placeholder:text-muted-foreground/30"
                                        />
                                    </div>
                                    <div className="space-y-3">
                                        <label className="text-[10px] font-black text-muted-foreground uppercase tracking-widest px-1">Primary Deity</label>
                                        <input
                                            type="text"
                                            value={formData.deity}
                                            onChange={(e) => setFormData({ ...formData, deity: e.target.value })}
                                            placeholder="e.g. Lord Shiva, Goddess Amman"
                                            className="w-full bg-background border border-border rounded-2xl p-3.5 text-foreground font-bold focus:outline-none focus:border-primary/50 transition-all placeholder:text-muted-foreground/30"
                                        />
                                    </div>
                                    <div className="md:col-span-2 space-y-3">
                                        <label className="text-[10px] font-black text-muted-foreground uppercase tracking-widest px-1">Short Description</label>
                                        <textarea
                                            rows={3}
                                            value={formData.description}
                                            onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                                            placeholder="Provide a brief overview of the temple..."
                                            className="w-full bg-background border border-border rounded-2xl p-3.5 text-foreground font-bold focus:outline-none focus:border-primary/50 transition-all placeholder:text-muted-foreground/30 resize-none"
                                        />
                                    </div>
                                </div>
                            </div>
                        )}

                        {step === 2 && (
                            <div className="space-y-10 animate-in fade-in slide-in-from-bottom-4 duration-500">
                                <div className="flex items-center gap-3">
                                    <div className="p-2.5 bg-primary/10 rounded-xl text-primary border border-primary/20">
                                        <MapPin size={20} />
                                    </div>
                                    <h2 className="text-xl font-black text-foreground">Temple Location Details</h2>
                                </div>

                                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                                    <div className="lg:col-span-5 space-y-6">
                                        <div className="space-y-3">
                                            <label className="text-[10px] font-black text-muted-foreground uppercase tracking-widest px-1">Primary District</label>
                                            <select
                                                value={formData.district}
                                                onChange={(e) => setFormData({ ...formData, district: e.target.value })}
                                                className="w-full bg-background border border-border rounded-2xl p-3.5 text-foreground font-bold appearance-none focus:outline-none focus:border-primary/50 transition-all shadow-sm"
                                            >
                                                <option>Thanjavur</option>
                                                <option>Madurai</option>
                                                <option>Kanchipuram</option>
                                                <option>Chennai</option>
                                                <option>Trichy</option>
                                            </select>
                                        </div>

                                        <div className="space-y-3">
                                            <label className="text-[10px] font-black text-muted-foreground uppercase tracking-widest px-1">Full Address</label>
                                            <input
                                                type="text"
                                                value={formData.address}
                                                onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                                                placeholder="Enter locality name or full address"
                                                className="w-full bg-background border border-border rounded-2xl p-3.5 text-foreground font-bold focus:outline-none focus:border-primary/50 transition-all placeholder:text-muted-foreground/30"
                                            />
                                        </div>

                                        <div className="grid grid-cols-2 gap-4">
                                            <div className="space-y-3">
                                                <label className="text-[10px] font-black text-muted-foreground uppercase tracking-widest px-1">Latitude</label>
                                                <input
                                                    type="number"
                                                    step="0.0001"
                                                    value={formData.location.coordinates[1]}
                                                    onChange={(e) => setFormData({
                                                        ...formData,
                                                        location: {
                                                            ...formData.location,
                                                            coordinates: [formData.location.coordinates[0], parseFloat(e.target.value) || 0]
                                                        }
                                                    })}
                                                    className="w-full bg-background border border-border rounded-2xl p-3 text-foreground font-bold focus:outline-none focus:border-primary/50 transition-all"
                                                />
                                            </div>
                                            <div className="space-y-3">
                                                <label className="text-[10px] font-black text-muted-foreground uppercase tracking-widest px-1">Longitude</label>
                                                <input
                                                    type="number"
                                                    step="0.0001"
                                                    value={formData.location.coordinates[0]}
                                                    onChange={(e) => setFormData({
                                                        ...formData,
                                                        location: {
                                                            ...formData.location,
                                                            coordinates: [parseFloat(e.target.value) || 0, formData.location.coordinates[1]]
                                                        }
                                                    })}
                                                    className="w-full bg-background border border-border rounded-2xl p-3 text-foreground font-bold focus:outline-none focus:border-primary/50 transition-all"
                                                />
                                            </div>
                                        </div>
                                    </div>

                                    <div className="lg:col-span-7">
                                        <div className="space-y-3 h-full flex flex-col">
                                            <label className="text-[10px] font-black text-muted-foreground uppercase tracking-widest px-1">Map Pin Placement</label>
                                            <div className="flex-1 bg-background/30 rounded-[2rem] border border-border relative overflow-hidden group/map min-h-[250px] shadow-inner">
                                                <div className="absolute inset-0 opacity-40 bg-[url('https://api.mapbox.com/styles/v1/mapbox/streets-v11/static/79.1318,10.7828,15/800x600?access_token=none')] bg-cover dark:opacity-20" />
                                                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />

                                                <div className="absolute inset-0 flex items-center justify-center">
                                                    <div className="relative">
                                                        <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center animate-pulse">
                                                            <MapPin className="text-primary" size={24} fill="currentColor" />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="absolute bottom-4 left-4 right-4 p-3 bg-background/80 backdrop-blur-md rounded-xl border border-border/50 shadow-lg">
                                                    <p className="text-[8px] font-black text-primary uppercase tracking-widest mb-0.5">Status</p>
                                                    <p className="text-[10px] font-bold text-foreground italic">Interactive mapping coming soon. Enter coordinates manually.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}

                        {step === 3 && (
                            <div className="space-y-10 animate-in fade-in slide-in-from-bottom-4 duration-500">
                                <div className="flex items-center gap-3">
                                    <div className="p-2.5 bg-primary/10 rounded-xl text-primary border border-primary/20">
                                        <Camera size={20} />
                                    </div>
                                    <h2 className="text-xl font-black text-foreground">Media & Gallery</h2>
                                </div>

                                <div
                                    onClick={() => document.getElementById('file-upload')?.click()}
                                    className="border-2 border-dashed border-border rounded-[2.5rem] p-12 flex flex-col items-center justify-center gap-6 bg-background/30 hover:bg-background/50 transition-all group/upload cursor-pointer"
                                >
                                    <div className="w-16 h-16 rounded-2xl bg-secondary-bg flex items-center justify-center text-muted-foreground group-hover/upload:scale-110 group-hover/upload:text-primary transition-all shadow-xl">
                                        <Camera size={28} />
                                    </div>
                                    <div className="text-center">
                                        <p className="text-md font-black text-foreground mb-1">Click to upload photos</p>
                                        <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">Supports JPG, PNG, WEBP (Max 5MB)</p>
                                    </div>
                                    <input
                                        id="file-upload"
                                        type="file"
                                        multiple
                                        className="hidden"
                                        onChange={handleFileUpload}
                                        accept="image/*"
                                    />
                                </div>

                                {formData.images.length > 0 && (
                                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                                        {formData.images.map((img, i) => (
                                            <div key={i} className="aspect-square rounded-2xl border border-border overflow-hidden bg-background relative group">
                                                <img src={img} alt="Upload" className="w-full h-full object-cover" />
                                                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                                                    <button
                                                        onClick={(e) => {
                                                            e.stopPropagation();
                                                            setFormData(p => ({ ...p, images: p.images.filter((_, idx) => idx !== i) }));
                                                        }}
                                                        className="text-white bg-red-500 p-2 rounded-lg hover:scale-110 transition-transform"
                                                    >
                                                        <XCircle size={16} />
                                                    </button>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                )}

                                <p className="text-[10px] font-black text-muted-foreground/60 uppercase tracking-[0.2em] text-center">Images will be stored securely in our divine archive.</p>
                            </div>
                        )}

                        {step === 4 && (
                            <div className="space-y-10 animate-in fade-in slide-in-from-bottom-4 duration-500">
                                <div className="flex items-center gap-3">
                                    <div className="p-2.5 bg-primary/10 rounded-xl text-primary border border-primary/20">
                                        <FileText size={20} />
                                    </div>
                                    <h2 className="text-xl font-black text-foreground">Historical Narrative & Logistics</h2>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                    <div className="space-y-6">
                                        <div className="space-y-3">
                                            <label className="text-[10px] font-black text-muted-foreground uppercase tracking-widest px-1">Temple History (Puranas)</label>
                                            <textarea
                                                rows={6}
                                                value={formData.history}
                                                onChange={(e) => setFormData({ ...formData, history: e.target.value })}
                                                placeholder="Elaborate on the origin, architecture and legends..."
                                                className="w-full bg-background border border-border rounded-2xl p-3.5 text-foreground font-bold focus:outline-none focus:border-primary/50 transition-all placeholder:text-muted-foreground/30 resize-none"
                                            />
                                        </div>
                                    </div>

                                    <div className="space-y-6">
                                        <div className="grid grid-cols-2 gap-4">
                                            <div className="space-y-3">
                                                <label className="text-[10px] font-black text-muted-foreground uppercase tracking-widest px-1">Morning Hours</label>
                                                <input
                                                    type="text"
                                                    value={formData.timings.morning}
                                                    onChange={(e) => setFormData({ ...formData, timings: { ...formData.timings, morning: e.target.value } })}
                                                    placeholder="e.g. 6AM - 12PM"
                                                    className="w-full bg-background border border-border rounded-2xl p-3.5 text-foreground font-bold focus:outline-none focus:border-primary/50 transition-all placeholder:text-muted-foreground/30"
                                                />
                                            </div>
                                            <div className="space-y-3">
                                                <label className="text-[10px] font-black text-muted-foreground uppercase tracking-widest px-1">Evening Hours</label>
                                                <input
                                                    type="text"
                                                    value={formData.timings.evening}
                                                    onChange={(e) => setFormData({ ...formData, timings: { ...formData.timings, evening: e.target.value } })}
                                                    placeholder="e.g. 4PM - 9PM"
                                                    className="w-full bg-background border border-border rounded-2xl p-3.5 text-foreground font-bold focus:outline-none focus:border-primary/50 transition-all placeholder:text-muted-foreground/30"
                                                />
                                            </div>
                                        </div>
                                        <div className="space-y-3">
                                            <label className="text-[10px] font-black text-muted-foreground uppercase tracking-widest px-1">Special Notes</label>
                                            <textarea
                                                rows={2}
                                                value={formData.timings.specialNotes}
                                                onChange={(e) => setFormData({ ...formData, timings: { ...formData.timings, specialNotes: e.target.value } })}
                                                placeholder="Enter any specific requirements for devotees..."
                                                className="w-full bg-background border border-border rounded-2xl p-3.5 text-foreground font-bold focus:outline-none focus:border-primary/50 transition-all placeholder:text-muted-foreground/30 resize-none"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>

                    {/* Footer Actions - Fixed Bottom of Card */}
                    <div className="px-10 py-6 border-t border-border flex justify-between items-center bg-secondary-bg flex-shrink-0">
                        <button
                            onClick={handleBack}
                            disabled={step === 1}
                            className={`flex items-center gap-2 text-sm font-black transition-all ${step === 1 ? 'opacity-0 cursor-default' : 'text-muted-foreground hover:text-foreground'}`}
                        >
                            <ChevronLeft size={16} />
                            Previous Step
                        </button>
                        <button
                            onClick={handleNext}
                            className="flex items-center gap-2 bg-gradient-to-r from-primary to-orange-600 text-white font-black px-8 py-3.5 rounded-2xl shadow-2xl shadow-primary/20 hover:scale-105 active:scale-95 transition-all group text-sm"
                        >
                            {step === 4 ? (
                                <>
                                    Submit for Review
                                    <Check size={18} className="group-hover:translate-x-1 transition-transform" />
                                </>
                            ) : (
                                <>
                                    Save & Continue
                                    <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
                                </>
                            )}
                        </button>
                    </div>
                </div>

                <style jsx global>{`
                    .custom-scrollbar::-webkit-scrollbar {
                        width: 6px;
                    }
                    .custom-scrollbar::-webkit-scrollbar-track {
                        background: transparent;
                    }
                    .custom-scrollbar::-webkit-scrollbar-thumb {
                        background: rgba(var(--primary-rgb), 0.1);
                        border-radius: 10px;
                    }
                    .custom-scrollbar::-webkit-scrollbar-thumb:hover {
                        background: rgba(var(--primary-rgb), 0.2);
                    }
                `}</style>
            </div>
        </DashboardLayout>
    );
}
