import React, { useState, useEffect } from "react";
import Month from "./Month";
import Events from "./Events";
import Event from "./Event";

import moment from "moment";

import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";

const Calendar = () => {
  moment.locale("pt-br");

  const [selectedDay, setSelectedDay] = useState(moment());
  const [valueM1, setValueM1] = useState(moment());
  const [valueM2, setValueM2] = useState(valueM1.clone().add(1, "month"));

  const [openModal, setOpenModal] = useState(false);

  useEffect(() => {
    console.log("início ");
    setValueM2(valueM1.clone().add(1, "month"));
  }, [valueM1]);

  return (
    <Box>
      <Event
        openModal={openModal}
        setOpenModal={setOpenModal}
        selectedDay={selectedDay}
      />

      <Grid container spacing={2}>
        <Grid item xs={12}></Grid>
        <Month
          value={valueM1}
          setValue={setValueM1}
          selectedDay={selectedDay}
          setSelectedDay={setSelectedDay}
          setOpenModal={setOpenModal}
          m1={true}
        />
        <Month
          value={valueM2}
          setValue={setValueM2}
          selectedDay={selectedDay}
          setSelectedDay={setSelectedDay}
          setOpenModal={setOpenModal}
        />

        <Events value={selectedDay} />
      </Grid>
    </Box>
  );
};

export default Calendar;
