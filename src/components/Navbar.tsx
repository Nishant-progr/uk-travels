"use client";
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="bg-white/90 backdrop-blur-md shadow-sm fixed w-full z-50 transition-all duration-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-20">
                    <div className="flex items-center">
                        <Link href="/" className="text-3xl font-bold text-primary tracking-tight">
                            UK Travels
                        </Link>
                    </div>
                    <div className="hidden md:flex items-center space-x-8">
                        <Link href="/" className="text-gray-700 hover:text-primary font-medium transition">Home</Link>
                        <Link href="/about" className="text-gray-700 hover:text-primary font-medium transition">About</Link>
                        <Link href="/destinations" className="text-gray-700 hover:text-primary font-medium transition">Destinations</Link>
                        <Link href="/tours" className="text-gray-700 hover:text-primary font-medium transition">Tours</Link>
                        <Link href="/gallery" className="text-gray-700 hover:text-primary font-medium transition">Gallery</Link>
                        <Link href="/blog" className="text-gray-700 hover:text-primary font-medium transition">Blog</Link>
                        <Link href="/contact" className="text-gray-700 hover:text-primary font-medium transition">Contact</Link>
                        <Link href="/book" className="bg-primary text-white px-6 py-2.5 rounded-full hover:bg-sky-600 transition shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
                            Book Now
                        </Link>
                    </div>
                    <div className="md:hidden flex items-center">
                        <button onClick={() => setIsOpen(!isOpen)} className="text-gray-700 hover:text-primary">
                            {isOpen ? <X size={28} /> : <Menu size={28} />}
                        </button>
                    </div>
                </div>
            </div>
            {isOpen && (
                <div className="md:hidden bg-white border-t">
                    <div className="px-4 pt-2 pb-6 space-y-2">
                        <Link href="/" className="block px-3 py-2 text-lg text-gray-700 hover:text-primary">Home</Link>
                        <Link href="/about" className="block px-3 py-2 text-lg text-gray-700 hover:text-primary">About</Link>
                        <Link href="/destinations" className="block px-3 py-2 text-lg text-gray-700 hover:text-primary">Destinations</Link>
                        <Link href="/tours" className="block px-3 py-2 text-lg text-gray-700 hover:text-primary">Tours</Link>
                        <Link href="/gallery" className="block px-3 py-2 text-lg text-gray-700 hover:text-primary">Gallery</Link>
                        <Link href="/blog" className="block px-3 py-2 text-lg text-gray-700 hover:text-primary">Blog</Link>
                        <Link href="/contact" className="block px-3 py-2 text-lg text-gray-700 hover:text-primary">Contact</Link>
                        <Link href="/book" className="block px-3 py-2 text-lg text-primary font-bold">Book Now</Link>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
