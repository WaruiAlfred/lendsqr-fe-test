import { Box } from "@mui/material";
import PeopleOutlineIcon from "@mui/icons-material/PeopleOutline";
import GroupsOutlinedIcon from "@mui/icons-material/GroupsOutlined";
import RequestQuoteOutlinedIcon from "@mui/icons-material/RequestQuoteOutlined";
import MoneyOutlinedIcon from "@mui/icons-material/MoneyOutlined";
import GeneralUsersDetailsCard from "./GeneralUsersDetailsCard";

const details = [
  {
    id: "d1",
    title: "USERS",
    icon: <PeopleOutlineIcon sx={{ color: "#DF18FF" }} />,
    totalNumber: "2,453",
    color: "#DF18FF",
  },
  {
    id: "d2",
    title: "ACTIVE USERS",
    icon: <GroupsOutlinedIcon sx={{ color: "#5718FF" }} />,
    totalNumber: "2,453",
    color: "#5718FF",
  },
  {
    id: "d3",
    title: "USERS WITH LOANS",
    icon: <RequestQuoteOutlinedIcon sx={{ color: "#F55F44" }} />,
    totalNumber: "12,453",
    color: "#F55F44",
  },
  {
    id: "d4",
    title: "USERS WITH SAVINGS",
    icon: <MoneyOutlinedIcon sx={{ color: "#FF3366" }} />,
    totalNumber: "102,453",
    color: "#FF3366",
  },
];

const GeneralUsersDetails = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        fontFamily: "Work Sans",
        fontStyle: "normal",
      }}
    >
      {details.map((detail) => (
        <GeneralUsersDetailsCard
          key={detail.id}
          title={detail.title}
          totalNumber={detail.totalNumber}
          color={detail.color}
        >
          {detail.icon}
        </GeneralUsersDetailsCard>
      ))}
    </Box>
  );
};

export default GeneralUsersDetails;
