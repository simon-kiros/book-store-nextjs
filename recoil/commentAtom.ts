import { atom } from "recoil";
import { CommentType } from "@/types/CommentType";

export const commentAtom = atom<CommentType[]>({
  key: "commentState",
  default: [],
});
