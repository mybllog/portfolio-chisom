import Banner from "./components/Banner";
import Contact from "./components/Contact";
import Feature from "./components/Feature";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Resume from "./components/Resume";
import Particle from "./components/Particles";
import { useEffect, useState } from "react";
//import Testimonial from "./components/Testimonial";


function App() {
 
  const [scrollPosition,setScrollPosition] = useState<number>(0)
  useEffect(()=>{
    const handleScroll = () =>{
      const position = window.scrollY
      setScrollPosition(position)
    }
    window.addEventListener('scroll',handleScroll)
    return()=>{
      window.removeEventListener('scroll',handleScroll)
    }
  },[])
 
  return (
    <main className="font-bodyFont w-full h-auto bg-bodyColor text-lightText" style={{backgroundColor:scrollPosition>100?'black':'rgb(11 17 32 / var(--tw-bg-opacity))'}}>
      <Navbar />
      <div className="px-4">
        <div className="max-w-screen-xl mx-auto">
       
          <Particle />
          <Banner />
          <Feature />
          <Projects />
          <Resume />
       
          <Contact />
          <Footer />
        </div>
      </div>
    </main>
  );
}

export default App;
