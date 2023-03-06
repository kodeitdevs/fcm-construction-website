import { Component } from "react";
import { Grid, Typography } from '@mui/material';

export class AboutUs extends Component {
  render() {
    return (
      <Grid container justifyContent="space-around" alignItems="center">
        <Typography variant="h2">
            About Us
        </Typography>
      </Grid>
    );
  }
}
