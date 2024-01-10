import { FC, memo, useEffect, useState } from "react";
import Body from "./body";
import TH from "./th";
import Data from "../Data";
import { useSearch } from "../searchContext/SearchContext";

interface iPost {
  userId: number;
  id: number;
  title: string;
}

const Table: FC<{}> = () => {
  const { search } = useSearch();
  const [posts, setPosts] = useState<iPost[]>([]);

  const handleData = (data: iPost[]) => {
    setPosts(data);
  };
  
  const filteredPosts = posts.filter((post) =>
    post.title.toLocaleLowerCase().includes(search.toLocaleLowerCase())
  );


  return (
    <div id="table">
      <table>
        <thead>
          <TH />
        </thead>
        <tbody>
          <Data onData={handleData} />
          <Body posts={filteredPosts} />
        </tbody>
      </table>
    </div>
  );
};

export default memo(Table);
