import {  FaLinkedinIn, FaGithub } from "react-icons/fa";
import { contactImg } from "../assets";

const ContactLeft = () => {
  return (
    <div className="w-full lgl:w-[35%] h-full bg-gradient-to-r from-[#0B1120] to-[#0B1120] p-4 lgl:p-8 rounded-lg shadow-shadowOne flex flex-col gap-8 justify-center">
      <img
        className="w-full h-64 object-cover rounded-lg mb-2"
        src={contactImg}
        alt="contactImg"
      />
      <div className="flex flex-col gap-4">
        <h3 className="text-3xl font-bold text-white">Ozowara Chisom</h3>
        <p className="text-lg font-normal text-gray-400">
          Full Stack Developer
        </p>
        <p className="text-base text-gray-400 tracking-wide">
        Enthusiastic and detail-oriented Full Stack Developer with a solid foundation in both front-end and back-end technologies. Proficient in Java,Javascript frameworks, and tools relevant to full stack development, I am eager to apply my technical skills and collaborative mindset to contribute to dynamic and innovative projects. A quick learner with a passion for staying abreast of industry trends, I am poised to bring fresh perspectives and a commitment to excellence to a growth-focused development team.
        </p>
        <p className="text-base text-gray-400 flex items-center gap-2">
          Phone: <span className="text-lightText">+234(07034071861)</span>
        </p>
        <p className="text-base text-gray-400 flex items-center gap-2">
          Email: <span className="text-lightText">chisomeleanora@gmail.com</span>
        </p>
      </div>
      <div className="flex flex-col gap-4">
        <h2 className="text-base uppercase font-titleFont mb-4">Find me in</h2>
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
    </div>
  );
};

export default ContactLeft;
