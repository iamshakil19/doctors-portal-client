import React from 'react';
import { format } from 'date-fns';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const BookingModal = ({ treatment, date, setTreatment }) => {

    const [user, loading, error] = useAuthState(auth);
    const { name, slots } = treatment

    const handleBooking = event => {
        event.preventDefault()
        const timeSlot = event.target.timeSlot.value;
        console.log(timeSlot);
        setTreatment(null)
    }
    console.log(user);
    return (
        <div>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="font-bold text-lg text-primary mb-3">{name}</h3>
                    <form onSubmit={handleBooking} className='grid gap-3 justify-items-center'>
                        <input type="text" disabled value={format(date, 'PP')} className="input input-bordered w-full max-w-xs" />
                        <select name='timeSlot' className="select select-bordered w-full max-w-xs">
                            {
                                slots.map((slot, index) => <option
                                    key={index}
                                    value={slot}
                                >{slot}</option>)
                            }
                        </select>
                        <input name='name' type="text" disabled value={user?.displayName || "Username"} className="input input-bordered w-full max-w-xs" />
                        <input name='email' type="email" disabled value={user?.email} className="input input-bordered w-full max-w-xs" />
                        <input name='phone' type="text" placeholder="Phone number" className="input input-bordered w-full max-w-xs" />
                        <input type="submit" value="Submit" className="btn text-white bg-gradient-to-r from-secondary to-primary w-full max-w-xs border-0" />
                    </form>
                </div>
            </div>
        </div >
    );
};

export default BookingModal;