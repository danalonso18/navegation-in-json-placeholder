import React from "react";
import Body from "./Body";
import TH from "./Th";
import { useSearchContext } from "../../context/SearchContext/SearchContext";

const Table: React.FC<{}> = () => {
  const { filteredPosts } = useSearchContext();

  return (
      <div id="table">
        <table>
          <thead>
            <TH />
          </thead>
          <tbody>
            <Body posts={filteredPosts} />
          </tbody>
        </table>
      </div>
  );
};

export default Table;
