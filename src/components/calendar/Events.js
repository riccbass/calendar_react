import Grid from "@mui/material/Grid";
import Drawer from "@mui/material/Drawer";
import Typography from "@mui/material/Typography";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Box from "@mui/material/Box";

const steps = [
  {
    label: "Select campaign settings",
    description: `For each ad campaign`,
  },
  {
    label: "Create an ad group",
    description:
      "An ad group contains one or more ads which target a shared set of keywords.",
  },
  {
    label: "Create an ad",
    description: `Try out different`,
  },
];

const drawerWidth = 240;

const Events = ({ value }) => {
  const dayFormated = value.format("MMM DD, YYYY");
  const dayFormatedUC = dayFormated[0].toUpperCase() + dayFormated.slice(1);

  return (
    <Grid item xs={2}>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
        variant="permanent"
        anchor="right"
      >
        <Typography variant="h5" component="h6">
          <Grid textAlign="center" justifyContent="center">
            <Grid>{dayFormatedUC}</Grid>
          </Grid>
          <Grid justifyContent="center" alignItems="center" display="flex">
            <Box sx={{ maxWidth: 400 }}>
              <Stepper orientation="vertical">
                {steps.map((step, index) => (
                  <Step
                    key={step.label}
                    active={true}
                    sx={{
                      "& .MuiStepLabel-root .Mui-active": {
                        color: "secondary.main", // circle color (ACTIVE)
                      },
                    }}
                  >
                    <StepLabel>{step.label}</StepLabel>
                  </Step>
                ))}
              </Stepper>
            </Box>
          </Grid>
        </Typography>
      </Drawer>
    </Grid>
  );
};

export default Events;
