import { Button, Container, CssBaseline, Grid, Typography } from "@mui/material";
import { api_getHomeData } from "../api/getHomeData";

const Home = () => {
  const getHomeData = () => {
    api_getHomeData().then(
      (resp: any) => {
        console.log(resp);
      },
      (err: any) => {
        console.log(err);
      }
    );
  };

  return (
    <>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Grid item xs={12}>
          <Typography variant="h4" align="center">
          I am home page!!
          </Typography>
        </Grid>
          <Button variant="outlined" onClick={getHomeData}>
            Home
          </Button>
      </Container>
    </>
  );
};

export default Home;
