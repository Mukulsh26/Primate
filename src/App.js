import React, { useState } from 'react';
import AboutPrimateSection from './components/About';
import ChatSection from './components/ChatSection';
import FAQs from './components/FAQ';
import FitnessFramework from './components/FitnessFramework';
import Hero from './components/Hero';
import MyStory from './components/MyStory';
import Navbar from './components/Navbar';
import ProgramBreakdown from './components/Program';
import RealResults from './components/RealResults';
import WhoIWorkWith from './components/WhoIWorkWith';
import Modal from './components/Modal'; 

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="font-sans">
      <Navbar openModal={openModal} />
      <Modal isOpen={isModalOpen} onClose={closeModal} />
      <Hero openModal={openModal} />
      <WhoIWorkWith />
      <MyStory />
      <FitnessFramework />
      <RealResults />
      <ChatSection />
      <FAQs />
      <ProgramBreakdown openModal={openModal} />
      <AboutPrimateSection />
    </div>
  );
}

export default App;
