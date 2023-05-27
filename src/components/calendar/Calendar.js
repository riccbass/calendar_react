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
    type: "comi_audi",
  },
  {
    label: "Select 2",
    description: `For 2`,
    date: "25/05/2023",
    key: 1,
    type: "comi_finan",
  },
  {
    label: "Create an ad group",
    description: "An ad group contains one or mo",
    date: "26/05/2023",
    key: 2,
    type: "comi_finan",
  },
  {
    label: "Create an ad",
    description: `Try out different`,
    date: "27/05/2023",
    key: 3,
    type: "comi_finan",
  },
  {
    label: "Create an ad",
    description: `Try out different`,
    date: "27/06/2023",
    key: 4,
    type: "comi_finan",
  },
  {
    label: "Create an ad",
    description: `Try out different`,
    date: "29/06/2023",
    key: 5,
    type: "comi_finan",
  },
  {
    label: "Create an ad",
    description: `Try out different`,
    date: "27/07/2023",
    key: 6,
    type: "comi_finan",
  },
  {
    label: "Create an ad",
    description: `Try out different`,
    date: "29/07/2023",
    key: 7,
    type: "comi_finan",
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
  const [isEdit, setIsEdit] = useState(false);

  const [eventName, setEventName] = useState("");
  const [type, setType] = useState("RCA");

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
        isEdit={isEdit}
        eventName={eventName}
        setEventName={setEventName}
        type={type}
        setType={setType}
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
          setIsEdit={setIsEdit}
          setEventName={setEventName}
          setType={setType}
        />
        <Month
          value={valueM2}
          setValue={setValueM2}
          selectedDay={selectedDay}
          setSelectedDay={setSelectedDay}
          setOpenModal={setOpenModal}
          occurrencesAdapt={occurrencesAdapt}
          setIsEdit={setIsEdit}
          setEventName={setEventName}
          setType={setType}
        />

        <Events value={selectedDay} occurrencesAdapt={occurrencesAdapt} />
      </Grid>
    </Box>
  );
};

export default Calendar;
