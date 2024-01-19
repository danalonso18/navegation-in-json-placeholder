import { FC, useState } from "react";
import "../styles/home.css";
import { iPropsTable } from "../interfaces/interfaces";

const Table: FC<iPropsTable> = ({ data, columns, sortTable }) => {
  const [onBttn, setOnBttn] = useState<number>(0);
  const [textBtton, setTextBtton] = useState("-");


  return (
    <div id="table">
      <table>
        <thead>
          <tr>
            {columns.map((head, index) => {
              return (
                <th id="heads" key={index}>
                  {head.header}
                    <button
                      id="bttnTable"
                      onClick={() => {
                        if (onBttn == 0) {
                          setTextBtton("↥");
                          sortTable(head.field);
                          setOnBttn(1);
                        } else {
                          if (onBttn == 1) {
                            setTextBtton("↧");
                            sortTable(head.field);
                            setOnBttn(2);
                          }
                          if (onBttn == 2) {
                            setTextBtton("-");
                            sortTable(head.field);
                            setOnBttn(0);
                          }
                        }
                      }}
                    >
                      {textBtton}
                    </button>
                </th>
              );
            })}
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => {
            return (
              <tr key={index}>
                {columns.map((col, index) => {
                  return <td key={index}>{row[col.field]}</td>;
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
