import { AppBar, Toolbar, Typography } from "@mui/material";

export function Header() {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6">Northeastern University</Typography>
        <div></div>
        <Typography variant="h2">Group Name</Typography>
      </Toolbar>
    </AppBar>
  );
}
