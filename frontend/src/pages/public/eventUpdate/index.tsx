import { Button, FormControl, FormLabel, TextField } from "@mui/material";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { FetchUtils } from "../../../utils/fetchUtils";

export function EditEventUpdate() {
  const { id } = useParams();

  const [event, setEvent] = useState();

  const [formPayload, setFormPayload] = useState({
    event_name: "",
    event_location: "",
    event_date: "",
    event_description: "",
    event_longDescription: "",
  });

  async function getEvent(id: string) {
    const result: any = await FetchUtils.getRequest(`/events/${id}`);
    console.log("result 2", result);
    setFormPayload({
      event_date: result.event_date,
      event_location: result.event_location,
      event_name: result.event_name,
      event_description: result.event_description,
      event_longDescription: result.event_longDescription,
    });
    return result;
  }

  useEffect(() => {
    getEvent(id ?? "");
  }, [id]);

  const handleFormChange = (
    event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    const {
      target: { name, value },
    } = event;

    setFormPayload({
      ...formPayload,
      [name]: value,
    });
  };

  const handleOnSubmit = async (e: any) => {
    e.preventDefault();
    const result = await FetchUtils.patchRequest(`/events/${id}`, {
      ...formPayload,
    });

    if (result.status === 200) {
      await getEvent(id ?? "");
      toast("Event Editted Successfully");
    }
  };

  return (
    <div style={{ width: "30rem", margin: "auto", marginTop: "4rem" }}>
      <form>
        <FormControl fullWidth>
          <FormLabel htmlFor="email">Edit Event </FormLabel>
          <br />
          <br />
          Title
          <TextField
            size="small"
            required
            fullWidth
            id="event_name"
            name="event_name"
            autoComplete="email"
            value={formPayload.event_name}
            onChange={handleFormChange}
          />
          <br />
          Location
          <TextField
            size="small"
            required
            fullWidth
            id="event_location"
            name="event_location"
            // autoComplete="email"
            value={formPayload.event_location}
            onChange={handleFormChange}
          />
          <br />
          Date
          <TextField
            size="small"
            required
            fullWidth
            id="event_date"
            name="event_date"
            autoComplete="email"
            value={formPayload.event_date}
            onChange={handleFormChange}
          />
          <br />
          Short Description
          <TextField
            size="small"
            required
            fullWidth
            id="event_description"
            name="event_description"
            autoComplete="email"
            value={formPayload.event_description}
            onChange={handleFormChange}
          />
          <br />
          Long Description
          <TextField
            size="small"
            required
            fullWidth
            id="event_longDescription"
            name="event_longDescription"
            autoComplete="email"
            value={formPayload.event_longDescription}
            onChange={handleFormChange}
          />
        </FormControl>
        <br />
        <br />
        <br />
        <Button variant="outlined" onClick={handleOnSubmit}>
          SUBMIT FORM
        </Button>
      </form>
    </div>
  );
}
