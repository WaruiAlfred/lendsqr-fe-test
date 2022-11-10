import { FC } from "react";
import User from "../components/user/User";

export interface IUserPageProps {}

const UserPage: FC<IUserPageProps> = () => {
  return <User />;
};

export default UserPage;
