import { styled } from "@mui/material/styles";
import { Grid } from "@mui/material";

export const Wrapper = styled("div")`
  box-sizing: border-box;

  display: flex;
  align-items: center;
`;

export const LoginForm = styled(Grid)`
  margin-top: 10rem;
  display: flex;
  align-items: center;
  text-align: center;
  justify-content: center;
  form {
    width: 40rem;
    height: 20rem;
    padding: 24px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 24px;
    text-align: left;
    background: #ffffff;
    box-shadow: 0px 4px 25px rgba(0, 0, 0, 0.1);
    border-radius: 8px;
  }
`;
