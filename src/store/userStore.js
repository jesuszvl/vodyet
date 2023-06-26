import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

export const useUserStore = create(
  persist(
    (set, get) => ({
      user: null,
      setUser: (user) => set({ user }),
    }),
    {
      name: "user-storage", // name of the item in the storage (must be unique)
      storage: createJSONStorage(() => sessionStorage), // (optional) by default, 'localStorage' is used
    }
  )
);
