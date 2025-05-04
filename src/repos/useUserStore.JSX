import { create } from "zustand";
import { persist } from "zustand/middleware";

const useUserStore = create(
  persist(
    (set) => ({
      currentUser: null,

      setCurrentUser: (user) => set({ currentUser: user }),

      updateUserField: (field, value) =>
        set((state) => ({
          currentUser: {
            ...state.currentUser,
            [field]: value,
          },
        })),

      logout: () => set({ currentUser: null }),
    }),
    {
      name: "user-storage",
    }
  )
);

export default useUserStore;
