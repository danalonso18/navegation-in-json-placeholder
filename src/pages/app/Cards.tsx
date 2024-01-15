import React, { useEffect, useState } from "react";
import "../../styles/cards.css";
import Card from "../../components/Cards/Card";
import Data from "../../components/Data";
import { useSearch } from "../../context/searchContext/SearchContext";
import { iPost } from "../../interfaces/interfaces";



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

