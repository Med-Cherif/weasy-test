import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

export interface LayoutStore {
  isSidebarCollapse: boolean;
  toggleSidebarCollapse: () => void;
  collapseSidebar: () => void;
  openSidebar: () => void;
}

import { StateStorage } from "zustand/middleware";
import { getCookie, setCookie, deleteCookie } from "cookies-next/client";

const cookiesStorage: StateStorage = {
  getItem: (name: string) => {
    return getCookie(name) ?? null;
  },
  setItem: (name: string, value: string) => {
    setCookie(name, value);
  },
  removeItem: (name: string) => {
    deleteCookie(name);
  },
};

const useLayoutStore = create<LayoutStore>()(
  persist(
    (set) => ({
      isSidebarCollapse: false,
      collapseSidebar() {
        set({ isSidebarCollapse: true });
      },
      openSidebar() {
        set({ isSidebarCollapse: false });
      },
      toggleSidebarCollapse() {
        set((prev) => {
          return {
            ...prev,
            isSidebarCollapse: !prev.isSidebarCollapse,
          };
        });
      },
    }),
    {
      name: "layout-storage",
      storage: createJSONStorage(() => cookiesStorage),
    }
  )
);

export default useLayoutStore;
