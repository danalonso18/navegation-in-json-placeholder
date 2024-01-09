import React, { useState } from "react";
import "./cards.css";
import Card from "./cards/Cards";
import Data from "../../Data";

interface iPost {
    userId:number;
    id: number;
    title: string;
    body: string;
  }

const Cards: React.FC = () => {
        const [ posts, setPosts ] = useState<iPost[]>([]);
      
        const handleData = (data: iPost[]) => {
            setPosts(data);
        };

return(
    <div id="cards">
        <Data onData={handleData} />
        <Card posts={posts}/>
    </div>
);
}

export default Cards;

