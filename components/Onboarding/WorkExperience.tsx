"use client";
import React, { ChangeEvent, FormEvent, useState } from "react";
import AppInput from "../AppInput";
import APPButton from "../AppButton";
import downarrow from "@/assets/downarrow.svg";
import Search from "@/assets/Search.svg";
import forwardarrow from "@/assets/forwardarrow.svg";
import Image from "next/image";
import DropdownInput from "../AppDropDown";
import CustomDropdown, { DropdownOption } from "@/components/AppDropDown";
import DateInput from "../AppData";
import AppSearchInput from "../AppSearchInput";
import { useGlobalState } from "@/context/globalstateContainer";
// import { useOnboardingContext } from "@/context/OnboardingContext"; // Provide the correct path to your OnboardingProvider file

export const dummyItems: string[] = [
  "Item 1",
  "Item 2",
  "Another Item",
  "More Items",
  "Sample Item",
  "Test Item",
  // Add more items as needed
];
const dropdownOptions: DropdownOption[] = [
  { label: "Internship", value: "internship" },
  { label: "Entry Level", value: "entrylevel" },
  { label: "Mid-Senior", value: "midsenior" },
  { label: "Management", value: "management" },
  { label: "Director", value: "director" },
  { label: "Executive Leader", value: "executiveleader" },
];
const WorkExperience: React.FC = ({}) => {
  const { state, dispatch } = useGlobalState();
  const { index } = state;
  const setIndex = (newIndex: string) => {
    dispatch({ type: "SET_INDEX", payload: newIndex });
  };
  // const {
  //   selectedSection,
  //   setSelectedSection,
  //   transitionDirection,
  //   setTransitionDirection,
  //   handleBackSection,
  //   handleNextSection,
  //   componentsMap,
  // } = useOnboardingContext();

  const [selectedItem, setSelectedItem] = useState<string>(""); // State to manage selected item in sidebar
  const [isChecked, setIsChecked] = useState(false); // State for checkbox
  const [endDate, setIsEndDate] = useState(false); // State for checkbox
  const handleCheckboxChange = (e: ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.checked);
    setIsChecked(e.target.checked);
  };
  const handleCehcboxEndDate = (e: ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.checked);
    setIsEndDate(e.target.checked);
  };

  // Define radio button options based on the selected item

  // Handler to change the selected item in the sidebar

  const [name, setName] = useState({
    company: "",
    joblevel: "",
    startdate: "",
    jobtitle: "",
    jobtype: "",
    enddate: "",
  });
  const [error, setError] = useState(false);
  const [loader, setLoader] = useState(false);
  const [visiblePassword, setVisiblePassword] = useState(false);
  const [buttonDisabled, setButtonDisabled] = React.useState(true);

  //this is option for the dropdown inputfield
  const [selectedOption, setSelectedOption] = useState<string | number>("");

  const handleDropdownChange = (selectedValue: string | number) => {
    setSelectedOption(selectedValue);
    // Do something with the selected value, if needed
  };
  //htis search input handlechange
  const handleSelectSearch = (selectedItem: string) => {
    // Do something with the selected item
    setSelectedItem(selectedItem);
    console.log(`Selected item: ${selectedItem}`);
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>): void => {
    if (e.target) {
      const { name, value } = e.target;

      // Ensure name and value are defined before updating the state
      if (name !== undefined && value !== undefined) {
        console.log(name);
        setName((prev) => ({
          ...prev,
          [name]: value,
        }));
      } else {
        console.error("Name or value is undefined in the event target.");
      }
    } else {
      console.error("Event target is undefined.");
    }
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const isAnyEmpty = Object.values(name).some((value) => value === "");
    setLoader(true);

    if (isAnyEmpty) {
      setError(true);
    } else {
      setError(false);
    }
    // handleNextSection();
  };
  const [startDate, setStartDate] = useState({
    startdate: "",
    enddate: "",
  });

  // const handleStartDateChange = (formattedDate: string) => {
  //   setStartDate(formattedDate);
  // };

  React.useEffect(() => {
    if (
      name.company.length > 0 &&
      name.joblevel.length > 0 &&
      name.jobtitle.length > 0 &&
      name.jobtype.length > 0 &&
      name.startdate.length > 0 &&
      name.enddate.length > 0
    ) {
      setButtonDisabled(false);
    } else {
      setButtonDisabled(true);
    }
  }, [name]);

  return (
    <div className="relative w-full  items-center justify-center flex flex-col lg:p-[18.5px]  border-none">
      <div className=" flex flex-col my-5    items-center w-full justify-center max-md:px-5">
        <h1 className="text-[2rem] font-sans font-semibold tracking-wide leading-8">
          Recent work experience
        </h1>

        <p className="text-gray-900 mt-[1rem]">
          You can add additional work experience to your profile later
        </p>
      </div>

      <div className="flex w-full justify-center items-center  ">
        <form onSubmit={handleSubmit} className="w-full flex ">
          <section className=" flex flex-col justify-center items-start  w-full p-15 max-md:p-0">
            <div className="flex gap-4 my-5 relative justify-start items-center h-auto  w-full">
              <AppInput
                type="checkbox"
                errors={error}
                name="checkbox"
                value={""}
                required={false}
                classname=" w-6 h-6  border-[1px] border-gray-300 text-blue-500"
                label=""
                onChange={handleCheckboxChange}
              />
              <span className="mt-6 h-6 mb-4">
                I'm looking for my first job
              </span>
            </div>
            <div
              className={`flex   gap-[24px] w-full ${
                isChecked ? "justify-center" : ""
              }`}
            >
              {" "}
              {/* <div className={` flex w-full    justify-center gap-7 mb-14`}> */}
              {isChecked ? (
                <div className="border-[1px] border-gray-100">
                  <p className="font-semibold p-3  text-xs">
                    You've found the right place. Hundreds of Untapped's
                    partners use the platform specifically to hire for early
                    career roles.
                  </p>
                </div>
              ) : (
                // <div className="max-w-[400px] border-[1px] border-gray-100 p-3 text-sm">
                //   You've found the right place. Hundreds of Untapped's partners
                //   use the platform specifically to hire for early career roles.
                // </div>
                <>
                  {" "}
                  {/* <div className="w-full max-w-[400px] flex flex-col gap-4 max-md:w-full max-md:px-5">{" "} */}
                  <div className="w-[400px] flex flex-col gap-[24px] max-md:w-full ">
                    {/* <span className="relative"> */}
                    <AppSearchInput
                      label="Current / Most Recent Employer"
                      placeholder="Company"
                      value={selectedItem}
                      error={error}
                      classname="min-w-full pl-4  h-[46px]"
                      items={dummyItems}
                      onSelect={handleSelectSearch}
                    />
                    {/* </span> */}
                    <span className="relative">
                      <CustomDropdown
                        label="Experience Level"
                        options={dropdownOptions}
                        value={selectedOption}
                        name="experienceLevel"
                        classname="w-full mb-7 capitalize h-[46px]"
                        placeholder="Select experience level"
                        error={false} // Set this to true to show error message
                        onChange={handleDropdownChange}
                      />
                    </span>
                    <DateInput
                      label="Start Date"
                      type="text"
                      value={name.startdate}
                      classname="w-full h-[46px]"
                      error={false}
                      onChange={handleInputChange}
                      placeholder="MM/YYYY"
                      name="startdate"
                    />
                  </div>
                  {/* <div className="w-full max-w-[400px] flex flex-col gap-4 max-md:w-full max-md:px-5"> */}
                  <div className="w-[400px] max-md:w-full flex flex-col gap-[26px]  ">
                    <AppInput
                      type="text"
                      label="Job Title"
                      value={name.jobtitle}
                      name="jobtitle"
                      classname="w-full h-[46px]"
                      errors={error}
                      onChange={handleInputChange}
                      placeholder="Job title"
                    />

                    <AppSearchInput
                      label="Job Type"
                      value={selectedItem}
                      classname="w-full pl-4 h-[46px]"
                      placeholder="Search Job type (i.e Sales)"
                      items={dummyItems}
                      onSelect={handleSelectSearch}
                    />
                    {/* <AppInput
                        type="text"
                        label="Job Type"
                        value={name.jobtype}
                        name="jobtype"
                        classname="w-full  h-[46px]"
                        error={error}
                        onChange={handleInputChange}
                        placeholder="Search Job type (i.e. Sales)"
                      /> */}
                    {!endDate && (
                      <DateInput
                        label="End Date"
                        type="text"
                        value={name.enddate}
                        classname="w-full mt- h-[46px]"
                        error={false}
                        onChange={handleInputChange}
                        placeholder="MM/YYYY"
                        name="enddate"
                      />
                      // <DateInput
                      //   type="text"
                      //   label="End date"
                      //   value={name.enddate}
                      //   name="endDate"
                      //   classname="min-w-full h-[46px]"
                      //   error={false} // Set to true if there's an error with the input
                      //   onChange={handleInputChange} // Pass the parent's onChange handler
                      //   placeholder="MM/YYYY"
                      // />
                    )}
                    <span
                      className={`${
                        endDate ? "mt-9" : ""
                      } flex justify-start items-center gap-3`}
                    >
                      <AppInput
                        type="checkbox"
                        errors={false}
                        name="checkbox"
                        value={""}
                        classname={` w-6 h-6  border-[1px] text-sm bg-gray-100 checked:border-gray-300 text-blue-500`}
                        label=""
                        onChange={handleCehcboxEndDate}
                      />
                      <span className="">I currently work here</span>
                    </span>
                  </div>{" "}
                </>
              )}
            </div>
            <div className="flex w-full items-center justify-center mt-3 mb-11">
              <span onClick={() => setIndex("education")} className=" relative">
                <span
                  className="absolute right-3"
                  style={{
                    top: `calc(35% - 0px)`, // 10px is half of the image height (20px / 2)
                  }}
                >
                  <Image
                    src={forwardarrow}
                    width={10}
                    height={10}
                    alt="image"
                  />
                </span>

                <APPButton
                  types="submit"
                  forward
                  // disabled={buttonDisabled}

                  aria-label="submit signup-form form"
                  text="Save & continue"
                  loading={loader}
                  classname="w-44   border-gray-300 font-semibold"
                />
              </span>
            </div>
          </section>
        </form>
      </div>
    </div>
  );
};

export default WorkExperience;
// postcss.config.js
