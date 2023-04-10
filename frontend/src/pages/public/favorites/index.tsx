// @ts-nocheck
import { DeleteForeverOutlined } from "@mui/icons-material";
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
import { get } from "lodash";
import { useEffect, useState } from "react";
import { IEvent } from "../../../constants/interface";
import { useAppSelector } from "../../../redux/store";
import { getInfoFromToken } from "../../../utils/infoFromToken";

export function Favorites() {
  const [filteredEventsState, setFilteredEventsState] = useState<IEvent[]>(
    [] as IEvent[]
  );
  const userInfo = getInfoFromToken();

  let clientInfo: { id: string } | null = null;

  if (userInfo) clientInfo = userInfo.clientInfo;

  const eventIdsFromLocalStorage = JSON.parse(
    localStorage.getItem(get(clientInfo, "id", ""))
  ) || [""];

  const { eventList } = useAppSelector((state) => state.event);

  useEffect(() => {
    const filteredEvents = eventList.filter((event) =>
      eventIdsFromLocalStorage.includes(event._id)
    );

    setFilteredEventsState(filteredEvents);
  }, []);

  function removeFromLocalStorageArray(key: string, value: string) {
    const storedValue = localStorage.getItem(key);
    if (!storedValue) {
      return;
    }
    const array = JSON.parse(storedValue);
    const updatedArray = array.filter((item: string) => item !== value);
    localStorage.setItem(key, JSON.stringify(updatedArray));
  }

  return (
    <>
      <Typography fontSize="2rem" fontWeight="900" textAlign="center" mt={5}>
        Favorites
      </Typography>

      <div style={{ margin: "auto", width: "70%", marginTop: "3rem" }}>
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Event ID</TableCell>
                <TableCell>Event Name</TableCell>
                <TableCell>Event Location</TableCell>
                <TableCell>Event Date</TableCell>
                <TableCell>Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {filteredEventsState.map((event) => (
                <TableRow key={event._id}>
                  <TableCell>{event._id}</TableCell>
                  <TableCell>{event.event_name}</TableCell>
                  <TableCell>{event.event_location}</TableCell>
                  <TableCell>{event.event_date}</TableCell>
                  <TableCell
                    style={{ cursor: "pointer" }}
                    onClick={() => {
                      removeFromLocalStorageArray(clientInfo.id, event._id);
                      const eventIdsFromLocalStorage = JSON.parse(
                        localStorage.getItem(clientInfo.id) ?? ""
                      );
                      const filteredEvents = eventList.filter((event) =>
                        eventIdsFromLocalStorage.includes(event._id)
                      );
                      setFilteredEventsState(filteredEvents);
                    }}
                  >
                    <DeleteForeverOutlined />
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </>
  );
}
