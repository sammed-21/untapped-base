"use client";
import { motion } from "framer-motion";
import React, { useState, ReactNode, ChangeEvent, FormEvent } from "react";
import Image from "next/image";
import backarrow from "@/assets/backarrow.svg";
import WorkExperience from "@/components/Onboarding/WorkExperience";
import SkillSetPage from "@/components/Onboarding/SkillSetPage";
import ResumePage from "@/components/Onboarding/ResumePage";
import AuthorizationPage from "@/components/Onboarding/AuthorizationPage";
import EducationPage from "@/components/Onboarding/EducationPage";
import logo from "@/assets/brand-logo-combined.svg";
import { useGlobalState } from "@/context/globalstateContainer"; // Adjust the import path

interface Props {
  children: ReactNode;
}

type VisiblePassProp = "password" | "text" | string;

const componentsMap: Record<
  string,
  { component: React.ReactNode; index: number }
> = {
  workexperience: {
    component: <WorkExperience />,
    index: 0,
  },
  education: { component: <EducationPage />, index: 1 },
  resume: { component: <ResumePage />, index: 2 },
  skillset: { component: <SkillSetPage />, index: 3 },
  authorization: { component: <AuthorizationPage />, index: 4 },
};

const OnboardingPage: React.FC<Props> = ({ children }: Props) => {
  const { state, dispatch } = useGlobalState();
  console.log(state);
  const [selectedSection, setSelectedSection] = useState("workexperience");
  const [backSelectedSection, setBackSelectedSection] = useState("");
  const currentIndex = componentsMap[selectedSection].index;

  const handleSectionChange = (section: string) => {
    // dispatch({ type: "SET_INDEX", payload: selectedSection });
    setBackSelectedSection(section);
    const nextIndex = componentsMap[section].index;
    setSelectedSection(section);
    const direction = nextIndex > currentIndex ? 1 : -1;
    setTransitionDirection(direction);
  };
  const handleBackSection = () => {
    if (componentsMap[backSelectedSection].index > 0) {
      const previousIndex = componentsMap[backSelectedSection].index - 1;
      const previousSection = Object.keys(componentsMap).find(
        (key) => componentsMap[key].index === previousIndex
      );
      if (previousSection) {
        setSelectedSection(previousSection);
        setTransitionDirection(-1); // Set direction to move left
      }
    }
  };
  const handleNextSection = () => {
    const currentIndex = componentsMap[selectedSection].index;
    const nextIndex = currentIndex + 1;
    const nextSection = Object.keys(componentsMap).find(
      (key) => componentsMap[key].index === nextIndex
    );

    if (nextSection) {
      setSelectedSection(nextSection);
      setTransitionDirection(1); // Set direction to move right
    }
  };

  const [transitionDirection, setTransitionDirection] = useState(1);
  return (
    <div className="w-full bg-gray-100 min-h-screen relative flex justify-center gap-[31px] items-center">
      <div className="absolute left-[2.79rem] z-10 top-[2.76rem] ">
        <Image src={logo} width={185} height={75} alt="logo" className="" />
      </div>
      <section className="flex w-full max-xl:mx-1 border-none  min-h-fit justify-center gap-6 my-[44px]  z-10">
        <div className="container lg:w-[1000px] max-lg:min-w-full shadow-md max-xl:items-center bg-white rounded-lg p-2">
          <div className="flex space-x-6 gap-5 w-full flex-wrap items-center text-xs justify-center py-8">
            <Image
              src={backarrow}
              onClick={handleBackSection}
              alt={"image"}
              width={10}
              height={10}
            />
            {Object.keys(componentsMap).map((section) => (
              <p
                key={section}
                className={`text-black cursor-pointer ${
                  selectedSection === section ? "font-semibold" : "font-normal"
                }`}
                onClick={() => handleSectionChange(section)}
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </p>
            ))}
          </div>
          <hr className="underline" />

          <div className="flex w-full border-none bg-white justify-center overflow-x-hidden -z-20 ">
            {selectedSection in componentsMap && (
              <motion.div
                className="w-full  px-9"
                key={selectedSection}
                initial={{ opacity: 0, x: `${100 * transitionDirection}%` }}
                animate={{ opacity: 1, x: "0%" }}
                exit={{ opacity: 0, x: `${-100 * transitionDirection}%` }}
                transition={{ duration: 0.5 }}
              >
                {componentsMap[selectedSection].component}
              </motion.div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default OnboardingPage;
function handleNextSection(): void {
  throw new Error("Function not implemented.");
}
