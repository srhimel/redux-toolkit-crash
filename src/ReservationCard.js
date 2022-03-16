import React from 'react';
import { useDispatch } from 'react-redux';
import { removeReservation } from './redux/features/reservationsSlice';


const ReservationCard = ({ name, index }) => {
    const dispatch = useDispatch();
    const handleRemove = (index) => {
        dispatch(removeReservation(index))
    }
    return (
        <div>
            <div className="reservation-card-container" onClick={() => handleRemove(index)}>{
                name
            }</div>
        </div>
    );
};

export default ReservationCard;