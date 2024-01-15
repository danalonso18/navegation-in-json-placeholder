import { useState, useEffect } from "react";
import { iPost } from "../interfaces/interfaces";


const Data: React.FC<{ onData: (posts: iPost[]) => void }> = ({ onData }) => {

  useEffect(() => {
    const fetchData = () => {
      fetch("https://jsonplaceholder.typicode.com/posts")
        .then((response) => response.json())
        .then((data) => onData(data));
    }

    fetchData()
  }, [onData]);

  return null;
}

export default Data;