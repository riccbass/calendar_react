import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";

const cssWeekDay = {
  justifyContent: "center",
  alignItems: "center",
  display: "flex",
  fontFamily: "Arial, Helvetica, sans-serif",
};

const Matrix = () => {
  return (
    <Grid container spacing={0}>
      <Grid item xs={12 / 7}>
        <Box sx={cssWeekDay}>Seg</Box>
      </Grid>
      <Grid item xs={12 / 7}>
        <Box sx={cssWeekDay}>Ter</Box>
      </Grid>
      <Grid item xs={12 / 7}>
        <Box sx={cssWeekDay}>Qua</Box>
      </Grid>
      <Grid item xs={12 / 7}>
        <Box sx={cssWeekDay}>Qui</Box>
      </Grid>
      <Grid item xs={12 / 7}>
        <Box sx={cssWeekDay}>Sex</Box>
      </Grid>
      <Grid item xs={12 / 7}>
        <Box sx={cssWeekDay}>Sáb</Box>
      </Grid>
      <Grid item xs={12 / 7}>
        <Box sx={cssWeekDay}>Dom</Box>
      </Grid>
    </Grid>
  );
};

export default Matrix;
