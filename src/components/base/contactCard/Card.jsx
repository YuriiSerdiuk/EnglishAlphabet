import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
// import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
// import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import MailIcon from "@material-ui/icons/Mail";
import TelegramIcon from "@material-ui/icons/Telegram";
import InstagramIcon from "@material-ui/icons/Instagram";
import GitHubIcon from "@material-ui/icons/GitHub";
import PhoneIcon from "@material-ui/icons/Phone";

const useStyles = makeStyles({
  root: {},
  iconTitle: { fontSize: 34 },
  title: {
    fontSize: 20,
  },
  pos: {
    marginBottom: 12,
  },
  subTitle: {
    color: "#24292eb8",
    textTransform: "lowercase",
    fontSize: 18,
  },
});
const typeIcon = {
  mail: <MailIcon />,
  telegram: <TelegramIcon />,
  instagram: <InstagramIcon />,
  gitHub: <GitHubIcon />,
  phone: <PhoneIcon />,
};

export default function SimpleCard(props) {
  const { type, title, href, subTitle } = props;
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardContent>
        <a href={href ? href : "#"} target="_blank" rel="noopener noreferrer">
          <Typography
            color="primary"
            fontSize="default"
            className={classes.iconTitle}
          >
            {typeIcon[type]}
          </Typography>
          <Typography className={classes.title} variant="h5" component="h2">
            {title}
          </Typography>
          <Typography className={classes.subTitle} variant="h5" component="h2">
            {subTitle}
          </Typography>
        </a>
      </CardContent>
      {/* <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions> */}
    </Card>
  );
}
