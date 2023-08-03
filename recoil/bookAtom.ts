import { atom } from "recoil";
import { BookType } from "@/types/BookType";

export const bookAtom = atom<BookType[]>({
  key: "bookState",
  default: [],
});
