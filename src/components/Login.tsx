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
import loginSvg from "../assets/pablo-sign-in 1.svg";
import styles from "../styles/components/Login.module.scss";
import LendsqrLogo from "./helpers/LendsqrLogo";

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
      <Grid item xs={12} sm={6}>
        <LendsqrLogo />
        <Image
          src={loginSvg}
          className={styles.loginSvg}
          style={{
            // position: "absolute",
            width: "37.5rem",
            height: "21.1rem",
          }}
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <Box
          sx={
            {
              // position: "absolute",
              // top: "13.4rem",
              // width: "27.9rem",
            }
          }
        >
          <Container maxWidth="md" className={styles.form}>
            <Typography
              className={styles.welcomeTxt}
              sx={{
                fontFamily: "Avenir Next",
                fontStyle: "normal",
                fontWeight: 700,
                fontSize: "2.5rem",
                lineHeight: "3.4rem",
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
                fontSize: "1.25rem",
                lineHeight: "1.7rem",
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
                  sx={
                    {
                      // top: "-1.9rem",
                    }
                  }
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
                  sx={
                    {
                      // top: "-0.125rem",
                    }
                  }
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
