import { Fragment } from "react";
import "./App.scss";
import Dashboard from "./components/dashboard/Dashboard";
// import Login from "./components/Login";
// import UserDetailsPage from "./components/UserDetailsPage";
// import UserPage from "./components/UserPage";

const App = () => {
  return (
    <Fragment>
      {/*
      <UserDetailsPage />
      <Login />
      <UserPage />*/}
      <Dashboard />
    </Fragment>
  );
};

export default App;
