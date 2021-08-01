import { Card, CardContent, Grid, makeStyles } from "@material-ui/core";
import {
  AssignmentInd,
  ContactSupport,
  DirectionsCar,
  Notifications,
  Schedule,
} from "@material-ui/icons";
import ReactApexChart from "react-apexcharts";
import { DashboardCard, Navigation } from "../Components";

const useStyles = makeStyles({
  chart: {
    boxShadow: "0 5px 15px #c0b7b7",
    borderRadius: "0.5rem",
  },
});
const StudentDashboard = () => {
  const classes = useStyles();

  const seriesBar = [
    {
      name: ["Aditya"],
      data: [2, 10, 20, 10],
    },
  ];

  const optionsBar = {
    chart: {
      width: 380,
      type: "bar",
    },
    colors: ["#1991eb", "#53adf0", "#8cc8f5", "#c6e4fa"],
    plotOptions: {
      bar: {
        columnWidth: "70%",
        distributed: true,
      },
    },
    dataLabels: {
      enabled: false,
    },
    legend: {
      show: false,
    },
    xaxis: {
      categories: [
        ["Total Stores"],
        ["Evaluated Cars"],
        ["Stock Cars"],
        ["Sold Cars"],
      ],
      labels: {
        style: {
          colors: ["#4e5c69", "#4e5c69", "#4e5c69"],
          fontSize: "12px",
        },
      },
    },
  };

  const seriesPie = [2, 10, 20, 10];
  const optionsPie = {
    chart: {
      width: "100%",
      type: "pie",
    },
    colors: ["#1991eb", "#53adf0", "#8cc8f5", "#c6e4fa"],
    labels: [
      ["Total Stores"],
      ["Evaluated Cars"],
      ["Stock Cars"],
      ["Sold Cars"],
    ],
    responsive: [
      {
        breakpoint: 480,
        options: {
          chart: {
            width: 200,
          },
          legend: {
            position: "bottom",
          },
        },
      },
    ],
  };
  return (
    <Navigation>
      <Grid container spacing={3}>
        <Grid item lg={3} md={3} xs={6}>
          <DashboardCard
            title={"Total Students"}
            data={2}
            icon={<AssignmentInd color="primary" />}
          />
        </Grid>
        <Grid item lg={3} md={3} xs={6}>
          <DashboardCard
            title={"Total Supports"}
            data={10}
            icon={<ContactSupport color="primary" />}
          />
        </Grid>
        <Grid item lg={3} md={3} xs={6}>
          <DashboardCard
            title={"Notifications"}
            data={10}
            icon={<Notifications color="primary" />}
          />
        </Grid>
        <Grid item lg={3} md={3} xs={6}>
          <DashboardCard
            title={"Today Date"}
            data={2}
            icon={<Schedule color="primary" />}
          />
        </Grid>

        <Grid item lg={6} md={6} sm={12} xs={12}>
          <Card className={classes.chart}>
            <CardContent>
              <ReactApexChart
                options={optionsBar}
                series={seriesBar}
                type="bar"
                height={350}
              />
            </CardContent>
          </Card>
        </Grid>

        <Grid item lg={6} md={6} sm={12} xs={12}>
          <Card className={classes.chart}>
            <CardContent>
              <ReactApexChart
                options={optionsPie}
                series={seriesPie}
                type="pie"
                height={350}
              />
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Navigation>
  );
};

export default StudentDashboard;
