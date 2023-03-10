import { Component } from "react";
import { Grid, Typography, Stack, Paper, Box } from '@mui/material';
import ImagesearchRollerIcon from '@mui/icons-material/ImagesearchRoller';
import GridViewIcon from '@mui/icons-material/GridView';
import IronIcon from '@mui/icons-material/Iron';
import HouseIcon from '@mui/icons-material/House';
import ConstructionIcon from '@mui/icons-material/Construction';
import ElectricalServicesIcon from '@mui/icons-material/ElectricalServices';
import Fade from "react-reveal/Fade";


export class Services extends Component {
  render() {
    return (
      <Grid container justifyContent="space-around" alignItems="center">
        <Fade top distance={'80%'} duration={2000}>
          <Typography variant="h2">Services</Typography>
          <Typography variant="subtitle1" sx={{ mt: 3, mx: 70, mb: 5}}>FCM Trading & Services offers a broad selection of construction services, such as roof installation, tile work and wall painting. Furthermore, they have a trading platform that allows clients to source construction materials at competitive rates. With their pledge to deliver top-notch services and cost-efficient solutions, FCM Trading & Services helps customers reach their building objectives in an effective and efficient way.</Typography>
        </Fade>

        <Stack direction='row' sx={{flexWrap: 'wrap', justifyContent: 'center'}}>
          <Fade top distance={'80%'} duration={2000}>
            <Grid sx={{mr: 10}}>
              <Paper elevation={3} sx={{mb: 4}}>
                <Grid container direction='column' sx={{height: 600, width: 600, p: 2}}>
                  <Box sx={{display: 'flex', flexDirection:'row', alignItems: 'center', mb: 2}}>
                    <ImagesearchRollerIcon sx={{mr: 0.5}}/>
                    <Typography variant="h5" sx={{fontWeight: 'bold'}}>Construction</Typography>
                  </Box>
                  <Box component="img"sx={{height: 300, mb: 3}} src="assets/construction.jpeg"></Box>
                  <Typography variant="subtitle1">We offer a wide range of construction services, including <b>high-quality building materials such as cement, CHB, sand, gravel, and various lumber and wood options.</b> Our team ensures that all materials are sourced from reputable suppliers and treated with utmost care during installation. With a focus on quality, safety, and efficiency, we are committed to delivering exceptional results for your building project.</Typography>
                </Grid>
              </Paper>
              <Paper elevation={3}>
                <Grid container direction='column' sx={{height: 600, width: 600, p: 2}}>
                  <Box sx={{display: 'flex', flexDirection:'row', alignItems: 'center', mb: 2}}>
                    <GridViewIcon sx={{mr: 0.5}}/>
                    <Typography variant="h5" sx={{fontWeight: 'bold'}}>Hardware</Typography>
                  </Box>
                  <Box component="img"sx={{height: 300, mb: 3}} src="assets/hardware.jpeg"></Box>
                  <Typography variant="subtitle1">We provide a comprehensive range of hardware products, <b>including all types of tools, equipment, and power tools from trusted brands like BOSCH and MAKITA.</b> We also offer high-quality stainless sheet and bars for a variety of applications. Our goal is to provide our customers with the best hardware solutions for their needs, ensuring both quality and affordability.</Typography>
                </Grid>
              </Paper>
            </Grid>
          </Fade>

          <Fade top distance={'80%'} duration={2000}>
            <Grid sx={{mb: 4}}>
              <Paper elevation={3} sx={{mb: 4}}>
                <Grid container direction='column' sx={{height: 600, width: 600, p: 2}}>
                  <Box sx={{display: 'flex', flexDirection:'row', alignItems: 'center', mb: 2}}>
                    <IronIcon sx={{mr: 0.5}}/>
                    <Typography variant="h5" sx={{fontWeight: 'bold'}}>Iron Works</Typography>
                  </Box>
                  <Box component="img"sx={{height: 300, mb: 3}} src="assets/iron-works.jpeg"></Box>
                  <Typography variant="subtitle1">Our iron works services include the installation of steel gates, window grills, and roll-up doors. Our team is highly skilled in the fabrication and installation of these products, ensuring that they are both sturdy and visually appealing. Contact us today to learn more about our iron works services and how we can help you achieve your construction goals.</Typography>
                </Grid>
              </Paper>
              <Paper elevation={3}>
                <Grid container direction='column' sx={{height: 600, width: 600, p: 2}}>
                  <Box sx={{display: 'flex', flexDirection:'row', alignItems: 'center', mb: 2}}>
                    <HouseIcon sx={{mr: 0.5}}/>
                    <Typography variant="h5" sx={{fontWeight: 'bold'}}>Glassworks / Aluminum</Typography>
                  </Box>
                  <Box component="img"sx={{height: 300, mb: 3}} src="assets/door-glass-installation.jpeg"></Box>
                  <Typography variant="subtitle1">We offer expert <b>glassworks and aluminum construction services, including installation of sliding and swing doors, windows, screens, and jalousie products.</b> Our team is dedicated to providing high-quality solutions that are both durable and visually appealing. Contact us today to learn more about how we can bring your construction project to life.</Typography>
                </Grid>
              </Paper>
            </Grid>
          </Fade>


          <Fade top distance={'80%'} duration={2000}>
          <Grid sx={{display: 'flex'}}>
            <Paper elevation={3} sx={{mb: 4, mr: 10}}>
              <Grid container direction='column' sx={{height: 600, width: 600, p: 2}}>
                <Box sx={{display: 'flex', flexDirection:'row', alignItems: 'center', mb: 2}}>
                  <ConstructionIcon sx={{mr: 0.5}}/>
                  <Typography variant="h5" sx={{fontWeight: 'bold'}}>Industrial</Typography>
                </Box>
                <Box component="img"sx={{height: 300, mb: 3}} src="assets/industrial.jpeg"></Box>
                <Typography variant="subtitle1">We offer a wide range of industrial products and services, including various types of springs, solenoid valves, acrylic sheets, adhesives and tapes, engineering tools and equipment, safety switches, heaters, bolts and nuts, and industrial gauges. Our team is committed to delivering high-quality products that meet the specific needs of your industry. Contact us today to learn more about our services and how we can help you optimize your operations.</Typography>
              </Grid>
            </Paper>
            <Paper elevation={3}>
              <Grid container direction='column' sx={{height: 600, width: 600, p: 2}}>
                <Box sx={{display: 'flex', flexDirection:'row', alignItems: 'center', mb: 2}}>
                  <ElectricalServicesIcon sx={{mr: 0.5}}/>
                  <Typography variant="h5" sx={{fontWeight: 'bold'}}>Electrical & Plumbing</Typography>
                </Box>
                <Box component="img"sx={{height: 300, mb: 3}} src="assets/electrical.jpeg"></Box>
                <Typography variant="subtitle1">We offer a comprehensive range of electrical and plumbing solutions, including Omron sensors and relays, frequency inverters, circuit breakers, and plumbing products such as PVC and galvanized pipes and fittings. Our team is dedicated to providing high-quality solutions from trusted brands like Fuji, Siemens, Schneider, and more. Contact us today to learn how we can help you with your electrical and plumbing needs.</Typography>
              </Grid>
            </Paper>
          </Grid>
          </Fade>
        </Stack>
      </Grid>
    );
  }
}
