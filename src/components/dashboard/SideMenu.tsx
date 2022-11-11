import { Typography, Box } from "@mui/material";
import Stack from "@mui/material/Stack";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import HomeIcon from "@mui/icons-material/Home";
import GroupIcon from "@mui/icons-material/Group";
import GroupsIcon from "@mui/icons-material/Groups";
import PaidIcon from "@mui/icons-material/Paid";
import HandshakeIcon from "@mui/icons-material/Handshake";
import SavingsIcon from "@mui/icons-material/Savings";
import RequestPageIcon from "@mui/icons-material/RequestPage";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import PersonRemoveIcon from "@mui/icons-material/PersonRemove";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import MoneyIcon from "@mui/icons-material/Money";
import ReceiptIcon from "@mui/icons-material/Receipt";
import SettingsIcon from "@mui/icons-material/Settings";
import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";
import ReceiptLongIcon from "@mui/icons-material/ReceiptLong";
import AssessmentIcon from "@mui/icons-material/Assessment";
import TuneIcon from "@mui/icons-material/Tune";
import MoneyOffIcon from "@mui/icons-material/MoneyOff";
import BallotIcon from "@mui/icons-material/Ballot";

const SideMenu = () => {
  return (
    <Stack direction={"column"} spacing={1} className="sideMenu">
      <Box color="inherit" className="sideMenu__option">
        <BusinessCenterIcon sx={{ marginRight: "1rem" }} />
        Switch Organization
        <KeyboardArrowDownIcon sx={{ marginLeft: "1rem" }} />
      </Box>
      <Box color="inherit" className="sideMenu__option">
        <HomeIcon sx={{ marginRight: "1rem" }} />
        Dashboard
      </Box>

      <Typography className="sideMenu__header">CUSTOMERS</Typography>
      <Box color="inherit" className="sideMenu__option">
        <GroupIcon sx={{ marginRight: "1rem" }} />
        Users
      </Box>
      <Box color="inherit" className="sideMenu__option">
        <GroupsIcon sx={{ marginRight: "1rem" }} />
        Guarantors
      </Box>
      <Box color="inherit" className="sideMenu__option">
        <PaidIcon sx={{ marginRight: "1rem" }} />
        Loans
      </Box>
      <Box color="inherit" className="sideMenu__option">
        <HandshakeIcon sx={{ marginRight: "1rem" }} />
        Decision Models
      </Box>
      <Box color="inherit" className="sideMenu__option">
        <SavingsIcon sx={{ marginRight: "1rem" }} />
        Savings
      </Box>
      <Box color="inherit" className="sideMenu__option">
        <RequestPageIcon sx={{ marginRight: "1rem" }} />
        Loan Requests
      </Box>
      <Box color="inherit" className="sideMenu__option">
        <PersonAddIcon sx={{ marginRight: "1rem" }} />
        Whitelist
      </Box>
      <Box color="inherit" className="sideMenu__option">
        <PersonRemoveIcon sx={{ marginRight: "1rem" }} />
        Karma
      </Box>

      <Typography className="sideMenu__header">BUSINESSES</Typography>
      <Box color="inherit" className="sideMenu__option">
        <BusinessCenterIcon sx={{ marginRight: "1rem" }} />
        Organization
      </Box>
      <Box color="inherit" className="sideMenu__option">
        <PaidIcon sx={{ marginRight: "1rem" }} />
        Loan Products
      </Box>
      <Box color="inherit" className="sideMenu__option">
        <AccountBalanceIcon sx={{ marginRight: "1rem" }} />
        Savings Products
      </Box>
      <Box color="inherit" className="sideMenu__option">
        <MoneyIcon sx={{ marginRight: "1rem" }} />
        Fees and Charges
      </Box>
      <Box color="inherit" className="sideMenu__option">
        <ReceiptIcon sx={{ marginRight: "1rem" }} />
        Transactions
      </Box>
      <Box color="inherit" className="sideMenu__option">
        <SettingsIcon sx={{ marginRight: "1rem" }} />
        Services
      </Box>
      <Box color="inherit" className="sideMenu__option">
        <ManageAccountsIcon sx={{ marginRight: "1rem" }} />
        Service Account
      </Box>
      <Box color="inherit" className="sideMenu__option">
        <ReceiptLongIcon sx={{ marginRight: "1rem" }} />
        Settlements
      </Box>
      <Box color="inherit" className="sideMenu__option">
        <AssessmentIcon sx={{ marginRight: "1rem" }} />
        Reports
      </Box>

      <Typography className="sideMenu__header">SETTINGS</Typography>
      <Box color="inherit" className="sideMenu__option">
        <TuneIcon sx={{ marginRight: "1rem" }} />
        Preferences
      </Box>
      <Box color="inherit" className="sideMenu__option">
        <MoneyOffIcon sx={{ marginRight: "1rem" }} />
        Fees and Pricing
      </Box>
      <Box color="inherit" className="sideMenu__option">
        <BallotIcon sx={{ marginRight: "1rem" }} />
        Audit Logs
      </Box>
    </Stack>
  );
};

export default SideMenu;
