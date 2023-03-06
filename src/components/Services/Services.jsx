import { Component } from "react";
import { Grid, Typography } from '@mui/material';

export class Services extends Component {
  render() {
    return (
      <Grid container justifyContent="space-around" alignItems="center">
        <Typography variant="h2">
            Services
        </Typography>
      </Grid>
    );
  }
}
