import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";

import AdapterMoment from "@mui/lab/AdapterMoment";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import DatePicker from "@mui/lab/DatePicker";

import { useState, useEffect } from "react";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 800,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const Event = ({ openModal, setOpenModal, selectedDay }) => {
  const [day, setDay] = useState();

  useEffect(() => {
    setDay(selectedDay);
  }, [selectedDay]);

  const [type, setType] = useState("rca");
  const [event, setEvent] = useState("");

  const [eventWarning, setEventWarning] = useState(false);

  const onSubmit = (e) => {
    console.log("submit");
    e.preventDefault();
    setEventWarning(true);
  };

  return (
    <Modal
      open={openModal}
      onClose={(e) => setOpenModal(false)}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <Grid container spacing={4}>
          <Grid item xs={12} sx={{ textAlign: "center", cursor: "pointer" }}>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              Adicionar Evento
            </Typography>
          </Grid>

          <Grid item xs={12} sx={{ textAlign: "center" }}>
            <TextField
              label="Evento"
              variant="outlined"
              fullWidth
              helperText={eventWarning ? "Campo obrigatório" : " "}
              value={event ?? ""}
              onChange={(e) => {
                setEvent(e.target.value);
              }}
            />
          </Grid>

          <Grid item xs={6}>
            <LocalizationProvider dateAdapter={AdapterMoment} fullWidth>
              <DatePicker
                label="Data Evento"
                value={day}
                onChange={(newValue) => {
                  setDay(newValue);
                }}
                renderInput={(params) => <TextField {...params} />}
              />
            </LocalizationProvider>
          </Grid>

          <Grid item xs={6}>
            <FormControl fullWidth>
              <InputLabel id="event-type-label">Tipo de Evento</InputLabel>
              <Select
                fullWidth
                required
                labelId="event-type-label"
                id="event-type"
                value={type}
                label="Tipo de Evento"
                onChange={(newValue) => {
                  setType(newValue.target.value);
                }}

                //   onChange={handleChange}
              >
                <MenuItem value={"rca"}>RCA</MenuItem>
                <MenuItem value={"comi_finan"}>Comitê de Finanças</MenuItem>
                <MenuItem value={"comi_audi"}>Comitê de Auditoria</MenuItem>
                <MenuItem value={"comi_rh"}>
                  Comitê de Recursos Humanos
                </MenuItem>
                <MenuItem value={"age_ago"}>Convocação AGE ou AGO</MenuItem>
                <MenuItem value={"ago"}>AGO</MenuItem>
                <MenuItem value={"age"}>AGE</MenuItem>
                <MenuItem value={"apre_resultados"}>
                  Apresentação de Resultados
                </MenuItem>
                <MenuItem value={"div_resultados"}>
                  Divulgação Resultados
                </MenuItem>
                <MenuItem value={"form_cvm"}>Formulários CVM</MenuItem>
                <MenuItem value={"info_gov"}>
                  Informe de Governança Corportativa
                </MenuItem>
                <MenuItem value={"f_358"}>Formulário 358</MenuItem>
                <MenuItem value={"p_taxas"}>Pagamentos de taxas</MenuItem>
                <MenuItem value={"outros"}>Outros</MenuItem>
              </Select>
            </FormControl>
          </Grid>

          <Grid item xs={6}>
            <Button variant="contained" onClick={(e) => onSubmit(e)}>
              Adicionar
            </Button>
          </Grid>
          <Grid item xs={6}>
            <Button variant="contained" onClick={(e) => setOpenModal(false)}>
              Fechar
            </Button>
          </Grid>
        </Grid>
      </Box>
    </Modal>
  );
};

export default Event;
