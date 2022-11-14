import { Box, Card, CardContent, Typography } from "@mui/material";
import { FC } from "react";

type cardPropTypes = {
  children: any;
  title: String;
  totalNumber: String;
  color: String;
};

const GeneralUsersDetailsCard: FC<cardPropTypes> = ({
  children,
  title,
  totalNumber,
  color,
}: cardPropTypes) => {
  return (
    <Card
      sx={{
        boxSizing: "border-box",
        width: "13.5rem",
        border: "1px solid #213f7d0f",
        boxShadow: "3px 5px 20px #0000000a",
        borderRadius: "4px",
        padding: ".3rem 1rem",
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
      }}
      className="card"
    >
      <Box sx={{ all: "initial", display: "flex", alignItems: "center" }}>
        <Box
          sx={{
            boxSizing: "border-box",
            borderRadius: "50%",
            background: `${color}`,
            width: "2.5rem",
            height: "2.7rem",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            padding: "2px",
            opacity: 0.1,
            // all: "initial",
          }}
        ></Box>
        <Box
          sx={{
            all: "initial",
            ml: -4,
          }}
        >
          {children}
        </Box>
      </Box>
      <CardContent>
        <Typography
          variant="body2"
          sx={{ marginBottom: "7px" }}
          className="card__title"
        >
          {title}
        </Typography>
        <Typography variant="body2" className="card__data">
          {totalNumber}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default GeneralUsersDetailsCard;
