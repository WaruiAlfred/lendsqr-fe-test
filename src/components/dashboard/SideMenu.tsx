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
import { FC, Fragment } from "react";

const SideMenuOption: FC<{ children: any }> = ({ children }) => {
  return (
    <Box color="inherit" className="sideMenu__option">
      {children}
    </Box>
  );
};

const options = [
  {
    header: "main",
    data: [
      {
        name: "Organization",
        content: (
          <Fragment>
            <BusinessCenterIcon sx={{ marginRight: "1rem" }} />
            Switch Organization
            <KeyboardArrowDownIcon sx={{ marginLeft: "1rem" }} />
          </Fragment>
        ),
      },
      {
        name: "Dashboard",
        content: (
          <Fragment>
            <HomeIcon sx={{ marginRight: "1rem" }} />
            Dashboard
          </Fragment>
        ),
      },
    ],
  },
  {
    header: "customers",
    data: [
      {
        name: "Users",
        content: (
          <Fragment>
            <GroupIcon sx={{ marginRight: "1rem" }} />
            Users
          </Fragment>
        ),
      },
      {
        name: "Guarantors",
        content: (
          <Fragment>
            <GroupsIcon sx={{ marginRight: "1rem" }} />
            Guarantors
          </Fragment>
        ),
      },
      {
        name: "Loans",
        content: (
          <Fragment>
            <PaidIcon sx={{ marginRight: "1rem" }} />
            Loans
          </Fragment>
        ),
      },
      {
        name: "Decision",
        content: (
          <Fragment>
            <HandshakeIcon sx={{ marginRight: "1rem" }} />
            Decision Models
          </Fragment>
        ),
      },
      {
        name: "Savings",
        content: (
          <Fragment>
            <SavingsIcon sx={{ marginRight: "1rem" }} />
            Savings
          </Fragment>
        ),
      },
      {
        name: "Requests",
        content: (
          <Fragment>
            <RequestPageIcon sx={{ marginRight: "1rem" }} />
            Loan Requests
          </Fragment>
        ),
      },
      {
        name: "Whitelist",
        content: (
          <Fragment>
            <PersonAddIcon sx={{ marginRight: "1rem" }} />
            Whitelist
          </Fragment>
        ),
      },
      {
        name: "Karma",
        content: (
          <Fragment>
            <PersonRemoveIcon sx={{ marginRight: "1rem" }} />
            Karma
          </Fragment>
        ),
      },
    ],
  },
  {
    header: "businesses",
    data: [
      {
        name: "Organization",
        content: (
          <Fragment>
            <BusinessCenterIcon sx={{ marginRight: "1rem" }} />
            Organization
          </Fragment>
        ),
      },
      {
        name: "LProducts",
        content: (
          <Fragment>
            <PaidIcon sx={{ marginRight: "1rem" }} />
            Loan Products
          </Fragment>
        ),
      },
      {
        name: "SProducts",
        content: (
          <Fragment>
            <AccountBalanceIcon sx={{ marginRight: "1rem" }} />
            Savings Products
          </Fragment>
        ),
      },
      {
        name: "Charges",
        content: (
          <Fragment>
            <MoneyIcon sx={{ marginRight: "1rem" }} />
            Fees and Charges
          </Fragment>
        ),
      },
      {
        name: "Transactions",
        content: (
          <Fragment>
            <ReceiptIcon sx={{ marginRight: "1rem" }} />
            Transactions
          </Fragment>
        ),
      },
      {
        name: "Services",
        content: (
          <Fragment>
            <SettingsIcon sx={{ marginRight: "1rem" }} />
            Services
          </Fragment>
        ),
      },
      {
        name: "SAccount",
        content: (
          <Fragment>
            <ManageAccountsIcon sx={{ marginRight: "1rem" }} />
            Service Account
          </Fragment>
        ),
      },
      {
        name: "Settlements",
        content: (
          <Fragment>
            <ReceiptLongIcon sx={{ marginRight: "1rem" }} />
            Settlements
          </Fragment>
        ),
      },
      {
        name: "Reports",
        content: (
          <Fragment>
            <AssessmentIcon sx={{ marginRight: "1rem" }} />
            Reports
          </Fragment>
        ),
      },
    ],
  },
  {
    header: "settings",
    data: [
      {
        name: "Preferences",
        content: (
          <Fragment>
            <TuneIcon sx={{ marginRight: "1rem" }} />
            Preferences
          </Fragment>
        ),
      },
      {
        name: "FeesAndPricing",
        content: (
          <Fragment>
            <MoneyOffIcon sx={{ marginRight: "1rem" }} />
            Fees and Pricing
          </Fragment>
        ),
      },
      {
        name: "AuditLogs",
        content: (
          <Fragment>
            <BallotIcon sx={{ marginRight: "1rem" }} />
            Audit Logs
          </Fragment>
        ),
      },
    ],
  },
];

const SideMenu: FC = () => {
  return (
    <Stack direction={"column"} spacing={1} className="sideMenu">
      {options.map((option) =>
        option.header === "main"
          ? option.data.map((optionItem) => (
              <SideMenuOption key={optionItem.name}>
                {optionItem.content}
              </SideMenuOption>
            ))
          : null
      )}

      <Typography className="sideMenu__header">CUSTOMERS</Typography>
      {options.map((option) =>
        option.header === "customers"
          ? option.data.map((optionItem) => (
              <SideMenuOption key={optionItem.name}>
                {optionItem.content}
              </SideMenuOption>
            ))
          : null
      )}

      <Typography className="sideMenu__header">BUSINESSES</Typography>
      {options.map((option) =>
        option.header === "businesses"
          ? option.data.map((optionItem) => (
              <SideMenuOption key={optionItem.name}>
                {optionItem.content}
              </SideMenuOption>
            ))
          : null
      )}

      <Typography className="sideMenu__header">SETTINGS</Typography>
      {options.map((option) =>
        option.header === "settings"
          ? option.data.map((optionItem) => (
              <SideMenuOption key={optionItem.name}>
                {optionItem.content}
              </SideMenuOption>
            ))
          : null
      )}
    </Stack>
  );
};

export default SideMenu;
