import { styled } from "@mui/material/styles";
import { Grid } from "@mui/material";

export const Wrapper = styled("div")`
  box-sizing: border-box;
  height: 100vh;
  display: flex;
  align-items: center;
`;

export const LoginIntro = styled(Grid)`
  text-align: center;

  & > div {
    max-width: 610px;
    margin: auto;
    position: relative;
  }

  h2 {
    color: ${(props) => props.theme.palette.common.darkGrey};
    font-size: 50px;
    font-weight: 700;
    line-height: 1;
  }

  p {
    padding: 30px 0 45px;
    color: ${(props) => props.theme.palette.common.darkGrey};
    font-size: 24px;
    line-height: 1.2;
  }

  img {
    width: 542px;
    height: 386px;
  }
`;

export const LoginForm = styled(Grid)`
  height: 100vh;
  background-color: ${(props) => props.theme.palette.common.background};
  display: flex;
  align-items: center;
  text-align: center;
  & > div {
    max-width: 370px;
    margin: auto;
  }

  img {
    width: 165px;
    height: 45px;
  }

  h2 {
    margin: 96px 0 24px;
    font-weight: 400;
  }

  form {
    width: 320px;
    height: 247px;
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

  .password-label {
    display: flex;
    justify-content: space-between;

    span {
      color: ${(props) => props.theme.palette.primary.main};
    }
  }
`;

export const ErrorMessage = styled("div")<{ showError: boolean }>`
  width: 320px;
  padding: 15px 23px;
  position: absolute;
  margin-top: ${(props) => (props.showError ? "25px" : "10px")};
  border: 1px solid #cf222e;
  border-radius: 5px;
  background-color: rgba(255, 129, 130, 0.4);
  text-align: center;
  color: ${(props) => props.theme.palette.common.darkGrey};
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.1);
  opacity: ${(props) => (props.showError ? 1 : 0)};
  transition: 0.4s ease;
`;
