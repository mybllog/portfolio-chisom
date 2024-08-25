import Title from "./Title";
import ProjectsCard from "./ProjectsCard";
import { piggyvest, phones, wallet,website,app,ecommerce,capture , locket,agencys,movie,moviess} from "../assets";
import { FadeIn } from "./FadeIn";

const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full py-20 border-b-[1px] border-b-gray-700"
    >
      <FadeIn>
        <div className="flex justify-center items-center text-center">
          <Title
            title="VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK"
            des="My Projects"
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14 animate-pulse">
         <a href="https://www.figma.com/proto/5Je1JVGTjuKQPMfurT1VfT/Tour?page-id=0%3A1&type=design&node-id=1-2&viewport=-71%2C388%2C0.02&t=NS3IGvhaJze45NQr-1&scaling=contain&mode=design"><ProjectsCard
            title="SOCIAL MEDIA DESIGN"
            des="Designed a next-generation social media website targeting a specific demographic using Figma"
            src={app}
          /></a>
          
          <a href="https://store.manifoldcomputers.com/"> <ProjectsCard
            title="E-commerce Website"
            des=" using nodejs and reactjs i developed a Company eCommerce app"
            src={ecommerce}
          /></a>
         
           <a href="https://manifoldcomputers.com/"><ProjectsCard
            title="Company website"
            des="Using Wordpress i developed a Company website"
            src={website}
          /></a>
          <a href="https://kingkeyz.vercel.app/">
          <ProjectsCard
            title="Phone store"
            des=" An online retail platform where customers can purchase both brand-new and refurbished smartphones."
            src={phones}
          /></a>
         <a href="https://www.wintercoin.org/">
          <ProjectsCard
            title="Wallet Connect"
            des=" The wallet app is a secure and user-friendly mobile application designed for seamless financial management."
            src={wallet}
          /></a>
          <a href="https://piggy-vest-cloned.vercel.app/">
          <ProjectsCard
            title="Piggy vest"
            des="A fintech platform providing savings and investment services, and an online retail platform offering brand-new and refurbished smartphones."
            src={piggyvest}
          />
          </a>
          <a href="https://nenyewrites.com/">
          <ProjectsCard
            title="Entrepreneur Resources"
            des="A Blog Website"
            src={capture}
          />
          </a>
          <a href="https://locmarket-web-git-main-anyas-projects-76cc820d.vercel.app">
          <ProjectsCard
            title="LocMarket"
            des="Ecommerce Application"
            src={locket}
          />
          </a>
          <a href="https://travel-agency-gamma-three.vercel.app/">
          <ProjectsCard
            title="Travel Agency"
            des="Travel Agency website"
            src={agencys}
          />
          </a>
          <a href="https://movieapp-livid-tau.vercel.app/">
          <ProjectsCard
            title="Nety"
            des="Movie App"
            src={movie}
          />
          </a>
          <a href="https://expo.dev/artifacts/eas/8J4p4rYP6uVotAjYGGJakv.aab">
          <ProjectsCard
            title="Movies"
            des="Movie Mobile App"
            src={moviess}
          />
          </a>
        </div>
      </FadeIn>
    </section>
  );
};

export default Projects;
