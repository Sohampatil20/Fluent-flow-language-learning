import dayjs from "dayjs";
import type { BoundStateCreator } from "~/hooks/useBoundStore";

export type UserSlice = {
  name: string;
  username: string;
  joinedAt: dayjs.Dayjs;
  loggedIn: boolean;
  userId: string; // Add userId to store user's ID
  setName: (name: string) => void;
  setUsername: (username: string) => void;
  logIn: (userId: string) => void; // Update logIn to accept userId
  logOut: () => void;
  setUserId: (userId: string) => void; // Method to set userId
};

export const createUserSlice: BoundStateCreator<UserSlice> = (set) => ({
  name: "",
  username: "",
  joinedAt: dayjs(),
  loggedIn: false,
  userId: "", // Initialize userId
  setName: (name: string) => set(() => ({ name })),
  setUsername: (username: string) => set(() => ({ username })),
  logIn: (userId: string) => set(() => ({ loggedIn: true, userId })), // Set loggedIn and userId
  logOut: () => set(() => ({ loggedIn: false, userId: "" })), // Reset userId on logout
  setUserId: (userId: string) => set(() => ({ userId })), // Set userId method
});
