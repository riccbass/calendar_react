// https://www.youtube.com/watch?v=5jRrVqRWqsM

import React, { useState } from "react";
import "./styles.css";
import Calendar from "./calendar/Calendar";
import moment from "moment";

import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";

const App = () => {
  const [value, setValue] = useState(moment());

  return (
    <Box className="App">
      <Grid container spacing={2}>
        <Grid item xs={5}>
          <Calendar value={value} onChange={setValue} />
        </Grid>
        <Grid item xs={5}>
          <Calendar value={value} onChange={setValue} />
        </Grid>
      </Grid>
    </Box>
  );
};

export default App;
