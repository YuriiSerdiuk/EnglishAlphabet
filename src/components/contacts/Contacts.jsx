import React from "react";
import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
import ContactMailIcon from "@material-ui/icons/ContactMail";
import PhoneIcon from "@material-ui/icons/Phone";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    textAlign: "center",
    fontSize: "2em",
  },
  header: {
    padding: "5%",
    borderBottom: "2px solid grey",
  },
  content: {},
}));

export default function SimpleContainer() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="lg" className={classes.root}>
        <Box component="div" m={1} className={classes.header}>
          <Typography paragraph variant="h2">
            Contacts{" "}
          </Typography>
          <Typography variant="h4">
            {" "}
            <ContactMailIcon /> {`Serdiuk Urii Mykolaiovych`}
          </Typography>
          <Typography variant="h4">
            {" "}
            <PhoneIcon /> +(380)938990630{" "}
          </Typography>
        </Box>
        <Grid container>
          <Grid item xs={3}>
            {" "}
            <p>yuraserdiuk@gmail.com</p>
          </Grid>
          <Grid item xs={3}>
            {" "}
            <a href="https://t.me/learnalphabet">t.me/learnalphabet</a>
          </Grid>
          <Grid item xs={3}>
            {" "}
            <p>yuretskiyyurka</p>
          </Grid>
          <Grid item xs={3}>
            {" "}
            <p>linkedin</p>
          </Grid>
        </Grid>
      </Container>
    </React.Fragment>
  );
}
