'use client';

import Image from 'next/image';
import { useState } from 'react';

interface TripGalleryProps {
  images: string[];
  title: string;
}

export default function TripGallery({ images, title }: TripGalleryProps) {
  const [selectedIndex, setSelectedIndex] = useState(0);

  if (images.length === 0) return null;

  return (
    <div>
      {/* Main image */}
      <div className="relative aspect-video rounded-2xl overflow-hidden mb-4">
        <Image
          src={images[selectedIndex]}
          alt={`${title} - Photo ${selectedIndex + 1}`}
          fill
          className="object-cover"
          sizes="(max-width: 1024px) 100vw, 66vw"
          priority
        />
      </div>

      {/* Thumbnails */}
      {images.length > 1 && (
        <div className="flex gap-3 overflow-x-auto pb-2">
          {images.map((img, i) => (
            <button
              key={i}
              type="button"
              onClick={() => setSelectedIndex(i)}
              className={`relative w-20 h-20 rounded-lg overflow-hidden flex-shrink-0 ring-2 transition-all ${
                i === selectedIndex ? 'ring-emerald-600' : 'ring-transparent hover:ring-stone-300'
              }`}
            >
              <Image
                src={img}
                alt={`${title} thumbnail ${i + 1}`}
                fill
                className="object-cover"
                sizes="80px"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
