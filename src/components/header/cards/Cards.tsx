import React, { useEffect, useState } from "react";
import "./cards.css";
import Card from "./cards/Card";
import Data from "../../Data";

interface iPost {
    userId:number;
    id: number;
    title: string;
    body: string;
  }

const Cards: React.FC = () => {
        const [ posts, setPosts ] = useState<iPost[]>([]);
        const [search, setSearch] = useState<string>("");
        const [filterPosts, setFilterPosts] = useState<iPost[]>([]);
      
        const handleData = (data: iPost[]) => {
            setPosts(data);
            setFilterPosts(data);
          };
        
          useEffect(() => {
            const filteredData = posts.filter((post) =>
              post.title.toLocaleLowerCase().includes(search.toLocaleLowerCase())
            );
            setFilterPosts(filteredData)
          }, [search, posts]);

return(
    <div id="cards">
        <Data onData={handleData} />
        <Card posts={filterPosts}/>
    </div>
);
}

export default Cards;

