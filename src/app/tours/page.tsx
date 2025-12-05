import Image from 'next/image';
import Link from 'next/link';
import { Clock, MapPin, DollarSign, Check } from 'lucide-react';

const tours = [
    {
        id: 1,
        title: "Grand Europe Adventure",
        image: "/images/tour_europe.png",
        duration: "10 Days",
        price: 2499,
        location: "Europe",
        description: "Visit London, Paris, and Rome in this whirlwind tour of Europe's most iconic capitals.",
        features: ["All flights included", "4-Star Hotel Accommodation", "Daily Breakfast & Dinner", "Guided City Tours"]
    },
    {
        id: 2,
        title: "Wonders of Asia",
        image: "/images/tour_asia.png",
        duration: "14 Days",
        price: 1899,
        location: "Asia",
        description: "Explore the Great Wall of China, the Taj Mahal, and the bustling streets of Tokyo.",
        features: ["Internal flights included", "Authentic Local Cuisine", "Cultural Workshops", "English Speaking Guide"]
    },
    {
        id: 3,
        title: "American Dream Road Trip",
        image: "/images/dest_usa.png",
        duration: "12 Days",
        price: 3199,
        location: "USA",
        description: "Drive across the USA from New York to Los Angeles, stopping at national parks and major cities.",
        features: ["Car Rental Included", "National Park Passes", "Route 66 Experience", "City Sightseeing Passes"]
    },
    {
        id: 4,
        title: "Royal UK Experience",
        image: "/images/dest_uk.png",
        duration: "7 Days",
        price: 1599,
        location: "UK",
        description: "Discover the history and heritage of the United Kingdom, from London to the Scottish Highlands.",
        features: ["Castle Visits", "Train Travel Included", "Afternoon Tea Experience", "West End Show Tickets"]
    }
];

export default function Tours() {
    return (
        <div className="min-h-screen bg-gray-50 pb-20">
            <div className="bg-secondary py-20 text-center text-white">
                <h1 className="text-4xl md:text-6xl font-bold mb-4">Our Tours</h1>
                <p className="text-xl text-gray-300 max-w-2xl mx-auto px-4">
                    Curated packages for every type of traveler.
                </p>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="space-y-12">
                    {tours.map((tour) => (
                        <div key={tour.id} className="bg-white rounded-2xl shadow-lg overflow-hidden flex flex-col md:flex-row hover:shadow-xl transition">
                            <div className="md:w-2/5 relative h-64 md:h-auto">
                                <Image
                                    src={tour.image}
                                    alt={tour.title}
                                    fill
                                    className="object-cover"
                                />
                                <div className="absolute top-4 left-4 bg-primary text-white px-3 py-1 rounded-full text-sm font-bold">
                                    Best Seller
                                </div>
                            </div>
                            <div className="p-8 md:w-3/5 flex flex-col justify-between">
                                <div>
                                    <div className="flex justify-between items-start mb-4">
                                        <h3 className="text-2xl font-bold text-secondary">{tour.title}</h3>
                                        <span className="text-2xl font-bold text-primary">${tour.price}</span>
                                    </div>
                                    <p className="text-gray-600 mb-6">{tour.description}</p>

                                    <div className="grid grid-cols-2 gap-4 mb-6">
                                        <div className="flex items-center text-gray-500">
                                            <Clock size={18} className="mr-2 text-primary" />
                                            {tour.duration}
                                        </div>
                                        <div className="flex items-center text-gray-500">
                                            <MapPin size={18} className="mr-2 text-primary" />
                                            {tour.location}
                                        </div>
                                    </div>

                                    <div className="space-y-2 mb-8">
                                        {tour.features.map((feature, idx) => (
                                            <div key={idx} className="flex items-center text-gray-600">
                                                <Check size={16} className="mr-2 text-green-500" />
                                                {feature}
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                <div className="flex gap-4">
                                    <Link
                                        href={`/book?tour=${tour.title}`}
                                        className="flex-1 bg-primary text-white py-3 rounded-xl font-bold text-center hover:bg-sky-600 transition shadow-md"
                                    >
                                        Book This Tour
                                    </Link>
                                    <button className="px-6 py-3 border-2 border-gray-200 rounded-xl font-bold text-gray-600 hover:border-primary hover:text-primary transition">
                                        Download Itinerary
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
