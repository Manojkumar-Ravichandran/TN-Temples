'use client';

import React from 'react';
import { Image as ImageIcon, Plus } from 'lucide-react';

interface TempleGalleryProps {
    images: string[];
    totalPhotos: number;
}

const TempleGallery: React.FC<TempleGalleryProps> = ({ images, totalPhotos }) => {
    // We expect at least 4 images for the designed layout, but we'll handle fewer
    const displayImages = images.slice(0, 4);

    return (
        <section className="py-12">
            <div className="flex justify-between items-center mb-8">
                <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center text-primary">
                        <ImageIcon size={24} />
                    </div>
                    <h2 className="text-3xl font-black tracking-tight">Image Gallery</h2>
                </div>
                <button className="text-primary font-bold text-sm hover:underline">
                    View All {totalPhotos} Photos
                </button>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 h-[400px]">
                {/* Main Large Image */}
                <div className="col-span-2 row-span-2 rounded-3xl overflow-hidden group relative">
                    <img
                        src={images[0]}
                        alt="Temple main"
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors" />
                </div>

                {/* Smaller Images */}
                <div className="rounded-3xl overflow-hidden group relative">
                    <img
                        src={images[1] || images[0]}
                        alt="Temple detail 1"
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                </div>

                <div className="rounded-3xl overflow-hidden group relative">
                    <img
                        src={images[2] || images[0]}
                        alt="Temple detail 2"
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                </div>

                <div className="rounded-3xl overflow-hidden group relative">
                    <img
                        src={images[3] || images[0]}
                        alt="Temple detail 3"
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                </div>

                {/* More Photos Overlay */}
                <div className="rounded-3xl overflow-hidden group relative cursor-pointer">
                    <img
                        src={images[4] || images[0]}
                        alt="More photos"
                        className="w-full h-full object-cover blur-sm brightness-50"
                    />
                    <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
                        <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center mb-2">
                            <Plus size={20} />
                        </div>
                        <span className="font-black text-xl">+{totalPhotos - 4} More</span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TempleGallery;
