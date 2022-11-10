import { FC } from "react";
import Dashboard from "../components/dashboard/Dashboard";

export interface IDashboardPageProps {}

const DashboardPage: FC<IDashboardPageProps> = () => {
  return <Dashboard />;
};

export default DashboardPage;
