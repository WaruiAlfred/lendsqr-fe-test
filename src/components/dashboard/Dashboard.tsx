import { Grid } from "@mui/material";
import Navbar from "./Navbar";
import SideMenu from "./SideMenu";

const Dashboard = () => {
  return (
    <Grid container spacing={0}>
      <Grid item xs={12}>
        {/* Navbar */}
        <Navbar />
      </Grid>
      <Grid item xs={2}>
        {/* SideMenu */}
        <SideMenu />
      </Grid>
      <Grid item xs={10}>
        {/* UserDetails */}
      </Grid>
    </Grid>
  );
};

export default Dashboard;