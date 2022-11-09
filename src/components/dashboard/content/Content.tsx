import { Grid } from "@mui/material";
import Title from "./Title";
import UserDetails from "./UserDetails";
import UsersDetails from "./UsersDetails";

const Content = () => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Title />
      </Grid>
      <Grid item xs={12}>
        <UsersDetails />
      </Grid>
      <Grid item xs={12}>
        <UserDetails />
      </Grid>
    </Grid>
  );
};

export default Content;
