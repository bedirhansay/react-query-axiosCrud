import { create } from "zustand";
import { omit } from "lodash";

export interface IUser {
  name: string;
  surname: string;
  age: number;
}

export interface IUserStore {
  user: IUser;
  increaseAge: () => void;
  decreaseAge: () => void;
}
let k = 1;
export const useUserStore = create<IUserStore>((set) => ({
  renderCount: console.log(` *** ****** * *** *** Use Store${k}.inci render`),
  user: {
    name: "Bedirhan",
    surname: "Say",
    age: 24,
  },
  increaseAge: () =>
    set((state) => ({ user: { ...state.user, age: state.user.age + 1 } })),
  decreaseAge: () =>
    set((state) => ({ user: { ...state.user, age: state.user.age - 1 } })),
}));

export interface IMultiple {
  nuts: string;
  honey: string;
  renderCount: () => void;
}

export const useMultiple = create<IMultiple>((set) => ({
  renderCount: () => console.log(`Use Multiple ${k}.inci render`),
  nuts: "Nuts Değişti",
  honey: "honey",
}));

export interface IUseArray {
  a: number;
  b: number;
  sound: string;
  action: () => void;
}

export const useArray = create<IUseArray>((set, get) => ({
  a: 5,
  b: 7,
  sound: "grunt",
  action: () => {
    const sound = get().sound;
    console.log(sound);
  },
}));

export interface IOmit {
  salmon: number;
  tuna: number;
  delAll: () => void;
  delTuna: () => void;
}

export const useOmit = create<IOmit>((set) => ({
  salmon: 1,
  tuna: 2,
  delAll: () => set({}, true), // Tüm store siler
  delTuna: () => set((state) => omit(state, ["tuna"]), true),
}));
