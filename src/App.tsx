// import { Fragment } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.scss";
import DashboardPage from "./pages/DashboardPage";
import LoginPage from "./pages/LoginPage";
import UserPage from "./pages/UserPage";
import UsersPage from "./pages/UsersPage";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<DashboardPage />}>
          <Route index element={<UsersPage />} />
          <Route path="user" element={<UserPage />} />
        </Route>
        <Route path="login" element={<LoginPage />} />
      </Routes>
      {/*<Fragment>
          <Login />
          <Dashboard />
      </Fragment>*/}
    </BrowserRouter>
  );
};

export default App;
