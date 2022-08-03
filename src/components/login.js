import { useEffect, useState } from "react";
import axios from 'axios';
export default function User() {
    const [users, setUsers] = useState([]);
    useEffect(() => {
        getAllUsers();
    }, [])
    const getAllUsers = async () => {
        try {
            debugger
            const res = await axios.get(`http://localhost:3333/user`);
            setUsers(res.data);
        } catch (err) {
            console.log(err)
        }
    };
    return (
        <>
            {/* <div>hi for all the users</div> */}
            {users && users.map(user =>
                <div key={user.password}>{user.userName}</div>
            )}
        </>
    )
}