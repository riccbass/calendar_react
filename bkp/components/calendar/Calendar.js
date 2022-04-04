import React, { useState, useEffect } from "react";

import buildCalendar from "./build";
import dayStyles, { beforeToday } from "./styles";

import Header from "./Header";

import Box from "@mui/material/Box";

const Calendar = ({ value, onChange }) => {
  const [calendar, setCalendar] = useState([]);

  useEffect(() => {
    setCalendar(buildCalendar(value));
  }, [value]);

  return (
    <Box sx={{ height: "100%" }} className="calendar">
      <Header value={value} setValue={onChange} />
      <div className="body">
        <div className="day-names">
          {["D", "S", "T", "Q", "Q", "S", "S"].map((d, index) => (
            <div key={index} className="week">
              {d}
            </div>
          ))}
        </div>
        {calendar.map((week, index) => (
          <div key={index}>
            {week.map((day, index) => (
              <Box
                sx={{ lineHeight: "100px", height: "100px" }}
                className="day"
                onClick={() => !beforeToday(day) && onChange(day)}
                key={index}
              >
                <Box className={dayStyles(day, value)}>
                  {day.format("D").toString()}
                </Box>
              </Box>
            ))}
          </div>
        ))}
      </div>
    </Box>
  );
};
export default Calendar;
