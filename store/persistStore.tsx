import { create } from "zustand";
import { createJSONStorage, devtools, persist } from "zustand/middleware";

export interface ICart {
  cart: { name: string; surname: string }[];
  add: (item: any) => void;
}

export const useCartStore = create<ICart>()(
  devtools(
    persist(
      (set, get) => ({
        cart: [],
        add: (item: any) =>
          set((state: any) => ({ cart: [...state.cart, item] })),
      }),
      {
        name: "user-storage",
        storage: createJSONStorage(() => sessionStorage),
      }
    )
  )
);
