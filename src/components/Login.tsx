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
// import styles from "../styles/components/Login.module.scss";
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
    <Grid container spacing={2} sx={{ padding: "6rem 5rem 0 5rem" }}>
      <Grid item xs={12} sm={6}>
        <LendsqrLogo />
        <Image
          src={loginSvg}
          className={"loginSvg"}
          style={{
            width: "100%",
            height: "80%",
          }}
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <Box>
          <Container maxWidth="md" className={"form"}>
            <Typography
              className="welcomeTxt"
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
              className={"form__header"}
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
              <Box className={"form__body"}>
                <TextField
                  id="email"
                  label="Email"
                  // name="email"
                  {...register("email", { required: "Required" })}
                  // value={"johndoe@gmail.com"}
                  onChange={(e) => onAddEmailOnChange(e.target.value)}
                  error={!!errors?.email}
                  // helperText={errors?.email ? errors.email.message : null}
                  className={"form__field"}
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
                  // value={"Password"}
                  onChange={(e) => onAddPasswordOnChange(e.target.value)}
                  error={!!errors?.email}
                  // helperText={errors?.password ? errors.password.message : null}
                  className={"form__field"}
                  sx={
                    {
                      // top: "-0.125rem",
                    }
                  }
                />
                <a href="#f" className={"form__btn-password"}>
                  Forgot Password?
                </a>
                <Button
                  type="submit"
                  variant="contained"
                  className={"form__btn-submit"}
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
