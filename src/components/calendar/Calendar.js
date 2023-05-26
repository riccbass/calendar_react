import React, { useState, useEffect } from "react";
import Month from "./Month";
import Events from "./Events";
import Event from "./Event";

import moment from "moment";

import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";

const occurrences = [
  {
    label: "Select campaign settings",
    description: `For each ad campaign`,
    date: "25/05/2023",
    key: 1,
  },
  {
    label: "Create an ad group",
    description: "An ad group contains one or mo",
    date: "26/05/2023",
    key: 2,
  },
  {
    label: "Create an ad",
    description: `Try out different`,
    date: "27/05/2023",
    key: 3,
  },
  {
    label: "Create an ad",
    description: `Try out different`,
    date: "27/06/2023",
    key: 4,
  },
  {
    label: "Create an ad",
    description: `Try out different`,
    date: "29/06/2023",
    key: 5,
  },
  {
    label: "Create an ad",
    description: `Try out different`,
    date: "27/07/2023",
    key: 6,
  },
  {
    label: "Create an ad",
    description: `Try out different`,
    date: "29/07/2023",
    key: 7,
  },
];

const occurrencesAdapt = occurrences.map((occurrence) => {
  var momentObj = moment(occurrence.date, "DD/MM/YYYY");

  return { ...occurrence, momentObj };
});

const Calendar = () => {
  moment.locale("pt-br");

  const [selectedDay, setSelectedDay] = useState(moment().startOf("day"));
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
          occurrencesAdapt={occurrencesAdapt}
        />
        <Month
          value={valueM2}
          setValue={setValueM2}
          selectedDay={selectedDay}
          setSelectedDay={setSelectedDay}
          setOpenModal={setOpenModal}
          occurrencesAdapt={occurrencesAdapt}
        />

        <Events value={selectedDay} occurrencesAdapt={occurrencesAdapt} />
      </Grid>
    </Box>
  );
};

export default Calendar;
