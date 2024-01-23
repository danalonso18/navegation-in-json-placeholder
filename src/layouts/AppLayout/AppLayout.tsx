import { Outlet } from "react-router-dom";
import Navbar from "../headers/Navbar";
import { useSelector } from "react-redux";

export const AppLayout = () => {
  const searchResultsPost = useSelector((state: any) => state.search.searchResultsPost)
  return (
    <main>
      <Navbar searchs={searchResultsPost} />
      <Outlet />
    </main>
  );
};

export const AppLayoutAdm = () => {
  const searchResultsAdm = useSelector((state: any) => state.search.searchResultsAdm)
  return (
    <main>
      <Navbar searchs={searchResultsAdm}/>
      <Outlet />
    </main>
  );
};