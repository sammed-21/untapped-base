"use client";
import React, { createContext, useContext, ReactNode, useState } from "react";

interface OnboardingContextProps {
  selectedSection: string;
  setSelectedSection: React.Dispatch<React.SetStateAction<string>>;
  handleNext: (selectedsection: string) => void;
  loader: boolean;
}

const OnboardingContext = createContext<OnboardingContextProps | undefined>(
  undefined
);

export const useOnboardingContext = () => {
  const context = useContext(OnboardingContext);
  if (!context) {
    throw new Error(
      "useOnboardingContext must be used within an OnboardingContextProvider"
    );
  }
  return context;
};

export const OnboardingContextProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [selectedSection, setSelectedSection] = useState("workexperience");
  const [loader, setLoader] = useState(false);

  const handleNext = (selectedsection: string) => {
    setLoader(true);
    new Promise<void>((resolve) => {
      console.log("inside promise");
      setTimeout(() => {
        setSelectedSection(selectedsection);
        resolve();
      }, 1000);
    }).then(() => {
      setLoader(false);
    });
  };

  return (
    <OnboardingContext.Provider
      value={{ selectedSection, setSelectedSection, handleNext, loader }}
    >
      {children}
    </OnboardingContext.Provider>
  );
};
