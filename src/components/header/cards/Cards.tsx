import React, { useEffect, useState } from "react";
import "./cards.css";
import Card from "./Card";
import Data from "../../Data";
import { useSearch } from "../../searchContext/SearchContext";


interface iPost {
  userId: number;
  id: number;
  title: string;
  body: string;
}

const Cards: React.FC = () => {
  const { search } = useSearch();
  const [posts, setPosts] = useState<iPost[]>([]);

  const handleData = (data: iPost[]) => {
    setPosts(data);
  };

  const filteredPosts = posts.filter((post) =>
    post.title.toLocaleLowerCase().includes(search.toLocaleLowerCase()) ||
    post.body.toLocaleLowerCase().includes(search.toLocaleLowerCase())
  );

  return (
    <div id="cards">
      <Data onData={handleData} />
      <Card posts={filteredPosts} />
    </div>
  );
}

export default Cards;

