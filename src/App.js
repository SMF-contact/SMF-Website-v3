import React from "react";
import FixedSocial from "./components/helper/fixedsocial";
import Header from "./components/header";
import Hero from "./components/hero";
import About from "./components/about";
import Features from "./components/features";
import RoadMap from "./components/roadmap";
import Tokenomics from "./components/tokenmonics";
import Presale from "./components/presale";
import Team from "./components/team";
import Pertners from "./components/partners";
import Footer from "./components/footer";
import ScrollTop from "./components/helper/scroolToTop";
import Privacypolicy from "./components/Privacypolicy";
import TermOfUse from "./components/TermOfUse";
import { Routes, Route } from "react-router-dom"; 


const Home = () => {
 

  return(
    <> 
      <FixedSocial/>
      <ScrollTop />
      <Header/>  
      <Hero/>  
      <About/>
      <Features/>
      <RoadMap/>
      <Tokenomics/>
      <Presale/>
      <Team/>
      <Pertners/>
      <Footer/>
    </>
  )
}



function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="privacy-policy" element={<Privacypolicy />} />
      <Route path="term-of-use" element={<TermOfUse />} />
    </Routes>
  );
}

export default App; 
