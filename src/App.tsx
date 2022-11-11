import { BrowserRouter, Route, Routes } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "./App.scss";
import DashboardPage from "./pages/DashboardPage";
import LoginPage from "./pages/LoginPage";
import UserPage from "./pages/UserPage";
import UsersPage from "./pages/UsersPage";

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<DashboardPage />}>
            <Route index element={<UsersPage />} />
            <Route path="user/:id" element={<UserPage />} />
          </Route>
          <Route path="login" element={<LoginPage />} />
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
};

export default App;
