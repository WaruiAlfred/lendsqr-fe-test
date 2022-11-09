import { Button, Typography } from "@mui/material";
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
    <Stack direction={"column"} spacing={1}>
      <Button
        startIcon={<BusinessCenterIcon />}
        endIcon={<KeyboardArrowDownIcon />}
      >
        Switch Organization
      </Button>
      <Button startIcon={<HomeIcon />}>Dashboard</Button>

      <Typography>CUSTOMERS</Typography>
      <Button startIcon={<GroupIcon />}>Users</Button>
      <Button startIcon={<GroupsIcon />}>Guarantors</Button>
      <Button startIcon={<PaidIcon />}>Loans</Button>
      <Button startIcon={<HandshakeIcon />}>Decision Models</Button>
      <Button startIcon={<SavingsIcon />}>Savings</Button>
      <Button startIcon={<RequestPageIcon />}>Loan Requests</Button>
      <Button startIcon={<PersonAddIcon />}>Whitelist</Button>
      <Button startIcon={<PersonRemoveIcon />}>Karma</Button>

      <Typography>BUSINESSES</Typography>
      <Button startIcon={<BusinessCenterIcon />}>Organization</Button>
      <Button startIcon={<PaidIcon />}>Loan Products</Button>
      <Button startIcon={<AccountBalanceIcon />}>Savings Products</Button>
      <Button startIcon={<MoneyIcon />}>Fees and Charges</Button>
      <Button startIcon={<ReceiptIcon />}>Transactions</Button>
      <Button startIcon={<SettingsIcon />}>Services</Button>
      <Button startIcon={<ManageAccountsIcon />}>Service Account</Button>
      <Button startIcon={<ReceiptLongIcon />}>Settlements</Button>
      <Button startIcon={<AssessmentIcon />}>Reports</Button>

      <Typography>SETTINGS</Typography>
      <Button startIcon={<TuneIcon />}>Preferences</Button>
      <Button startIcon={<MoneyOffIcon />}>Fees and Pricing</Button>
      <Button startIcon={<BallotIcon />}>Audit Logs</Button>
    </Stack>
  );
};

export default SideMenu;
