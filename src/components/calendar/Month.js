import moment from "moment";
import "moment/locale/pt"; // without this line it didn't work

import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

import Week from "./Week";
import WeekDayNames from "./WeekDayNames";

import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import EventIcon from "@mui/icons-material/Event";

import Tooltip from "@mui/material/Tooltip";

const Month = ({
  value,
  setValue,
  setSelectedDay,
  selectedDay,
  setOpenModal,
  m1,
  occurrencesAdapt,
  setIsEdit,
  setEventName,
  setType,
}) => {
  const startDay = value.clone().startOf("month").startOf("week");

  const weeks = () => {
    var rows = [];
    for (var i = 0; i < 6; i++) {
      const date = moment(startDay);
      rows.push(
        <Week
          key={i}
          setSelectedDay={setSelectedDay}
          selectedDay={selectedDay}
          startWeek={date.add(7 * i, "day")}
          value={value}
          occurrencesAdapt={occurrencesAdapt}
          setOpenModal={setOpenModal}
          setIsEdit={setIsEdit}
          setEventName={setEventName}
          setType={setType}
        />
      );
    }
    return rows;
  };

  const prevMonth = () => {
    setValue(value.clone().subtract(1, "month"));
  };

  const nextMonth = () => {
    setValue(value.clone().add(1, "month"));
  };

  const onClick = (e) => {
    setOpenModal(true);
    setIsEdit(false);
    setEventName("");
    setType("rca");
  };

  const monthYear = value.format("MMM/YYYY");
  const monthYearUC = monthYear[0].toUpperCase() + monthYear.slice(1);

  return (
    <Grid item xs={5}>
      <Grid container spacing={0}>
        <Grid item xs={2} sx={{ textAlign: "center", cursor: "pointer" }}>
          {m1 ? <ArrowBackIosIcon onClick={(e) => prevMonth()} /> : null}
        </Grid>
        <Grid item xs={8} sx={{ textAlign: "center" }}>
          <Typography variant="h4" component="h5">
            {monthYearUC}
          </Typography>
        </Grid>
        <Grid item xs={2} sx={{ textAlign: "center", cursor: "pointer" }}>
          {m1 ? (
            <ArrowForwardIosIcon onClick={(e) => nextMonth()} />
          ) : (
            <Tooltip title="Adicionar Evento">
              <EventIcon onClick={(e) => onClick(e)} />
            </Tooltip>
          )}
        </Grid>
      </Grid>
      <Grid item xs={12}>
        <WeekDayNames />
        {weeks()}
      </Grid>
    </Grid>
  );
};

export default Month;
