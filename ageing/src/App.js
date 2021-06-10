import { useState } from "react";

import AgeingTimer from "./components/TimeLeft/AgeingTimer";
import DatePicker from "./components/DatePicker/DatePicker";
import "./App.css";

function App() {
  const [date, setDate] = useState("");
  const [show, setShow] = useState(true);

  const getDateHandler = (fetchedDate) => {
    setDate(fetchedDate);
  };

  const getShowHandler = (fetchedShow) => {
    setShow(fetchedShow);
  };

  return (
    <div className="container">
      {show ? (
        <DatePicker getDate={getDateHandler} getShow={getShowHandler} />
      ) : null}
      {!show ? <AgeingTimer time={date} /> : null}
    </div>
  );
}

export default App;
