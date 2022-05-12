import React from 'react';
import { format } from 'date-fns';

const BookingModal = ({ treatment, date, setTreatment }) => {
    const { name, slots } = treatment

    const handleBooking = event => {
        event.preventDefault()
        const timeSlot = event.target.timeSlot.value;
        console.log(timeSlot);
        setTreatment(null)
    }
    return (
        <div>
            <input type="checkbox" id="booking-modal" class="modal-toggle" />
            <div class="modal modal-bottom sm:modal-middle">
                <div class="modal-box">
                    <label for="booking-modal" class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 class="font-bold text-lg text-primary mb-3">{name}</h3>
                    <form onSubmit={handleBooking} className='grid gap-3 justify-items-center'>
                        <input type="text" disabled value={format(date, 'PP')} class="input input-bordered w-full max-w-xs" />
                        <select name='timeSlot' class="select select-bordered w-full max-w-xs">
                            {
                                slots.map(slot => <option value={slot}>{slot}</option>)
                            }
                        </select>
                        <input name='name' type="text" placeholder="Your name" class="input input-bordered w-full max-w-xs" />
                        <input name='email' type="email" placeholder="Email address" class="input input-bordered w-full max-w-xs" />
                        <input name='phone' type="text" placeholder="Phone number" class="input input-bordered w-full max-w-xs" />
                        <input type="submit" value="Submit" class="btn text-white bg-gradient-to-r from-secondary to-primary w-full max-w-xs border-0" />
                    </form>
                </div>
            </div>
        </div >
    );
};

export default BookingModal;