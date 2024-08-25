import { useTypewriter, Cursor } from "react-simple-typewriter";
import { FaLinkedinIn, FaReact, FaGithub } from "react-icons/fa";
import { SiFigma,SiTailwindcss,SiNextdotjs,SiNodemon,SiNativescript} from "react-icons/si";
import { FadeIn } from "./FadeIn";

const LeftBanner = () => {
  const [text] = useTypewriter({
    words: ["Professional Coder.", "Full Stack Developer."],
    loop: true,
    typeSpeed: 10,
    deleteSpeed: 10,
    delaySpeed: 2000,
  });

 
  return (
    <FadeIn className="w-full lgl:w-1/2 flex flex-col gap-20">
      <div className="flex flex-col gap-5">
        <h4 className=" text-lg font-normal">WELCOME TO MY WORLD</h4>
        <h1 className="text-6xl font-bold text-white">
          Hi, I'm <span className="text-designColor capitalize">Ozowara Chisom</span>
        </h1>
        <h2 className="text-4xl font-bold text-white">
          a <span>{text}</span>
          <Cursor cursorStyle="|" cursorColor="#ff014f" />
        </h2>
        <p className="text-base font-bodyFont leading-6 tracking-wider">
        Enthusiastic and detail-oriented Full Stack Developer with a solid foundation in both front-end and back-end technologies. Proficient in Java,Javascript frameworks, and tools relevant to full stack development, I am eager to apply my technical skills and collaborative mindset to contribute to dynamic and innovative projects. A quick learner with a passion for staying abreast of industry trends, I am poised to bring fresh perspectives and a commitment to excellence to a growth-focused development team.
        </p>
      </div>
      <div className="flex flex-col xl:flex-row gap-6 lgl:gap-0 justify-between">
        <div>
          <h2 className="text-base uppercase font-titleFont mb-4">
            Find me in
          </h2>
          <div className="flex gap-4">
            {/*<a href="https://www.youtube.com/@reactjsBD" target="_blank">
              <span className="bannerIcon">
                <FaYoutube />
              </span>
  </a>*/}
            <a
              href="https://www.linkedin.com/in/chisom-ozowara-53512a1b6?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
              target="_blank"
            >
              <span className="bannerIcon">
                <FaLinkedinIn />
              </span>
            </a>
            <a
            href="https://github.com/mybllog"
            target="_blank"
          >
            <span className="bannerIcon">
              <FaGithub/>
            </span>
          </a>
            {/*<a href="https://www.facebook.com/Noorlalu143/" target="_blank">
              <span className="bannerIcon">
                <FaFacebookF />
              </span>
</a>*/}
          </div>
        </div>
        <div>
          <h2 className="text-base uppercase font-titleFont mb-4">
            BEST SKILL ON
          </h2>
          <div className="flex gap-4">
            <span className="bannerIcon">
              <FaReact />
            </span>
          <span className="bannerIcon">
              <SiNextdotjs />
            </span>
            <span className="bannerIcon">
              <SiTailwindcss />
</span>
            <span className="bannerIcon">
              <SiFigma />
            </span>
            <span className="bannerIcon">
              <SiNodemon />
            </span>
            <span className="bannerIcon">
              <SiNativescript />
            </span>
          </div>
        </div>
       
      </div>
      <button className="button hover:bg-white hover:text-black  py-2 px-4 rounded-lg">
    <a className="button" href={"/public/files/Eleanora.pdf"} download = "chisomcv.pdf">
      Download Resume
    </a>
</button>
    </FadeIn>
  );
};

export default LeftBanner;
