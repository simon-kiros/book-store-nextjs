import React, { useState } from "react";
import Image from "next/image";
import Comment from "./Comment";
import { CommentType } from "@/types/CommentType";

function CommentSection() {
  const [data, setData] = useState<CommentType[]>([]);
  const [msg, setMsg] = useState("");

  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMsg(e.target.value);
  };
  const clickHandle = () => {
    if (msg === "") return;
    const com: CommentType = {
      name: "안녕 나 응애",
      time: 1,
      message: msg,
    };
    setData([...data, com]);
    setMsg("");
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && msg !== "") {
      const com: CommentType = {
        name: "안녕 나 응애",
        time: 1,
        message: msg,
      };
      setData([...data, com]);
      setMsg("");
    }
  };
  return (
    <>
      <div>
        <Comment
          name="안녕 나 응애"
          time={1}
          message="어머 제가 있던 테이블이 제일 반응이 좋았나보네요🤭 우짤래미님도 아시겠지만 저도 일반인 몸매 그 이상도 이하도
            아니잖아요?! 그런 제가 기꺼이 도전해봤는데 생각보다 괜찮았어요! 오늘 중으로 라이브 리뷰 올라온다고 하니 꼭
            봐주세용~!"
        />
        <div className="pl-10">
          <Comment name="ㅇㅅㅇ" time={1} message="오 대박! 라이브 리뷰 오늘 올라온대요? 챙겨봐야겠다" />
        </div>
        {data?.map((com: CommentType, i: number) => (
          <Comment key={i} name="안녕 나 응애" time={1} message={com.message} />
        ))}
        <div className="flex py-10 w-full">
          <Image src="/message.jpg" alt="send" width="30" height="30" />
          <input
            type="text"
            value={msg}
            onKeyDown={handleKeyDown}
            onChange={changeHandler}
            className="flex-grow mx-6 px-4"
            placeholder="댓글을 남겨주세요."
          />
          <button className="" onClick={clickHandle}>
            등록
          </button>
        </div>
      </div>
    </>
  );
}

export default CommentSection;
