import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./App.css";
import CustomerCard from "./CustomerCard";
import { addReservation } from "./redux/features/reservationsSlice";
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
  const customers = useSelector((state) => state.customers.value);
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
          {
            customers.map(customer => <CustomerCard customer={customer} />)
          }
        </div>
      </div>
    </div>
  );
}

export default App;