import { FC, memo, useEffect, useState } from "react";
import { ThemeProvider } from "../theme/Theme";

interface iPost {
  userId:number;
  id: number;
  title: string;
  body: string;
}

const Body: FC<{}> = () => {
  const [data, setData] = useState<iPost[]>([]);

  useEffect(() => {
    console.log("Tabla Actualizada/Renderizada");
  });

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((data) => setData(data));
  }, []);

  return (
    <>
      {data?.map((person) => {
        return (
          <ThemeProvider>
            <tr>
              <td id="id">{person.id}</td>
              <td id="id">{person.userId}</td>
              <td id="title">{person.title}</td>
              {/* <td>{person.body}</td> */}
            </tr>
          </ThemeProvider>
        );
      })}
    </>
  );
};

export default memo(Body);
