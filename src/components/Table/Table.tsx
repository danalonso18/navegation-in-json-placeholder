import { FC, memo, useEffect, useState } from "react";
import Body from "./body";
import TH from "./th";


const Table: FC<{}> = () => {
  return (
    <div id="table">
      <table>
        <thead>
          <TH />
        </thead>
        <tbody>
         <Body />    
        </tbody>
      </table>
    </div>
  );
};

export default memo(Table);
