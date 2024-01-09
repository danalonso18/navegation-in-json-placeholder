import { useState, useEffect } from "react";

interface iPost {
    userId:number;
    id: number;
    title: string;
    body: string;
  }

const Data: React.FC<{onData: (posts: iPost[]) => void}> = ({onData}) => {
    // const [data, setData] = useState<iPost[]>([]);

    useEffect(() => {
        const fetchData =() => {
            fetch("https://jsonplaceholder.typicode.com/posts")
            .then((response) => response.json())
            .then((data) => onData(data));
        }
        
        fetchData()
    }, [onData]);

      return null;
}

export default Data;