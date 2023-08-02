import React from "react";
import { FaArrowAltCircleRight } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { FaComment } from "react-icons/fa";
import Image from "next/image";
import { CommentType } from "@/types/CommentType";

function Comment({ name, time, message }: CommentType) {
  return (
    <>
      <div className="mb-4">
        <div className="flex flex-row">
          <Image src="/user.jpg" alt="user" width="30" height="30" />
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
            <div className="flex flex-col justify-center">
              <FaHeart />
            </div>
            <span className="mr-4">1</span>
            <div className="flex flex-col justify-center">
              <FaComment />
            </div>
            <span className="">1</span>
          </div>
        </div>
      </div>
    </>
  );
}

export default Comment;
