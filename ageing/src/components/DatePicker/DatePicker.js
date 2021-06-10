import { useState } from "react";

import "./DatePicker.css";

const DatePicker = (props) => {
  const [date, setDate] = useState();

  const dateChangeHandler = (event) => {
    setDate(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    props.getDate(date);
    props.getShow(false);
  };

  return (
    <form onSubmit={submitHandler}>
      <p className="date-picker__title">Set your date of birth</p>
      <input type="date" onChange={dateChangeHandler} required />
      <br />
      <br />
      <br />
      <button className="button" type="submit">
        Set date
      </button>
    </form>
  );
};

export default DatePicker;
