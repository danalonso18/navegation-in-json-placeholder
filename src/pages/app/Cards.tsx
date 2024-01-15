import React, { useEffect,useState } from "react";
import "../../styles/cards.css";
import Card from "../../components/Cards/Card";
import { useSearch } from "../../context/searchContext/SearchContext";
import getPostApi from "../../api/posts";
import { iPostCard } from "../../interfaces/interfaces";

const Cards: React.FC = () => {
  const { search } = useSearch();
  const [posts, setPosts] = useState<iPostCard[]>([]);

  useEffect(() => {
    const data = async () => {
      try {
        const apiData = await getPostApi();
        setPosts(apiData);
      } catch (error) {
        console.error("Error data:", error);
      }
    }
    data();
  }, []);

  const filteredPosts = posts.filter((post) =>
    post.title.toLocaleLowerCase().includes(search.toLocaleLowerCase()) ||
    post.body.toLocaleLowerCase().includes(search.toLocaleLowerCase())
  );

  return (
    <div id="cards">
      <Card posts={filteredPosts} />
    </div>
  );
}

export default Cards;