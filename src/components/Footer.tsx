import Link from 'next/link';
import { Facebook, Twitter, Instagram, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-secondary text-white pt-16 pb-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
                    <div>
                        <h3 className="text-2xl font-bold mb-6 text-primary">UK Travels</h3>
                        <p className="text-gray-400 leading-relaxed">
                            Explore the world with us. We provide premium travel experiences to the most beautiful destinations across the globe.
                        </p>
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
                        <ul className="space-y-3">
                            <li><Link href="/about" className="text-gray-400 hover:text-primary transition">About Us</Link></li>
                            <li><Link href="/destinations" className="text-gray-400 hover:text-primary transition">Destinations</Link></li>
                            <li><Link href="/tours" className="text-gray-400 hover:text-primary transition">Tours</Link></li>
                            <li><Link href="/blog" className="text-gray-400 hover:text-primary transition">Travel Blog</Link></li>
                            <li><Link href="/contact" className="text-gray-400 hover:text-primary transition">Contact</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold mb-6">Contact Info</h3>
                        <ul className="space-y-4">
                            <li className="flex items-start"><MapPin size={20} className="mr-3 text-primary mt-1" /> <span className="text-gray-400">123 Travel Lane, London, UK</span></li>
                            <li className="flex items-center"><Phone size={20} className="mr-3 text-primary" /> <span className="text-gray-400">+44 20 1234 5678</span></li>
                            <li className="flex items-center"><Mail size={20} className="mr-3 text-primary" /> <span className="text-gray-400">info@uktravels.com</span></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold mb-6">Follow Us</h3>
                        <div className="flex space-x-4">
                            <a href="#" className="bg-gray-800 p-3 rounded-full text-gray-400 hover:text-white hover:bg-primary transition"><Facebook size={20} /></a>
                            <a href="#" className="bg-gray-800 p-3 rounded-full text-gray-400 hover:text-white hover:bg-primary transition"><Twitter size={20} /></a>
                            <a href="#" className="bg-gray-800 p-3 rounded-full text-gray-400 hover:text-white hover:bg-primary transition"><Instagram size={20} /></a>
                        </div>
                    </div>
                </div>
                <div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-500">
                    <p>&copy; {new Date().getFullYear()} UK Travels. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
