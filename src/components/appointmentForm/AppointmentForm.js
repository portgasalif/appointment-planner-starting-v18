import React from "react";
import { ContactPicker } from "../contactPicker/ContactPicker";
const getTodayString = () => {
  const [month, day, year] = new Date().toLocaleDateString("en-US").split("/");
  return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
};

export const AppointmentForm = ({
  contacts,
  appointmentName,
  setAppointmentName,
  appointmentContact,
  setAppointmentContact,
  appointmentDate,
  setAppointmentDate,
  appointmentTime,
  setAppointmentTime,
  handleSubmit,
}) => {
  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>
          Title:
          <input
            type="text"
            value={appointmentName}
            onChange={(e) => setAppointmentName(e.target.value)}
            required
          />
        </label>
        <label>
          Contact:
          <ContactPicker
            value={appointmentContact}
            onChange={(e) => setAppointmentContact(e.target.value)}
            contacts={contacts}
          />
        </label>
        <label>
          Date:
          <input
            type="date"
            value={appointmentDate}
            onChange={(e) => setAppointmentDate(e.target.value)}
            min={getTodayString()}
            required
          />
        </label>
        <label>
          Time:
          <input
            type="time"
            value={appointmentTime}
            onChange={(e) => setAppointmentTime(e.target.value)}
            required
          />
        </label>
        <button type="submit">Add Appointment</button>
      </form>
    </>
  );
};
