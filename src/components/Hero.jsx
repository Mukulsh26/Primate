import React from 'react';

const Hero = () => {
    return (
        <section className="bg-black text-orange-500 min-h-screen flex flex-col justify-center items-center px-4 text-center relative overflow-hidden">
            <div className="absolute inset-0 flex justify-center items-center">
                <img
                    src="/images/bg-logo.png"
                    alt="Background Logo"
                    className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] max-w-full opacity-[0.3] pointer-events-none object-contain"
                />
            </div>

            <div className="relative z-10 max-w-4xl">
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight mb-8 animate-fade-in-down">
                    Helping CEOs Live Longer,<br />
                    Get Healthier & Perform Better
                </h1>

                <p className="text-lg md:text-xl text-white mb-8 animate-fade-in-up">
                    In Less Than 12 Weeks — With My Science-Backed Online Fitness Program
                </p>

                <p className="text-md md:text-lg text-orange-400 mb-10 animate-fade-in-up delay-200">
                    No more burnout. No more guesswork. Just a tailored plan that fits your calendar — and delivers real results.
                </p>

                <p className="text-md md:text-lg text-orange-400 mb-10 animate-fade-in-up delay-400">
                    Let’s make your health your best business decision yet.
                </p>

                <button className="mt-6 px-8 py-4 bg-orange-500 text-black font-semibold rounded-full hover:bg-orange-400 transition-all animate-bounce">
                    Let’s Chat Over a Virtual Coffee
                </button>
            </div>
        </section>
    );
};

export default Hero;
