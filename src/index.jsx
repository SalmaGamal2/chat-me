// import { create } from "zustand";

// export const useChats = create((set) => ({
//   users: [],
//   setUsers: (usersLive) => set(() => ({ users: usersLive })),
// }));

// export const useChat = create((set) => ({
//   chat_id: 0,
//   setOpendChat: (chat_id) =>
//     set(() => {
//       chat_id;
//     }),
// }));
// export const useUserStore = create((set) => ({
//   user: null,
//   setUser: (user) => set({ user }),
// }));
import { create } from "zustand";

export const useChats = create((set) => ({
  users: [],
  setUsers: (usersLive) => set(() => ({ users: usersLive })),
}));

export const useChat = create((set) => ({
  chat_id: null,
  setOpendChat: (chat_id) => set(() => ({ chat_id })),
}));

export const useUserStore = create((set) => ({
  user: null,
  setUser: (user) => set({ user }),
}));
