import { Paper, Grid, Box, Typography, Stepper, Step, StepLabel, Button } from "@mui/material";
import React, { useState } from "react";
import CloseIcon from '@mui/icons-material/Close';

function Schedule() {
  const [open, setOpenModal] = useState(false);
  const [activeStep, setActiveStep] = React.useState(0);

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  const steps = [
    'Select a Date & Time',
    'Fill up Information',
    'Verify',
    'Done'
  ];

  const nextStep = () => {
    if(activeStep < 3) {
        setActiveStep((currentStep) => currentStep + 1)
    }
  }

  const prevStep = () => {
    if(activeStep !== 0) {
        setActiveStep((currentStep) => currentStep - 1)
    }
  }

  return (
    <Grid container justifyContent="center">
      <Paper elevation={3} sx={{ minWidth: "80%", minHeight: "50%" }}>
        <Grid container justifyContent="flex-end" sx={{p: 2}}>
            <CloseIcon onClick={handleCloseModal}/>
        </Grid>
        <Typography variant="h3" sx={{display: 'flex', justifyContent: 'center', mb: 5}}>Schedule a Consultation</Typography>
        <Box sx={{width: '100%'}}>
            <Stepper activeStep={activeStep} alternativeLabel>
                {steps.map((label) => (
                    <Step key={label}>
                        <StepLabel>{label}</StepLabel>
                    </Step>
                ))}
            </Stepper>
        </Box>
        <h1>{activeStep}</h1>
        <Grid container justifyContent='end'>
            <Button onClick={() => prevStep()}>Back</Button>          
            <Button onClick={() => nextStep()}>Next</Button>
        </Grid>
      </Paper>
    </Grid>
  );
}

export default Schedule;
