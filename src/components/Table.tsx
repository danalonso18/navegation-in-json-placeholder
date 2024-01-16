import { FC } from "react";
import "../styles/home.css"
import { iPropsTable } from "../interfaces/interfaces";

const Table: FC<iPropsTable> = ({ data, columns/*, posts*/}) => {
  return (
    <div id="table">
      <table>
        <thead>
          <tr>
          {columns.map((head,index) => {
            return (
              <th id="heads" key={index}>
                {head.header}
              </th>
            )
          })}
          </tr>
        </thead>
        <tbody>
            {/* {posts} */}
          {data.map((row,index) => {
            return (
                <tr key={index}>
                {columns.map((col,index) => {
                    return(
                        <td key={index}>{row[col.field]}</td>
                        )
                    })}
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
