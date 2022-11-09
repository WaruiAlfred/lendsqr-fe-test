import * as React from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import FilterButton from "./filters/FilterButton";

interface Column {
  id: "organization" | "username" | "email" | "phone" | "date" | "status";
  label: string;
  minWidth?: number;
  align?: "right";
  format?: (value: number) => string;
}

const columns: readonly Column[] = [
  { id: "organization", label: "ORGANIZATION", minWidth: 170 },
  { id: "username", label: "USERNAME", minWidth: 170 },
  {
    id: "email",
    label: "EMAIL",
    minWidth: 170,
    // align: "right",
    // format: (value: number) => value.toLocaleString("en-US"),
  },
  {
    id: "phone",
    label: "PHONE NUMBER",
    minWidth: 170,
    // align: "right",
    // format: (value: number) => value.toLocaleString("en-US"),
  },
  {
    id: "date",
    label: "DATE JOINED",
    minWidth: 170,
    // align: "right",
    // format: (value: number) => value.toFixed(2),
  },
  {
    id: "status",
    label: "STATUS",
    minWidth: 170,
    // align: "right",
    // format: (value: number) => value.toFixed(2),
  },
];

interface Data {
  organization: string;
  username: string;
  email: string;
  phone: string;
  date: string;
  status: string;
}

function createData(
  organization: string,
  username: string,
  email: string,
  phone: string,
  date: string,
  status: string
): Data {
  return { organization, username, email, phone, date, status };
}

const rows = [
  createData(
    "Lendsqr",
    "Adedeji",
    "adedeji@lendsqr.com",
    "0712345678",
    "May 15,2020 10:00 AM",
    "Inactive"
  ),
  createData(
    "Lendsqr",
    "Adedeji",
    "adedeji@lendsqr.com",
    "0712345678",
    "May 15,2020 10:00 AM",
    "Inactive"
  ),
  createData(
    "Lendsqr",
    "Adedeji",
    "adedeji@lendsqr.com",
    "0712345678",
    "May 15,2020 10:00 AM",
    "Inactive"
  ),
  // createData("United States", "US", 327167434, 9833520),
  // createData("Canada", "CA", 37602103, 9984670),
  // createData("Australia", "AU", 25475400, 7692024),
  // createData("Germany", "DE", 83019200, 357578),
  // createData("Ireland", "IE", 4857000, 70273),
  // createData("Mexico", "MX", 126577691, 1972550),
  // createData("Japan", "JP", 126317000, 377973),
  // createData("France", "FR", 67022000, 640679),
  // createData("United Kingdom", "GB", 67545757, 242495),
  // createData("Russia", "RU", 146793744, 17098246),
  // createData("Nigeria", "NG", 200962417, 923768),
  // createData("Brazil", "BR", 210147125, 8515767),
];

const SpecificUsersDetails = () => {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Paper sx={{ width: "100%", overflow: "hidden" }}>
      <TableContainer sx={{ maxHeight: 440 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                  <FilterButton />
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={row.email}>
                    {columns.map((column) => {
                      const value = row[column.id];
                      return (
                        <TableCell key={column.id} align={column.align}>
                          {column.format && typeof value === "number"
                            ? column.format(value)
                            : value}
                        </TableCell>
                      );
                    })}
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
};

export default SpecificUsersDetails;
