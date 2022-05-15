import React from 'react';
import { toast } from 'react-toastify';

const UserRow = ({ user, refetch }) => {
    const { email, role } = user;
    const makeAdmin = () => {
        fetch(` https://shrouded-mountain-98205.herokuapp.com/user/admin/${email}`, {
            method: 'PUT',
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => {
                if (res.status === 403) {
                    toast.error("Failed to make an admin");

                }
                return res.json()
            })
            .then(data => {
                if (data.modifiedCount > 0) {
                    toast.success(`Successfully made an admin`);
                    refetch()
                }
            })
    }
    return (
        <tr>
            <th>1</th>
            <td>{email}</td>
            <td>{
                role !== 'admin' &&
                <button onClick={makeAdmin} className='btn btn-xs border-0'>Make Admin</button>
            }</td>
            <td><button className='btn btn-xs bg-red-400 border-0 text-white hover:bg-red-600'>Delete User</button></td>
        </tr>
    );
};

export default UserRow;