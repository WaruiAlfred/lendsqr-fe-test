import React, { Fragment } from "react";
import Image from "mui-image";
import unionSvg from "../../assets/Union.svg";
import lendsqrSvg from "../../assets/lendsqr.svg";
import styles from "../../styles/components/helpers/Lendsqrlogo.module.scss";

const LendsqrLogo = () => {
  return (
    <Fragment>
      <Image
        src={unionSvg}
        className={styles.unionSvg}
        style={{
          position: "absolute",
          width: "2.5rem",
          height: "2.5rem",
        }}
      />
      <Image
        src={lendsqrSvg}
        className={styles.lendsqrSvg}
        style={{
          position: "absolute",
          width: "13.8rem",
          height: "3.6rem",
        }}
      />
    </Fragment>
  );
};

export default LendsqrLogo;
