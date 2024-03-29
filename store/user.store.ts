import create from "zustand";

export interface User {
  id: number;
  username: string;
  email: string;
  isAuthenticated?: boolean;

  created_at: string;
  updated_at: string;
}

interface UserStore {
  user: User;
  setUser: (user: User) => void;
  removeUser: () => void;
}
//define empty user
const emptyUser: User = {
  id: 0,
  username: "",
  email: "",
  created_at: "",
  updated_at: "",
};

export const useUserStore = create<UserStore>((set) => ({
  user: emptyUser,
  setUser: (user) => set(() => ({ user })),
  removeUser: () => set(() => ({ user: emptyUser })),
}));
