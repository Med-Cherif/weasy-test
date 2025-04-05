"use client";

import useLayoutStore from "@/stores/layout-store";
import Header from "./_components/header/Header";
import Sidebar from "./_components/sidebar/Sidebar";
import { cn } from "@/utils/cn";
import { useEffect } from "react";

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  const { isSidebarCollapse, openSidebar, collapseSidebar } = useLayoutStore();

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth <= 767) {
        collapseSidebar();
      } else {
        openSidebar();
      }
    };

    onResize();

    window.addEventListener("resize", onResize);

    return () => window.removeEventListener("resize", onResize);
  }, []);

  return (
    <>
      <div
        className={cn(
          "transition-[margin] duration-100",
          isSidebarCollapse ? "ml-[74px]" : "ml-[74px] md:ml-60"
        )}
      >
        <Header />
        <main className="py-6 px-4 sm:px-6 md:px-8 bg-background min-h-[calc(100vh-68px)]">
          {children}
        </main>
      </div>
      <Sidebar />
    </>
  );
};

export default MainLayout;
