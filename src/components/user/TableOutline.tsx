import { FC } from "react";
import Table from "@mui/material/Table";
import TableContainer from "@mui/material/TableContainer";
import Paper from "@mui/material/Paper";

const TableOutline: FC<{ children: any }> = ({ children }) => {
  return (
    <TableContainer component={Paper}>
      <Table
        sx={{ minWidth: 650, minHeight: 960 }}
        aria-label="user data table"
      >
        {children}
      </Table>
    </TableContainer>
  );
};

export default TableOutline;
