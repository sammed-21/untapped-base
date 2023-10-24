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
import tickmark from "@/assets/tickmark.svg";
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
const AuthorizationPage: React.FC = ({}) => {
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

  const [selectedLocation, setSelectedLocation] = useState<string>("");
  const [workAuthorization, setWorkAuthorization] = useState<string | null>(
    null
  ); // "yes" or "no"
  const [sponsorship, setSponsorship] = useState<string | null>(null); // "yes" or "no"

  const handleLocationSelect = (selectedItem: string) => {
    setSelectedLocation(selectedItem);
    console.log(`Selected location: ${selectedItem}`);
  };

  const handleWorkAuthorizationClick = (value: string) => {
    setWorkAuthorization(value === workAuthorization ? null : value);
    // Reset sponsorship selection when work authorization is clicked
  };

  const handleSponsorshipClick = (value: string) => {
    setSponsorship(value === sponsorship ? null : value);
    // Reset work authorization selection when sponsorship is clicked
  };

  const getButtonClasses = (value: string | null) => {
    return `border-[1px] py-1 w-1/2 ${
      value ? (value === "yes" ? "bg-black text-white" : "") : "border-black"
    }`;
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
      {" "}
      <div className=" flex flex-col my-5    items-center min-w-full justify-center max-md:px-5">
        <h1 className="text-[2rem] font-sans font-semibold tracking-wide leading-8">
          Work authorization
        </h1>
      </div>
      <div className="flex w-full justify-center items-center px-5 ">
        <form onSubmit={handleSubmit} className="w-full flex ">
          <section className=" flex flex-col justify-center items-start  w-full p-15">
            <div
              className={` flex w-full flex-col min-w-full max-md:flex-col max-md:items-center  gap-7 mb-2`}
            >
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
              <div className="flex flex-col gap-4">
                <div className="flex flex-col gap-4">
                  <a className="font-semibold text-sm">Work Authorization</a>
                  <p className="font-light text-sm text-gray-500">
                    Are you authorized to work in the US? This is only visible
                    to recruiters
                  </p>

                  <div className="flex w-full">
                    <input
                      type="button"
                      value="Yes"
                      onClick={() => handleWorkAuthorizationClick("yes")}
                      className={`w-1/2 p-1 border border-black text-center cursor-pointer ${
                        workAuthorization === "yes"
                          ? "bg-black text-white"
                          : "bg-white"
                      }`}
                    />
                    <input
                      type="button"
                      value="No"
                      onClick={() => handleWorkAuthorizationClick("no")}
                      className={`w-1/2 p-1 border border-black text-center cursor-pointer ${
                        workAuthorization === "no"
                          ? "bg-black text-white"
                          : "bg-white"
                      }`}
                    />
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-4">
                <a className="font-semibold text-sm">Sponsorship</a>
                <p className="font-light text-sm text-gray-500">
                  Do you or will you in the future require sponsorship? This is
                  only visible to recruiters
                </p>

                <div className="flex w-full">
                  <input
                    type="button"
                    value="Yes"
                    onClick={() => handleSponsorshipClick("yes")}
                    className={`w-1/2 p-1 border border-black text-center cursor-pointer ${
                      sponsorship === "yes" ? "bg-black text-white" : "bg-white"
                    }`}
                  />
                  <input
                    type="button"
                    value="No"
                    onClick={() => handleSponsorshipClick("no")}
                    className={`w-1/2 p-1 border border-black text-center cursor-pointer ${
                      sponsorship === "no" ? "bg-black text-white" : "bg-white"
                    }`}
                  />
                </div>
              </div>
            </div>
            <div className="flex w-full items-center justify-center mt-3 mb-11">
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
                  types="submit"
                  // disabled={buttonDisabled}
                  aria-label="submit signup-form form"
                  text="Compelete Profile"
                  forwardArrowSrc={tickmark}
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

export default AuthorizationPage;
// postcss.config.js
