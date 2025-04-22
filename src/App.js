import AboutPrimateSection from './components/About';
import ChatSection from './components/ChatSection';
import FitnessFramework from './components/FitnessFramework';
import Hero from './components/Hero';
import MyStory from './components/MyStory';
import RealResults from './components/RealResults';
import WhoIWorkWith from './components/WhoIWorkWith';

function App() {
  return (
    <div className="font-sans">
      <Hero />
      <WhoIWorkWith />
      <MyStory/>
      <FitnessFramework/>
      <RealResults/>
      <ChatSection/>
      <AboutPrimateSection/>
    </div>
  );
}

export default App;
