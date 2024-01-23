import "../../styles/home.css";
import Table from "../../components/Table";
import { useEffect, useState } from "react";
import { useSearch } from "../../context/searchContext/SearchContext";
import { iPostTable } from "../../interfaces/interfaces";
import getPostApi from "../../api/posts";
import { iPostApi } from "../../interfaces/interfaces";

const Home: React.FC = () => {
  const colums = [
    { field: "id", header: "id" },
    { field: "userId", header: "user Id" },
    { field: "title", header: "title" },
  ];

  const hearsort=['userId','title']
  const [posts, setPosts] = useState<iPostTable[]>([]);
  const [sorts, setSorts] = useState<any[]>([]);
  const [onBttn, setOnBttn] = useState<number>(0);
  
  const { search } = useSearch();

  const filteredPosts = posts.filter((post) =>
    post.title.toLocaleLowerCase().includes(search.toLocaleLowerCase())
  );

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
  // console.log(posts)

  useEffect(() => {
    setSorts(posts);
  }, [posts]);

  useEffect(() => {
    setSorts(filteredPosts);
  }, [search]);

  const sortTable = (orderBy: string) => {
    if (onBttn == 0) {
      const ori = [...filteredPosts];
      setSorts(ori);
      setOnBttn(1);
    } else {
      if (onBttn == 1) {
        const sortsAsc = sorts.sort((a, b) => {
          if (a[orderBy] < b[orderBy]) {
            return -1;
          }
          if (a[orderBy] > b[orderBy]) {
            return 1;
          }
          return 0;
        });
        setSorts(sortsAsc);
        setOnBttn(2);
      }
      if (onBttn == 2) {
        const sortsDes = sorts.sort((a, b) => {
          if (b[orderBy] < a[orderBy]) {
            return -1;
          }
          if (b[orderBy] > a[orderBy]) {
            return 1;
          }
          return 0;
        });
        setSorts(sortsDes);
        setOnBttn(0);
      }
    }
  };

  return (
    <div id="home">
      <Table
        data={sorts}
        columns={colums}
        sortTable={sortTable}
        headSort={hearsort}
      />
    </div>
  );
};

export default Home;
