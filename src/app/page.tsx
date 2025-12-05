"use client";
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Star, MapPin, Calendar, Users } from 'lucide-react';

export default function Home() {
    return (
        <div className="flex flex-col min-h-screen">
            {/* Hero Section */}
            <section className="relative h-screen flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <Image
                        src="/images/hero_bg.png"
                        alt="Travel Destinations"
                        fill
                        className="object-cover"
                        priority
                    />
                    <div className="absolute inset-0 bg-black/40" />
                </div>

                <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
                    <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold text-white mb-6 tracking-tight drop-shadow-lg">
                        Explore the World with <span className="text-primary">UK Travels</span>
                    </h1>
                    <p className="text-xl sm:text-2xl text-gray-200 mb-10 max-w-3xl mx-auto drop-shadow-md">
                        Discover breathtaking destinations, create unforgettable memories, and experience the journey of a lifetime.
                    </p>

                    {/* Quick Search Bar */}
                    <div className="bg-white/10 backdrop-blur-md p-4 rounded-2xl shadow-2xl max-w-4xl mx-auto border border-white/20">
                        <form className="flex flex-col md:flex-row gap-4">
                            <div className="flex-1 relative">
                                <MapPin className="absolute left-3 top-3.5 text-gray-300" size={20} />
                                <input
                                    type="text"
                                    placeholder="Where do you want to go?"
                                    className="w-full pl-10 pr-4 py-3 rounded-xl bg-white/20 border border-white/30 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-primary"
                                />
                            </div>
                            <div className="flex-1 relative">
                                <Calendar className="absolute left-3 top-3.5 text-gray-300" size={20} />
                                <input
                                    type="date"
                                    className="w-full pl-10 pr-4 py-3 rounded-xl bg-white/20 border border-white/30 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-primary"
                                />
                            </div>
                            <div className="flex-1 relative">
                                <Users className="absolute left-3 top-3.5 text-gray-300" size={20} />
                                <select className="w-full pl-10 pr-4 py-3 rounded-xl bg-white/20 border border-white/30 text-white focus:outline-none focus:ring-2 focus:ring-primary appearance-none">
                                    <option className="text-gray-800">1 Guest</option>
                                    <option className="text-gray-800">2 Guests</option>
                                    <option className="text-gray-800">3+ Guests</option>
                                </select>
                            </div>
                            <button className="bg-primary hover:bg-sky-600 text-white px-8 py-3 rounded-xl font-bold transition shadow-lg">
                                Search
                            </button>
                        </form>
                    </div>
                </div>
            </section>

            {/* Featured Tours Section */}
            <section className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-4">Featured Tours</h2>
                        <p className="text-gray-600 max-w-2xl mx-auto">Handpicked experiences designed to give you the most authentic and memorable adventures.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {/* Tour Card 1 */}
                        <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition group">
                            <div className="relative h-64 overflow-hidden">
                                <Image
                                    src="/images/tour_europe.png"
                                    alt="Europe Tour"
                                    fill
                                    className="object-cover group-hover:scale-110 transition duration-500"
                                />
                                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-sm font-bold text-primary">
                                    10 Days
                                </div>
                            </div>
                            <div className="p-6">
                                <div className="flex items-center mb-2">
                                    <Star className="text-accent fill-current" size={16} />
                                    <Star className="text-accent fill-current" size={16} />
                                    <Star className="text-accent fill-current" size={16} />
                                    <Star className="text-accent fill-current" size={16} />
                                    <Star className="text-accent fill-current" size={16} />
                                    <span className="text-gray-500 text-sm ml-2">(48 reviews)</span>
                                </div>
                                <h3 className="text-xl font-bold text-secondary mb-2">Grand Europe Adventure</h3>
                                <p className="text-gray-600 mb-4 line-clamp-2">Experience the magic of Paris, Rome, and London in one unforgettable journey.</p>
                                <div className="flex items-center justify-between mt-4 border-t pt-4">
                                    <span className="text-2xl font-bold text-primary">$2,499</span>
                                    <Link href="/tours/europe" className="flex items-center text-secondary font-semibold hover:text-primary transition">
                                        View Details <ArrowRight size={16} className="ml-1" />
                                    </Link>
                                </div>
                            </div>
                        </div>

                        {/* Tour Card 2 */}
                        <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition group">
                            <div className="relative h-64 overflow-hidden">
                                <Image
                                    src="/images/tour_asia.png"
                                    alt="Asia Adventure"
                                    fill
                                    className="object-cover group-hover:scale-110 transition duration-500"
                                />
                                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-sm font-bold text-primary">
                                    14 Days
                                </div>
                            </div>
                            <div className="p-6">
                                <div className="flex items-center mb-2">
                                    <Star className="text-accent fill-current" size={16} />
                                    <Star className="text-accent fill-current" size={16} />
                                    <Star className="text-accent fill-current" size={16} />
                                    <Star className="text-accent fill-current" size={16} />
                                    <Star className="text-accent fill-current" size={16} />
                                    <span className="text-gray-500 text-sm ml-2">(32 reviews)</span>
                                </div>
                                <h3 className="text-xl font-bold text-secondary mb-2">Wonders of Asia</h3>
                                <p className="text-gray-600 mb-4 line-clamp-2">Explore the ancient temples, vibrant markets, and serene landscapes of Asia.</p>
                                <div className="flex items-center justify-between mt-4 border-t pt-4">
                                    <span className="text-2xl font-bold text-primary">$1,899</span>
                                    <Link href="/tours/asia" className="flex items-center text-secondary font-semibold hover:text-primary transition">
                                        View Details <ArrowRight size={16} className="ml-1" />
                                    </Link>
                                </div>
                            </div>
                        </div>

                        {/* Tour Card 3 */}
                        <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition group">
                            <div className="relative h-64 overflow-hidden">
                                <Image
                                    src="/images/dest_usa.png"
                                    alt="USA Road Trip"
                                    fill
                                    className="object-cover group-hover:scale-110 transition duration-500"
                                />
                                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-sm font-bold text-primary">
                                    12 Days
                                </div>
                            </div>
                            <div className="p-6">
                                <div className="flex items-center mb-2">
                                    <Star className="text-accent fill-current" size={16} />
                                    <Star className="text-accent fill-current" size={16} />
                                    <Star className="text-accent fill-current" size={16} />
                                    <Star className="text-accent fill-current" size={16} />
                                    <Star className="text-gray-300 fill-current" size={16} />
                                    <span className="text-gray-500 text-sm ml-2">(25 reviews)</span>
                                </div>
                                <h3 className="text-xl font-bold text-secondary mb-2">American Dream Road Trip</h3>
                                <p className="text-gray-600 mb-4 line-clamp-2">From NYC to LA, discover the diversity and beauty of the United States.</p>
                                <div className="flex items-center justify-between mt-4 border-t pt-4">
                                    <span className="text-2xl font-bold text-primary">$3,199</span>
                                    <Link href="/tours/usa" className="flex items-center text-secondary font-semibold hover:text-primary transition">
                                        View Details <ArrowRight size={16} className="ml-1" />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="text-center mt-12">
                        <Link href="/tours" className="inline-block border-2 border-primary text-primary hover:bg-primary hover:text-white px-8 py-3 rounded-full font-bold transition">
                            View All Tours
                        </Link>
                    </div>
                </div>
            </section>

            {/* Popular Destinations */}
            <section className="py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-4">Popular Destinations</h2>
                        <p className="text-gray-600 max-w-2xl mx-auto">Explore our most sought-after locations and start planning your next getaway.</p>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
                        {['UK', 'France', 'India', 'USA'].map((dest) => (
                            <Link href={`/destinations/${dest.toLowerCase()}`} key={dest} className="group relative h-64 md:h-80 rounded-2xl overflow-hidden cursor-pointer">
                                <Image
                                    src={`/images/dest_${dest.toLowerCase()}.png`}
                                    alt={dest}
                                    fill
                                    className="object-cover group-hover:scale-110 transition duration-500"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                                <div className="absolute bottom-6 left-6">
                                    <h3 className="text-2xl font-bold text-white group-hover:text-primary transition">{dest}</h3>
                                    <span className="text-gray-300 text-sm group-hover:text-white transition">View Packages</span>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* Testimonials */}
            <section className="py-20 bg-primary/5">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-4">What Our Travelers Say</h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            { name: "Sarah Johnson", text: "The best travel experience I've ever had. Everything was perfectly organized!", location: "London, UK" },
                            { name: "Michael Chen", text: "UK Travels made our honeymoon absolutely magical. Highly recommended!", location: "New York, USA" },
                            { name: "Emma Davis", text: "Professional, friendly, and attentive to every detail. Will book again.", location: "Sydney, Australia" }
                        ].map((testimonial, i) => (
                            <div key={i} className="bg-white p-8 rounded-2xl shadow-md">
                                <div className="flex text-accent mb-4">
                                    {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
                                </div>
                                <p className="text-gray-600 mb-6 italic">"{testimonial.text}"</p>
                                <div className="flex items-center">
                                    <div className="w-10 h-10 bg-gray-200 rounded-full mr-3"></div>
                                    <div>
                                        <h4 className="font-bold text-secondary">{testimonial.name}</h4>
                                        <p className="text-xs text-gray-500">{testimonial.location}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-secondary text-white relative overflow-hidden">
                <div className="absolute inset-0 opacity-10">
                    {/* Abstract pattern or image could go here */}
                </div>
                <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
                    <h2 className="text-3xl md:text-5xl font-bold mb-6">Ready to Start Your Adventure?</h2>
                    <p className="text-xl text-gray-300 mb-10">Contact us today to plan your dream vacation with our expert travel consultants.</p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link href="/book" className="bg-primary hover:bg-sky-600 text-white px-8 py-4 rounded-full font-bold text-lg transition shadow-lg hover:shadow-primary/50">
                            Book Now
                        </Link>
                        <Link href="/contact" className="bg-transparent border-2 border-white hover:bg-white hover:text-secondary text-white px-8 py-4 rounded-full font-bold text-lg transition">
                            Contact Us
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}
