import Box from "@mui/material/Box";

const CalendarHeader = ({ value, setValue }) => {
  const currMonthName = () => {
    return value.format("MMMM");
  };

  const currYear = () => {
    return value.format("YYYY");
  };

  const prevMonth = () => {
    return value.clone().subtract(1, "month");
  };

  const nextMonth = () => {
    return value.clone().subtract(1, "month");
  };

  const thisMonth = () => {
    return value.isSame(new Date(), "month");
  };

  return (
    <Box className="header">
      <Box
        className="previous"
        onClick={() => !thisMonth() && setValue(prevMonth())}
      >
        {!thisMonth() ? String.fromCharCode(171) : null}
      </Box>
      <Box className="current">
        {currMonthName()} {currYear()}
      </Box>
      <Box className="next" onClick={() => setValue(nextMonth())}>
        {String.fromCharCode(187)}
      </Box>
    </Box>
  );
};

export default CalendarHeader;
