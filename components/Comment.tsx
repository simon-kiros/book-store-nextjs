import React from "react";

function Comment() {
  return (
    <>
      <div>
        <div className="flex flex-row">
          <img
            className="card-image"
            src="https://images-na.ssl-images-amazon.com/images/I/51Ga5GuElyL._AC_SX184_.jpg"
            style={{ width: "50px", height: "50px" }}
          />
          <h1>titile</h1>
        </div>
        <div>
          <p>
            어머 제가 있던 테이블이 제일 반응이 좋았나보네요🤭 우짤래미님도 아시겠지만 저도 일반인 몸매 그 이상도 이하도
            아니잖아요?! 그런 제가 기꺼이 도전해봤는데 생각보다 괜찮았어요! 오늘 중으로 라이브 리뷰 올라온다고 하니 꼭
            봐주세용~!
          </p>
        </div>
        <div className="py-4">
          <input type="text" />
        </div>
      </div>
    </>
  );
}

export default Comment;
