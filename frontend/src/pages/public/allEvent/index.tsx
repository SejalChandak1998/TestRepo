import {
  DeleteForever,
  Edit,
  EditOffTwoTone,
  EditTwoTone,
} from "@mui/icons-material";
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { cloneDeep } from "lodash";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { FetchUtils } from "../../../utils/fetchUtils";

export function AllEvent() {
  const [events, setEvents] = useState<any>();
  const navigate = useNavigate();
  useEffect(() => {
    async function getEvent() {
      const result = await FetchUtils.getRequest(`/events`);
      setEvents(result);
      return result;
    }

    getEvent();
  }, []);

  return (
    <>
      <div style={{ marginTop: "2rem", width: "60rem", margin: "auto" }}>
        <TableContainer component={Paper}>
          <Table aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Event Name</TableCell>
                <TableCell>Location</TableCell>
                <TableCell>Date</TableCell>
                <TableCell>Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {events?.map((event: any) => (
                <TableRow key={event._id}>
                  <TableCell component="th" scope="row">
                    {event.event_name}
                  </TableCell>
                  <TableCell>{event.event_location}</TableCell>
                  <TableCell>{event.event_date}</TableCell>
                  <TableCell>
                    <DeleteForever
                      style={{ cursor: "pointer" }}
                      onClick={async () => {
                        const result = await FetchUtils.deleteRequest(
                          `/events?id=${event._id}`
                        );
                        if (result.status == 200) {
                          toast("Event Deleted Successfully");
                          const finalEvents = events.filter(
                            (x: any) => x._id !== event._id
                          );
                          setEvents(finalEvents);
                        }
                      }}
                    />

                    <Edit
                      style={{ cursor: "pointer" }}
                      onClick={() => {
                        navigate(`/editevent/${event._id}`);
                      }}
                    />
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
