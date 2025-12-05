import Image from 'next/image';

export default function About() {
    return (
        <div className="min-h-screen bg-gray-50 pb-20">
            {/* Hero Section */}
            <div className="relative h-[400px] bg-secondary flex items-center justify-center">
                <div className="absolute inset-0 overflow-hidden">
                    <Image
                        src="/images/hero_bg.png"
                        alt="About Us"
                        fill
                        className="object-cover opacity-30"
                    />
                </div>
                <div className="relative z-10 text-center px-4">
                    <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">About UK Travels</h1>
                    <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                        Passionate about creating unforgettable journeys since 2010.
                    </p>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-20 relative z-20">
                <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-3xl font-bold text-secondary mb-6">Our Mission</h2>
                            <p className="text-gray-600 leading-relaxed mb-6">
                                At UK Travels, our mission is to inspire and enable people to explore the world with confidence and joy. We believe that travel is not just about seeing new places, but about experiencing new cultures, meeting new people, and creating memories that last a lifetime.
                            </p>
                            <p className="text-gray-600 leading-relaxed">
                                We are dedicated to providing exceptional service, personalized itineraries, and authentic experiences that go beyond the ordinary. Whether you're seeking adventure, relaxation, or cultural immersion, we are here to make your dream trip a reality.
                            </p>
                        </div>
                        <div className="relative h-[400px] rounded-xl overflow-hidden shadow-lg">
                            <Image
                                src="/images/tour_europe.png"
                                alt="Our Mission"
                                fill
                                className="object-cover"
                            />
                        </div>
                    </div>
                </div>
            </div>

            {/* History Section */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold text-secondary mb-4">Our History</h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">From humble beginnings to a leading travel agency.</p>
                </div>

                <div className="space-y-12 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-300 before:to-transparent">
                    {[
                        { year: "2010", title: "The Beginning", description: "UK Travels was founded in a small office in London with a passion for European adventures." },
                        { year: "2015", title: "Global Expansion", description: "We expanded our operations to include destinations in Asia and the Americas." },
                        { year: "2020", title: "Digital Transformation", description: "Launched our new digital platform to provide seamless booking experiences for our clients." },
                        { year: "2024", title: "Award Winning", description: "Recognized as one of the top travel agencies in the UK for customer satisfaction." }
                    ].map((item, index) => (
                        <div key={index} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                            <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-slate-300 group-[.is-active]:bg-primary text-slate-500 group-[.is-active]:text-emerald-50 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
                                <div className="w-3 h-3 bg-white rounded-full"></div>
                            </div>
                            <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-6 rounded-xl shadow-md border border-slate-200">
                                <div className="flex items-center justify-between space-x-2 mb-1">
                                    <div className="font-bold text-slate-900">{item.title}</div>
                                    <time className="font-caveat font-medium text-primary">{item.year}</time>
                                </div>
                                <div className="text-slate-500">{item.description}</div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Team Section */}
            <div className="bg-white py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold text-secondary mb-4">Meet Our Team</h2>
                        <p className="text-gray-600 max-w-2xl mx-auto">The experts behind your perfect vacation.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            { name: "James Wilson", role: "Founder & CEO", image: "/images/hero_bg.png" }, // Placeholder
                            { name: "Elena Rodriguez", role: "Head of Operations", image: "/images/tour_europe.png" }, // Placeholder
                            { name: "David Kim", role: "Senior Travel Consultant", image: "/images/tour_asia.png" } // Placeholder
                        ].map((member, i) => (
                            <div key={i} className="text-center group">
                                <div className="relative w-48 h-48 mx-auto mb-6 rounded-full overflow-hidden shadow-lg border-4 border-white group-hover:border-primary transition duration-300">
                                    <Image
                                        src={member.image}
                                        alt={member.name}
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                                <h3 className="text-xl font-bold text-secondary">{member.name}</h3>
                                <p className="text-primary font-medium">{member.role}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
