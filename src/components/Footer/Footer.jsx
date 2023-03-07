import { Component } from "react";
import "./Footer.scss";
import { Box, Grid, Typography, Button } from "@mui/material";
import { NavLink } from "react-router-dom";

export class Footer extends Component {
  render() {
    return (
      <Box sx={{ bgcolor: "#f5f5f5", py: 1 }}>
        <Grid container justifyContent="space-around" alignItems="center">
          <Grid item>
            <Button
              variant="text"
              sx={{ "&:hover": { bgcolor: "transparent" }, color: "black" }}
              disableRipple
            >
              <NavLink
                to="/"
                exact
                activeClassName="active"
                style={{
                  textDecoration: "none",
                  color: "#262626",
                  fontWeight: "bold",
                }}
              >
                Home
              </NavLink>
            </Button>
            <Button
              variant="text"
              sx={{ "&:hover": { bgcolor: "transparent" }, color: "black" }}
              disableRipple
            >
              <NavLink
                to="/services"
                exact
                activeClassName="active"
                style={{
                  textDecoration: "none",
                  color: "#262626",
                  fontWeight: "bold",
                }}
              >
                Services
              </NavLink>
            </Button>
            <Button
              variant="text"
              sx={{ "&:hover": { bgcolor: "transparent" }, color: "black" }}
              disableRipple
            >
              <NavLink
                to="/aboutus"
                exact
                activeClassName="active"
                style={{
                  textDecoration: "none",
                  color: "#262626",
                  fontWeight: "bold",
                }}
              >
                About Us
              </NavLink>
            </Button>
            <Button
              variant="text"
              sx={{ "&:hover": { bgcolor: "transparent" }, color: "black" }}
              disableRipple
            >
              <NavLink
                to="/contact"
                exact
                activeClassName="active"
                style={{
                  textDecoration: "none",
                  color: "#262626",
                  fontWeight: "bold"
                }}
              >
                Contact
              </NavLink>
            </Button>
          </Grid>
          <Grid item sx={{ textAlign: "right" }}>
            <Typography variant="h5" sx={{ textAlign: "left" }}>
              FCM
            </Typography>
            <Typography variant="body2" sx={{ textAlign: "left" }}>
              2023 © FCM <br />
              All rights reserved.
            </Typography>
          </Grid>
        </Grid>
      </Box>
    );
  }
}
