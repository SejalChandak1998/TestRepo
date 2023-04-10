// @ts-nocheck
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import { useEffect, useState } from "react";
import { FetchUtils } from "../../../utils/fetchUtils";
import { getInfoFromToken } from "../../../utils/infoFromToken";

export function MyEvents() {
  const userInfo = getInfoFromToken();
  let clientInfo = null;

  if (userInfo) {
    clientInfo = userInfo.clientInfo;
  }

  const [events, setEvents] = useState();
  useEffect(() => {
    async function getAllEventsForUser() {
      const events = await FetchUtils.getRequest(
        `user/events/${clientInfo.id}`
      );
      setEvents(events.data);
    }
    getAllEventsForUser();
  }, []);
  return (
    <>
      <Typography
        fontWeight={900}
        fontSize="2rem"
        textAlign={"center"}
        mt="2rem"
      >
        My Registered Events
      </Typography>
      <div style={{ width: "70%", margin: "auto", marginTop: "5rem" }}>
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Event Name</TableCell>
                <TableCell>Event Location</TableCell>
                <TableCell>Event Date</TableCell>
                <TableCell>Created At</TableCell>
                <TableCell>Updated At</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {events?.map((event) => (
                <TableRow key={event.id}>
                  <TableCell>{event.event_name}</TableCell>
                  <TableCell>{event.event_location}</TableCell>
                  <TableCell>{event.event_date}</TableCell>
                  <TableCell>{event.createdAt}</TableCell>
                  <TableCell>{event.updatedAt}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </>
  );
}
