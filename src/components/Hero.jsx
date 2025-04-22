import React from 'react';

const Hero = () => {
    return (
        <section className="relative min-h-screen flex flex-col items-center justify-center bg-black text-white px-4 text-center overflow-hidden">
            {/* Background Logo */}
            <img
                src="/images/bg-logo.png"
                alt="Background Logo"
                className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] max-w-full opacity-[0.3] pointer-events-none object-contain"
            />

            {/* Content */}
            <div className="relative z-10 max-w-4xl">
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight">
                    Helping High Performers Build an Elite-Level Body That Matches Their Ambition
                </h1>
                <p className="mt-6 text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto">
                    Without Wasting Time, Energy & Mental Bandwidth Trying to Figure it All Out Yourself
                </p>
                <button className="mt-16 px-6 py-3 bg-white text-black font-semibold rounded-full hover:bg-gray-200 transition">
                    Let’s Work Together
                </button>
            </div>
        </section>
    );
};

export default Hero;
