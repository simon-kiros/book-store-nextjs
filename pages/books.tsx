"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import Card from "@/components/Card";
import Link from "next/link";
import InfiniteScroll from "react-infinite-scroll-component";

const endPoint = `http://15.165.74.54:3000/?page=`;
//const endPoint = `https://dummyjson.com/todos`;

type Book = {
  title: string;
  description: string;
  discountRate: number;
  coverImage: string;
  price: number;
}
function Books() {
  const [hasMore, setHasMore] = useState(true);
  const [books, setBooks] = useState<Book[]>([]);
  const [page, setPage] = useState<number>(1);
  const { isLoading, data, error } = useQuery({
    queryKey: ["books"],
    queryFn: async () =>
      await axios
        .get<Book[]>(endPoint + page)
        .then((res) => {
          console.log("success happed useQuery");
          console.dir(res.data);
          //setBooks(res.data);
          return res.data.data;
        })
        .catch((error) => {
          console.log("something happ");
          console.log(error);
        }),
  });

  async function fetchMoreData() {
    setPage(7);
    const url = endPoint + (page + 1);
    console.log("page : ", url);
    await axios
      .get<Book[]>(url)
      .then((res) => {
        console.log("success happed");
        console.log("-- in fetchMoreData");
        console.dir(res);
        console.log("-- ----");
        //const a: any[] = res.data.data;
        if (res.data === "") setHasMore(false);
        else setBooks([...books, ...res.data.data]);
      })
      .catch((error) => {
        console.log("something happ");
        console.log(error);
      });
  }

  useEffect(() => {
    if (data) setBooks(data);
    console.log("-- in useEffect");
    console.dir(data);
    console.log("-- ----");
  }, [isLoading]);

  if (isLoading) return <span>Loading...</span>;

  if (error instanceof Error) return <div>{error.message}</div>;
  //if (isError) return <span>Error: happend</span>;
  //console.log(books);

  return (
    <>
      <span className="font-bold flex justify-center pt-5 pb-5">Books</span>
      <div className="flex flex-row justify-center pl-20 pr-20">
        <div className="flex flex-wrap gap-4">
          <InfiniteScroll
            dataLength={books?.length}
            next={fetchMoreData}
            hasMore={hasMore}
            scrollThreshold={0.8}
            loader={<p>...</p>}>
            {books?.map((t: Book, i: number) => (
              <Link href={`/1/detail`} key={i}>
                <Card
                  key={i}
                  title="This is book"
                  discount={10}
                  cover="https://images-na.ssl-images-amazon.com/images/I/51Ga5GuElyL._AC_SX184_.jpg"
                  price={100}
                />
              </Link>
            ))}
          </InfiniteScroll>
        </div>
      </div>
    </>
  );
}

export default Books;
