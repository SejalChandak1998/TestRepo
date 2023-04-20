// @ts-nocheck
import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../../redux/store";
import { isLoggedInTrue } from "../../../redux/app/reducer";
import { get, size } from "lodash";
import { getInfoFromToken } from "../../../utils/infoFromToken";
import { IClient } from "../../../redux/clients/thunk";
import { toast } from "react-toastify";

const settings = ["Profile", "Account", "Dashboard", "Logout"];

export function HomepageHeader() {
  const { isLoggedIn, setAppUser } = useAppSelector((state) => state.app);
  const [user, setUser] = React.useState<IClient | null>(null);

  const dispatch = useAppDispatch();
  React.useEffect(() => {
    const userInfo = getInfoFromToken();
    if (userInfo) {
      setUser(userInfo.clientInfo);
    }
  }, []);

  const headerOptions = [
    "Sign Up",
    "Sign In",
    "Home",
    "Create Event",
    "Contact US",
    "Favorites",
    "Registered Events",
    "All Events",
    "Logout"
  ];

  const navigate = useNavigate();
  function redirectFn(event: number) {
    switch (event) {
      case 0:
        navigate("/signup");
        break;
      case 1:
        navigate("/signin");
        break;
      
      case 2:
        navigate("/");
        break;

      case 3:
        if (localStorage.getItem("token")) {
          navigate("/createEvent");
        } else {
          toast("You need to be logged in to create an event");
        }
        break;
      case 4:
        navigate("/contact");
        break;

      case 5:
        navigate("/favorites");
        break;

      case 6:
        navigate("/myevents");
        break;

      case 7:
        navigate("/allevent");
        break;

      case 8:
          localStorage.removeItem("token");
          dispatch(isLoggedInTrue(false));
          navigate("/signin");
    }
  }

  return (
    <AppBar position="static">
      <Container maxWidth="lg">
        <Toolbar disableGutters>
          <AdbIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} />
          <Typography
            variant="h6"
            noWrap
            component="a"
            style={{ cursor: "pointer" }}
            onClick={() => navigate("/")}
            sx={{
              mr: 2,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            EVENTIFY
          </Typography>

          <AdbIcon sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} />

          <Box sx={{ display: "flex", position: "absolute", right: 0 }}>
            {headerOptions.map((page, index) => {
              if (isLoggedIn || !!localStorage.getItem("token")) {
                if (index == 0 || index == 1) {
                  return;
                }
              } else {
                if (
                  index == 2 ||
                  index == 3 ||
                  index == 4 ||
                  index == 5 ||
                  index == 6 ||
                  index == 7 || 
                  index == 8 
                )
                  return;
              }
              return (
                <Typography
                  mr={2}
                  ml={2}
                  textAlign="center"
                  style={{ cursor: "pointer" }}
                  onClick={() => redirectFn(index)}
                >
                  {page}
                </Typography>
              );
            })}

            {size(user) > 0 && (
              <Typography
                fontSize={"1.2rem"}
                fontWeight="900"
                style={{
                  position: "relative",
                  left: "10rem",
                }}
              >
                Hello, {`\t`}
                {get(user, `name`, "")}
              </Typography>
            )}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
