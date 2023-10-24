"use client";
import React, { ChangeEvent, FormEvent, useState } from "react";
import AppInput from "../AppInput";
import APPButton from "../AppButton";
import downarrow from "@/assets/downarrow.svg";
import Search from "@/assets/Search.svg";
import forwardarrow from "@/assets/forwardarrow.svg";
import Image from "next/image";
import DropdownInput from "../AppDropDown";
import { DropdownOption } from "@/components/AppDropDown";
import DateInput from "../AppData";
import AppSearchInput from "../AppSearchInput";
import Textarea from "../AppTextarea";
import PreviousMap from "postcss/lib/previous-map";

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
const EducationPage: React.FC = ({}) => {
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

  const [error, setError] = useState(false);
  const [loader, setLoader] = useState(false);
  const [visiblePassword, setVisiblePassword] = useState(false);
  const [buttonDisabled, setButtonDisabled] = React.useState(true);
  const [majors, setMajors] = useState<string[]>([]);
  const [minors, setMinors] = useState<string[]>([]);
  //this is option for the dropdown inputfield
  const [selectedOption, setSelectedOption] = useState<string | number>("");
  const [name, setName] = useState({
    company: "",
    joblevel: "",
    startdate: "",
    jobtitle: "",
    jobtype: "",
    enddate: "",
  });
  const [educationSelfTaught, setEducationSelfTaught] = useState({
    school: "",
    textarea: "",
  });

  const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    const newText = e.target.value;
  };

  const handleDropdownChange = (selectedValue: string | number) => {
    console.log(selectedValue);
    setSelectedOption(selectedValue);
    // Do something with the selected value, if needed
  };
  //htis search input handlechange
  const handleSelectSearch = (selectedItem: string) => {
    // Do something with the selected item
    setSelectedItem(selectedItem);
    console.log(`Selected item: ${selectedItem}`);
  };
  //handle major button
  const handleMajor = () => {
    setMajors([...majors, ""]); // Add an empty major field
  };

  const handleMinor = () => {
    setMinors([...minors, ""]); // Add an empty minor field
  };
  const handleInputChange = (e: ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = e.target;
    setName((prev) => ({
      ...prev,
      [name]: value,
    }));
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
  };
  const HanldeCheckbox = (e: FormEvent<HTMLFormElement>) => {
    console.log(e.target);
  };

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
    <div className="relative min-w-full p-[18.5px] container ">
      <div className=" flex flex-col my-5    items-center min-w-full justify-center max-md:px-5">
        <h1 className="text-[2rem] font-sans font-semibold tracking-wide leading-8">
          Education
        </h1>
      </div>

      <div className="flex w-full justify-center items-center px-5 ">
        <form onSubmit={handleSubmit} className="w-full flex ">
          <section className=" flex flex-col justify-center items-start  w-full p-15">
            <div className="flex gap-4 my-5 relative justify-start items-center h-auto  w-full">
              <AppInput
                type="checkbox"
                errors={false}
                name="checkbox"
                value={""}
                classname="text-xs w-6 h-6 border-[1px] border-gray-300 text-blue-500"
                label=""
                onChange={handleCheckboxChange}
              />
              <span className="mt-6 h-6 mb-4">I'm self-taught</span>
            </div>
            <div
              className={` flex w-full min-w-full max-md:flex-col max-md:items-center  gap-7 mb-2`}
            >
              {/* {isChecked ? (
                <div className="border-[1px] w-full  min-w-full border-gray-100">
                  <span className="relative">
                    <span
                      className="absolute right-3"
                      style={{
                        top: `calc(60% - 0px)`, // 10px is half of the image height (20px / 2)
                      }}
                    >
                      <Image src={Search} width={18} height={18} alt="image" />
                    </span>
                    <AppSearchInput
                      label="Self Taught Decpline"
                      value={selectedItem}
                      classname="w-full min-w-full"
                      placeholder="School/Traning"
                      items={dummyItems}
                      onSelect={handleSelectSearch}
                    />
                  </span>
                  <Textarea
                    label="Description"
                    placeholder="Enter your description..."
                    value={educationSelfTaught.textarea}
                    onChange={handleChange}
                  />
                </div> */}
              {isChecked ? (
                <div className="flex min-w-full flex-col gap-4">
                  <span className="relative">
                    <span
                      className="absolute right-3"
                      style={{ top: `calc(60% - 0px)` }}
                    >
                      <Image src={Search} width={18} height={18} alt="image" />
                    </span>
                    <AppSearchInput
                      label="Self Taught Discipline"
                      value={selectedItem}
                      classname="pl-4 w-full h-[44px]"
                      placeholder="School/Training"
                      items={dummyItems}
                      onSelect={handleSelectSearch}
                    />
                  </span>
                  <Textarea
                    label="Description"
                    placeholder="Enter your description..."
                    value={educationSelfTaught.textarea}
                    onChange={handleChange}
                    classname="w-full h-[252px] "
                  />
                </div>
              ) : (
                <div className="flex flex-col min-w-full   gap-[22.5px]">
                  {" "}
                  <div>
                    <span className="relative">
                      <span
                        className="absolute right-3"
                        style={{
                          top: `calc(60% - 0px)`, // 10px is half of the image height (20px / 2)
                        }}
                      >
                        <Image
                          src={Search}
                          width={18}
                          height={18}
                          alt="image"
                        />
                      </span>
                      <AppSearchInput
                        label="School/Traning
                        "
                        value={selectedItem}
                        placeholder="School/traning"
                        classname="w-full pl-4 h-[46px]"
                        items={dummyItems}
                        onSelect={handleSelectSearch}
                      />
                    </span>
                  </div>
                  <div className="flex justify-between gap-[22.5px] ">
                    <div className="w-[400px] max-md:w-full flex flex-col gap-[22.5px]  max-md:px-5">
                      {/* <div className="w-[400px] flex flex-col gap-[22.5px] max-md:w-full max-md:px-5"> */}
                      <DateInput
                        label="Start Date"
                        type="text"
                        value={name.startdate}
                        classname="min-w-full h-[46px]"
                        error={false}
                        onChange={handleInputChange}
                        placeholder="MM/YYYY"
                        name="startdate"
                      />
                      <DropdownInput
                        label="Experience Level"
                        options={dropdownOptions}
                        value={selectedOption}
                        name="experienceLevel"
                        classname="w-full capitalize h-[46px] placeholder:font-gray-300"
                        placeholder="Select experience level"
                        error={false} // Set this to true to show error message
                        onChange={handleDropdownChange}
                      />
                    </div>
                    <div className="w-[400px] max-md:w-full flex flex-col gap-[22.5px]  max-md:px-5">
                      <DateInput
                        type="text" // 'text' type ensures the input behaves as a text field (no date picker)
                        label="End date"
                        value={name.enddate}
                        name="enddate"
                        classname="w-full h-[46px]"
                        error={error}
                        onChange={handleInputChange}
                        placeholder="MM/YYYY"
                      />
                      <span className="relative">
                        <span
                          className="absolute right-3"
                          style={{
                            top: `calc(60% - 0px)`, // 10px is half of the image height (20px / 2)
                          }}
                        >
                          <Image
                            src={Search}
                            width={18}
                            height={18}
                            alt="image"
                          />
                        </span>
                        <AppSearchInput
                          label="Major"
                          value={selectedItem}
                          placeholder="Major"
                          classname="w-full pl-4 h-[46px]"
                          items={dummyItems}
                          onSelect={handleSelectSearch}
                        />
                      </span>
                      {majors.map((_, index) => (
                        <span key={index} className="relative">
                          <span
                            className="absolute right-3"
                            style={{
                              top: `calc(60% - 0px)`, // 10px is half of the image height (20px / 2)
                            }}
                          >
                            <Image
                              src={Search}
                              width={18}
                              height={18}
                              alt="image"
                            />
                          </span>
                          <AppSearchInput
                            label="Additional Major"
                            value={selectedItem}
                            placeholder="Add Major..."
                            classname="w-full h-[46px]"
                            items={dummyItems}
                            onSelect={handleSelectSearch}
                          />
                        </span>
                      ))}
                      {minors.length < 3 &&
                        minors.map((_, index) => (
                          <span key={index} className="relative">
                            <span
                              className="absolute right-3"
                              style={{
                                top: `calc(60% - 0px)`, // 10px is half of the image height (20px / 2)
                              }}
                            >
                              <Image
                                src={Search}
                                width={18}
                                height={18}
                                alt="image"
                              />
                            </span>
                            <AppSearchInput
                              label="Additional Major"
                              value={selectedItem}
                              placeholder="Add Minor..."
                              classname="w-full h-[46px]"
                              items={dummyItems}
                              onSelect={handleSelectSearch}
                            />
                          </span>
                        ))}
                      <div className="flex justify-end items-center gap-4">
                        <button
                          onClick={handleMajor}
                          type="button"
                          className="text-blue-600 text-sm font-semibold"
                        >
                          Add a major
                        </button>
                        <button
                          type="button"
                          onClick={handleMinor}
                          className="text-blue-600 text-sm font-semibold"
                        >
                          Add a minor
                        </button>
                      </div>{" "}
                    </div>{" "}
                  </div>
                </div>
              )}
            </div>
            {!isChecked && (
              <button
                type="button"
                className="text-sm flex  gap-3 text-blue-500 mb-2 border-[1px] border-blue-600 py-3 px-3 rounded-full"
              >
                +<p className=" font-semibold"> Add Another School</p>
              </button>
            )}
            <div className="flex w-full items-center justify-center mb-11">
              <span className="relative">
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
                  types="button"
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

export default EducationPage;
// postcss.config.js
