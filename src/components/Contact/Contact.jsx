import { Component } from "react";
import { Grid, Typography, Box, TextField, FormControl, Button, Paper } from '@mui/material';
import SendIcon from "@mui/icons-material/Send";
import HomeIcon from '@mui/icons-material/Home';
import PhoneIcon from '@mui/icons-material/Phone';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';

export class Contact extends Component {
  render() {
    return (
      <Grid sx={{mb: 5}}>
        <Grid container flexDirection="row" justifyContent="space-evenly" alignItems="center" sx={{mb: 10}}>
          <Box component="img" src="assets/contact-us.png"></Box>
          <Grid>
            <Typography variant="h3">Contact Us</Typography>
            <Typography variant="subtitle1" sx={{mb: 3}}>Construct your future with us. Feel free to get in touch.</Typography>
            <Grid container direction="column" justifyContent="space-evenly" alignItems="stretch">
              <FormControl variant="standard">
                <TextField fullWidth label="Full Name" variant="outlined" sx={{mb: 3, backgroundColor: '#FFFFFF'}}/>
                <TextField fullWidth label="Email" variant="outlined" sx={{mb: 3, backgroundColor: '#FFFFFF'}}/>
                <TextField fullWidth label="Contact No." variant="outlined" sx={{mb: 3, backgroundColor: '#FFFFFF'}}/>
                <TextField rows={4} multiline label="Message" variant="outlined" sx={{mb: 3, backgroundColor: '#FFFFFF'}}/>
              </FormControl>
              <Button variant="contained" className="button" sx={{ borderRadius: 2, backgroundColor: "green" }}>
                <SendIcon sx={{ mr: 1 }} /> Send message
              </Button>
            </Grid>
          </Grid>
        </Grid>
        <Grid container justifyContent="space-evenly">
          <Paper elevation={8} sx={{width: '345px', height: '156px', display: 'flex', alignItems: 'center', justifyContent:'space-evenly', borderRadius: 3, padding: 1}}>
            <HomeIcon sx={{ mr: 1, color: "green", height: '76px', width: '76px'}}/>
            <Typography sx={{fontWeight:'bold'}}>Simborio, Tayud, Liloan, Cebu, Philippines</Typography>
          </Paper>
          <Paper elevation={8} sx={{width: '345px', height: '156px', display: 'flex', alignItems: 'center', justifyContent:'space-evenly', borderRadius: 3, padding: 1}}>
            <PhoneIcon sx={{ mr: 1, color: "green", height: '76px', width: '76px'}}/>
            <Typography sx={{fontWeight:'bold'}}>(032) 516-2922<br/>(032) 517-4428<br/>+639239480967</Typography>
          </Paper>
          <Paper elevation={8} sx={{width: '345px', height: '156px', display: 'flex', alignItems: 'center', justifyContent:'space-evenly', borderRadius: 3, padding: 1}}>
            <AlternateEmailIcon sx={{ mr: 1, color: "green", height: '76px', width: '76px'}}/>
            <Typography sx={{fontWeight:'bold'}}>fcmtradingservices@gmail.com</Typography>
          </Paper>
        </Grid>
      </Grid>
    );
  }
}
