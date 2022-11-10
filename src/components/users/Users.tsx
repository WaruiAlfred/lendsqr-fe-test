import { Grid, Typography } from "@mui/material";
import SpecificUsersDetails from "./SpecificUsersDetails";
import GeneralUsersDetails from "./GeneralUsersDetails";

const Users = () => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Typography>Users</Typography>;
      </Grid>
      <Grid item xs={12}>
        <GeneralUsersDetails />
      </Grid>
      <Grid item xs={12}>
        <SpecificUsersDetails />
      </Grid>
    </Grid>
  );
};

export default Users;
