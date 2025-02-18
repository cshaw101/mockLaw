import React from "react";
import { AppBar, Toolbar, Typography, Button, Container, Grid, Card, CardContent, CardMedia, Box } from "@mui/material";

const LawFirmHome = () => {
  return (
    <div>
      {/* Navbar */}
      <AppBar position="static" color="primary" sx={{ padding: "10px 0" }}>
        <Toolbar>
          <Typography variant="h5" sx={{ flexGrow: 1, fontWeight: "bold" }}>
            Anderson & Partners
          </Typography>
          <Button color="inherit">Home</Button>
          <Button color="inherit">About</Button>
          <Button color="inherit">Practice Areas</Button>
          <Button color="inherit">Our Lawyers</Button>
          <Button color="inherit">Contact</Button>
        </Toolbar>
      </AppBar>
      
      {/* Hero Section */}
      <Box sx={{
        backgroundImage: "url('https://source.unsplash.com/1600x900/?law,justice')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        color: "white",
        textAlign: "center",
        padding: "100px 20px",
      }}>
        <Typography variant="h3" fontWeight="bold">Your Trusted Legal Advisors</Typography>
        <Typography variant="h6" sx={{ marginBottom: 2 }}>
          Providing expert legal services in family law, corporate law, and criminal defense.
        </Typography>
        <Button variant="contained" color="secondary" size="large">
          Schedule a Consultation
        </Button>
      </Box>
      
      {/* Lawyers Section */}
      <Container sx={{ padding: "50px 0" }}>
        <Typography variant="h4" color="primary" align="center" gutterBottom>
          Meet Our Lawyers
        </Typography>
        <Grid container spacing={3} justifyContent="center">
          {["John Doe", "Jane Smith", "Michael Johnson"].map((lawyer, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card sx={{ boxShadow: 3, borderRadius: 2 }}>
                <CardMedia
                  component="img"
                  height="250"
                  image={`https://source.unsplash.com/300x300/?portrait,lawyer&sig=${index}`}
                  alt={lawyer}
                />
                <CardContent>
                  <Typography variant="h6" color="primary" align="center" fontWeight="bold">{lawyer}</Typography>
                  <Typography variant="body1" color="textSecondary" align="center">Expert in Legal Affairs</Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
      
      {/* Contact Section */}
      <Container sx={{ textAlign: "center", padding: "50px 0", backgroundColor: "#f5f5f5", borderRadius: 2 }}>
        <Typography variant="h4" color="primary" gutterBottom>Contact Us</Typography>
        <Typography variant="h6" color="textSecondary" gutterBottom>
          Get in touch with our legal team for expert guidance and representation.
        </Typography>
        <Typography variant="body1" color="textPrimary">📍 123 Justice St, Legal City, LC 45678</Typography>
        <Typography variant="body1" color="textPrimary">📞 (123) 456-7890</Typography>
        <Typography variant="body1" color="textPrimary">✉️ info@andersonlaw.com</Typography>
      </Container>
      
      {/* Footer */}
      <AppBar position="static" color="primary" sx={{ marginTop: 3, padding: 2, textAlign: "center" }}>
        <Typography variant="body1" color="inherit">
          &copy; 2025 Anderson & Partners Law Firm. All Rights Reserved.
        </Typography>
      </AppBar>
    </div>
  );
};

export default LawFirmHome;
