import React from "react";
import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
import ContactMailIcon from "@material-ui/icons/ContactMail";

import Card from "../base/contactCard";

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
            {/* <PhoneIcon /> +(380)938990630{" "} */}
          </Typography>
        </Box>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={3}>
            <Card
              type="mail"
              title="Электронная почта"
              subTitle="yuraserdiuk@gmail.com"
              href="mailto:yuraserdiuk@gmail.com"
            />
          </Grid>
          <Grid item xs={12} sm={3}>
            <Card
              type="telegram"
              href="https://t.me/learnalphabet"
              subTitle="t.me/learnalphabet"
              title="telegram"
            />
          </Grid>
          <Grid item xs={12} sm={3}>
            <Card
              type="instagram"
              subTitle="yuretskiyyurka"
              href="https://www.instagram.com/yuretskiyyurka"
              title="instagram"
            />
          </Grid>
          <Grid item xs={12} sm={3}>
            <Card
              type="gitHub"
              subTitle="UraSerdyuk"
              href="https://github.com/UraSerdyuk"
              title="gitHub"
            />
          </Grid>
          <Grid item xs={12} sm={3}>
            <Card
              type="phone"
              subTitle="+(380)93-899-06-30"
              href="tel:+380938990630"
              title="my phone number"
            />
          </Grid>
        </Grid>
      </Container>
    </React.Fragment>
  );
}
