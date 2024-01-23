import React, { useState, useEffect } from "react";
import { SearchContext } from "./SearchContext";
import { useDispatch } from "react-redux";
import getPostApi from "../../api/posts";
import { iAdmin, iChildren, iPostApi } from "../../interfaces/interfaces";
import { setSearchResultsPost,setSearchResultsAdm } from "../../redux/Action/searchActions";
import { useAdminContext } from "../adminContext/AdminContext";

export const SearchProvider: React.FC<iChildren> = ({ children }) => {
  const [search, setSearch] = useState("");
  const [posts, setPosts] = useState<iPostApi[]>([]);
  const [filtered, setFiltered] = useState<iPostApi[] | iAdmin[]>([]);
  const dispatch = useDispatch();
  const { admins } = useAdminContext();
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

  if(posts!){
          useEffect(() => {
              const newFilteredPosts = posts.filter((post) =>
              post.title.toLocaleLowerCase().includes(search.toLocaleLowerCase())
              );
              setFiltered(newFilteredPosts)
              console.log('filteredPosts', newFilteredPosts.length)

              dispatch(setSearchResultsPost(newFilteredPosts.length));
          }, [search, posts])
  }
  if(admins!){
          useEffect(() => {
              const newFilteredAdmin = admins.filter((adm) =>
              adm.name.toLocaleLowerCase().includes(search.toLocaleLowerCase())
              );
              setFiltered(newFilteredAdmin)
              console.log('filteredAdmin', newFilteredAdmin.length)

              dispatch(setSearchResultsAdm(newFilteredAdmin.length));
          }, [search,admins])
  }

  return (
    <SearchContext.Provider
      value={{ search, setSearch, filtered }}
    >
      {children}
    </SearchContext.Provider>
  );
};
