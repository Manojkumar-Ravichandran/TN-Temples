'use client';

import React, { useState } from 'react';
import DashboardLayout from '@/components/templates/DashboardLayout';
import {
    ChevronRight,
    MapPin,
    Camera,
    FileText,
    Check,
    Save
} from 'lucide-react';

export default function SubmitTemple() {
    const [step, setStep] = useState(2); // Start at step 2 as per mockup

    const steps = [
        { id: 1, name: 'BASIC INFO', icon: Check, status: 'complete' },
        { id: 2, name: 'LOCATION', icon: MapPin, status: 'active' },
        { id: 3, name: 'MEDIA', icon: Camera, status: 'pending' },
        { id: 4, name: 'NARRATIVE', icon: FileText, status: 'pending' },
    ];

    return (
        <DashboardLayout role="Contributor">
            <div className="space-y-10 group/form">
                {/* Header */}
                <div className="flex justify-between items-end">
                    <div>
                        <h1 className="text-4xl font-black text-foreground mb-2">New Temple Submission</h1>
                        <p className="text-muted-foreground font-bold">Fill out the detailed information for cataloging.</p>
                    </div>
                    <div className="flex items-center gap-6">
                        <button className="text-sm font-black text-muted-foreground hover:text-foreground transition-colors">Save Draft</button>
                        <div className="h-6 w-px bg-border" />
                        <div className="flex items-center gap-2">
                            <span className="text-[10px] font-black text-primary uppercase tracking-widest">Step {step} of 4</span>
                        </div>
                    </div>
                </div>

                {/* Stepper */}
                <div className="relative flex justify-between items-center max-w-4xl mx-auto px-10">
                    <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-border -translate-y-1/2 -z-10 mx-20" />
                    <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-primary -translate-y-1/2 -z-10 mx-20" style={{ width: '33%', transformOrigin: 'left' }} />

                    {steps.map((s) => (
                        <div key={s.id} className="flex flex-col items-center gap-3">
                            <div className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-500 z-10 ${s.status === 'complete' ? 'bg-primary text-white shadow-lg shadow-primary/20' :
                                s.status === 'active' ? 'bg-background border-2 border-primary text-primary shadow-xl shadow-primary/10 scale-110' :
                                    'bg-background border border-border text-muted-foreground'
                                }`}>
                                {s.status === 'complete' ? <Check size={18} strokeWidth={3} /> : <s.icon size={18} />}
                            </div>
                            <span className={`text-[10px] font-black uppercase tracking-[0.2em] ${s.status === 'active' ? 'text-primary' : 'text-muted-foreground/60'
                                }`}>{s.name}</span>
                        </div>
                    ))}
                </div>

                {/* Form Card */}
                <div className="bg-secondary-bg border border-border rounded-[3rem] p-12 overflow-hidden shadow-2xl relative">
                    <div className="mb-10 flex items-center gap-4">
                        <div className="p-3 bg-primary/10 rounded-xl text-primary border border-primary/20">
                            <MapPin size={24} />
                        </div>
                        <h2 className="text-2xl font-black text-foreground">Temple Location Details</h2>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                        <div className="lg:col-span-5 space-y-8">
                            <div className="space-y-4">
                                <label className="text-[10px] font-black text-muted-foreground uppercase tracking-widest px-1">Primary District</label>
                                <select className="w-full bg-background border border-border rounded-2xl p-4 text-foreground font-bold appearance-none focus:outline-none focus:border-primary/50 transition-all">
                                    <option>Thanjavur</option>
                                    <option>Madurai</option>
                                    <option>Kanchipuram</option>
                                </select>
                            </div>

                            <div className="space-y-4">
                                <label className="text-[10px] font-black text-muted-foreground uppercase tracking-widest px-1">Town / Village</label>
                                <input
                                    type="text"
                                    placeholder="Enter locality name"
                                    className="w-full bg-background border border-border rounded-2xl p-4 text-foreground font-bold focus:outline-none focus:border-primary/50 transition-all placeholder:text-muted-foreground/30"
                                />
                            </div>

                            <div className="grid grid-cols-2 gap-6">
                                <div className="space-y-4">
                                    <label className="text-[10px] font-black text-muted-foreground uppercase tracking-widest px-1">Latitude</label>
                                    <input
                                        type="text"
                                        value="10.7828° N"
                                        readOnly
                                        className="w-full bg-background/50 border border-border rounded-2xl p-4 text-foreground font-bold opacity-70 cursor-not-allowed"
                                    />
                                </div>
                                <div className="space-y-4">
                                    <label className="text-[10px] font-black text-muted-foreground uppercase tracking-widest px-1">Longitude</label>
                                    <input
                                        type="text"
                                        value="79.1318° E"
                                        readOnly
                                        className="w-full bg-background/50 border border-border rounded-2xl p-4 text-foreground font-bold opacity-70 cursor-not-allowed"
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="lg:col-span-7">
                            <div className="space-y-4 h-full flex flex-col">
                                <label className="text-[10px] font-black text-muted-foreground uppercase tracking-widest px-1">Map Pin Placement</label>
                                <div className="flex-1 bg-background/30 rounded-[2.5rem] border border-border relative overflow-hidden group/map min-h-[350px] shadow-inner">
                                    {/* Mock Map Background */}
                                    <div className="absolute inset-0 opacity-40 bg-[url('https://api.mapbox.com/styles/v1/mapbox/streets-v11/static/79.1318,10.7828,15/800x600?access_token=none')] bg-cover dark:opacity-20 dark:bg-[url('https://api.mapbox.com/styles/v1/mapbox/dark-v10/static/79.1318,10.7828,15/800x600?access_token=none')]" />
                                    <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />

                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <div className="relative">
                                            <div className="absolute -top-12 left-1/2 -translate-x-1/2 bg-primary text-white text-[10px] font-black px-3 py-1.5 rounded-lg shadow-xl whitespace-nowrap opacity-0 group-hover/map:opacity-100 transition-all">
                                                DRAG TO ADJUST
                                            </div>
                                            <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center animate-pulse">
                                                <MapPin className="text-primary" size={32} fill="currentColor" />
                                            </div>
                                        </div>
                                    </div>

                                    <div className="absolute bottom-8 left-8 right-8 flex justify-between items-center">
                                        <p className="text-[10px] font-bold text-muted-foreground italic">Drag pin to adjust location</p>
                                        <button className="bg-primary/10 border border-primary/20 text-primary text-[10px] font-black px-4 py-2 rounded-lg hover:bg-primary hover:text-white transition-all">
                                            CALIBRATE
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Footer Actions */}
                    <div className="mt-16 pt-10 border-t border-border flex justify-between items-center">
                        <button className="flex items-center gap-3 text-muted-foreground hover:text-foreground font-black transition-all">
                            <span className="text-xl">←</span>
                            Previous Step
                        </button>
                        <button className="flex items-center gap-3 bg-gradient-to-r from-primary to-orange-600 text-white font-black px-10 py-4 rounded-2xl shadow-2xl shadow-primary/20 hover:scale-105 active:scale-95 transition-all">
                            Save & Continue
                            <ChevronRight size={20} />
                        </button>
                    </div>
                </div>
            </div>
        </DashboardLayout>
    );
}
