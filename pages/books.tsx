"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import Card from "@/components/Card";
import Link from "next/link";
import InfiniteScroll from "react-infinite-scroll-component";
import { useRouter } from "next/router";

const endPoint = `http://15.165.74.54:3000/?page=`;
//const endPoint = `https://dummyjson.com/todos`;

type Book = {
  title: string;
  description: string;
  discountRate: number;
  coverImage: string;
  price: number;
};
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
          console.dir(res);
          //setBooks(res.data);
          if (res.data !== "") return res.data.data;
          else return [];
        })
        .catch((error) => {
          console.log("something happ");
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
            {books?.map((bk: Book, i: number) => (
              <Link href={`/1/detail`} key={i}>
                <Card key={i} title="레이블라우스" discount={bk.discountRate} cover={bk.coverImage} price={bk.price} />
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
