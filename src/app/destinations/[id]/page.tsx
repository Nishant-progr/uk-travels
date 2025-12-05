import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { MapPin, Calendar, DollarSign, Video } from 'lucide-react';

// Mock data for destinations
const destinationsData: Record<string, any> = {
    uk: {
        name: "United Kingdom",
        image: "/images/dest_uk.png",
        description: "The United Kingdom consists of England, Scotland, Wales and Northern Ireland. It is an island nation in northwestern Europe.",
        longDescription: "Experience the royal heritage, stunning countryside, and vibrant cities of the UK. From the historic streets of London to the rugged highlands of Scotland, the UK offers a diverse range of experiences for every traveler. Visit iconic landmarks like Big Ben, the Tower of London, and Stonehenge.",
        price: 1599,
        duration: "7 Days",
        video: "https://www.youtube.com/embed/P2W_I0g7H5A" // Placeholder video
    },
    france: {
        name: "France",
        image: "/images/dest_france.png",
        description: "France, in Western Europe, encompasses medieval cities, alpine villages and Mediterranean beaches.",
        longDescription: "Discover the romance of Paris, the vineyards of Bordeaux, and the beaches of the Riviera. France is famous for its wines and sophisticated cuisine. Lascaux’s ancient cave drawings, Lyon’s Roman theater and the vast Palace of Versailles attest to its rich history.",
        price: 1899,
        duration: "8 Days",
        video: "https://www.youtube.com/embed/AQ6GmpOu5js" // Placeholder video
    },
    india: {
        name: "India",
        image: "/images/dest_india.png",
        description: "India is a vast South Asian country with diverse terrain – from Himalayan peaks to Indian Ocean coastline.",
        longDescription: "Immerse yourself in the rich culture, history, and spirituality of incredible India. Visit the Taj Mahal in Agra, the Pink City of Jaipur, and the bustling streets of Delhi. Experience the vibrant festivals, spicy cuisine, and warm hospitality.",
        price: 1299,
        duration: "10 Days",
        video: "https://www.youtube.com/embed/IgAnj6r1O48" // Placeholder video
    },
    usa: {
        name: "USA",
        image: "/images/dest_usa.png",
        description: "The U.S. is a country of 50 states covering a vast swath of North America, with Alaska in the northwest and Hawaii extending the nation’s presence into the Pacific Ocean.",
        longDescription: "From coast to coast, explore the diverse landscapes and iconic landmarks of the USA. Visit the Statue of Liberty in New York, the Grand Canyon in Arizona, and the Golden Gate Bridge in San Francisco. Enjoy the entertainment in Las Vegas and the movie magic in Hollywood.",
        price: 2499,
        duration: "12 Days",
        video: "https://www.youtube.com/embed/hVvEISFw9w0" // Placeholder video
    }
};

export default function DestinationDetail({ params }: { params: { id: string } }) {
    const destination = destinationsData[params.id];

    if (!destination) {
        return notFound();
    }

    return (
        <div className="min-h-screen bg-gray-50 pb-20">
            {/* Hero Image */}
            <div className="relative h-[60vh] w-full">
                <Image
                    src={destination.image}
                    alt={destination.name}
                    fill
                    className="object-cover"
                    priority
                />
                <div className="absolute inset-0 bg-black/30" />
                <div className="absolute bottom-0 left-0 right-0 p-8 md:p-16 bg-gradient-to-t from-black/80 to-transparent">
                    <div className="max-w-7xl mx-auto">
                        <h1 className="text-4xl md:text-7xl font-bold text-white mb-4">{destination.name}</h1>
                        <div className="flex flex-wrap gap-6 text-white/90 text-lg">
                            <div className="flex items-center"><MapPin className="mr-2" /> {destination.name}</div>
                            <div className="flex items-center"><Calendar className="mr-2" /> {destination.duration}</div>
                            <div className="flex items-center"><DollarSign className="mr-2" /> From ${destination.price}</div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                    {/* Main Content */}
                    <div className="lg:col-span-2 space-y-12">
                        <section>
                            <h2 className="text-3xl font-bold text-secondary mb-6">Overview</h2>
                            <p className="text-gray-600 text-lg leading-relaxed">
                                {destination.longDescription}
                            </p>
                        </section>

                        {/* Virtual Tour */}
                        <section>
                            <div className="flex items-center mb-6">
                                <Video className="text-primary mr-3" size={32} />
                                <h2 className="text-3xl font-bold text-secondary">Virtual Tour</h2>
                            </div>
                            <div className="aspect-video rounded-2xl overflow-hidden shadow-xl">
                                <iframe
                                    width="100%"
                                    height="100%"
                                    src={destination.video}
                                    title={`${destination.name} Virtual Tour`}
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                ></iframe>
                            </div>
                            <p className="text-sm text-gray-500 mt-3 text-center">Take a sneak peek into {destination.name} with this virtual tour.</p>
                        </section>
                    </div>

                    {/* Sidebar */}
                    <div className="lg:col-span-1">
                        <div className="bg-white p-8 rounded-2xl shadow-lg sticky top-24">
                            <h3 className="text-2xl font-bold text-secondary mb-6">Book This Trip</h3>
                            <div className="space-y-6">
                                <div className="flex justify-between items-center pb-4 border-b">
                                    <span className="text-gray-600">Price per person</span>
                                    <span className="text-2xl font-bold text-primary">${destination.price}</span>
                                </div>

                                <div className="space-y-4">
                                    <div className="bg-gray-50 p-4 rounded-xl">
                                        <p className="text-sm text-gray-500 mb-1">Duration</p>
                                        <p className="font-bold text-secondary">{destination.duration}</p>
                                    </div>
                                    <div className="bg-gray-50 p-4 rounded-xl">
                                        <p className="text-sm text-gray-500 mb-1">Group Size</p>
                                        <p className="font-bold text-secondary">Max 12 People</p>
                                    </div>
                                </div>

                                <Link
                                    href={`/book?destination=${destination.name}`}
                                    className="block w-full bg-primary text-white text-center font-bold py-4 rounded-xl hover:bg-sky-600 transition shadow-lg"
                                >
                                    Proceed to Booking
                                </Link>

                                <p className="text-xs text-center text-gray-400">
                                    *Prices may vary based on season and availability.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
