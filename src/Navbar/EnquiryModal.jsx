// components/EnquiryModal.jsx
import React, { useState } from 'react';

const EnquiryModal = ({ isOpen, onClose }) => {
    const [isLoading, setIsLoading] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: '',
        message: ''
    });

    const handleInputChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
      

        setIsLoading(true);
        try {
            const response = await fetch('https://flying-feet-travel-backend.onrender.com/email/send-enquiry', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            const result = await response.json();
            if (result.success) {
                alert('Enquiry sent successfully! We will contact you soon.');
                setFormData({ name: '', phone: '', email: '', message: '' });
                onClose(); // Close modal after success
            } else {
                alert(result.message || 'Failed to send enquiry.');
            }
        } catch (error) {
            console.error('Error:', error);
            alert('Network error. Please try again.');
        } finally {
            setIsLoading(false);
        }
    };

    // Don't render if not open
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Blur Background */}
            <div
                className="absolute inset-0 backdrop-blur-xl bg-black/30 transition-opacity duration-300"
                onClick={onClose}
            />

            {/* Centered Popup */}
            <div className="relative w-full max-w-lg transform transition-all duration-300 scale-100">
                {/* Popup Container */}
                <div className="bg-white/98 backdrop-blur-lg rounded-3xl shadow-2xl border border-white/30 overflow-hidden max-w-xl mx-auto px-6 py-6 sm:px-10 sm:py-8">

                    {/* Header */}
                    <div className="flex items-center justify-between border-b border-gray-200 pb-4 mb-4">
                        <h1 className="text-[24px] font-bold bg-gradient-to-r from-blue-600 to-indigo-600 text-transparent bg-clip-text tracking-tight">
                            Get Enquiry
                        </h1>

                        <button
                            onClick={onClose}
                            className="p-2 rounded-full hover:bg-gray-100 active:scale-95 transition-all duration-200 group disabled:opacity-50 disabled:cursor-not-allowed"
                            disabled={isLoading}
                            aria-label="Close modal"
                        >
                            <svg
                                className="w-6 h-6 text-gray-500 group-hover:text-gray-700 transition-colors"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            </svg>
                        </button>
                    </div>

                    {/* Form */}
                    <form
                        onSubmit={handleSubmit}
                        className="space-y-6 bg-white p-8 rounded-2xl shadow-xl border border-gray-200 max-w-xl mx-auto"
                    >
                        {/* Title */}
                        <h2 className="text-2xl font-bold text-gray-900 text-center mb-4">
                            Contact Us
                        </h2>

                        {/* Name Field */}
                        <div className="space-y-4">
                            <label htmlFor="name" className="block  text-sm font-semibold text-gray-700">
                                Full Name
                            </label>
                            <div className="relative">
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleInputChange}
                                    placeholder="Enter your full name"
                                    disabled={isLoading}
                                    className="w-full pl-4 h-10 pr-12 py-3 bg-gray-50 border border-gray-300 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all"
                                />
                                <svg className="absolute right-3 top-3.5 w-5 h-5 text-gray-400">
                                    <path
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth={2}
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                                    />
                                </svg>
                            </div>
                        </div>
<br />
                        {/* Phone Field */}
                        <div className="space-y-2">
                            <label htmlFor="phone" className="block text-sm font-semibold text-gray-700">
                                Phone Number <span className="text-red-500">*</span>
                            </label>
                            <input
                                type="tel"
                                id="phone"
                                name="phone"
                                value={formData.phone}
                                onChange={handleInputChange}
                                required
                                placeholder="Enter your phone number"
                                disabled={isLoading}
                                className="w-full pl-4 h-10 pr-4 py-3 bg-gray-50 border border-gray-300 rounded-xl focus:ring-2 focus:ring-indigo-500"
                            />
                        </div>
<br />

                        {/* Submit Button */}
                        <button
                            type="submit"
                            disabled={isLoading}
                            className="w-full py-3 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-semibold shadow-lg transition-all flex items-center justify-center gap-2"
                        >
                            {isLoading ? (
                                <>
                                    <div className="w-5 pb-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                                    Sending...
                                </>
                            ) : (
                                <>
                                   <h2 className='mb-4'> Submit Now</h2>
                                    <br />
                                </>
                            )}
                        </button>
                    </form>

                </div>

            </div>
        </div>

    );
};

export default EnquiryModal;