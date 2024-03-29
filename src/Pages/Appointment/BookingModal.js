import React from 'react';
import { format } from 'date-fns';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { toast } from 'react-toastify';


const BookingModal = ({ treatment, date, setTreatment, refetch }) => {

    const [user, loading, error] = useAuthState(auth);
    const { _id, name, slots, price } = treatment
    const formattedDate = format(date, "PP")

    const handleBooking = event => {
        event.preventDefault()
        const slot = event.target.slot.value;

        const booking = {
            treatmentId: _id,
            treatment: name,
            date: formattedDate,
            slot: slot,
            price: price,
            patient: user.email,
            patientName: user.displayName,
            phone: event.target.phone.value
        }

        fetch(' https://shrouded-mountain-98205.herokuapp.com/booking', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(booking)
        })
            .then(res => res.json())
            .then(data => {
                if (data.success) {
                    toast.success(`Appointment is set, ${formattedDate} at ${slot}`, {
                        position: "top-center",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                    });
                }
                else {
                    toast.error(`Already have an appointment on, ${data.booking?.date} at ${data.booking?.slot}`, {
                        position: "top-center",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                    });
                }
                refetch()
                setTreatment(null)
            })


    }

    return (
        <div>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="font-bold text-lg text-primary mb-3">{name}</h3>
                    <form onSubmit={handleBooking} className='grid gap-3 justify-items-center'>
                        <input type="text" disabled value={format(date, 'PP')} className="input input-bordered w-full max-w-xs" />
                        <select name='slot' className="select select-bordered w-full max-w-xs">
                            {
                                slots.map((slot, index) => <option
                                    key={index}
                                    value={slot}
                                >{slot}</option>)
                            }
                        </select>
                        <input name='name' type="text" disabled value={user?.displayName || "Username"} className="input input-bordered w-full max-w-xs" />
                        <input name='email' type="email" disabled value={user?.email} className="input input-bordered w-full max-w-xs" />
                        <input name='phone' type="text" placeholder="Phone number" className="input input-bordered w-full max-w-xs" required />
                        <input type="submit" value="Submit" className="btn text-white bg-gradient-to-r from-secondary to-primary w-full max-w-xs border-0" />
                    </form>
                </div>
            </div>
        </div >
    );
};

export default BookingModal;