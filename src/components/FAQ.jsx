import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const faqs = [
  {
    question: "I’m insanely busy. Will I have time for this?",
    answer: "Yes. The entire system is built around busy schedules — just 3 short workouts per week and a simple, sustainable meal structure.",
  },
  {
    question: "Do I need a gym?",
    answer: "Nope. I create plans that fit your environment — home, hotel, or office gym. Whatever works best for you.",
  },
  {
    question: "What if I travel often?",
    answer: "That’s exactly why I made this online. Your plan goes wherever you go, and I stay in touch throughout.",
  },
  {
    question: "How soon can I expect results?",
    answer: "Most clients notice visible changes in 3–4 weeks, and major transformation by 12. But energy, sleep, and confidence? Those often shift even sooner.",
  },
];

const FAQs = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="bg-black text-orange-500 py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-center">Frequently Asked Questions</h2>
        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-orange-500 rounded-xl p-6 cursor-pointer hover:bg-orange-500 hover:text-black transition"
              onClick={() => toggleFAQ(index)}
            >
              <div className="flex justify-between items-center">
                <h3 className="text-xl font-semibold">{faq.question}</h3>
                <motion.span
                  initial={{ rotate: 0 }}
                  animate={{ rotate: activeIndex === index ? 45 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="text-3xl font-bold"
                >
                  +
                </motion.span>
              </div>

              <AnimatePresence>
                {activeIndex === index && (
                  <motion.p
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.4 }}
                    className="mt-4 text-orange-300 text-left"
                  >
                    {faq.answer}
                  </motion.p>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQs;
