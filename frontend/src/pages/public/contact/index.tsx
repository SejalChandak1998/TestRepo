import {
  Button,
  FormControl,
  FormLabel,
  TextField,
  Typography,
} from "@mui/material";
import { useState } from "react";
import { LoginForm } from "./index.style";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import axios from "axios";

export function Contact() {
  const [formPayload, setformPayload] = useState({
    email: "",
  });
  const [value, setValue] = useState("");
  const [isSubmittedSuccesfully, setSubmittedSuccessfully] = useState(false);
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

  function handleServerResponse(mgs: string) {
    setformPayload({
      email: "",
    });
    setValue("");
    toast("Form Submitted Successfully ");
  }
  const handleOnSubmit = (e: any) => {
    e.preventDefault();
    axios({
      method: "POST",
      url: "https://formspree.io/f/xnqyoeew",
      data: { ...formPayload, message: value },
    })
      .then((response) => {
        handleServerResponse("Thank you, your message has been submitted.");
      })
      .catch((error) => {
        console.log("error", error);
      });
  };

  return (
    <>
      <LoginForm item xs={6}>
        <div>
          <Typography fontWeight={900} fontSize="2rem">
            Contact us Form
          </Typography>
          <br />
          <form>
            <FormControl fullWidth>
              <FormLabel htmlFor="email">Email</FormLabel>
              <TextField
                size="small"
                required
                fullWidth
                id="email"
                name="email"
                autoComplete="email"
                value={formPayload.email}
                onChange={handleFormChange}
              />
            </FormControl>
            <FormControl fullWidth>
              <ReactQuill theme="snow" value={value} onChange={setValue} />;
            </FormControl>
            <br />
            <br />
            <br />
            <Button variant="outlined" onClick={handleOnSubmit}>
              SUBMIT FORM
            </Button>
          </form>
        </div>
      </LoginForm>
    </>
  );
}
