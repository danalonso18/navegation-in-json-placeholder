import { FC, useState } from "react";
import "../styles/home.css";
import { iPropsTable } from "../interfaces/interfaces";

const Table: FC<iPropsTable> = ({
  data,
  columns,
  sortTable,
  headSort,
}) => {
  const [onBttn, setOnBttn] = useState<number>(0);
  const [textBtton, setTextBtton] = useState("-");

  const handleBtton = (field: string) => {
    if (onBttn == 0) {
      setTextBtton("↥");
      sortTable(field);
      setOnBttn(1);
    } else {
      if (onBttn == 1) {
        setTextBtton("↧");
        sortTable(field);
        setOnBttn(2);
      }
      if (onBttn == 2) {
        setTextBtton("-");
        sortTable(field);
        setOnBttn(0);
      }
    }
  };

  return (
    <div id="table">
      <table>
        <thead>
          <tr>
            {columns.map((head, index) => {
              if (headSort.includes(head.field)) {
                return (
                  <th key={index}>
                    <div id="head" key={index}>
                      {head.header}
                    </div>
                    <button
                      id="bttnTable"
                      onClick={(headField) => {
                        headField = head.field;
                        handleBtton(headField.toString());
                      }}
                    >
                      {textBtton}
                    </button>
                  </th>
                );
              }
              return (
                <th id="heads" key={index}>
                  {head.header}
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
