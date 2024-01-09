import { FC, memo, useEffect, useState } from "react";
import Body from "./body";
import TH from "./th";
import Data from "../Data";

interface iPost {
  userId: number;
  id: number;
  title: string;
}

const Table: FC<{}> = () => {

  const [posts, setPosts] = useState<iPost[]>([]);

  const handleData = (data: iPost[]) => {
    setPosts(data);
  };

  return (
    <div id="table">
      <table>
        <thead>
          <TH />
        </thead>
        <tbody>
          <Data onData={handleData} />
          <Body posts={posts} />
        </tbody>
      </table>
    </div>
  );
};

export default memo(Table);
