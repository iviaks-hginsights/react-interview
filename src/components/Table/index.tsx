import * as React from "react";

import TableHeader from "./Header";
import TableFooter from "./Footer";
import TableRow from "./Row";

import { Data } from "../../models/data";

interface Props {
  data: Data[];
}

const Table = (props: Props) => {
  const { data = [] } = props;

  return (
    <table>
      <TableHeader />

      <tbody>
        {data.map((value, index) => (
          <TableRow key={index} value={value} />
        ))}
      </tbody>

      <TableFooter />
    </table>
  );
};

export default Table;
