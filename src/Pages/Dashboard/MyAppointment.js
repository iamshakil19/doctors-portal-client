import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';

const MyAppointment = () => {
    const [user] = useAuthState(auth)
    const [appointments, setAppointments] = useState([])
    const navigate = useNavigate()

    useEffect(() => {
        if (user) {
            fetch(` https://shrouded-mountain-98205.herokuapp.com/booking?patient=${user.email}`, {
                method: "GET",
                headers: {
                    "authorization": `Bearer ${localStorage.getItem("accessToken")}`
                }
            })
                .then(res => {
                    if (res.status === 401 || res.status === 403) {
                        navigate('/')
                    }
                    return res.json()
                })
                .then(data => {

                    setAppointments(data)
                })
        }
    }, [user])

    return (
        <div>
            <h2>My Appointments: {appointments.length}</h2>

            <div className="overflow-x-auto">
                <table className="table w-full">

                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Date</th>
                            <th>Time</th>
                            <th>Treatment</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            appointments.map((a, index) =>
                                <tr className='hover'>
                                    <th>{index + 1}</th>
                                    <td>{a.patientName}</td>
                                    <td>{a.date}</td>
                                    <td>{a.slot}</td>
                                    <td>{a.treatment}</td>
                                </tr>
                            )
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyAppointment;