"use client";
import { useState } from 'react';
import Image from 'next/image';
import { X } from 'lucide-react';

const images = [
    { src: "/images/hero_bg.png", alt: "Travel Collage" },
    { src: "/images/tour_europe.png", alt: "Europe Tour" },
    { src: "/images/tour_asia.png", alt: "Asia Tour" },
    { src: "/images/dest_uk.png", alt: "London, UK" },
    { src: "/images/dest_france.png", alt: "Paris, France" },
    { src: "/images/dest_india.png", alt: "Taj Mahal, India" },
    { src: "/images/dest_usa.png", alt: "New York, USA" },
    { src: "/images/tour_europe.png", alt: "Venice, Italy" }, // Reusing for demo
    { src: "/images/tour_asia.png", alt: "Kyoto, Japan" }, // Reusing for demo
];

export default function Gallery() {
    const [selectedImage, setSelectedImage] = useState<string | null>(null);

    return (
        <div className="min-h-screen bg-gray-50 pb-20">
            <div className="bg-secondary py-20 text-center text-white">
                <h1 className="text-4xl md:text-6xl font-bold mb-4">Travel Gallery</h1>
                <p className="text-xl text-gray-300 max-w-2xl mx-auto px-4">
                    A glimpse into the beautiful memories we've helped create.
                </p>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="columns-1 md:columns-2 lg:columns-3 gap-4 space-y-4">
                    {images.map((img, index) => (
                        <div
                            key={index}
                            className="relative break-inside-avoid rounded-xl overflow-hidden cursor-pointer group hover:opacity-90 transition"
                            onClick={() => setSelectedImage(img.src)}
                        >
                            <Image
                                src={img.src}
                                alt={img.alt}
                                width={800}
                                height={600}
                                className="w-full h-auto object-cover transform group-hover:scale-105 transition duration-500"
                            />
                            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition flex items-center justify-center opacity-0 group-hover:opacity-100">
                                <span className="text-white font-bold text-lg drop-shadow-md">View</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Lightbox Modal */}
            {selectedImage && (
                <div className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4" onClick={() => setSelectedImage(null)}>
                    <button
                        className="absolute top-4 right-4 text-white hover:text-primary transition"
                        onClick={() => setSelectedImage(null)}
                    >
                        <X size={40} />
                    </button>
                    <div className="relative max-w-5xl w-full h-[80vh]" onClick={(e) => e.stopPropagation()}>
                        <Image
                            src={selectedImage}
                            alt="Gallery Preview"
                            fill
                            className="object-contain"
                        />
                    </div>
                </div>
            )}
        </div>
    );
}
