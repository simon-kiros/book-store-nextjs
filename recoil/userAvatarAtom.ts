import { atom } from "recoil";

export const userAvatarAtom = atom<string>({
  key: "bookState",
  default: "/user.jpg",
});
