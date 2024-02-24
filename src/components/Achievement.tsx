import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

const Achievement = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2020-2023</p>
          <h2 className="text-3xl md:text-4xl font-bold">Company Experience</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Software Developer intern."
            subTitle="TC Resource Technology."
            result="Success"
            des="Collaborated with multiple teams on the development of a Learning Management System (LMS) mandated by stakeholders. This involved gathering user stories, utilizing the MoSCoW method for functional and non-functional requirements, and establishing the project roadmap before commencing development"
          />
          <ResumeCard
            title="Software Developer intern."
            subTitle="Digital Bridge Institute - (2021)"
            result="Success"
            des="•Developed a mortgage calculator software using Java in the NetBeans environment and SQLITE,  enabling accurate sales calculations.
            •	Created a mortgage calculator web application using HTML5, CSS3, and JavaScript (MERN stack), providing an intuitive user interface and efficient mortgage calculations.
          "
          />
          <ResumeCard
            title="Full Stack Developer"
            subTitle="Manifold Computers Limited"
            result="Success"
            des="Experienced in full-stack development, contributed to cash flow and e-commerce applications using Node.js and React.js. Specialized in secure payment processing, user authentication, and responsive design. Proficient in version control (Git) and domain management, with a track record of enhancing code reliability and user experience."
          />
        </div>
      </div>
      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2020 - 2023</p>
          <h2 className="text-3xl md:text-4xl font-bold">Certifications</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="TCRT resource technology-[2020]."
            //subTitle="Lorem ipsum dolor sit amet alternative."
            result="Success"
            //des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora itaque accusamus corporis dolor debitis natus sapiente, voluptates possimus minima totam!"
          />
          <ResumeCard
            title="[Java and Android application (New Horizon)] - [2021]."
            //subTitle="Lorem ipsum dolor sit amet alternative."
            result="Success"
            //des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora itaque accusamus corporis dolor debitis natus sapiente, voluptates possimus minima totam!"
          />
          <ResumeCard
            title="[Certification in Javascript], [Udemy] - [2021]"
            //subTitle="Lorem ipsum dolor sit amet alternative."
            result="Success"
            //des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora itaque accusamus corporis dolor debitis natus sapiente, voluptates possimus minima totam!"
          />
           <ResumeCard
            title="[Intermediate Relational database and SQL], [Cousera]-[2021]"
            //subTitle="Lorem ipsum dolor sit amet alternative."
            result="Success"
            //des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora itaque accusamus corporis dolor debitis natus sapiente, voluptates possimus minima totam!"
          />
          
        </div>
      </div>
    </motion.div>
  );
};

export default Achievement;
