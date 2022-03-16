import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./App.css";
import { addReservation } from "./redux/features/reservationSlice";
import ReservationCard from "./ReservationCard";


function App() {
  const [reservationName, setReservationName] = useState("");
  const reservations = useSelector((state) => state.reservations.value);
  const dispatch = useDispatch();
  const handleAddReservation = () => {
    if (!reservationName) return
    dispatch(addReservation(reservationName));
    setReservationName("")
  }
  return (
    <div className="App">
      <div className="container">
        <div className="reservation-container">
          <div>
            <h5 className="reservation-header">Reservations</h5>
            <div className="reservation-cards-container">
              {
                reservations.map((name, index) => <ReservationCard index={index} name={name} key={name}></ReservationCard>)
              }
            </div>
          </div>
          <div className="reservation-input-container">
            <input value={reservationName} onChange={(e) => setReservationName(e.target.value)} />
            <button onClick={handleAddReservation}>Add</button>

          </div>
        </div>
        <div className="customer-food-container">
          <div className="customer-food-card-container">
            <p>Selena Gomez</p>
            <div className="customer-foods-container">
              <div className="customer-food"></div>
              <div className="customer-food-input-container">
                <input />
                <button>Add</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;