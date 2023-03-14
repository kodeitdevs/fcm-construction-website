import { Paper, Grid, Button, Typography } from "@mui/material";
import React, { useState } from "react";
import CloseIcon from '@mui/icons-material/Close';

function Schedule() {
  const [setOpenModal] = useState(false);
  const handleCloseModal = () => {
    setOpenModal(false);
  };

  return (
    <Grid container justifyContent="center">
      <Paper elevation={3} sx={{ minWidth: "80%", minHeight: "50%" }}>
        <Grid container justifyContent="flex-end" sx={{p: 2}}>
            <CloseIcon onClick={handleCloseModal}/>
        </Grid>
        <Typography variant="h3" sx={{display: 'flex', justifyContent: 'center'}}>Schedule a Consultation</Typography>
      </Paper>
    </Grid>
  );
}

export default Schedule;
