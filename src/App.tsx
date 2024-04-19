import Banner from "./components/Banner";
import Contact from "./components/Contact";
import Feature from "./components/Feature";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Resume from "./components/Resume";
import Particle from "./components/Particles";
//import Testimonial from "./components/Testimonial";
import LoadingTimer from "./components/Loading";
function App() {
  return (
    <main className="font-bodyFont w-full h-auto bg-bodyColor text-lightText">
      <Navbar />
      <div className="px-4">
        <div className="max-w-screen-xl mx-auto">
          <LoadingTimer duration={10}/>
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
