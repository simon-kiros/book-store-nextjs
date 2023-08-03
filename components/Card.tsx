import React from "react";
import { BookType } from "@/types/BookType";

function Card({ title, discountRate, coverImage, price }: BookType) {
  return (
    <div className="card" style={{ width: "300px" }}>
      <div className="flex flex-col">
        <div className="">
          <img className="card-image" src={coverImage} style={{ width: "100%", height: "350px" }} />
        </div>
        <div className="title px-2">
          <h2>{title}</h2>
        </div>
        <div className="flex flex-row px-2 justify-between font-bold">
          <span className="text-red-600">{discountRate}%</span>
          <span>{price}원</span>
        </div>
      </div>
    </div>
  );
}

export default Card;
