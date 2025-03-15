import React, { useState } from "react";

import { AppointmentForm } from "../../components/appointmentForm/AppointmentForm";
import { TileList } from "../../components/tileList/TileList";

export const AppointmentsPage = ({
  contacts,
  appointments,
  addAppointment,
}) => {
  const [appointmentName, setAppointmentName] = useState("");
  const [appointmentContact, setAppointmentContact] = useState("");
  const [appointmentDate, setAppointmentDate] = useState("");
  const [appointmentTime, setAppointmentTime] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      !appointmentName ||
      !appointmentContact ||
      !appointmentDate ||
      !appointmentTime
    ) {
      alert("Please fill in all fields");
      return;
    }
    addAppointment(
      appointmentName,
      appointmentContact,
      appointmentDate,
      appointmentTime
    );
    setAppointmentName("");
    setAppointmentContact("");
    setAppointmentDate("");
    setAppointmentTime("");
  };

  return (
    <div>
      <section>
        <h2>Add Appointment</h2>
        <AppointmentForm
          appointmentName={appointmentName}
          appointmentContact={appointmentContact}
          appointmentDate={appointmentDate}
          appointmentTime={appointmentTime}
          setAppointmentName={setAppointmentName}
          setAppointmentContact={setAppointmentContact}
          setAppointmentDate={setAppointmentDate}
          setAppointmentTime={setAppointmentTime}
          contacts={contacts}
          handleSubmit={handleSubmit}
        />
      </section>
      <hr />
      <section>
        <h2>Appointments</h2>
        <TileList tiles={appointments} />
      </section>
    </div>
  );
};
