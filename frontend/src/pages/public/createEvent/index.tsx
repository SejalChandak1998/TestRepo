import {
  Button,
  FormControl,
  FormLabel,
  TextField,
  Typography,
} from "@mui/material";
import { DateField, LocalizationProvider } from "@mui/x-date-pickers";
import dayjs, { Dayjs } from "dayjs";
import { useState } from "react";
import { LoginForm } from "./index.style";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { FetchUtils } from "../../../utils/fetchUtils";
import axios from "axios";
import { toast } from "react-toastify";

export function CreateEvent() {
  const [formPayload, setformPayload] = useState({
    event_name: "",
    event_location: "",
    event_description: "",
    event_longDescription: "",
  });

  const [dateValue, setDateValue] = useState<Dayjs | null>(dayjs("2022-04-17"));

  const handleFormChange = (
    event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    const {
      target: { name, value },
    } = event;

    setformPayload({
      ...formPayload,
      [name]: value,
    });
  };

  async function handleOnSubmit() {
    try {
      const event = await FetchUtils.postRequest("/events", {
        ...formPayload,
        event_date: dateValue?.toString(),
      });
    } catch (err) {
      console.log("err", err);
    }

    axios({
      method: "POST",
      url: "https://formspree.io/f/xgebraoq",
      data: {
        ...formPayload,
        message: `Event Created for the date ${dateValue?.toString()} title : ${
          formPayload.event_name
        } for the location ${formPayload.event_location}`,
      },
    })
      .then((response) => {
        toast("Created New Event");
      })
      .catch((error) => {
        console.log("error", error);
      });
  }

  return (
    <>
      <LoginForm item>
        <div>
          <Typography fontWeight={900} fontSize="2rem">
            Create New Event
          </Typography>
          <br />
          <form>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <FormControl fullWidth>
                <FormLabel htmlFor="email">Event Name</FormLabel>
                <TextField
                  size="small"
                  required
                  fullWidth
                  id="event_name"
                  name="event_name"
                  autoComplete="event_name"
                  value={formPayload.event_name}
                  onChange={handleFormChange}
                />
              </FormControl>
              <FormControl fullWidth>
                <FormLabel htmlFor="email">Event Location</FormLabel>
                <TextField
                  size="small"
                  required
                  fullWidth
                  id="event_location"
                  name="event_location"
                  autoComplete="event_location"
                  value={formPayload.event_location}
                  onChange={handleFormChange}
                />
              </FormControl>
              <FormControl fullWidth>
                <FormLabel htmlFor="email">Short Description</FormLabel>
                <TextField
                  size="small"
                  required
                  fullWidth
                  id="event_description"
                  name="event_description"
                  autoComplete="event_description"
                  value={formPayload.event_description}
                  onChange={handleFormChange}
                />
              </FormControl>
              <FormControl fullWidth>
                <FormLabel htmlFor="email">Brief Description</FormLabel>
                <TextField
                  size="small"
                  required
                  fullWidth
                  id="event_longDescription"
                  name="event_longDescription"
                  autoComplete="event_longDescription"
                  value={formPayload.event_longDescription}
                  onChange={handleFormChange}
                />
              </FormControl>
              <FormControl fullWidth>
                <FormLabel htmlFor="email">Event Date</FormLabel>
                <DateField
                  required
                  fullWidth
                  id="event_date"
                  name="event_date"
                  value={dateValue}
                  onChange={(newDate) => setDateValue(newDate)}
                />
              </FormControl>
              {/* <FormControl fullWidth>
              <ReactQuill theme="snow" value={value} onChange={setValue} />;
            </FormControl> */}
              <br />
              <br />
              <br />
              <Button variant="outlined" onClick={handleOnSubmit}>
                SUBMIT FORM
              </Button>
            </LocalizationProvider>
          </form>
        </div>
      </LoginForm>
    </>
  );
}
