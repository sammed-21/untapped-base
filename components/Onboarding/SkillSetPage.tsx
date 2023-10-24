import React, { ChangeEvent, FormEvent, useState } from "react";
import Image from "next/image";
import dout from "@/assets/dout.svg";
import forwardarrow from "@/assets/forwardarrow.svg";
import Search from "@/assets/Search.svg";
import { Select, SelectOption } from "@/components/AppSkillSetSelection";
import APPButton from "../AppButton";

export const dummyItems: string[] = [
  "Item 1",
  "Item 2",
  "Another Item",
  "More Items",
  "Sample Item",
  "Test Item",
  // Add more items as needed
];

const options = [
  { label: "Account Management", value: 1 },
  { label: "Art", value: 2 },
  { label: "Automotive", value: 3 },
  { label: "Backend", value: 4 },
  { label: "Business", value: 5 },
  { label: "Client Success", value: 6 },
  { label: "Customer Service", value: 7 },
  { label: "Marketing", value: 8 },
  { label: "Mobile", value: 9 },
];
const option2 = [
  { label: "HTML", value: 1 },
  { label: "Css", value: 2 },
  { label: "React.js", value: 3 },
  { label: "Excel", value: 4 },
  { label: "Next.js", value: 5 },
  { label: "Typescript", value: 6 },
  { label: "Javascript ", value: 7 },
  { label: "Backend", value: 8 },
  { label: "Frontend", value: 9 },
];

const SkillSetPage: React.FC = () => {
  const [value1, setValue1] = useState<SelectOption[]>([options[0]]);
  const [value2, setValue2] = useState<SelectOption[]>([option2[0]]);
  const [loader, setLoader] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoader(true);
    // Perform form submission logic here
  };

  return (
    <div className="relative w-full p-[18.5px] container border-none overflow-hidden ">
      <div className="flex flex-col my-5 items-center w-full justify-center max-md:px-5">
        <h1 className="text-[2rem] font-sans font-semibold tracking-wide leading-8">
          Skill set
        </h1>
        <p className="text-gray-900 text-center mt-[1rem]">
          Recruiters can search through profiles based off certain skills needed
          for a role, so be sure to represent your full abilities here.
        </p>
      </div>

      <div className="flex w-full justify-center items-center px-5">
        <form onSubmit={handleSubmit} className="w-full flex">
          <section className="flex flex-col gap-4 justify-center items-start w-full p-15">
            {/* ... Other form elements */}

            <div className="border-[1px]  max-lg:min w-full flex flex-col gap-2 border-gray-100">
              <div className="relative flex flex-col mb-2 max-w-92">
                <p className="font-semibold text-sm text-gray-700 mb-2 block">
                  Areas of expertise
                </p>
                <p className="text-sm text-gray-500">
                  What areas do you have the most expertise with? (Choose up to
                  4)
                </p>
              </div>
              <div className="relative w-full lg:w-[325px]">
                <span
                  className="absolute z-50 left-3 bottom-6"
                  // style={{ bottom: `calc(35% - 10px)` }}
                >
                  <Image src={Search} width={18} height={18} alt="image" />
                </span>
                <Select
                  multiple
                  options={options}
                  classname="min-w-full pl-10"
                  image={dout}
                  value={value1}
                  onChange={(o) => setValue1(o)}
                />
              </div>
            </div>

            <div className="border-[1px] max-lg:min w-full border-gray-100 z-50">
              <div className="relative max-w-92 mb-2">
                <p className="font-semibold text-sm text-gray-700 mb-2 block">
                  Top Skills
                </p>
                <p className="text-sm text-gray-500">Choose up to 10 skills</p>
              </div>

              <div className="relative w-full lg:w-[325px] ">
                {/* className="absolute z-50 left-3 bottom-6" */}
                <span className="absolute z-10 left-3 bottom-6">
                  <Image src={Search} width={18} height={18} alt="image" />
                </span>
                <Select
                  multiple
                  options={option2}
                  classname="min-w-full pl-10"
                  value={value2}
                  onChange={(o) => setValue2(o)}
                />
              </div>
            </div>

            <div className="flex w-full items-center justify-center mt-3 mb-11">
              <span className="relative">
                <span
                  className="absolute right-3"
                  style={{ bottom: `calc(5% + 10px)` }}
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
                  text="Save & continue"
                  loading={loader}
                  classname="w-44 border-gray-300 font-semibold"
                />
              </span>
            </div>
          </section>
        </form>
      </div>
    </div>
  );
};

export default SkillSetPage;
