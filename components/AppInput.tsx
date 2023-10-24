"use client";
import React, {
  ChangeEvent,
  FC,
  HTMLInputTypeAttribute,
  useState,
} from "react";
import { twMerge } from "tailwind-merge";
import Image from "next/image";
import requiredImg from "@/assets/svgexport-5.svg";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  type: HTMLInputTypeAttribute;
  label: string;
  value?: string | number;
  name: string;
  placeholder?: string;
  errorMessage?: string;
  errors?: string | boolean;
  disabled?: boolean;
  classname?: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

const AppInput: FC<InputProps> = ({
  type,
  label,
  classname,
  value,
  name,
  placeholder,
  errorMessage,
  disabled,
  onChange,
}: InputProps) => {
  const [focused, setFocused] = useState(false);

  const handleFocus = () => {
    setFocused(true);
  };
  const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
    const newPassword = e.target.value;
    if (onChange) onChange(e);
  };

  return (
    <div className="relative ">
      <label
        className="font-semibold text-sm text-gray-700 mb-1 block"
        htmlFor={name}
      >
        {label}
      </label>
      <input
        type={type}
        className={twMerge(
          "text-base font-normal py-2 px-4 w-60 border border-gray-300 rounded focus:outline-none focus:border-black focus:border-2 transition ease-in",
          classname
        )}
        id={name}
        value={value}
        name={name}
        placeholder={placeholder}
        onChange={(e) => {
          handlePasswordChange(e);
          onChange(e);
        }}
        required
        disabled={disabled}
        data-focused={focused}
        onBlur={handleFocus}
      />
      <span></span>
      <span
        className={` mt-2 ${
          type === "password" ? "relative" : "absolute"
        } hidden `}
      >
        {type !== "password" && errorMessage && (
          <span className="text-sm flex  gap-2 flex-start item-center justify-start text-red-700 mt-1">
            <span>
              <Image
                src={requiredImg}
                width={10}
                height={1}
                className="w-5 bg-red-700 rounded-full"
                alt="required"
              />
            </span>
            <span>{errorMessage}</span>
          </span>
        )}
      </span>
    </div>
  );
};

export default AppInput;
