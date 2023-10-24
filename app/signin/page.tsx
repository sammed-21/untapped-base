"use client";
import Image from "next/image";
import React, { ChangeEvent, FormEvent, useState } from "react";
import sighinBanner from "@/assets/loginbanner.png";
import sighinpasswordvis from "@/assets/password-visible.svg";
import GoogleSSO from "@/assets/GoogleSSO.png";
import logo from "@/assets/brand-logo-combined.svg";
import password from "@/assets/password-invisible.svg";

import Link from "next/link";

// import { Inputs } from "@/components/Inputs";
import AppInput from "@/components/AppInput";

import APPButton from "@/components/AppButton";
type visiblePassProp = "password" | "text" | string;
const SignIn = () => {
  const [name, setName] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState(false);
  const [loader, setLoader] = useState(false);
  const [visiblePassword, setVisiblePassword] = useState(false);
  const [buttonDisabled, setButtonDisabled] = React.useState(true);

  const [passwordType, setPasswordType] = useState<visiblePassProp>("password");

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
    console.log(name);
  };
  //   function handlePasswordfunction() {
  //     let visiblePasswords: string = visiblePassword ? "text" : "password";

  //     setPasswordType(visiblePasswords);
  //   }
  const handleVisiblePassword = () => {
    // console.log("clicked on visible password button", visiblePasswords);
    // setVisiblePassword((prev) => !prev);
    setPasswordType((prev) => (prev === "password" ? "text" : "password"));
    setVisiblePassword((prev) => !prev);
  };
  React.useEffect(() => {
    if (name.email.length > 0 && name.password.length > 0) {
      setButtonDisabled(false);
    } else {
      setButtonDisabled(true);
    }
  }, [name]);
  return (
    <main className="relative flex w-full justify-between overflow-x-hidden min-h-screen">
      {/* <div className="sticky flex flex-col gap-6 w-1/4 z-10 bg-white py-8 max-md:sticky max-md:px-8 "> */}
      <div className="sticky flex flex-col gap-4 pt-8 py-10 px-10">
        <Image
          src={logo}
          width={180}
          height={30}
          alt="logo"
          className="py-4 px-2"
        />

        <div className="flex w-flex-col justify-center px-4 items-center">
          <div className="w-full justify-center items-center flex">
            <div className="w-[370px]">
              <h1 className="text-5xl font-medium font-serif text-left py-5">
                Log In
              </h1>

              <span className="text-gray-400 my-3">
                Need an Untapped account?
                <Link
                  href={"/signup"}
                  className="font-semibold text-[0.875rem] text-[#3365e6]"
                >
                  {" "}
                  Sign up
                </Link>
              </span>
              <div className="relative flex justify-center  px-3  rounded-md items-center w-full h-[37px] border-[1px] border-black my-5">
                <span className="absolute left-2 flex-start">
                  <Image src={GoogleSSO} width={15} height={15} alt="img" />
                </span>
                <span className="border-3 items-center font-semibold justify-center flex-end flex border-black">
                  {" "}
                  Continue with Google
                </span>
              </div>
              <span className="flex my-3 items-center">
                <hr className="flex-grow border-t-2 mr-3" />
                or
                <hr className="flex-grow border-t-2 ml-3" />
              </span>
              <form onSubmit={handleSubmit}>
                <section className="flex flex-col">
                  <AppInput
                    type="text"
                    label="Email"
                    value={name.email}
                    name="email"
                    classname="w-full"
                    errors={error}
                    onChange={handleInputChange}
                    placeholder="Email"
                  />
                  <a href="#" className="relative">
                    <span onClick={() => handleVisiblePassword()}>
                      {visiblePassword ? (
                        <Image
                          src={sighinpasswordvis}
                          width={20}
                          height={20}
                          className="absolute top-[65px] right-3"
                          alt="image"
                        />
                      ) : (
                        <Image
                          src={password}
                          width={20}
                          height={20}
                          className="absolute top-[65px] right-3"
                          alt="image"
                        />
                      )}
                    </span>

                    <AppInput
                      type={passwordType}
                      label="password"
                      value={name.password}
                      name="password"
                      classname="w-full"
                      errors={error}
                      onChange={handleInputChange}
                      placeholder="password"
                    />
                  </a>
                  <div className="py-3">
                    {/* <button type="submit">submit</button> */}
                    <APPButton
                      types="submit"
                      text="Log in"
                      disabled={buttonDisabled}
                      classname="w-full border-gray-300 font-semibold"
                      loading={false}
                    />
                  </div>
                </section>
              </form>
              <div className="text-sm">
                <p className="text-gray-400">
                  By clicking “Sign up” or “Sign up with Google,” you’re
                  agreeing to Untapped’s{" "}
                  <span className="underline">Terms of Use.</span>
                </p>
                <br />
                <p>
                  Already have an Untapped account?{" "}
                  <Link
                    className="font-semibold text-[0.875rem] text-[#3365e6] "
                    href={"#"}
                  >
                    Log In
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="relative flex xl:min-w-10/12 min-h-screen-full w-full">
        {/* <div className="relative flex xl:w-9/12 min-h-screen-full w-full"> */}
        <div className="relative  w-full object-cover ">
          <Image
            src={sighinBanner}
            fill
            alt="image"
            className=" w-full object-none transform "
            // className="absolute inset-0 w-full h-full object-cover"
          />
        </div>
      </div>
    </main>
  );
};

export default SignIn;
