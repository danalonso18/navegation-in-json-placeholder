import React from "react";
import { useTheme } from "../theme/Theme";
import "./title.css";

const Title: React.FC = () => {
    const { darkMode } = useTheme();

    return (
        <div id="container">
        <h1>Contenido</h1>
        <br />
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore, laborum corporis molestias ullam earum suscipit nobis consequatur incidunt adipisci quasi corrupti consectetur accusantium necessitatibus, nostrum quibusdam reprehenderit placeat, consequuntur aperiam?</p>
        </div>
    );
}

export default Title;