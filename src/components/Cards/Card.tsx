import React from "react";
import { memo } from "react";
import "../../styles/cards.css";
import { ThemeProvider } from "../../context/themeContext/Theme";
import { iCards } from "../../interfaces/interfaces";




const Card: React.FC<iCards> = ({ posts }) => {
    return (
        <div id="cards">
            {posts.map((post) => {
                return (
                    <ThemeProvider key={post.id}>
                        <div id="containerCard">
                            <div key={post.id}>
                                <div id="info">
                                    <h3>{post.title}</h3>
                                    <br />
                                    <p>{post.body}</p>
                                </div>
                                <div id="footerCard">
                                    <h5>{post.id}</h5>
                                </div>
                            </div>
                        </div>
                    </ThemeProvider>
                )
            })}
        </div >
    )
}

export default memo(Card);

