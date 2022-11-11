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
import { Link, useParams } from "react-router-dom";
import { fetchSingleUser } from "../../api";
import { useQuery } from "@tanstack/react-query";
import { Fragment } from "react";

const cardActionsDescription = [
  { id: "CA1", text: "General Details" },
  { id: "CA2", text: "Documents" },
  { id: "CA3", text: "Bank Details" },
  { id: "CA4", text: "Loans" },
  { id: "CA5", text: "Savings " },
  { id: "CA6", text: "App and System " },
];

const User = () => {
  const { id } = useParams();

  const { data } = useQuery({
    queryKey: ["user", id],
    queryFn: () => fetchSingleUser(id),
  });
  console.log(data);

  return (
    <Fragment>
      {data?.length === 0 ? (
        <Typography>Loading...</Typography>
      ) : (
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
                  <Typography>{`${data?.profile.firstName} ${data?.profile.lastName}`}</Typography>
                  <Typography>{data?.accountNumber}</Typography>
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
                    {data?.accountBalance}
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
            <UserGeneralDetails data={data} />
          </Grid>
        </Grid>
      )}
    </Fragment>
  );
};

export default User;
