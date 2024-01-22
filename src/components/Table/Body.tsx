import React from "react";
import { iTablaProps } from "../../interfaces/Table.interfaces";

const Body: React.FC<iTablaProps> = ({ posts }) => {

  return (
    <>
      {posts.map((post) => {
        return (
          <tr key={post.id+10000}>
            <td id="id">{post.id}</td>
            <td id="id">{post.userId}</td>
            <td id="titleBody">{post.title}</td>
          </tr>
        );
      })}
    </>
  );
};

export default Body;
