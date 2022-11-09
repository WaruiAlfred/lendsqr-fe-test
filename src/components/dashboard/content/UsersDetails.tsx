import { Box } from "@mui/material";
import PeopleOutlineIcon from "@mui/icons-material/PeopleOutline";
import GroupsOutlinedIcon from "@mui/icons-material/GroupsOutlined";
import RequestQuoteOutlinedIcon from "@mui/icons-material/RequestQuoteOutlined";
import MoneyOutlinedIcon from "@mui/icons-material/MoneyOutlined";
import UsersDetailsCard from "./UsersDetailsCard";

const details = [
  {
    id: "d1",
    title: "USERS",
    icon: <PeopleOutlineIcon />,
    totalNumber: "2,453",
  },
  {
    id: "d2",
    title: "ACTIVE USERS",
    icon: <GroupsOutlinedIcon />,
    totalNumber: "2,453",
  },
  {
    id: "d3",
    title: "USERS WITH LOANS",
    icon: <RequestQuoteOutlinedIcon />,
    totalNumber: "12,453",
  },
  {
    id: "d4",
    title: "USERS WITH SAVINGS",
    icon: <MoneyOutlinedIcon />,
    totalNumber: "102,453",
  },
];

const UsersDetails = () => {
  return (
    <Box sx={{ display: "flex" }}>
      {details.map((detail) => (
        <UsersDetailsCard
          key={detail.id}
          title={detail.title}
          totalNumber={detail.totalNumber}
        >
          {detail.icon}
        </UsersDetailsCard>
      ))}
    </Box>
  );
};

export default UsersDetails;
