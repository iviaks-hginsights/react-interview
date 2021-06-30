import * as React from "react";

import { Data } from "../../../models/data";

interface Props {
  value: Data;
}

const TableRow = (props: Props) => {
  const { value } = props;

  return (
    <tr>
      <td>{value.distance}</td>
      <td>{value.name}</td>
      <td>{value.direction}</td>
      <td>{value.isMild ? "true" : "false"}</td>
    </tr>
  );
};

export default TableRow;
