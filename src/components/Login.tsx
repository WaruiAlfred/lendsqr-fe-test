import {
  Box,
  Grid,
  Button,
  Container,
  TextField,
  Typography,
} from "@mui/material";
import Image from "mui-image";
import { useForm } from "react-hook-form";
import unionSvg from "../assets/Union.svg";
import lendsqrSvg from "../assets/lendsqr.svg";
import loginSvg from "../assets/pablo-sign-in 1.svg";
import styles from "../styles/Login.module.scss";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onAddEmailOnChange = (email: String) => {};

  const onAddPasswordOnChange = (password: string) => void {};

  const handleUserLogin = () => {};

  return (
    <Grid container spacing={2}>
      <Grid item xs={6}>
        <Box>
          <Image
            src={unionSvg}
            className={styles.unionSvg}
            style={{
              position: "absolute",
              width: "24.75px",
              height: "25px",
            }}
          />
          <Image
            src={lendsqrSvg}
            className={styles.lendsqrSvg}
            style={{
              position: "absolute",
              width: "138.44px",
              height: "36px",
            }}
          />
        </Box>
        <Image
          src={loginSvg}
          className={styles.loginSvg}
          style={{
            position: "absolute",
            width: "600px",
            height: "337.57px",
          }}
        />
      </Grid>
      <Grid item xs={6}>
        <Box
          sx={{
            position: "absolute",
            top: "215px",
            width: "447px",
          }}
        >
          <Container maxWidth="md" className={styles.form}>
            <Typography
              className={styles.welcomeTxt}
              sx={{
                fontFamily: "Avenir Next",
                fontStyle: "normal",
                fontWeight: 700,
                fontSize: "40px",
                lineHeight: "55px",
                letterSpacing: "-0.04em",
              }}
            >
              Welcome!
            </Typography>
            <Typography
              className={styles["form__header"]}
              sx={{
                fontFamily: "Avenir Next",
                fontStyle: "normal",
                fontWeight: 400,
                fontSize: "20px",
                lineHeight: "27px",
              }}
            >
              Enter details to login.
            </Typography>
            <form onSubmit={handleSubmit(handleUserLogin)}>
              <Box
                display={"flex"}
                flexDirection={"column"}
                className={styles["form__body"]}
              >
                <TextField
                  id="email"
                  label="Email"
                  // name="email"
                  {...register("email", { required: "Required" })}
                  value={"johndoe@gmail.com"}
                  onChange={(e) => onAddEmailOnChange(e.target.value)}
                  error={!!errors?.email}
                  // helperText={errors?.email ? errors.email.message : null}
                  className={styles["form__field"]}
                  sx={{
                    top: "-30px",
                  }}
                />
                <TextField
                  id="password"
                  label="Password"
                  // name="password"
                  {...register("password", { required: "Required" })}
                  value={"Password"}
                  onChange={(e) => onAddPasswordOnChange(e.target.value)}
                  error={!!errors?.email}
                  // helperText={errors?.password ? errors.password.message : null}
                  className={styles["form__field"]}
                  sx={{
                    top: "-2px",
                  }}
                />
                <Button className={styles["form__btn-password"]}>
                  Forgot Password?
                </Button>
                <Button
                  type="submit"
                  variant="contained"
                  className={styles["form__btn-submit"]}
                >
                  LOG IN
                </Button>
              </Box>
            </form>
          </Container>
        </Box>
      </Grid>
    </Grid>
  );
};

export default Login;
