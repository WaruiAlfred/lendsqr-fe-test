import Image from "mui-image";
import unionSvg from "../../assets/Union.svg";
import lendsqrSvg from "../../assets/lendsqr.svg";
import styles from "../../styles/components/helpers/Lendsqrlogo.module.scss";
import { Box } from "@mui/material";

const LendsqrLogo = () => {
  return (
    <Box sx={{ display: "flex", width: "5rem" }}>
      <Image
        src={unionSvg}
        className={styles.unionSvg}
        style={{
          // position: "absolute",
          width: "1.5rem",
          height: "1.7rem",
        }}
      />
      <Image
        src={lendsqrSvg}
        className={styles.lendsqrSvg}
        style={{
          // position: "absolute",
          width: "10rem",
          height: "2.2rem",
        }}
      />
    </Box>
  );
};

export default LendsqrLogo;
