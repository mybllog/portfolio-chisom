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
