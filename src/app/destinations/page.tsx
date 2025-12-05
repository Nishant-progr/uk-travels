import Image from 'next/image';
import Link from 'next/link';

const destinations = [
    { name: "United Kingdom", id: "uk", image: "/images/dest_uk.png", description: "Experience the royal heritage, stunning countryside, and vibrant cities of the UK." },
    { name: "France", id: "france", image: "/images/dest_france.png", description: "Discover the romance of Paris, the vineyards of Bordeaux, and the beaches of the Riviera." },
    { name: "India", id: "india", image: "/images/dest_india.png", description: "Immerse yourself in the rich culture, history, and spirituality of incredible India." },
    { name: "USA", id: "usa", image: "/images/dest_usa.png", description: "From coast to coast, explore the diverse landscapes and iconic landmarks of the USA." },
    // Adding duplicates for grid demonstration
    { name: "Italy", id: "italy", image: "/images/tour_europe.png", description: "Enjoy the art, history, and cuisine of Italy, from Rome to Venice." },
    { name: "Japan", id: "japan", image: "/images/tour_asia.png", description: "Witness the perfect blend of ancient tradition and modern technology in Japan." },
];

export default function Destinations() {
    return (
        <div className="min-h-screen bg-gray-50 pb-20">
            <div className="bg-secondary py-20 text-center text-white">
                <h1 className="text-4xl md:text-6xl font-bold mb-4">Destinations</h1>
                <p className="text-xl text-gray-300 max-w-2xl mx-auto px-4">
                    Choose from our wide range of exotic locations and start your adventure.
                </p>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {destinations.map((dest) => (
                        <div key={dest.id} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition group">
                            <div className="relative h-64 overflow-hidden">
                                <Image
                                    src={dest.image}
                                    alt={dest.name}
                                    fill
                                    className="object-cover group-hover:scale-110 transition duration-500"
                                />
                            </div>
                            <div className="p-6">
                                <h3 className="text-2xl font-bold text-gray-800 mb-3">{dest.name}</h3>
                                <p className="text-gray-600 mb-4">{dest.description}</p>
                                <Link
                                    href={`/destinations/${dest.id}`}
                                    className="inline-block bg-primary text-white px-6 py-2 rounded-lg hover:bg-secondary transition"
                                >
                                    Explore More
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

