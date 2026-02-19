'use client';

import React, { useEffect, useState } from 'react';
import PublicLayout from '@/components/templates/PublicLayout';
import Card from '@/components/atoms/Card';
import { MapPin, Search, Loader2, Filter, ChevronLeft, ChevronRight } from 'lucide-react';
import Link from 'next/link';

interface Temple {
    _id: string;
    name: string;
    district: string;
    deity: string;
    images: string[];
    slug: string;
}

export default function TemplesPage() {
    const [temples, setTemples] = useState<Temple[]>([]);
    const [loading, setLoading] = useState(true);
    const [searchQuery, setSearchQuery] = useState('');
    const [district, setDistrict] = useState('');
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);

    const districts = ['Chennai', 'Madurai', 'Coimbatore', 'Thanjavur', 'Trichy', 'Kanchipuram'];

    useEffect(() => {
        const fetchTemples = async () => {
            try {
                setLoading(true);
                const queryParams = new URLSearchParams({
                    q: searchQuery,
                    district: district,
                    page: page.toString(),
                    limit: '12'
                });
                const response = await fetch(`http://localhost:5000/api/v1/temples?${queryParams}`);
                const data = await response.json();
                if (response.ok) {
                    setTemples(data.temples);
                    setTotalPages(data.totalPages);
                }
            } catch (error) {
                console.error('Error fetching temples:', error);
            } finally {
                setLoading(false);
            }
        };

        const debounce = setTimeout(fetchTemples, 300);
        return () => clearTimeout(debounce);
    }, [searchQuery, district, page]);

    return (
        <PublicLayout>
            <div className="bg-background pt-32 pb-24">
                <div className="container mx-auto px-6">
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 mb-12">
                        <div>
                            <h1 className="text-4xl md:text-5xl font-black text-foreground tracking-tight mb-2">Explore Temples</h1>
                            <p className="text-muted-foreground font-bold italic">Discover the sacred landmarks of Tamil Nadu.</p>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
                            <div className="relative flex-1 sm:w-80">
                                <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" size={20} />
                                <input
                                    type="text"
                                    placeholder="Search by name or deity..."
                                    value={searchQuery}
                                    onChange={(e) => { setSearchQuery(e.target.value); setPage(1); }}
                                    className="w-full bg-secondary-bg border border-border rounded-2xl py-4 pl-12 pr-4 text-sm focus:outline-none focus:border-primary/50 transition-all font-bold"
                                />
                            </div>
                            <div className="relative">
                                <Filter className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" size={18} />
                                <select
                                    value={district}
                                    onChange={(e) => { setDistrict(e.target.value); setPage(1); }}
                                    className="bg-secondary-bg border border-border rounded-2xl py-4 pl-12 pr-10 text-sm font-black appearance-none focus:outline-none focus:border-primary/50 transition-all uppercase tracking-widest"
                                >
                                    <option value="">All Districts</option>
                                    {districts.map(d => (
                                        <option key={d} value={d}>{d}</option>
                                    ))}
                                </select>
                            </div>
                        </div>
                    </div>

                    {loading ? (
                        <div className="flex flex-col items-center justify-center py-40 gap-4">
                            <Loader2 className="w-12 h-12 text-primary animate-spin" />
                            <p className="text-muted-foreground font-black uppercase tracking-widest text-xs">Summoning Records...</p>
                        </div>
                    ) : (
                        <>
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                                {temples.map((temple) => (
                                    <Link key={temple._id} href={`/temple/${temple.slug}`}>
                                        <Card
                                            title={temple.name}
                                            tag={temple.district}
                                            image={temple.images[0] || 'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&q=80&w=1000'}
                                            className="h-[450px]"
                                        >
                                            <div className="flex items-center gap-2">
                                                <MapPin size={14} className="text-primary fill-primary" strokeWidth={3} />
                                                <span className="font-bold text-xs">{temple.deity}</span>
                                            </div>
                                        </Card>
                                    </Link>
                                ))}
                            </div>

                            {temples.length === 0 && (
                                <div className="text-center py-40 bg-secondary-bg/30 rounded-[3rem] border border-border border-dashed">
                                    <p className="text-muted-foreground font-black text-xl mb-2">No Sacred Sites Found</p>
                                    <p className="text-muted-foreground/60 font-bold italic">Try adjusting your search or filters.</p>
                                </div>
                            )}

                            {totalPages > 1 && (
                                <div className="mt-16 flex justify-center items-center gap-4">
                                    <button
                                        disabled={page === 1}
                                        onClick={() => setPage(page - 1)}
                                        className="p-4 bg-secondary-bg border border-border rounded-2xl disabled:opacity-30 hover:bg-accent/10 transition-all shadow-sm"
                                    >
                                        <ChevronLeft size={24} />
                                    </button>
                                    <div className="bg-secondary-bg border border-border px-8 py-3 rounded-2xl font-black">
                                        {page} / {totalPages}
                                    </div>
                                    <button
                                        disabled={page === totalPages}
                                        onClick={() => setPage(page + 1)}
                                        className="p-4 bg-secondary-bg border border-border rounded-2xl disabled:opacity-30 hover:bg-accent/10 transition-all shadow-sm"
                                    >
                                        <ChevronRight size={24} />
                                    </button>
                                </div>
                            )}
                        </>
                    )}
                </div>
            </div>
        </PublicLayout>
    );
}
