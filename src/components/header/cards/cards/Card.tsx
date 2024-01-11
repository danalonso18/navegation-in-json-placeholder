import React, { memo } from "react";
import "./card.css";
import { ThemeProvider } from "../../../theme/Theme";

interface iPost {
    id: number;
    title: string;
    body: string;
}

interface iCards {
    posts: iPost[];
}

const Card: React.FC<iCards> = ({ posts }) => {
    return (
        <div id="cards">
            {posts.map((post) => {
                return (
                    <ThemeProvider>
                        <div id="containerCard">
                            <div key={post.id}>
                                <h3>{post.title}</h3>
                                <br />
                                <p>{post.body}</p>
                            </div>
                        </div>
                    </ThemeProvider>
                )
            })}
        </div >
    )
}

export default memo(Card);

