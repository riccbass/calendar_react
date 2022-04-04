import Grid from "@mui/material/Grid";
import Day from "./Day";

const Week = ({ startWeek, setSelectedDay, selectedDay, value }) => {
  return (
    <Grid container spacing={0}>
      <Day
        day={startWeek.clone().add(0, "day")}
        setSelectedDay={setSelectedDay}
        selectedDay={selectedDay}
        value={value}
      />
      <Day
        day={startWeek.clone().add(1, "day")}
        setSelectedDay={setSelectedDay}
        selectedDay={selectedDay}
        value={value}
      />
      <Day
        day={startWeek.clone().add(2, "day")}
        setSelectedDay={setSelectedDay}
        selectedDay={selectedDay}
        value={value}
      />
      <Day
        day={startWeek.clone().add(3, "day")}
        setSelectedDay={setSelectedDay}
        selectedDay={selectedDay}
        value={value}
      />
      <Day
        day={startWeek.clone().add(4, "day")}
        setSelectedDay={setSelectedDay}
        selectedDay={selectedDay}
        value={value}
      />
      <Day
        day={startWeek.clone().add(5, "day")}
        setSelectedDay={setSelectedDay}
        selectedDay={selectedDay}
        value={value}
      />
      <Day
        day={startWeek.clone().add(6, "day")}
        setSelectedDay={setSelectedDay}
        selectedDay={selectedDay}
        value={value}
      />
    </Grid>
  );
};

export default Week;