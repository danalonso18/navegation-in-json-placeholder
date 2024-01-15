import { FC, memo } from "react";
import { ThemeProvider } from "../../context/themeContext/Theme";
import { iTablaProps } from "../../interfaces/interfaces";



const Body: FC<iTablaProps> = ({ posts }) => {

  return (
    <>
      {posts.map((post) => {
        return (
          <ThemeProvider key={post.id}>
            <tr key={post.id}>
              <td id="id">{post.id}</td>
              <td id="id">{post.userId}</td>
              <td id="title">{post.title}</td>
            </tr>
          </ThemeProvider>
        );
      })}
    </>
  );
};

export default memo(Body);
