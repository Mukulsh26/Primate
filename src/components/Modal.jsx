import React from 'react';
import emailjs from '@emailjs/browser';
import { useRef } from 'react';

const Modal = ({ isOpen, onClose }) => {
  const formRef = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'service_ocy2tck',
      'template_mu5n9fp',
      formRef.current,
      'ISOW2oEIfgwoZdrFN'
    )
    .then(() => {
      alert('Message sent successfully!');
      onClose();
    })
    .catch((error) => {
      console.error('EmailJS error:', error);
      alert('Failed to send message. Please try again.');
    });
  }


  if (!isOpen) return null;
  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-50"
      onClick={onClose}
    >
      <div
        className="bg-[#0d0d0d] p-8 rounded-3xl w-11/12 sm:w-1/2 lg:w-1/3 max-h-[82vh] overflow-y-auto text-white modal-container border-4 shadow-[0px_0px_15px_4px_rgba(255,105,0,0.6)] relative"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-white text-2xl font-semibold hover:text-[#ff6a00] transition-all duration-200 bg-transparent hover:bg-transparent focus:outline-none focus:ring-0 border-none"
        >
          &times;
        </button>


        <h2 className="text-3xl font-semibold text-center mb-6 text-[#ff6a00]">
          Book Your Free 1-on-1 Fitness Strategy Call
        </h2>
        <hr className="border-t-2 border-[#ff6a00] mb-6" />
        <form ref={formRef} onSubmit={sendEmail}>
          <div className="mb-5">
            <label htmlFor="fullName" className="block text-lg font-medium text-gray-300">
              Full Name (required)
            </label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              required
              className="w-full p-4 mt-2 bg-[#1f1f1f] border border-[#ff6a00] rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#ff6a00]"
              placeholder="Enter your full name"
            />
          </div>

          <div className="mb-5">
            <label htmlFor="email" className="block text-lg font-medium text-gray-300">
              Email Address (required)
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              className="w-full p-4 mt-2 bg-[#1f1f1f] border border-[#ff6a00] rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#ff6a00]"
              placeholder="Enter your email"
            />
          </div>

          <div className="mb-5">
            <label htmlFor="whatsapp" className="block text-lg font-medium text-gray-300">
              WhatsApp Number (with Country Code) (required)
            </label>
            <input
              type="tel"
              id="whatsapp"
              name="whatsapp"
              required
              className="w-full p-4 mt-2 bg-[#1f1f1f] border border-[#ff6a00] rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#ff6a00]"
              placeholder="Enter your WhatsApp number"
            />
          </div>

          <div className="mb-5">
            <label htmlFor="age" className="block text-lg font-medium text-gray-300">
              Age (optional but useful)
            </label>
            <input
              type="number"
              id="age"
              name="age"
              className="w-full p-4 mt-2 bg-[#1f1f1f] border border-[#ff6a00] rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#ff6a00]"
              placeholder="Enter your age"
            />
          </div>

          <div className="mb-5">
            <label htmlFor="occupation" className="block text-lg font-medium text-gray-300">
              Occupation / Job Title (optional)
            </label>
            <input
              type="text"
              id="occupation"
              name="occupation"
              className="w-full p-4 mt-2 bg-[#1f1f1f] border border-[#ff6a00] rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#ff6a00]"
              placeholder="Enter your occupation"
            />
          </div>

          <div className="mb-5">
            <label htmlFor="fitnessGoal" className="block text-lg font-medium text-gray-300">
              Fitness Goal (required)
            </label>
            <select
              id="fitnessGoal"
              name="fitnessGoal"
              required
              className="w-full p-4 mt-2 bg-[#1f1f1f] border border-[#ff6a00] rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#ff6a00]"
            >
              <option value="">Select a goal</option>
              <option value="Lose fat">Lose fat</option>
              <option value="Build muscle">Build muscle</option>
              <option value="Get in shape">Get in shape</option>
              <option value="Improve energy">Improve energy</option>
            </select>
          </div>

          <div className="mb-5">
            <label htmlFor="challenge" className="block text-lg font-medium text-gray-300">
              What’s your biggest challenge right now?
            </label>
            <textarea
              id="challenge"
              name="challenge"
              className="w-full p-4 mt-2 bg-[#1f1f1f] border border-[#ff6a00] rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#ff6a00]"
              placeholder="Describe your challenge"
            />
          </div>

          <div className="mb-5">
            <label htmlFor="commitment" className="block text-lg font-medium text-gray-300">
              How serious are you about reaching your goal?
            </label>
            <select
              id="commitment"
              name="commitment"
              required
              className="w-full p-4 mt-2 bg-[#1f1f1f] border border-[#ff6a00] rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#ff6a00]"
            >
              <option value="Not serious">Not serious</option>
              <option value="Kind of">Kind of</option>
              <option value="All in">All in</option>
            </select>
          </div>

          <div className="text-center mt-6">
            <button
              type="submit"
              className="w-full py-4 bg-gradient-to-br from-[#ff6a00] to-[#ff8800] text-white rounded-xl hover:scale-105 transition-all duration-300"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Modal;
