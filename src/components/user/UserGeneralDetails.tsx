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

const UserGeneralDetails: FC<{ data: any }> = ({ data }) => {
  if (data !== null && data?.length > 0) {
    return <Typography>Loading...</Typography>;
  }

  const personalInfoData = [
    {
      title: "FULL NAME",
      info: `${data?.profile?.firstName} ${data?.profile?.lastName}`,
    },
    {
      title: "PHONE NUMBER",
      info: `${data?.profile?.phoneNumber}`,
    },
    {
      title: "EMAIL ADDRESS",
      info: `${data?.email}`,
    },
    {
      title: "BVN",
      info: `${data?.profile?.bvn}`,
    },
    {
      title: "GENDER",
      info: `${data?.profile?.gender}`,
    },
  ];

  const educationAndEmploymentData = [
    {
      title: "LEVEL OF EDUCATION",
      info: `${data?.education?.level}`,
    },
    {
      title: "EMPLOYMENT STATUS",
      info: `${data?.education?.employmentStatus}`,
    },
    {
      title: "SECTOR OF EMPLOYMENT",
      info: `${data?.education?.sector}`,
    },
    {
      title: "DURATION OF EMPLOYMENT",
      info: `${data?.education?.duration}`,
    },
    {
      title: "OFFICE EMAIL",
      info: `${data?.education?.officeEmail}`,
    },
    {
      title: "MONTHLY INCOME",
      info: `${data?.education?.monthlyIncome?.sort()[0]} - ${
        data?.education?.monthlyIncome?.sort()[1]
      }`,
    },
    {
      title: "LOAN REPAYMENT",
      info: `${data?.education?.loanRepayment}`,
    },
  ];

  const socialsData = [
    {
      title: "TWITTER",
      info: `${data?.socials?.twitter}`,
    },
    {
      title: "FACEBOOK",
      info: `${data?.socials?.facebook}`,
    },
    {
      title: "INSTAGRAM",
      info: `${data?.socials?.instagram}`,
    },
  ];

  const guarantorData = [
    {
      title: "FULL NAME",
      info: `${data?.guarantor?.firstName} ${data?.guarantor?.lastName}`,
    },
    {
      title: "PHONE NUMBER",
      info: `${data?.guarantor?.phoneNumber}`,
    },
    {
      title: "ADDRESS",
      info: `${data?.guarantor?.address}`,
    },
    {
      title: "RELATIONSHIP",
      info: `${data?.guarantor?.gender === "Male" ? "Brother" : "Sister"}`,
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
