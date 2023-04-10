import { Grid } from "@mui/material";
import { Footer } from "./Footer";
import { Header } from "./Header";
import { ChildrenGrid, Wrapper } from "./index.style";
import { Sidebar } from "./sidebar";

interface IContainer {
  children: JSX.Element | JSX.Element[];
}
export function Layout({ children }: IContainer) {
  return (
    <>
      <Wrapper>
        <Header />
        <Grid container zIndex={2}>
          <Grid
            item
            xs={2}
            zIndex={2}
            boxShadow={"0px 4px 20px rgba(0, 0, 0, 0.1);"}
          >
            <Sidebar />
          </Grid>
          <ChildrenGrid item xs={10} zIndex={1}>
            {children}
          </ChildrenGrid>
        </Grid>
      </Wrapper>
    </>
  );
}
