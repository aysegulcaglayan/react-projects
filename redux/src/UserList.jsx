import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllUsers } from './redux/userSlice';
import { store } from './redux/store';
import User from './redux/User'
function UserList() {
    const dispatch = useDispatch();
    const { users } = useSelector(store => store.user);
    console.log(users)
    useEffect(() => {//Sayfa ilk yüklendildiğinde çağır

        dispatch(getAllUsers())
    }, [])// [] olmazsa sonsuz döngüye girer, sürekli çağırılır
    return (
        <div>
            {
                users && users.map((user) => (
                    <User key={user.id} user={user} />
                ))
            }
        </div>
    )
}

export default UserList
