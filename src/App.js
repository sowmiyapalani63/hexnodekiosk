import  AutoplayCarousel from "./Components/common/AutoplayCarousel";
import Carousal from "./Components/common/Carousal";
import ContactSection from "./Components/common/ContactSection";
import Feautres from "./Components/common/Feautres";
import Header from "./Components/common/Header";
import HeroSection from "./Components/common/Herosection";
import KioskFeatures from "./Components/common/KioskFeatures";
import KioskModesSection from "./Components/common/KioskModesSection";
import PlatformsSection from "./Components/common/PlatformsSection";
import FloatingButtonWithPopup from "./Components/common/Floatingbtn.";






function App() {
  return (
    <div className="font-mulish">
     <Header/>
     <FloatingButtonWithPopup/>
    <HeroSection/>
     <Feautres/>
     <KioskFeatures/> 
      <Carousal/>
      <AutoplayCarousel/>  
      <PlatformsSection/> 
     <ContactSection/>  
     

    </div>
  );
}

export default App;
