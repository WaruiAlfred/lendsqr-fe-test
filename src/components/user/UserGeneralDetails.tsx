import { FC } from "react";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableOutline from "./TableOutline";
import { Typography } from "@mui/material";

const GeneralDetail: FC<{ children: any; heading: string }> = ({
  children,
  heading,
}) => {
  return (
    <TableOutline>
      <TableHead>
        <TableRow>
          <TableCell>{heading}</TableCell>
          <TableCell></TableCell>
          <TableCell></TableCell>
          <TableCell></TableCell>
          <TableCell></TableCell>
        </TableRow>
      </TableHead>
      <TableBody>{children}</TableBody>
    </TableOutline>
  );
};

const TableCellInfo: FC<{ title: string; info: string }> = ({
  title,
  info,
}) => {
  return (
    <TableCell>
      <Typography>{title}</Typography>
      <Typography>{info}</Typography>
    </TableCell>
  );
};

const personalInfoData = [
  {
    title: "FULL NAME",
    info: "Grace Effloam",
  },
  {
    title: "PHONE NUMBER",
    info: "079843798689",
  },
  {
    title: "EMAIL ADDRESS",
    info: "grace@gmail.com",
  },
  {
    title: "BVN",
    info: "078787786767",
  },
  {
    title: "GENDER",
    info: "Female",
  },
];

const educationAndEmploymentData = [
  {
    title: "LEVEL OF EDUCATION",
    info: "B.Sc",
  },
  {
    title: "EMPLOYMENT STATUS",
    info: "Employed",
  },
  {
    title: "SECTOR OF EMPLOYMENT",
    info: "FinTech",
  },
  {
    title: "DURATION OF EMPLOYMENT",
    info: "2 years",
  },
  {
    title: "OFFICE EMAIL",
    info: "grace@lendsqr.com",
  },
  {
    title: "MONTHLY INCOME",
    info: "N200,0000.00-N400,000.00",
  },
  {
    title: "LOAN REPAYMENT",
    info: "40,000",
  },
];

const socialsData = [
  {
    title: "TWITTER",
    info: "@grace_effloam",
  },
  {
    title: "FACEBOOK",
    info: "Grace Effloam",
  },
  {
    title: "INSTAGRAM",
    info: "@grace_effloam",
  },
];

const guarantorData = [
  {
    title: "FULL NAME",
    info: "Debby Ogana",
  },
  {
    title: "PHONE NUMBER",
    info: "0799999",
  },
  {
    title: "EMAIL ADDRESS",
    info: "debby@gmail.com",
  },
  {
    title: "RELATIONSHIP",
    info: "Sister",
  },
];

const personalInfo = (
  <GeneralDetail heading="Personal Information">
    <TableRow sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
      {personalInfoData.map((data) => (
        <TableCellInfo key={data.title} title={data.title} info={data.info} />
      ))}
    </TableRow>
  </GeneralDetail>
);

const educationAndEmployment = (
  <GeneralDetail heading="Education and Employment">
    <TableRow sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
      {educationAndEmploymentData.map((data) => (
        <TableCellInfo key={data.title} title={data.title} info={data.info} />
      ))}
    </TableRow>
  </GeneralDetail>
);

const socials = (
  <GeneralDetail heading="Socials">
    <TableRow sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
      {socialsData.map((data) => (
        <TableCellInfo key={data.title} title={data.title} info={data.info} />
      ))}
    </TableRow>
  </GeneralDetail>
);

const guarantor = (
  <GeneralDetail heading="Guarantor">
    <TableRow sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
      {guarantorData.map((data) => (
        <TableCellInfo key={data.title} title={data.title} info={data.info} />
      ))}
    </TableRow>
  </GeneralDetail>
);

const rows = [
  {
    name: "personalInfo",
    data: personalInfo,
  },
  {
    name: "educationAndEmplyoment",
    data: educationAndEmployment,
  },
  {
    name: "socials",
    data: socials,
  },
  {
    name: "guarantor",
    data: guarantor,
  },
];

const UserGeneralDetails = () => {
  return (
    <TableOutline>
      <TableBody>
        {rows.map((row) => (
          <TableRow
            key={row.name}
            sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
          >
            {row.data}
          </TableRow>
        ))}
      </TableBody>
    </TableOutline>
  );
};

export default UserGeneralDetails;
