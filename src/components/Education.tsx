import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

const Education = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      {/* part one */}
      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2018 - 2022</p>
          <h2 className="text-3xl md:text-4xl font-bold">Education Quality</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="BSc in Computer Science"
            subTitle="Mountain Top University  (2018 - 2022)"
            result="2:1"
            des=""
          />
          {/*<ResumeCard
            title="MSC in Computer Science "
            subTitle="Wayne State Uiversity (2024 - present)"
            result=""
            des=""
  />*/}
         {/* <ResumeCard
            title="Secondary School Education"
            subTitle="Kingstar Secondary School (1998 - 2000)"
            result="5.00/5"
            des="Secondary education or post-primary education covers two phases on the International Standard Classification of Education scale."
  />*/}
        </div>
      </div>
      {/* part Two */}

      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2020-2021</p>
          <h2 className="text-3xl md:text-4xl font-bold">Job Experience</h2>
        </div>
        <div className="mt-8 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Software Developer Intern"
            subTitle="TC Resource Technology  - (2020-2021)"
            result="United Kingdom"
            des="Collaborated with multiple teams on the development of a Learning Management System (LMS) mandated by stakeholders. This involved gathering user stories, utilizing the MoSCoW method for functional and non-functional requirements, and establishing the project roadmap before commencing development"
          />
          <ResumeCard
            title="Software Development intern"
            subTitle="Digital Bridge Institute - (2021)"
            result="Nigeria"
            des="•Developed a mortgage calculator software using Java in the NetBeans environment and SQLITE,  enabling accurate sales calculations.
            •	Created a mortgage calculator web application using HTML5, CSS3, and JavaScript (MERN stack), providing an intuitive user interface and efficient mortgage calculations.
            •	Built a  frontend marketable website for ordering pizza, including a form, image gallery, and comment section, using React and Bootstrap frameworks.
            "
          />
          <ResumeCard
            title="Software developer"
            subTitle="Manifold Computers - (2023 - 2024)"
            result="Nigeria"
            des="Worked with a team to developed a Cash Flow application for the finance team and an e-commerce platform with secure payment processing, user authentication, and responsive design using React, Tailwind CSS, and Node.js, while also implementing efficient development practices, facilitating the integration of Manifold e-commerce to Zoho with SSL, and contributing to enhancements on the Company Website.
            "
/>
        </div>
      </div>
    </motion.div>
  );
};

export default Education;
