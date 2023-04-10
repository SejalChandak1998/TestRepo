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
import { ErrorMessage, LoginForm, LoginIntro, Wrapper } from "./style";
import axios from "axios";
import { useAppDispatch } from "../../redux/store";
import { IClient, ICreateClientPayload } from "../../redux/clients/thunk";
import { FetchUtils } from "../../utils/fetchUtils";
import { useNavigate } from "react-router-dom";
import { isLoggedInTrue, setAppUser } from "../../redux/app/reducer";

const Signup = () => {
  const [loginPayload, setLoginPayload] = useState({
    email: "",
    password: "",
    name: "",
    confirmpassword: '',
  });
  const passwordsMatch = loginPayload.password === loginPayload.confirmpassword;
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  function handleServerResponse(msg: string) {
    alert(msg);
  }

  const handleOnSubmit = async (e: any) => {
    e.preventDefault();

    const signupRequest = await FetchUtils.postRequest<
      ICreateClientPayload,
      IClient
    >("/user", loginPayload);

    axios({
      method: "POST",
      url: "https://formspree.io/f/myyalggy",
      data: {
        email: loginPayload.email,
        message: `A new user with the email : ${loginPayload.email} and the name : ${loginPayload.name} created`,
      },
    })
      .then((response) => {
        handleServerResponse("Thank you, your message has been submitted.");
      })
      .catch((error) => {
        console.log("error", error);
      });

    dispatch(isLoggedInTrue(true));
    dispatch(setAppUser(signupRequest));
    navigate("/");
  };

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
                <FormLabel htmlFor="name">Full Name</FormLabel>
                <TextField
                  size="small"
                  required
                  fullWidth
                  id="name"
                  name="name"
                  autoComplete="name"
                  value={loginPayload.name}
                  onChange={handleFormChange}
                />
              </FormControl>
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
              <FormLabel htmlFor="confirmpassword">Confirm Password</FormLabel>
              <TextField
              size="small" required
              fullWidth
              name="confirmpassword"
              type="password"
              id="confirmpassword"
              autoComplete="current-password"
              value={loginPayload.confirmpassword}
              onChange={handleFormChange}
              error={!passwordsMatch}
              helperText={!passwordsMatch && 'Passwords do not match'}
              />
              </FormControl>
              <FormControl fullWidth>
                <LoadingButton
                  loading={false}
                  variant="contained"
                  onClick={(e) => {
                    handleOnSubmit(e);
                  }}
                  type="submit"
                >
                  Sign up
                </LoadingButton>
              </FormControl>
            </form>
          </div>
        </LoginForm>
      </Grid>
    </Wrapper>
  );
};

export { Signup };
