import { useState } from "react";

import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

import CircleIcon from "@mui/icons-material/Circle";
import color from "./service";

const centerStyle = {
  alignItems: "center",
  justifyContent: "center",
};

const circleStyle = {
  height: "20%",
  justifyContent: "center",
  alignItems: "center",
  display: "flex",
};

const Day = ({
  day,
  setSelectedDay,
  selectedDay,
  value,
  occurrencesAdapt,
  setOpenModal,
  setIsEdit,
  setEventName,
  setType,
}) => {
  const [clicked, setClicked] = useState(false);

  const nBusinessDay = day.isoWeekday() >= 6;

  const onClick = (e) => {
    setSelectedDay(day);
    setClicked(true);
  };

  const onClickOccurence = (event) => {
    setOpenModal(true);
    setIsEdit(true);
    setEventName(event.label);
    setType(event.type);
  };

  if (day.isSame(value, "month")) {
    return (
      <Grid
        day={day}
        item
        xs={12 / 7}
        sx={centerStyle}
        onClick={(e) => onClick(e)}
      >
        <Box
          sx={{
            height: "75px",
            cursor: "pointer",
            backgroundColor: nBusinessDay ? "#A0A0A0" : "#808080",
            "&:hover": {
              backgroundColor: "#A9A9A9",
              color: "#33F7FF",
              opacity: [0.9, 0.8, 0.7],
            },
          }}
        >
          <Box sx={centerStyle} height="80%" display="flex" color="white">
            <Box
              sx={centerStyle}
              height="80%"
              width="80%"
              display="flex"
              border={
                clicked && selectedDay.isSame(day, "day") ? "1px solid" : null
              }
            >
              <Typography variant="button" display="block" gutterBottom>
                {day.clone().format("D").toString()}
              </Typography>
            </Box>
          </Box>
          <Box sx={circleStyle}>
            {occurrencesAdapt.map((step, index) =>
              step.momentObj.isSame(day, "day") ? (
                <CircleIcon
                  onClick={(e) => onClickOccurence(step)}
                  sx={{ fontSize: 15, color: color(step.type) }}
                />
              ) : null
            )}
          </Box>
        </Box>
      </Grid>
    );
  } else {
    return <Grid day={day} item xs={12 / 7} sx={centerStyle}></Grid>;
  }
};

export default Day;
