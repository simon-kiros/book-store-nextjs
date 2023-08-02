import React from "react";
import { FaArrowAltCircleRight } from "react-icons/fa";
import Image from "next/image";

function Comment() {
  const user =
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPrw0v79fIM8CT9VHAUHlJ6auemciss0PPO4LX9y_W9jZsjmFe";

  return (
    <>
      <div>
        <div className="flex flex-row">
          <img className="card-image rounded" src={user} style={{ width: "35px", height: "35px" }} />
          <div className="flex flex-col justify-center px-2">
            <span className="font-bold text-sm">안녕 나 응애</span>
          </div>
          <div className="flex flex-col justify-center">
            <FaArrowAltCircleRight className="items-center" />
          </div>
          <div className="flex flex-col justify-center">
            <span className="font-light text-sm text-opacity-50 pl-2 items-center">1일전</span>
          </div>
        </div>
        <div className="pl-10">
          <p>
            어머 제가 있던 테이블이 제일 반응이 좋았나보네요🤭 우짤래미님도 아시겠지만 저도 일반인 몸매 그 이상도 이하도
            아니잖아요?! 그런 제가 기꺼이 도전해봤는데 생각보다 괜찮았어요! 오늘 중으로 라이브 리뷰 올라온다고 하니 꼭
            봐주세용~!
          </p>
        </div>
        <div className="flex py-10 w-full">
          <Image src="/message.jpg" alt="send" width="30" height="30" />
          <input type="text" className="flex-grow mx-6 px-4" placeholder="댓글을 남겨주세요." />
          <button className="">등록</button>
        </div>
      </div>
    </>
  );
}

export default Comment;
