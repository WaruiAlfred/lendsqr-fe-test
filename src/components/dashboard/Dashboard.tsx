import { Grid } from "@mui/material";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import SideMenu from "./SideMenu";

const Dashboard = () => {
  return (
    <Grid container spacing={0}>
      <Grid item xs={12}>
        <Navbar />
      </Grid>
      <Grid item xs={2}>
        <SideMenu />
      </Grid>
      <Grid item xs={10}>
        <Outlet />
      </Grid>
    </Grid>
  );
};

export default Dashboard;
