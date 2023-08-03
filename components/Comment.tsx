import React, { useState } from "react";
import { FaArrowAltCircleRight } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { FaComment } from "react-icons/fa";
import Image from "next/image";
import { CommentType } from "@/types/CommentType";
import { useRecoilState } from "recoil";
import { userAvatarAtom } from "@/recoil/userAvatarAtom";

function Comment({ name, time, message }: CommentType) {
  const [userAvatar] = useRecoilState<string>(userAvatarAtom);
  const [color, setColor] = useState(false);

  return (
    <>
      <div className="mb-4">
        <div className="flex flex-row">
          <Image src={userAvatar} alt="user" width="30" height="30" />
          <div className="flex flex-col justify-center px-2">
            <span className="font-bold text-sm">{name}</span>
          </div>
          <div className="flex flex-col justify-center">
            <FaArrowAltCircleRight className="items-center" />
          </div>
          <div className="flex flex-col justify-center">
            <span className="font-light text-sm text-opacity-50 pl-2 items-center">{time}일전</span>
          </div>
        </div>
        <div className="pl-10">
          <p className="opacity-60">{message}</p>
          <div className="flex gap-2">
            <div className="flex flex-col justify-center cursor-pointer">
              <FaHeart color={color ? "red" : "gray"} onClick={() => setColor(!color)} />
            </div>
            <span className="mr-4">1</span>
            <div className="flex flex-col justify-center cursor-pointer">
              <FaComment color="gray" />
            </div>
            <span className="">1</span>
          </div>
        </div>
      </div>
    </>
  );
}

export default Comment;
