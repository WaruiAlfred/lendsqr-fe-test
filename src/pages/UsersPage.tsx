import { FC } from "react";
import Users from "../components/users/Users";

export interface IUsersPageProps {}

const UsersPage: FC<IUsersPageProps> = () => {
  return <Users />;
};

export default UsersPage;
