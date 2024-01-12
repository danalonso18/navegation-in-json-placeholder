import { FC, memo } from "react";
import { ThemeProvider } from "../../context/themeContext/Theme";

interface iPost {
  userId: number;
  id: number;
  title: string;
}

interface iTablaProps {
  posts: iPost[];
}

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
