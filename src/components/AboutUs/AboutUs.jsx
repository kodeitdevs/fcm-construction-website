import { Component } from "react";
import { Grid, Typography, Box, Divider, Avatar, Stack  } from "@mui/material";

export class AboutUs extends Component {
  render() {
    return (
      <Grid container justifyContent="space-around" alignItems="center" flexDirection="column">
        <Typography variant="h2" sx={{ fontWeight: "bold", mt: 4 }}> About Us</Typography>
        <Typography variant="p" sx={{ mt: 3, mx: 70 }}>
          Get in touch with <b>FCM Trading & Services</b> today and take
          advantage of the groundbreaking solutions we offer for home services.
          Our optimization services provide a host of advantages, such as
          increased productivity, cost reductions, and outstanding project
          results. Let us help you attain your home service objectives with our
          experienced team of professionals and inventive approach to
          construction management.
        </Typography>
        <Box sx={{ mb: 3 }}>
          <img src="assets/about-us-p2.png"></img>
        </Box>

        <Typography variant="h4">Mission</Typography>
        <Typography variant="p" sx={{ mt: 3, mb: 6, mx: 70 }}>
          At <b>FCM Trading & Services</b>, we specialize in home services that
          guarantee top-notch quality, safety, sustainability, and customer
          satisfaction.
        </Typography>

        <Typography variant="h4">Vision</Typography>
        <Typography variant="p" sx={{ mt: 3, mx: 70 }}>
          Acknowledged as a company with remarkable skillfulness, reliability,
          and dedication towards forming lasting, proficient, and budget
          friendly services that fulfill the varying demands of our clients &
          communities. We seek to accomplish this goal by means of continual
          progress, innovation, and investing in people, systems & tech.
        </Typography>
        <Divider variant="middle" />
        <Grid sx={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
          <Typography variant="h3" sx={{width: 295, height: 310, textAlign: "left", fontWeight: "bold"}}>
            Let's start working more efficiently today!
          </Typography>
          <Box sx={{ mr: -35 }}>
            <img
              style={{ width: 632, height: 709 }}
              src="assets/about-us-p3.png"
            ></img>
          </Box>
        </Grid>

        <Typography variant="h4" sx={{ fontWeight: "bold" }}>
          Team
        </Typography>
        <Typography variant="subtitle1" sx={{mb: 8}}>
          Meet the people behind our magical product
        </Typography>
        <Stack direction="column" spacing={10} sx={{mb: 15}}>
          <Grid container>
            <Grid sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mr: 10 }}>
              <Avatar alt="Remy Sharp" src="assets/avatar.jpg" sx={{ width: 160, height: 160, mb: 2 }} />
              <Typography variant="h6" sx={{ fontWeight: 'bold' }}>Florentino C. Mana-ay</Typography>
              <Typography variant="subtitle1">CEO</Typography>
            </Grid>
            <Grid sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mr: 10 }}>
              <Avatar alt="Remy Sharp" src="assets/avatar.jpg" sx={{ width: 160, height: 160, mb: 2 }} />
              <Typography variant="h6" sx={{ fontWeight: 'bold' }}>Florentino C. Mana-ay</Typography>
              <Typography variant="subtitle1">CEO</Typography>
            </Grid>
            <Grid sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mr: 10 }}>
              <Avatar alt="Remy Sharp" src="assets/avatar.jpg" sx={{ width: 160, height: 160, mb: 2 }} />
              <Typography variant="h6" sx={{ fontWeight: 'bold' }}>Florentino C. Mana-ay</Typography>
              <Typography variant="subtitle1">CEO</Typography>
            </Grid>
            <Grid sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mr: 10 }}>
              <Avatar alt="Remy Sharp" src="assets/avatar.jpg" sx={{ width: 160, height: 160, mb: 2 }} />
              <Typography variant="h6" sx={{ fontWeight: 'bold' }}>Florentino C. Mana-ay</Typography>
              <Typography variant="subtitle1">CEO</Typography>
            </Grid>
          </Grid>
          <Grid container sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
            <Grid sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mr: 10 }}>
              <Avatar alt="Remy Sharp" src="assets/avatar.jpg" sx={{ width: 160, height: 160, mb: 2 }} />
              <Typography variant="h6" sx={{ fontWeight: 'bold' }}>Florentino C. Mana-ay</Typography>
              <Typography variant="subtitle1">CEO</Typography>
            </Grid>
            <Grid sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mr: 10 }}>
              <Avatar alt="Remy Sharp" src="assets/avatar.jpg" sx={{ width: 160, height: 160, mb: 2 }} />
              <Typography variant="h6" sx={{ fontWeight: 'bold' }}>Florentino C. Mana-ay</Typography>
              <Typography variant="subtitle1">CEO</Typography>
            </Grid>
            <Grid sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mr: 10 }}>
              <Avatar alt="Remy Sharp" src="assets/avatar.jpg" sx={{ width: 160, height: 160, mb: 2 }} />
              <Typography variant="h6" sx={{ fontWeight: 'bold' }}>Florentino C. Mana-ay</Typography>
              <Typography variant="subtitle1">CEO</Typography>
            </Grid>
          </Grid>
        </Stack>
      </Grid>
    );
  }
}
