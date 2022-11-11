import { Grid } from "@mui/material";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import SideMenu from "./SideMenu";

const Dashboard = () => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12} marginBottom="5rem">
        <Navbar />
      </Grid>
      <Grid item xs={3}>
        <SideMenu />
      </Grid>
      <Grid item xs={9}>
        <Outlet />
      </Grid>
    </Grid>
  );
};

export default Dashboard;
