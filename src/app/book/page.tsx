"use client";
import { useSearchParams } from 'next/navigation';
import { Suspense } from 'react';

function BookingForm() {
    const searchParams = useSearchParams();
    const initialDestination = searchParams.get('destination') || '';
    const initialTour = searchParams.get('tour') || '';

    return (
        <div className="bg-white p-8 md:p-12 rounded-3xl shadow-xl border border-gray-100 max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-secondary mb-2 text-center">Book Your Trip</h2>
            <p className="text-gray-600 text-center mb-10">Fill out the form below and our agents will get back to you within 24 hours.</p>

            <form className="space-y-6" action="https://formspree.io/f/your-form-id" method="POST">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">First Name</label>
                        <input
                            type="text"
                            name="firstName"
                            required
                            className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Last Name</label>
                        <input
                            type="text"
                            name="lastName"
                            required
                            className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition"
                        />
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                        <input
                            type="email"
                            name="email"
                            required
                            className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                        <input
                            type="tel"
                            name="phone"
                            className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition"
                        />
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Destination / Tour</label>
                        <input
                            type="text"
                            name="destination"
                            defaultValue={initialTour || initialDestination}
                            placeholder="Where do you want to go?"
                            className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Number of Travelers</label>
                        <select name="travelers" className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition">
                            <option>1 Person</option>
                            <option>2 People</option>
                            <option>3 People</option>
                            <option>4+ People</option>
                            <option>Group (10+)</option>
                        </select>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Preferred Date</label>
                        <input
                            type="date"
                            name="date"
                            className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Budget Range (per person)</label>
                        <select name="budget" className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition">
                            <option>$1000 - $2000</option>
                            <option>$2000 - $3000</option>
                            <option>$3000 - $5000</option>
                            <option>$5000+</option>
                        </select>
                    </div>
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Additional Requests</label>
                    <textarea
                        name="message"
                        rows={4}
                        className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition resize-none"
                        placeholder="Any specific requirements, dietary needs, or questions?"
                    ></textarea>
                </div>

                <button
                    type="submit"
                    className="w-full bg-primary text-white font-bold py-4 rounded-xl hover:bg-sky-600 transition shadow-lg text-lg"
                >
                    Submit Booking Request
                </button>
            </form>
        </div>
    );
}

export default function Book() {
    return (
        <div className="min-h-screen bg-gray-50 pb-20">
            <div className="bg-secondary py-20 text-center text-white mb-[-100px] pb-40">
                <h1 className="text-4xl md:text-6xl font-bold mb-4">Start Your Journey</h1>
                <p className="text-xl text-gray-300 max-w-2xl mx-auto px-4">
                    Take the first step towards your dream vacation.
                </p>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <Suspense fallback={<div>Loading form...</div>}>
                    <BookingForm />
                </Suspense>
            </div>
        </div>
    );
}
