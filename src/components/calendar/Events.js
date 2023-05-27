import Grid from "@mui/material/Grid";
import Drawer from "@mui/material/Drawer";
import Typography from "@mui/material/Typography";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Box from "@mui/material/Box";

const drawerWidth = 240;

const Events = ({ value, occurrencesAdapt }) => {
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
                {occurrencesAdapt.map((step, index) =>
                  step.momentObj.isSameOrAfter(value) ? (
                    <Step
                      key={index}
                      active={true}
                      sx={{
                        "& .MuiStepLabel-root .Mui-active": {
                          color: "secondary.main", // circle color (ACTIVE)
                        },
                      }}
                    >
                      <StepLabel>
                        {step.momentObj.format("MMM DD, YYYY")}
                      </StepLabel>
                    </Step>
                  ) : null
                )}
              </Stepper>
            </Box>
          </Grid>
        </Typography>
      </Drawer>
    </Grid>
  );
};

export default Events;
