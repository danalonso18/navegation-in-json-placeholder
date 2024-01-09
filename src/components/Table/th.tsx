import { FC, memo} from "react";

const TH: FC<{}> = () => {
  return (
    <>
      <tr id="titles">
        <th>ID</th>
        <th>USER ID</th>
        <th>TITLE</th>
        {/* <th>BODY</th> */}
      </tr>
    </>
  );
};

export default memo(TH);
