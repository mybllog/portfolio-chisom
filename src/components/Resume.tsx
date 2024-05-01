import { useState } from "react";
import Title from "./Title";
import Education from "./Education";
import Skills from "./Skills";
// import Experience from "./Experience";
import Achievement from './Achievement';
import { FadeIn } from "./FadeIn";

const Resume = () => {
  const [educationData, setEducationData] = useState<boolean>(false);
  const [skillData, setSkillData] = useState<boolean>(false);
  const [achievementData,setAchievementData] = useState<boolean>(false)
  return (
    <section
      id="resume"
      className="w-full py-20 border-b-[1px] border-b-gray-700"
    >
      <FadeIn>
        <div className="flex justify-center items-center text-center">
          <Title title="2+ YEARS OF EXPERIENCE" des="My Resume" />
        </div>
        <div>
          <ul className="w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4">
            <li
              onClick={() => {
                setEducationData(true);
                setAchievementData(false)
                setSkillData(false);
              }}
              className={`${
                educationData
                  ? "border-designColor rounded-lg"
                  : "border-transparent"
              } resumeLi`}
            >
              Education
            </li>
            <li
              onClick={() => {
                setEducationData(false);
                setSkillData(true);
                setAchievementData(false)
              }}
              className={`${
                skillData
                  ? "border-designColor rounded-lg"
                  : "border-transparent"
              } resumeLi`}
            >
              Professional Skills
            </li>
            {/* Other list items removed for brevity */}
            <li
              onClick={() => {
                setEducationData(false)
                setSkillData(false)
                setAchievementData(true)
              }}
              className={`${
                achievementData
                  ? "border-designColor rounded-lg"
                  : "border-transparent"
              } resumeLi`}
            >
              Achievement
            </li>
            {/* Other list items removed for brevity */}
            
          </ul>
        </div>
        {educationData && <Education />}
        {skillData && <Skills />}
        {achievementData && <Achievement />}
      </FadeIn>
    </section>
  );
};

export default Resume;
