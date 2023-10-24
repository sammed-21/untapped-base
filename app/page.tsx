import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className=" text-5xl flex flex-col gap-10 text-green-400  w-full h-screen justify-center items-center">
      <Link href={"/signup"}>signup</Link>
      <Link href={"/signin"}>signIn</Link>{" "}
      <Link href={"/onboarding"}>onBoarding</Link>{" "}
      <Link href={"/discover"}>profile</Link>{" "}
    </main>
  );
}
