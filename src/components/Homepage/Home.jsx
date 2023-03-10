import { Component } from "react";
import Fade from "react-reveal/Fade";
import "./Home.scss";
import {
  CardContent,
  Card,
  Typography,
  Button,
  Paper,
  Rating,
  Box,
  TextField,
  Grid
} from "@mui/material";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import SendIcon from "@mui/icons-material/Send";

export class Home extends Component {
  render() {
    return (
      <>
        <div className="home-container">
          <Fade top distance={'80%'} duration={2500}>
            <div className="home-first-content">
              <div className="home-description">
                <h1>Professional Help at a Reasonable Price.</h1>
                <p>
                  FCM Trading & Services is an established construction company
                  offering reasonably priced services including roofing setup,
                  tile work, wall painting and more. Furthermore, they supply a
                  trading system for patrons to obtain construction materials at
                  competitive prices. The organization is dedicated to
                  delivering superior services and helping customers meet their
                  building ambitions within their budget limit.
                </p>
                <div className="header-schedule-btn">
                  <Button
                    variant="contained"
                    className="button-test"
                    sx={{ borderRadius: 3 }}
                  >
                    <CalendarMonthIcon sx={{ mr: 1 }} />
                    Consult us now
                  </Button>
                </div>
              </div>
              <div>
                <img src="assets/homepage-main.jpg" />
              </div>
            </div>
          </Fade>
          <Fade top distance={'80%'} duration={2500}>
            <div className="home-partners">
              <h2>Trusted by individuals and teams in Cebu</h2>
              <img src="assets/jollibee-logo.png" />
              <img src="assets/mendero-logo.png" />
            </div>
          </Fade>
          <Fade top duration={2500}>
            <div className="home-testimonials">
              <h1>Testimonials</h1>
              <p>People love what we do and we want to let you know</p>
              <div className="card-testimonials" sx={{ display: "flex" }}>
                <Card sx={{ minWidth: 275, mr: 20 }}>
                  <CardContent>
                    <Typography
                      variant="h6"
                      sx={{ height: 100, width: 344, fontWeight: "bold" }}
                      color="text.primary"
                    >
                      "Since implementing Lando our business has seen
                      significant growth."
                    </Typography>
                    <Rating
                      name="size-medium"
                      sx={{ m: 3, color: "green" }}
                      defaultValue={4}
                      readOnly
                    />
                    <Typography variant="body2" sx={{ fontWeight: "bold" }}>
                      Jack Sibre
                    </Typography>
                    <Typography variant="body2">
                      Lead Manager, Growio
                    </Typography>
                  </CardContent>
                </Card>
                <Card sx={{ minWidth: 275, mr: 20 }}>
                  <CardContent>
                    <Typography
                      variant="h6"
                      sx={{ height: 100, width: 344, fontWeight: "bold" }}
                      color="text.primary"
                    >
                      "I recommend Lando to any business looking for
                      improvement."
                    </Typography>
                    <Rating
                      name="size-medium"
                      sx={{ m: 3, color: "green" }}
                      defaultValue={5}
                      readOnly
                    />
                    <Typography variant="body2" sx={{ fontWeight: "bold" }}>
                      Adele Mouse
                    </Typography>
                    <Typography variant="body2">
                      Product Manager, Mousio
                    </Typography>
                  </CardContent>
                </Card>
                <Card sx={{ minWidth: 275 }}>
                  <CardContent>
                    <Typography
                      variant="h6"
                      sx={{ height: 100, width: 344, fontWeight: "bold" }}
                      color="text.primary"
                    >
                      "I can't imagine running our company without it."
                    </Typography>
                    <Rating
                      name="size-medium"
                      sx={{ m: 3, color: "green" }}
                      defaultValue={3}
                      readOnly
                    />
                    <Typography variant="body2" sx={{ fontWeight: "bold" }}>
                      Ben Clock
                    </Typography>
                    <Typography variant="body2">CTO, Clockwork</Typography>
                  </CardContent>
                </Card>
              </div>
            </div>
          </Fade>
          <Fade top distance={'80%'} duration={2500}>
            <div className="home-projects" sx={{ mt: 10 }}>
              <img className="home-project-logo" src="assets/rocket.png" />
              <h1>Our Projects</h1>
              <div className="project-gallery">
                <Grid>
                  <Box component="img"sx={{height: 312, borderRadius: 16, mb: 3}} src="assets/img-1.jpg"></Box>
                  <Typography variant="h5">Jollibee Oriente</Typography>
                </Grid>
                <Grid>
                  <Box component="img"sx={{height: 312, borderRadius: 16, mb: 3}} src="assets/img-2.jpg"></Box>
                  <Typography variant="h5">Jollibee Carcar</Typography>
                </Grid>
                <Grid>
                  <Box component="img"sx={{height: 312, borderRadius: 16, mb: 3}} src="assets/img-3.jpg"></Box>
                  <Typography variant="h5">Jollibee Jones</Typography>
                </Grid>
                <Grid>
                  <Box component="img"sx={{height: 312, borderRadius: 16, mb: 3}} src="assets/img-4.jpg"></Box>
                  <Typography variant="h5">Mendero Medical Center</Typography>
                </Grid>
              </div>
            </div>
          </Fade>
          <Fade top distance={'80%'} duration={2500}>
            <div className="home-contact">
              <Box
                sx={{
                  display: "flex",
                  flexWrap: "wrap",
                  "& > :not(style)": {
                    m: 1,
                    width: 1218,
                    height: 580,
                    borderRadius: 5,
                  },
                }}
              >
                <Paper elevation={3}>
                  <h2>Connect with us</h2>
                  <h1>Send us a message</h1>
                  <div className="contact-form">
                    <div class="contact-name">
                      <TextField
                        id="outlined-basic"
                        label="First Name"
                        variant="outlined"
                        sx={{ width: "50%", mr: 3 }}
                      />
                      <TextField
                        id="outlined-basic"
                        label="Last Name"
                        variant="outlined"
                        sx={{ width: "50%" }}
                      />
                    </div>
                    <div>
                      <TextField
                        id="outlined-basic"
                        label="Subject"
                        variant="outlined"
                        sx={{ width: "100%", mt: 2 }}
                      />
                    </div>
                    <div>
                      <TextField
                        id="outlined-multiline-static"
                        label="Message"
                        placeholder="Your message here..."
                        multiline
                        rows={4}
                        sx={{ width: "100%", mt: 2 }}
                      />
                    </div>
                  </div>
                  <Button
                    variant="contained"
                    className="button-test"
                    sx={{ borderRadius: 2, backgroundColor: "green" }}
                  >
                    <SendIcon sx={{ mr: 1 }} />
                    Send message
                  </Button>
                </Paper>
              </Box>
            </div>
          </Fade>
        </div>
      </>
    );
  }
}
