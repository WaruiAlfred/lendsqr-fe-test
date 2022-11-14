import { Grid, Typography } from "@mui/material";
import SpecificUsersDetails from "./SpecificUsersDetails";
import GeneralUsersDetails from "./GeneralUsersDetails";

const Users = () => {
  return (
    <Grid container spacing={2} sx={{ padding: "2rem 2rem" }}>
      <Grid item xs={12}>
        <Typography
          sx={{
            fontFamily: "Work Sans",
            fontStyle: "normal",
            fontWeight: 500,
            fontSize: "24px",
            lineHeight: "28px",
            color: "#213F7D",
          }}
        >
          Users
        </Typography>
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
