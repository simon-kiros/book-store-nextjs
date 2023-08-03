"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import Card from "@/components/Card";
import Link from "next/link";
import InfiniteScroll from "react-infinite-scroll-component";
import { useRouter } from "next/router";
import { BookType } from "@/types/BookType";
import { useRecoilState } from "recoil";
import { bookAtom } from "@/recoil/bookAtom";

const endPoint = `http://15.165.74.54:3000/?page=`;

function Books() {
  const [hasMore, setHasMore] = useState(true);
  const [books, setBooks] = useRecoilState<BookType[]>(bookAtom);
  const [page, setPage] = useState<number>(1);
  const { isLoading, data, error } = useQuery({
    queryKey: ["books"],
    queryFn: async () =>
      await axios
        .get<BookType[]>(endPoint + page)
        .then((res) => {
          if (res.data !== "") return res.data.data;
          else return [];
        })
        .catch((error) => {
          console.log(error);
        }),
  });

  const router = useRouter();
  const handleRefresh = () => {
    router.reload();
  };

  async function fetchMoreData() {
    setPage(page + 1);
    const url = endPoint + (page + 1);
    await axios
      .get<BookType[]>(url)
      .then((res) => {
        if (res.data === "") setHasMore(false);
        else setBooks([...books, ...res.data.data]);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  useEffect(() => {
    if (data) setBooks(data);
  }, [isLoading]);

  if (isLoading) return <span>Loading...</span>;

  if (error instanceof Error) return <div>{error.message}</div>;

  return (
    <>
      <div className="flex flex-row px-36">
        <div className="flex flex-row justify-center flex-grow">
          <span className="text-xl font-bold flex justify-center pt-5 pb-5">Books</span>
        </div>
        <Link href="/books" className="flex flex-col justify-center">
          <div onClick={handleRefresh} className="bg-gray-300 circle"></div>
        </Link>
      </div>

      <div className="flex flex-row justify-center px-36">
        <div className="flex flex-wrap gap-1">
          <InfiniteScroll
            dataLength={books?.length}
            next={fetchMoreData}
            hasMore={hasMore}
            scrollThreshold={0.8}
            loader={<p>...</p>}>
            {books?.map((bk: BookType, i: number) => (
              <Link href={`/1/detail`} key={i}>
                <Card
                  key={i}
                  title="레이블라우스"
                  discountRate={bk.discountRate}
                  coverImage={bk.coverImage}
                  price={bk.price}
                />
              </Link>
            ))}
          </InfiniteScroll>
        </div>
      </div>
      {!hasMore && (
        <div className="text-center py-5">
          <p>you have reached the end.</p>
        </div>
      )}
    </>
  );
}

export default Books;
