import * as React from "react";
import { Box, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

// Define the styles for the "About Us" section
const AboutUsBox = styled(Box)({
  backgroundColor: "#f5f5f5",
  padding: "40px",
  textAlign: "center",
});

// Define the component for the "About Us" section
const AboutUs = () => {
  return (
    <AboutUsBox>
      <Typography variant="h3" gutterBottom>
        About Us
      </Typography>
      <Typography variant="body1" gutterBottom>
      Welcome to Eventify, the ultimate platform for creating and promoting unforgettable events! Whether you're planning a business conference, a music festival, or a charity fundraiser, we've got you covered.
      With Eventify, you can create a stunning event page that captures the essence of your brand or theme. Our easy-to-use interface lets you customize every aspect of your event, from the ticket prices and event schedule to the promotional images and videos.
      But that's just the beginning. Eventify also provides powerful marketing tools to help you reach your target audience and boost your ticket sales. With our social media sharing, email campaigns, and targeted advertising options, you can ensure that your event gets the attention it deserves. 
      And the best part? Eventify is designed to be user-friendly for both organizers and attendees. Our platform makes it easy for attendees to discover and purchase tickets to events that interest them, and to stay informed with event updates and reminders.
      So why wait? Sign up for Eventify today and start creating events that people will remember for years to come.
      </Typography>
    </AboutUsBox>
  );
};

export default AboutUs;