import React, { useContext, useEffect, useState } from 'react'
import myContext from '../context/data/myContext';
import Layout from './../components/Layout/Layout';



function Profile() {
    const context = useContext(myContext);
    const { allNotes } = context;

    const [user, setUser] = useState([]);

    const userData = async () => {
        const res = await fetch(`${import.meta.env.VITE_BACKEND_HOST_URL}/api/auth/getuser`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'auth-token': localStorage.getItem('token')
            }
        });

        const userData = await res.json();
        // console.log(userData);
        setUser(userData);
    }

    useEffect(() => {
        userData();
    }, []);
    return (
        <Layout>
            <div className="  mt-32 lg:mt-20 lg:mx-[30em]">
                <div className="flex items-center justify-center  mb-2">
                    <img className=" w-28" src="https://images.unsplash.com/photo-1511367461989-f85a21fda167?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1931&q=80" alt="img" />
                </div>
                <h1 className='text-center font-semibold'>{user.name}</h1>
                <h1 className='text-center font-semibold'>{user.email}</h1>
                <h1 className='text-center font-semibold'>Total Notes Created : {allNotes.length}</h1>
            </div>
        </Layout>
    )
}

export default Profile