import Grid from "@mui/material/Grid";
import Day from "./Day";

const Week = ({
  startWeek,
  setSelectedDay,
  selectedDay,
  value,
  occurrencesAdapt,
  setOpenModal,
  setIsEdit,
  setEventName,
  setType,
}) => {
  return (
    <Grid container spacing={0}>
      <Day
        day={startWeek.clone().add(0, "day")}
        setSelectedDay={setSelectedDay}
        selectedDay={selectedDay}
        value={value}
        occurrencesAdapt={occurrencesAdapt}
        setOpenModal={setOpenModal}
        setIsEdit={setIsEdit}
        setEventName={setEventName}
        setType={setType}
      />
      <Day
        day={startWeek.clone().add(1, "day")}
        setSelectedDay={setSelectedDay}
        selectedDay={selectedDay}
        value={value}
        occurrencesAdapt={occurrencesAdapt}
        setOpenModal={setOpenModal}
        setIsEdit={setIsEdit}
        setEventName={setEventName}
        setType={setType}
      />
      <Day
        day={startWeek.clone().add(2, "day")}
        setSelectedDay={setSelectedDay}
        selectedDay={selectedDay}
        value={value}
        occurrencesAdapt={occurrencesAdapt}
        setOpenModal={setOpenModal}
        setIsEdit={setIsEdit}
        setEventName={setEventName}
        setType={setType}
      />
      <Day
        day={startWeek.clone().add(3, "day")}
        setSelectedDay={setSelectedDay}
        selectedDay={selectedDay}
        value={value}
        occurrencesAdapt={occurrencesAdapt}
        setOpenModal={setOpenModal}
        setIsEdit={setIsEdit}
        setEventName={setEventName}
        setType={setType}
      />
      <Day
        day={startWeek.clone().add(4, "day")}
        setSelectedDay={setSelectedDay}
        selectedDay={selectedDay}
        value={value}
        occurrencesAdapt={occurrencesAdapt}
        setOpenModal={setOpenModal}
        setIsEdit={setIsEdit}
        setEventName={setEventName}
        setType={setType}
      />
      <Day
        day={startWeek.clone().add(5, "day")}
        setSelectedDay={setSelectedDay}
        selectedDay={selectedDay}
        value={value}
        occurrencesAdapt={occurrencesAdapt}
        setOpenModal={setOpenModal}
        setIsEdit={setIsEdit}
        setEventName={setEventName}
        setType={setType}
      />
      <Day
        day={startWeek.clone().add(6, "day")}
        setSelectedDay={setSelectedDay}
        selectedDay={selectedDay}
        value={value}
        occurrencesAdapt={occurrencesAdapt}
        setOpenModal={setOpenModal}
        setIsEdit={setIsEdit}
        setEventName={setEventName}
        setType={setType}
      />
    </Grid>
  );
};

export default Week;
