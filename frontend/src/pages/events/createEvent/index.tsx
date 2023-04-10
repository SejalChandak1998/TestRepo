import {
  Button,
  CircularProgress,
  FormControl,
  InputLabel,
  makeStyles,
  TextField,
} from "@mui/material";
import * as Yup from "yup";
import { Formik } from "formik";
import DatePicker from "react-date-picker";
import { useState } from "react";

const validationSchema = Yup.object().shape({
  event_name: Yup.string().required("Event name is required"),
  event_location: Yup.string().required("Event location is required"),
  event_date: Yup.date().required("Event date is required"),
});

const initialValues = {
  event_name: "",
  event_location: "",
  event_date: null,
};

const EventForm = () => {
  const [value, onChange] = useState(new Date());

  const [eventName, setEventName] = useState("");
  const [formValues, setFormValues] = useState(initialValues);
  const handleSave = (values: any) => {
    console.log(values);
    // Handle form submission here
  };

  return (
    <div>
      <InputLabel>Create Event</InputLabel>
      <br />
      <br />
      <br />
      <br />
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSave}
      >
        {({ values, errors, touched, handleSubmit, setFieldValue }) => (
          <FormControl size="small" sx={{ width: 230 }}>
            <TextField
              id="outlined-basic"
              label="Event Name"
              onChange={(e) => {
                console.log("e", e.target.value);
                setFieldValue(values.event_name, e.target.value);
                setEventName(e.target.value);
              }}
              variant="outlined"
              value={values.event_name}
            />
            <br />
            <br />
            <TextField
              id="outlined-basic"
              label="Event Location"
              variant="outlined"
              value={values.event_location}
            />
            <br />
            <br />

            <DatePicker onChange={() => onChange} value={values.event_date} />

            <br />
            <br />

            <Button
              title="Submit"
              variant="outlined"
              onClick={() => handleSubmit()}
            >
              Submit
            </Button>
          </FormControl>
        )}
      </Formik>
    </div>
  );
};

export { EventForm };
