import Image from "mui-image";
import unionSvg from "../../assets/Union.svg";
import lendsqrSvg from "../../assets/lendsqr.svg";
import { Box } from "@mui/material";

const LendsqrLogo = () => {
  return (
    <Box sx={{ display: "flex", width: "5rem" }}>
      <Image
        src={unionSvg}
        className={"unionSvg"}
        style={{
          width: "1.5rem",
          height: "1.7rem",
        }}
      />
      <Image
        src={lendsqrSvg}
        className={"lendsqrSvg"}
        style={{
          width: "10rem",
          height: "2.2rem",
        }}
      />
    </Box>
  );
};

export default LendsqrLogo;
