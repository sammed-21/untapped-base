// import MainHeader from "@/components/MainHeader";
// import Sidebar from "@/components/Sidebar";
// import MenuContextProvider from "@/context/MenuContext";
// import React, { ReactNode } from "react";
// type Props = {
//   children: ReactNode;
// };
// const layout = (props: Props) => {
//   return (
//     <MenuContextProvider>
//       <div className=" relative grid">
//         <div className="relative ">
//           <Sidebar />
//         </div>
//         <main className=" relative w-full">{props.children}</main>
//       </div>
//     </MenuContextProvider>
//   );
// };

// export default layout;
"use client";
import MainHeader from "@/components/MainHeader";
import Sidebar from "@/components/Sidebar";
import MenuContextProvider from "@/context/MenuContext";
import { useSelectedLayoutSegment } from "next/navigation";
import React, { Children, ReactNode } from "react";

type Props = {
  children: ReactNode;
};

const Layout: React.FC<Props> = (props) => {
  const segment = useSelectedLayoutSegment();
  return (
    <MenuContextProvider>
      <div className="flex  relative overflow-hidden  md:flex-row">
        <Sidebar />

        <div className=" relative flex-col lg:ml-[280px]  flex flex-1 w-full xl:ml-18  ">
          <div className="lg:hidden">
            <MainHeader />
          </div>
          <div className="max-w-screen-2xl bg-[#ffffff]">{props.children}</div>
        </div>
      </div>
    </MenuContextProvider>
  );
};

export default Layout;
