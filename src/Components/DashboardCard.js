import {
  Card,
  CardContent,
  Grid,
  makeStyles,
  Typography,
} from "@material-ui/core";
import { HelpOutline } from "@material-ui/icons";
import React from "react";

const useStyles = makeStyles({
  box: {
    boxShadow: "0 5px 15px #c0b7b7",
    borderRadius: "0.5rem",
  },
});
const DashboardCard = ({ title, data, icon }) => {
  const classes = useStyles();
  return (
    <div>
      <Card className={classes.box}>
        <CardContent>
          <Grid
            container
            justify="space-between"
            spacing={3}
            style={{ textDecoration: "none" }}
          >
            <Grid item>
              <Typography color="textPrimary" variant="h6">
                {title}
              </Typography>
              <Typography color="textPrimary" variant="h3">
                {data || "00"}
              </Typography>
            </Grid>

            <Grid item>{icon || <HelpOutline />}</Grid>
          </Grid>
        </CardContent>
      </Card>
    </div>
  );
};

export default DashboardCard;
