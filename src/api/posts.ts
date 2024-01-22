import { iPostApi } from "../interfaces/Api.interface";

const getPostApi = async (): Promise<iPostApi[]> => {
    try {
      const response = await fetch("https://jsonplaceholder.typicode.com/posts");
      if (!response.ok) {
        throw new Error(`Error fetch data: ${response.statusText}`);
      }
      const posts: iPostApi[] = await response.json();
      return posts;
    } catch (error) {
      console.error("Error fetch data:", error);
      throw error;
    }
  };
  
  export default getPostApi;