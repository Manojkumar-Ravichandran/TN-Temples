'use client';

import React from 'react';
import PublicLayout from '@/components/templates/PublicLayout';
import Card from '@/components/atoms/Card';
import Button from '@/components/atoms/Button';
import Input from '@/components/atoms/Input';

export default function Home() {
  return (
    <PublicLayout>
      {/* Hero Section */}
      <section className="text-center py-20 bg-orange-50 rounded-3xl mb-12 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
          {/* Subtle patterns could go here */}
        </div>
        <h1 className="text-5xl md:text-6xl font-extrabold text-orange-900 mb-6 drop-shadow-sm">
          Discover the Divine Heritage of <br />
          <span className="text-orange-600 italic">Tamil Nadu</span>
        </h1>
        <p className="text-xl text-gray-700 max-w-2xl mx-auto mb-10 px-4">
          Explore over 50,000 temples, their rich history, sacred rituals, and vibrant festivals across the spiritual heartland of India.
        </p>

        <div className="max-w-xl mx-auto flex gap-4 px-4">
          <Input
            value=""
            onChange={() => { }}
            placeholder="Search by temple name, deity, or district..."
            className="flex-1"
          />
          <Button label="Search" className="px-8" />
        </div>
      </section>

      {/* Featured Districts */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 border-l-4 border-orange-600 pl-4">Explore by District</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {['Madurai', 'Thanjavur', 'Kanchipuram', 'Chennai', 'Trichy', 'Kanyakumari'].map((district) => (
            <div key={district} className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md text-center transition-all cursor-pointer border border-transparent hover:border-orange-200 group">
              <div className="w-16 h-16 bg-orange-100 rounded-full mx-auto mb-4 flex items-center justify-center text-orange-600 group-hover:bg-orange-600 group-hover:text-white transition-colors">
                <span className="text-2xl">🏛️</span>
              </div>
              <h3 className="font-bold text-gray-800">{district}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Temples Teaser */}
      <section className="mb-16">
        <div className="flex justify-between items-end mb-8">
          <h2 className="text-3xl font-bold text-gray-900 border-l-4 border-orange-600 pl-4">Featured Temples</h2>
          <Link href="/temples" className="text-orange-600 font-bold hover:underline mb-1">View All &rarr;</Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Card
            title="Meenakshi Amman Temple"
            image="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1d/Meenakshi_Amman_Temple_Madurai.jpg/1200px-Meenakshi_Amman_Temple_Madurai.jpg"
          >
            <p className="mb-4">One of the most famous Hindu temples in the world, dedicated to Goddess Meenakshi.</p>
            <div className="flex justify-between items-center text-xs text-gray-400">
              <span>📍 Madurai</span>
              <span>🕒 5:00 AM - 10:00 PM.</span>
            </div>
          </Card>

          <Card
            title="Brihadeeswarar Temple"
            image="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Thanjavur_Big_Temple_Entrance.jpg/1200px-Thanjavur_Big_Temple_Entrance.jpg"
          >
            <p className="mb-4">A UNESCO World Heritage site and a brilliant example of Chola architecture.</p>
            <div className="flex justify-between items-center text-xs text-gray-400">
              <span>📍 Thanjavur</span>
              <span>🕒 6:00 AM - 9:00 PM</span>
            </div>
          </Card>

          <Card
            title="Ramanathaswamy Temple"
            image="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/Rameswaram_Temple_Hall.jpg/1200px-Rameswaram_Temple_Hall.jpg"
          >
            <p className="mb-4">One of the twelve Jyotirlinga temples, famous for its magnificent corridors.</p>
            <div className="flex justify-between items-center text-xs text-gray-400">
              <span>📍 Rameswaram</span>
              <span>🕒 5:00 AM - 9:00 PM</span>
            </div>
          </Card>
        </div>
      </section>
    </PublicLayout>
  );
}

// Helper Link component because next/link doesn't work well in direct write_to_file without imports
import Link from 'next/link';
