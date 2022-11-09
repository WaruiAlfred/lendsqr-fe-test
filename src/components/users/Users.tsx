import { Grid } from "@mui/material";
import Title from "./Title";
import SpecificUsersDetails from "./SpecificUsersDetails";
import GeneralUsersDetails from "./GeneralUsersDetails";

const Users = () => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Title />
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
