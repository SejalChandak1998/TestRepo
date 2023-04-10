import styled from "@emotion/styled";
import { Box, ListItemText } from "@mui/material";

export const Wrapper = styled(Box)`
  height: 100%;
  background-color: "#fff";
  ul {
    padding: 15px;
    display: flex;
    flex-direction: column;
    gap: 5px;

    li {
      a {
        padding: 18px 16px;
        display: flex;
        align-items: center;
        border-radius: 5px;
        font-size: 14px;
        color: inherit;
        cursor: pointer;
        border-radius: 10px;

        svg {
          margin-right: 12px;
        }

        &:hover,
        &.active:not([data-submenu="true"]) {
          background-color: "#2064B6";
          color: "#fff";

          svg path {
            fill: "#fff";
          }
        }

        &.active:not([data-submenu="true"]) {
          font-weight: 500;
        }

        &[data-submenu="true"]::after {
          content: "▲";
          display: block;
          transform: rotate(90deg);
          position: relative;
          left: 40%;
          color: #888;
        }

        &.active + ul {
          display: block;
        }
      }

      ul {
        display: none;
        padding-right: 0;

        li {
          width: 100%;
        }
      }
    }
  }
`;

export const CustomMenuItem = styled(ListItemText)`
  :hover {
    background: #f4f4f4;
  }
  cursor: pointer;
`;
