"use client";
import { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

export default function Contact() {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        subject: 'General Inquiry',
        message: '',
    });
    const [loading, setLoading] = useState(false);
    const [status, setStatus] = useState<{ type: 'success' | 'error'; message: string } | null>(null);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setStatus(null);

        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    name: `${formData.firstName} ${formData.lastName}`,
                    email: formData.email,
                    subject: formData.subject,
                    message: formData.message,
                }),
            });

            const data = await response.json();

            if (data.success) {
                setStatus({ type: 'success', message: data.message });
                setFormData({
                    firstName: '',
                    lastName: '',
                    email: '',
                    subject: 'General Inquiry',
                    message: '',
                });
            } else {
                setStatus({ type: 'error', message: data.message || 'Something went wrong!' });
            }
        } catch (error) {
            setStatus({ type: 'error', message: 'Failed to send message. Please try again.' });
        } finally {
            setLoading(false);
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    return (
        <div className="min-h-screen bg-gray-50 pb-20">
            <div className="bg-secondary py-20 text-center text-white">
                <h1 className="text-4xl md:text-6xl font-bold mb-4">Contact Us</h1>
                <p className="text-xl text-gray-300 max-w-2xl mx-auto px-4">
                    We're here to help you plan your next adventure. Reach out to us!
                </p>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                    {/* Contact Info & Map */}
                    <div>
                        <div className="mb-12">
                            <h2 className="text-3xl font-bold text-secondary mb-6">Get in Touch</h2>
                            <p className="text-gray-600 mb-8 leading-relaxed">
                                Have questions about a tour? Want a custom itinerary? Or just want to say hello?
                                Our team is ready to answer all your questions.
                            </p>

                            <div className="space-y-6">
                                <div className="flex items-start">
                                    <div className="bg-primary/10 p-3 rounded-full mr-4">
                                        <MapPin className="text-primary" size={24} />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-secondary text-lg">Visit Us</h3>
                                        <p className="text-gray-600">123 Travel Lane, London, UK, SW1A 1AA</p>
                                    </div>
                                </div>

                                <div className="flex items-start">
                                    <div className="bg-primary/10 p-3 rounded-full mr-4">
                                        <Phone className="text-primary" size={24} />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-secondary text-lg">Call Us</h3>
                                        <p className="text-gray-600">+44 20 1234 5678</p>
                                        <p className="text-gray-500 text-sm">Mon - Fri, 9am - 6pm</p>
                                    </div>
                                </div>

                                <div className="flex items-start">
                                    <div className="bg-primary/10 p-3 rounded-full mr-4">
                                        <Mail className="text-primary" size={24} />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-secondary text-lg">Email Us</h3>
                                        <p className="text-gray-600">info@uktravels.com</p>
                                        <p className="text-gray-500 text-sm">We reply within 24 hours</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Google Maps Embed */}
                        <div className="rounded-2xl overflow-hidden shadow-lg h-80 bg-gray-200 relative">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d158858.182370726!2d-0.10159865000000001!3d51.52864165!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47d8a00baf21de75%3A0x52963a5addd52a99!2sLondon%2C%20UK!5e0!3m2!1sen!2sus!4v1652282212345!5m2!1sen!2sus"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                            ></iframe>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="bg-white p-8 md:p-10 rounded-3xl shadow-xl border border-gray-100">
                        <h2 className="text-2xl font-bold text-secondary mb-6">Send us a Message</h2>

                        {status && (
                            <div className={`mb-6 p-4 rounded-xl ${status.type === 'success' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                                {status.message}
                            </div>
                        )}

                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">First Name</label>
                                    <input
                                        type="text"
                                        name="firstName"
                                        value={formData.firstName}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition"
                                        placeholder="John"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">Last Name</label>
                                    <input
                                        type="text"
                                        name="lastName"
                                        value={formData.lastName}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition"
                                        placeholder="Doe"
                                    />
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition"
                                    placeholder="john@example.com"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">Subject</label>
                                <select
                                    name="subject"
                                    value={formData.subject}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition"
                                >
                                    <option>General Inquiry</option>
                                    <option>Booking Request</option>
                                    <option>Feedback</option>
                                    <option>Other</option>
                                </select>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                                <textarea
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    rows={5}
                                    className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition resize-none"
                                    placeholder="How can we help you?"
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                disabled={loading}
                                className="w-full bg-primary text-white font-bold py-4 rounded-xl hover:bg-sky-600 transition shadow-lg flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                {loading ? 'Sending...' : 'Send Message'} <Send size={20} className="ml-2" />
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}
