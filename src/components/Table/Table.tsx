import { useEffect, useState } from "react";
import Body from "./Body";
import TH from "./Th";
import { useSearch } from "../../context/searchContext/SearchContext";
import { iPostTable } from "../../interfaces/interfaces";
import getPostApi from "../../api/posts";
import { iPostApi } from "../../interfaces/interfaces";

const Table: React.FC<{}> = () => {
  const { search } = useSearch();
  const [posts, setPosts] = useState<iPostTable[]>([]);

  useEffect(() => {
    const data = async () => {
      try {
        const apiData: iPostApi[] = await getPostApi();
        setPosts(apiData);
      } catch (error) {
        console.error("Error data:", error);
      }
    };
    data();
  }, []);

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
          <Body posts={filteredPosts} />
        </tbody>
      </table>
    </div>
  );
};

export default Table;
