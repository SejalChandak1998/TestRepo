import styled from "@emotion/styled";
import { Grid } from "@mui/material";

export const Wrapper = styled("div")`
  .MuiGrid-item {
    min-height: calc(100vh - 82px);
    color: "#555";
    overflow: auto;
  }
`;

export const ChildrenGrid = styled(Grid)`
  padding: 2.5rem 2rem;
  background-color: "#f5f6fe";
  position: relative;
`;
