import { Component } from "react";
import "./Footer.scss";
import { Box, Grid, Typography, Button } from '@mui/material';

export class Footer extends Component {
  render() {
    return (
        <Box sx={{ bgcolor: '#f5f5f5', py: 1 }}>
        <Grid container justifyContent="space-around" alignItems="center">
          <Grid item>
            <Button variant="text" sx={{ '&:hover': { bgcolor: 'transparent' }, color: 'black'}} disableRipple >
              Home
            </Button>
            <Button variant="text" sx={{ '&:hover': { bgcolor: 'transparent' }, color: 'black'}} disableRipple >
              Service
            </Button>
            <Button variant="text" sx={{ '&:hover': { bgcolor: 'transparent' }, color: 'black'}} disableRipple >
              About Us
            </Button>
            <Button variant="text" sx={{ '&:hover': { bgcolor: 'transparent' }, color: 'black'}} disableRipple >
              Contact Us
            </Button>
          </Grid>
          <Grid item sx={{ textAlign: 'right' }}>
            <Typography variant="h5" sx={{textAlign: 'left'}}>FCM</Typography>
            <Typography variant="body2" sx={{textAlign: 'left'}}>
                2023 © FCM <br/>All rights reserved.
            </Typography>
          </Grid>
        </Grid>
      </Box>
    );
  }
}
