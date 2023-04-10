import {
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../../constants/endpoints";
import { Wrapper } from "../index.style";
import { CustomMenuItem } from "./style";

const leftSidebarMenuOptions = [
  "All Events",
  "Add New Event",
  "Attendees",
  "Logout",
];

export const Sidebar = () => {
  const navigate = useNavigate();
  function selectHandler(menuItem: string) {
    switch (menuItem) {
      case leftSidebarMenuOptions[0]:
        navigate("/");
        break;
      case leftSidebarMenuOptions[1]:
        navigate("/event");
        break;

      case leftSidebarMenuOptions[2]:
        navigate("/attendees");
        break;
      default:
      // navigate({ to: ROUTES.SIGNOUT });
    }
  }
  return (
    <Wrapper>
      <ul>
        {leftSidebarMenuOptions.map((e) => (
          <CustomMenuItem onClick={() => selectHandler(e)}>
            <List>
              <ListItem>
                <ListItemText>
                  <span>{e}</span>
                </ListItemText>
              </ListItem>
            </List>
          </CustomMenuItem>
        ))}
      </ul>
    </Wrapper>
  );
};
