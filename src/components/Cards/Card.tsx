import React from "react";
import "../../styles/cards.css";
import { iCards } from "../../interfaces/Card.interfaces";

const Card: React.FC<iCards> = ({ posts }) => {
    return (
        <div id="cards">
            {posts.map((post, index) => {
                return (
                    <div key={post.id} id="containerCard">
                        <div >
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
                )
            })}
        </div >
    )
}

export default Card;

