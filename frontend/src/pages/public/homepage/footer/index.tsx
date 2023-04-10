import styled from "@emotion/styled";
import { Grid, Typography } from "@mui/material";

const grid1 = [
  { label: "Connect Now", link: "" },
  { label: "Mobile Tracking App", link: "" },
  { label: "Checkin App", link: "" },
  { label: "Event Registration Software", link: "" },
  { label: "FAQs", link: "" },
  { label: "Sitemaps", link: "" },
];

export function HomepageFooter() {
  return (
    <>
      <FooterWrapper>
        <div style={{ margin: "10rem 20rem " }}>
          <Grid container spacing={4}>
            <Grid item xs={12} sm={6} md={3}>
            <a href="http://localhost:5173/createEvent">
              <Typography
                lineHeight={2}
                fontSize="1.2rem"
                fontWeight={800}
              >               
                Use Eventify
              </Typography>
              </a>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
            <a href="http://localhost:5173/favorites">
              <Typography
                lineHeight={2}
                fontSize="1.2rem"
                fontWeight={800}
              >
                Plan Events
              </Typography>
              </a>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <a href="http://localhost:5173">
              <Typography
                lineHeight={2}
                fontSize="1.2rem"
                fontWeight={800}
              >
                Find Events
              </Typography>
              </a>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
            <a href="http://localhost:5173/contact">
              <Typography
                lineHeight={2}
                fontSize="1.2rem"
                fontWeight={800}
              >
                Connect now
              </Typography>
              </a>

            </Grid>
          </Grid>
          <br />
          <FootNote>
            <FooterLinks>
            <span> <a href="#about">About</a> </span>
            <span> <a href="#blog">Blog</a> </span>
            <span> <a href="#help">Help</a> </span>
            <span> <a href="#careers">Careers</a> </span>
            <span> <a href="#investors">Investors</a> </span>
            <a href="#security">Security</a>
            <a href="#developers">Developers</a>
            </FooterLinks>
          </FootNote>
        </div>
        
      </FooterWrapper>
      <span style={{ marginRight: 30 }}>@ 2023 copyright</span>
    </>
  );
}

const FooterWrapper = styled("div")`
  background: black ;
  color: white;
  height: 200px;
  margin: auto;

  a {
    color: white !important;
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  }
`;

const FootNote = styled("div")`
  margin: 4rem 8rem;
  color: white;
`;

const FooterLinks = styled("span")`
  display: flex;
  gap: 2rem;
  justify-content: center;
`;