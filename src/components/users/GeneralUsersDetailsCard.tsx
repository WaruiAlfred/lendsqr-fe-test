import { Card, CardContent, IconButton, Typography } from "@mui/material";
import { FC } from "react";

type cardPropTypes = {
  children: any;
  title: String;
  totalNumber: String;
};

const GeneralUsersDetailsCard: FC<cardPropTypes> = ({
  children,
  title,
  totalNumber,
}: cardPropTypes) => {
  return (
    <Card sx={{ width: 195, mr: 2 }}>
      {/* <CardHeader> */}
      <IconButton color="secondary">{children}</IconButton>
      {/* </CardHeader> */}
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {totalNumber}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default GeneralUsersDetailsCard;
