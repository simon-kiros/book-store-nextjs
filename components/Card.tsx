import React from "react";

type PropType = {
  title: string;
  discount: number;
  cover: string;
  price: number;
};

function Card({ title, discount, cover, price }: PropType) {
  return (
    <div className="card" style={{ width: "300px" }}>
      <div className="flex flex-col">
        <div className="">
          <img className="card-image" src={cover} style={{ width: "100%", height: "350px" }} />
        </div>
        <div className="title px-2">
          <h2>{title}</h2>
        </div>
        <div className="flex flex-row px-2 justify-between font-bold">
          <span className="text-red-600">{discount}%</span>
          <span>{price}원</span>
        </div>
      </div>
    </div>
  );
}

export default Card;
