import {
  Avatar,
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Divider,
  Grid,
  Typography,
} from "@mui/material";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import GradeIcon from "@mui/icons-material/Grade";
import GradeOutlinedIcon from "@mui/icons-material/GradeOutlined";
import AttachMoneyOutlinedIcon from "@mui/icons-material/AttachMoneyOutlined";
import UserGeneralDetails from "./UserGeneralDetails";
import { Link } from "react-router-dom";

const cardActionsDescription = [
  { id: "CA1", text: "General Details" },
  { id: "CA2", text: "Documents" },
  { id: "CA3", text: "Bank Details" },
  { id: "CA4", text: "Loans" },
  { id: "CA5", text: "Savings " },
  { id: "CA6", text: "App and System " },
];

const User = () => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Button startIcon={<KeyboardBackspaceIcon />}>
          <Link to="/">Back to Users</Link>
        </Button>
      </Grid>
      <Grid item xs={12}>
        <Box>
          <Typography>User Details</Typography>
          <Box>
            <Button variant="outlined" color="error">
              BLACKLIST USER
            </Button>
            <Button variant="outlined" color="info">
              ACTIVATE USER
            </Button>
          </Box>
        </Box>
      </Grid>
      <Grid item xs={12}>
        <Card>
          <CardContent sx={{ display: "flex" }}>
            <Box>
              <Avatar>
                <PersonOutlineOutlinedIcon />
              </Avatar>
              <Typography>Grace Efflon</Typography>
              <Typography>LSQ13FDF34VVB33</Typography>
            </Box>
            <Divider orientation="vertical" flexItem />
            <Box>
              <Typography>User's Tier</Typography>
              <Box>
                <GradeIcon />
                <GradeOutlinedIcon />
                <GradeOutlinedIcon />
              </Box>
            </Box>
            <Divider orientation="vertical" flexItem />
            <Box>
              <Typography>
                <AttachMoneyOutlinedIcon />
                200,000.00
              </Typography>
              <Typography>9973479792392/Providus Bank</Typography>
            </Box>
          </CardContent>
          <CardActions>
            {cardActionsDescription.map((action: any) => (
              <Button key={action.id}>{action.text}</Button>
            ))}
          </CardActions>
        </Card>
      </Grid>
      <Grid item xs={12}>
        <UserGeneralDetails />
      </Grid>
    </Grid>
  );
};

export default User;
