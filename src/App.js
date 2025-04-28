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

function App() {
  return (
    <div className="font-sans">
      <Navbar/>
      <Hero />
      <WhoIWorkWith />
      <MyStory/>
      <FitnessFramework/>
      <RealResults/>
      <ChatSection/>
      <FAQs/>
      <ProgramBreakdown/>
      <AboutPrimateSection/>
    </div>
  );
}

export default App;
