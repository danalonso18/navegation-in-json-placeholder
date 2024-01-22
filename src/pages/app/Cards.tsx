import React from "react";
import "../../styles/cards.css";
import Card from "../../components/Cards/Card";
import { useSearchContext } from "../../context/SearchContext/SearchContext";

const Cards: React.FC = () => {
  const { filteredPosts } = useSearchContext();

  return (
    <div id="cards">
      <Card posts={filteredPosts} />
    </div>
  );
}

export default Cards;