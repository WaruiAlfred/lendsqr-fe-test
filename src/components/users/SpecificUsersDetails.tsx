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
import MoreVertIcon from "@mui/icons-material/MoreVert";
import {
  Box,
  IconButton,
  Menu,
  MenuItem,
  Tooltip,
  Typography,
} from "@mui/material";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import PersonRemoveAlt1OutlinedIcon from "@mui/icons-material/PersonRemoveAlt1Outlined";
import HowToRegOutlinedIcon from "@mui/icons-material/HowToRegOutlined";
import { Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { fetchAllUsers } from "../../api";
import moment from "moment";

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
    minWidth: 110,
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

const options = [
  { id: "O1", text: "View Details", icon: <VisibilityOutlinedIcon /> },
  { id: "O2", text: "Blacklist User", icon: <PersonRemoveAlt1OutlinedIcon /> },
  { id: "O3", text: "Activate User", icon: <HowToRegOutlinedIcon /> },
];

const SpecificUsersDetails = () => {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
    null
  );
  const { data } = useQuery({ queryKey: ["users"], queryFn: fetchAllUsers });
  // console.log(data);

  const rows = data?.map((dataItem: any) => {
    const result = createData(
      dataItem.orgName,
      dataItem.userName,
      dataItem.email,
      dataItem.profile.phoneNumber,
      moment(dataItem.createdAt).format("MMM D, YYYY h:mm A"),
      +moment(dataItem.lastActiveDate)?.fromNow()?.slice(0) <= 7 &&
        moment(dataItem.lastActiveDate).fromNow().includes("day")
        ? "Active"
        : "Inactive"
    );

    return {
      result,
      id: dataItem.id,
    };
  });

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
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
              ?.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row: any) => {
                return (
                  <TableRow
                    hover
                    role="checkbox"
                    tabIndex={-1}
                    key={row.result.email}
                  >
                    {columns.map((column) => {
                      const value =
                        column.id === "username" ? (
                          <Link to={`/user/${row.id}`}>
                            {row.result[column.id]}
                          </Link>
                        ) : (
                          row.result[column.id]
                        );
                      return (
                        <TableCell key={column.id} align={column.align}>
                          {column.format && typeof value === "number"
                            ? column.format(value)
                            : value}
                        </TableCell>
                      );
                    })}
                    <TableCell>
                      <Box sx={{ flexGrow: 0 }}>
                        <Tooltip title="Open settings">
                          <IconButton
                            onClick={handleOpenUserMenu}
                            sx={{ p: 0 }}
                          >
                            <MoreVertIcon />
                          </IconButton>
                        </Tooltip>
                        <Menu
                          sx={{ mt: "45px" }}
                          id="menu-appbar"
                          anchorEl={anchorElUser}
                          anchorOrigin={{
                            vertical: "top",
                            horizontal: "right",
                          }}
                          keepMounted
                          transformOrigin={{
                            vertical: "top",
                            horizontal: "right",
                          }}
                          open={Boolean(anchorElUser)}
                          onClose={handleCloseUserMenu}
                        >
                          {options.map((option) => (
                            <MenuItem
                              key={option.id}
                              onClick={handleCloseUserMenu}
                            >
                              {option.icon}
                              <Typography textAlign="center">
                                {option.text}
                              </Typography>
                            </MenuItem>
                          ))}
                        </Menu>
                      </Box>
                    </TableCell>
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={rows?.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
};

export default SpecificUsersDetails;
