import React, { useState } from "react";
import { TextField, Button, Grid, Typography, Link, Container, CssBaseline } from "@mui/material";

const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    // Here you can handle the login logic, like sending the credentials to a server
    console.log("Username:", username);
    console.log("Password:", password);
  };

  const handleForgotPassword = () => {
    // Here you can handle the action for forgotten passwords
    console.log("Forgot Password");
  };

  return (
    <>
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Grid container spacing={4}>
        <Grid item xs={12}>
          <Typography variant="h4" align="center">
            Login
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <TextField
            label="Username"
            variant="outlined"
            fullWidth
            value={username}
            onChange={(e: {
              target: { value: React.SetStateAction<string> };
            }) => setUsername(e.target.value)}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            label="Password"
            type="password"
            variant="outlined"
            fullWidth
            value={password}
            onChange={(e: {
              target: { value: React.SetStateAction<string> };
            }) => setPassword(e.target.value)}
          />
        </Grid>
        <Grid item xs={12}>
          <Button
            variant="contained"
            color="primary"
            fullWidth
            onClick={handleLogin}
          >
            Login
          </Button>
        </Grid>
        <Grid item xs={12}>
          <Typography align="center">
            <Link
              onClick={handleForgotPassword}
              color="primary"
              underline="always"
            >
              Forgot Password?
            </Link>
          </Typography>
        </Grid>
      </Grid>
    </Container>
      
    </>
  );
};

export default LoginForm;
