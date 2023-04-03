import { create } from "zustand";
import { subscribeWithSelector } from "zustand/middleware";
export interface IUser {
  id?: string;
  name: string;
  surname: string;
}

export interface Zustands {
  userList: IUser[];
  currentUser: string;
  catIncNumber: number;
  catInc: () => number;
  addUser: (data: IUser) => void;
  setCurrentUser: (user: string) => void;
}

const initalState = {
  usersList: [
    {
      id: "1",
      name: "bedirhan",
      surname: "say",
    },
  ] as IUser[],
};

export const useUserList = create<Zustands>((set: any, get: any) => ({
  currentUser: "bedirhan",
  catIncNumber: 5,
  userList: [],

  catInc: () => set((state: any) => ({ catIncNumber: state.catIncNumber + 1 })),
  addUser: (data: IUser) =>
    set((state: any) => ({ userList: [...state.userList, data] })),
  setCurrentUser: (user: string) =>
    set((state: any) => ({ currentUser: user })),

  setUser: (user: string) =>
    set((state: any) => ({ users: [...state.users, user] })),
}));

export const usePerson = create(
  subscribeWithSelector(() => ({ name: "Bedirhan", surname: "say", age: "24" }))
);
