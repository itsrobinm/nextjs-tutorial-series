"use client";
import {
  Button,
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  TextField,
} from "@mui/material";

import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { useActionState, useState } from "react";
import styles from "./login.module.scss"; // Adjust the path as necessary
//import { signIn } from "next-auth/react";
import { authenticate } from "@/lib/actions";
import { useSearchParams } from "next/navigation";

const Login: React.FC = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };

  const handleMouseUpPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };

  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get("callbackUrl") || "/home";
  const [errorMessage, formAction, isPending] = useActionState(
    authenticate,
    undefined
  );

  return (
    <div className={styles.container}>
      <div >
        <form className={styles.loginContainer} action={formAction}>
          <TextField
            label="Username"
            variant="outlined"
            onChange={(e) => setUsername(e.target.value)}
            name="username"
          />
          <FormControl variant="outlined">
            <InputLabel htmlFor="outlined-adornment-password">
              Password
            </InputLabel>
            <OutlinedInput
              id="outlined-adornment-password"
              name="password"
              type={showPassword ? "text" : "password"}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label={
                      showPassword
                        ? "hide the password"
                        : "display the password"
                    }
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    onMouseUp={handleMouseUpPassword}
                    edge="end"
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
              label="Password"
            />
          </FormControl>
          <input type="hidden" name="redirectTo" value={callbackUrl} />

          <Button
            variant="contained"
            className={styles.loginButton}
            // onClick={() => {
            //   signIn("Credentials", {
            //     username: username,
            //     password: password,
            //     //redirect: true,
            //     callbackUrl: "/home", // Redirect to home after login)
            //     redirect: false, // Prevent automatic redirect
            //   });
            // }}
            type="submit"
          >
            Login
          </Button>
        </form>
      </div>
    </div>
  );
};

export default Login;
