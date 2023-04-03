import axios from "axios";
import { create } from "zustand";
import { shallow } from "zustand/shallow";

export const useBearStore = create((set: any, get: any) => ({
  bears: 0,
  increasePopulation: () => set((state: any) => ({ bears: state.bears + 1 })),
  removeAllBears: () => set({ bears: 0 }),
  deer: 3,

  deerDec: () => set(() => ({ deer: get().deer - 1 })),
  cat: 4,

  catInc: () => set((state: any) => ({ cat: state.cat + 1 })),

  users: ["bedirhan"],
  // addUser: (user: string) => set((state: any) => ({ users: [...state.users, user] })),
  setUser: (user: string) =>
    set((state: any) => ({ users: [...state.users, user] })),

  addNewUser: (user: string) =>
    set((state: any) => ({ users: [get().users, user] })),
  theme: "light",
  toggleTheme: () =>
    set((state: any) => ({
      theme: state.theme === "light" ? "dark" : "light",
    })),

  nuts: "h",
  hıney: "k",
}));
