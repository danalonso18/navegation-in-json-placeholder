import "../../styles/home.css";
import Table from "../../components/Table";
import { useEffect, useState } from "react";
import { useSearch } from "../../context/searchContext/SearchContext";
import { iPostTable } from "../../interfaces/interfaces";
import getPostApi from "../../api/posts";
import { iPostApi } from "../../interfaces/interfaces";

const Home: React.FC = () => {
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

  const colums = [
    {field:"id",header:"ID"},
    {field:"userId",header:"User id"},
    {field:"title",header:"title"},
  ]

  return (
      <div id="home">
        <Table data={filteredPosts} columns={colums} /*posts={filteredPosts}*/ />
      </div>
  );
};

export default Home;
