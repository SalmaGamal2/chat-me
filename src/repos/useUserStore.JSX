// store/userStore.js
// import { create } from "zustand";

// const useUserStore = create((set) => ({
//   currentUser: null,
//   setCurrentUser: (user) => set({ currentUser: user }),
//   logout: () => set({ currentUser: null }),
// }));

// export default useUserStore;
// import { create } from "zustand";

// const useUserStore = create((set) => ({
//     currentUser: JSON.parse(localStorage.getItem("currentUser")) || null,
//   setCurrentUser: (user) => {
//     if (user) {
//       localStorage.setItem("currentUser", JSON.stringify(user));
//     } else {
//       localStorage.removeItem("currentUser");
//     }
//     set({ currentUser: user });
//   },
// }));
//   currentUser: null,
//   name: "",
//   about: "",
//   image: "",

//   setCurrentUser: (user) => set({ currentUser: user }),
//   setName: (name) => set({ name }),
//   setAbout: (about) => set({ about }),
//   setImage: (image) => set({ image }),

//   logout: () =>
//     set({
//       currentUser: null,
//       name: "",
//       about: "",
//       image: "",
//     }),
// }));

// export default useUserStore;
// import { create } from "zustand";

// const useUserStore = create((set) => ({
//   currentUser: JSON.parse(localStorage.getItem("currentUser")) || null,

//   setCurrentUser: (user) => {
//     if (user) {
//       localStorage.setItem("currentUser", JSON.stringify(user));
//     } else {
//       localStorage.removeItem("currentUser");
//     }
//     set({ currentUser: user });
//   },

//   updateUserField: (field, value) =>
//     set((state) => {
//       const updatedUser = { ...state.currentUser, [field]: value };
//       localStorage.setItem("currentUser", JSON.stringify(updatedUser));
//       return { currentUser: updatedUser };
//     }),

//   logout: () => {
//     localStorage.removeItem("currentUser");
//     set({ currentUser: null });
//   },
// }));

// export default useUserStore;
// src/store/useUserStore.js
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
      name: "user-storage", // اسم المفتاح في localStorage
    }
  )
);

export default useUserStore;
