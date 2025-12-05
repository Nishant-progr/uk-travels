import Image from 'next/image';
import Link from 'next/link';
import { Calendar, User, ArrowRight } from 'lucide-react';

const posts = [
    {
        id: 1,
        title: "10 Must-Visit Hidden Gems in Europe",
        excerpt: "Discover the secret spots that most tourists miss when visiting Europe's most popular cities.",
        image: "/images/tour_europe.png",
        date: "May 15, 2024",
        author: "James Wilson",
        category: "Travel Tips"
    },
    {
        id: 2,
        title: "A Complete Guide to Backpacking in Asia",
        excerpt: "Everything you need to know about planning a budget-friendly adventure across Southeast Asia.",
        image: "/images/tour_asia.png",
        date: "April 28, 2024",
        author: "Elena Rodriguez",
        category: "Guides"
    },
    {
        id: 3,
        title: "The Ultimate USA Road Trip Itinerary",
        excerpt: "From Route 66 to the Pacific Coast Highway, here are the best routes for an unforgettable road trip.",
        image: "/images/dest_usa.png",
        date: "April 10, 2024",
        author: "David Kim",
        category: "Itineraries"
    }
];

export default function Blog() {
    return (
        <div className="min-h-screen bg-gray-50 pb-20">
            <div className="bg-secondary py-20 text-center text-white">
                <h1 className="text-4xl md:text-6xl font-bold mb-4">Travel Blog</h1>
                <p className="text-xl text-gray-300 max-w-2xl mx-auto px-4">
                    Tips, guides, and inspiration for your next journey.
                </p>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {posts.map((post) => (
                        <article key={post.id} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition flex flex-col h-full">
                            <div className="relative h-56">
                                <Image
                                    src={post.image}
                                    alt={post.title}
                                    fill
                                    className="object-cover"
                                />
                                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-xs font-bold text-primary uppercase tracking-wide">
                                    {post.category}
                                </div>
                            </div>
                            <div className="p-6 flex-1 flex flex-col">
                                <div className="flex items-center text-gray-500 text-sm mb-4 space-x-4">
                                    <div className="flex items-center">
                                        <Calendar size={14} className="mr-1" />
                                        {post.date}
                                    </div>
                                    <div className="flex items-center">
                                        <User size={14} className="mr-1" />
                                        {post.author}
                                    </div>
                                </div>
                                <h2 className="text-xl font-bold text-secondary mb-3 line-clamp-2 hover:text-primary transition cursor-pointer">
                                    {post.title}
                                </h2>
                                <p className="text-gray-600 mb-6 line-clamp-3 flex-1">
                                    {post.excerpt}
                                </p>
                                <Link href={`/blog/${post.id}`} className="inline-flex items-center text-primary font-bold hover:text-sky-700 transition mt-auto">
                                    Read More <ArrowRight size={16} className="ml-1" />
                                </Link>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </div>
    );
}
