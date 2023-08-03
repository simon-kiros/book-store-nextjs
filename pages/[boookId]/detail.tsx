"use client";
import React from "react";
import CommentSection from "@/components/CommentSection";
import { FaLessThan } from "react-icons/fa";
import Link from "next/link";

function Detail() {
  return (
    <>
      <div className="flex flex-row justify-center py-4 detail">
        <div className="flex flex-col">
          <div className="flex">
            <Link href="/books" className="flex flex-col justify-center">
              <FaLessThan />
            </Link>

            <div className="flex justify-center w-full py-2">
              <span className="text-xl font-bold"> 레이블라우스</span>
            </div>
          </div>
          <div className="flex flex-row justify-center">
            <img
              className="detail-image"
              src="https://images-na.ssl-images-amazon.com/images/I/51Ga5GuElyL._AC_SX184_.jpg"
              style={{ width: "100%", height: "450px" }}
            />
          </div>
          <div className="comment-section">
            <div className="title py-4">
              <span className="text-xl font-bold px-4">레이블라우스</span>
            </div>
            <div className="flex flex-row  ">
              <p className="px-4">
                Description of the book... Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer
                took a galley of type and scrambled it to make a type specimen book. It has survived not only five
                centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more
                recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
              </p>
            </div>
            <div className="flex flex-row px-4 justify-between font-bold py-5">
              <span className="font-bold text-red-600">10%</span>
              <span className="font-bold">57,600원</span>
            </div>
            <div className="w-full bg-gray-100 mb-5" style={{ height: "2px" }}></div>
            <div className="px-4">
              <CommentSection />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Detail;
