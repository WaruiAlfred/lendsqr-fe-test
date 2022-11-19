import { Box } from "@mui/material";
import { FC } from "react";

export interface IUserStatusProps {
  status: string;
  children: any;
}

const UserStatus: FC<IUserStatusProps> = ({ status, children }) => {
  /*
    inactive
    background: #545F7D;
opacity: 0.06;
border-radius: 100px;
  */
  /*
  pending
  background: #E9B200;
opacity: 0.1;
border-radius: 100px;
 */

  /*
  blacklisted
  background: #E4033B;
opacity: 0.1;
border-radius: 100px;
*/

  /*
  active
  background: #39CD62;
opacity: 0.06;
border-radius: 100px;
*/
  return (
    <Box sx={{ all: "initial", display: "flex", alignItems: "center" }}>
      <Box
        sx={{
          border: "none",
          borderRadius: "100px",
          background:
            status === "Inactive"
              ? "#545F7D"
              : status === "Pending"
              ? "#E9B200"
              : status === "Blacklisted"
              ? "#E4033B"
              : status === "Active"
              ? "#39CD62"
              : "",

          opacity: 0.1,
          padding: 2,
          width: "100%",
          height: "0.5rem",
        }}
      ></Box>
      <Box
        sx={{
          all: "initial",
          ml: "-6.7rem",
          color:
            status === "Inactive"
              ? "#545F7D"
              : status === "Pending"
              ? "#E9B200"
              : status === "Blacklisted"
              ? "#E4033B"
              : status === "Active"
              ? "#39CD62"
              : "",
        }}
      >
        {children}
      </Box>
    </Box>
  );
};

export default UserStatus;
