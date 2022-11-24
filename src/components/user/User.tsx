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
// import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import GradeIcon from "@mui/icons-material/Grade";
import GradeOutlinedIcon from "@mui/icons-material/GradeOutlined";
import UserGeneralDetails from "./UserGeneralDetails";
import { Link, useLocation } from "react-router-dom";
import { fetchSingleUser } from "../../api";
import { useQuery } from "@tanstack/react-query";
import { FC } from "react";

const cardActionsDescription = [
  { id: "CA1", text: "General Details" },
  { id: "CA2", text: "Documents" },
  { id: "CA3", text: "Bank Details" },
  { id: "CA4", text: "Loans" },
  { id: "CA5", text: "Savings " },
  { id: "CA6", text: "App and System " },
];

const User: FC = () => {
  const { id } = useLocation().state;

  const { data } = useQuery({
    queryKey: ["user", id],
    queryFn: () => fetchSingleUser(id),
  });

  if (data !== null && data?.length > 0) {
    return <Typography>Loading...</Typography>;
  }

  return (
    <Grid container spacing={2} padding="4.7rem 2.5rem">
      <Grid item xs={12}>
        <Button startIcon={<KeyboardBackspaceIcon sx={{ color: "#545F7D" }} />}>
          <Link to="/" className="back-to-users">
            Back to Users
          </Link>
        </Button>
      </Grid>
      <Grid item xs={12}>
        <Box className="user-details">
          <Typography sx={{ fontSize: "1.5rem" }}>User Details</Typography>
          <Box sx={{ fontWeight: "bold" }}>
            <Button variant="outlined" color="error" sx={{ marginRight: 2 }}>
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
          <CardContent
            sx={{
              display: "flex",
              alignItems: "center",
              padding: "2rem 1.6rem 0 1.6rem",
            }}
          >
            <Box
              sx={{
                width: "17rem",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Avatar
                sx={{ height: "6rem", width: "6rem" }}
                alt={data?.profile?.firstName}
                src={data?.profile?.avatar}
              >
                {/* <PersonOutlineOutlinedIcon /> */}
              </Avatar>
              <Box className="user-identification">
                <Typography className="user-identification-1">{`${data?.profile?.firstName} ${data?.profile?.lastName}`}</Typography>
                <Typography className="user-identification-2">
                  {data?.accountNumber}
                </Typography>
              </Box>
            </Box>
            <Divider
              orientation="vertical"
              flexItem
              sx={{ margin: "0 0.7rem" }}
            />
            <Box sx={{ width: "6rem", marginLeft: "1rem" }}>
              <Typography
                sx={{
                  color: "#545F7D",
                  fontSize: "1rem",
                  fontWeight: "bold",
                }}
              >
                User's Tier
              </Typography>
              <Box>
                <GradeIcon sx={{ color: "#E9B200" }} />
                <GradeOutlinedIcon sx={{ color: "#E9B200" }} />
                <GradeOutlinedIcon sx={{ color: "#E9B200" }} />
              </Box>
            </Box>
            <Divider
              orientation="vertical"
              flexItem
              sx={{ margin: "0 0.7rem" }}
            />
            <Box sx={{ color: "#213F7D" }}>
              <Typography sx={{ fontSize: "1.375rem" }}>
                &#x20A6; {data?.accountBalance}
              </Typography>
              <Typography>9973479792392 / Providus Bank</Typography>
            </Box>
          </CardContent>
          <CardActions sx={{ padding: "0.6rem 1.5rem" }}>
            {cardActionsDescription.map((action: any) => (
              <Button className="user-action" key={action.id}>
                {action.text}
              </Button>
            ))}
          </CardActions>
        </Card>
      </Grid>
      <Grid item xs={12}>
        <UserGeneralDetails data={data} />
      </Grid>
    </Grid>
  );
};

export default User;
