// @ts-nocheck
import { useEffect, useState } from "react";
import {
  Button,
  FormControl,
  FormGroup,
  FormLabel,
  TextField,
  Typography,
} from "@mui/material";
import Grid from "@mui/material/Grid";
import { LoadingButton } from "@mui/lab";

import LoginImage from "./loginImage.jpg";
import { LoginForm, LoginIntro, Wrapper } from "./style";
import { FetchUtils } from "../../utils/fetchUtils";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../redux/store";
import { isLoggedInTrue, setAppUser } from "../../redux/app/reducer";

interface ISignin {
  email: string;
  password: string;
}

interface IReponse {
  message: string;
  success: boolean;
  token?: string;
}

const SignIn = () => {
  const [loginPayload, setLoginPayload] = useState({ email: "", password: "" });

  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  async function handleSubmit(e: any) {
    e.preventDefault();
    let response = null;
    try {
      response = await FetchUtils.postRequest<ISignin, IReponse>(
        "/login",
        loginPayload
      );

      localStorage.setItem("token", response.token);
      dispatch(isLoggedInTrue(true));
      dispatch(setAppUser(response));
      navigate("/");
    } catch (e: unknown) {
      if (!e?.success) {
        toast(e?.message);
      }
    }

    console.log("token generated", response);
  }

  useEffect(() => {
    if (localStorage.getItem("token")) {
      navigate("/");
    }
  }, []);
  const handleFormChange = (
    event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    const {
      target: { name, value },
    } = event;

    setLoginPayload({
      ...loginPayload,
      [name]: value,
    });
  };

  return (
    <Wrapper>
      <Grid container alignItems="center">
        <LoginIntro item xs={6} paddingX={6}>
          <div>
            <h2>Transforming events into unforgettable experiences!</h2>
            <p>
            From concept to reality, we make your event dreams come true.
            Elevating events to new heights with Eventify.
            </p>
            <img src={LoginImage} alt="Login Image" />
          </div>
        </LoginIntro>
        <LoginForm item xs={6}>
          <div>
            <Typography fontWeight={900} fontSize="2rem">
              Eventify
            </Typography>
            <br />
            <form>
              <FormControl fullWidth>
                <FormLabel htmlFor="email">Email</FormLabel>
                <TextField
                  size="small"
                  required
                  fullWidth
                  id="email"
                  name="email"
                  autoComplete="email"
                  value={loginPayload.email}
                  onChange={handleFormChange}
                />
              </FormControl>
              <FormControl fullWidth>
                <FormLabel htmlFor="password" className="password-label">
                  Password
                </FormLabel>
                <TextField
                  size="small"
                  required
                  fullWidth
                  name="password"
                  type="password"
                  id="password"
                  autoComplete="current-password"
                  value={loginPayload.password}
                  onChange={handleFormChange}
                />
              </FormControl>
              <FormControl fullWidth>
                <LoadingButton
                  loading={false}
                  variant="contained"
                  onClick={(e) => {
                    handleSubmit(e);
                  }}
                  type="submit"
                >
                  Login
                </LoadingButton>
              </FormControl>
            </form>
          </div>
        </LoginForm>
      </Grid>
    </Wrapper>
  );
};

export { SignIn };
