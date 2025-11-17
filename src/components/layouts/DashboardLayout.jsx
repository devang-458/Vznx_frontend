import React, { useContext } from 'react'
import Navbar from './Navbar'
import { UserContext } from '../../context/userContext'
import SideMenu from './SideMenu';

const DashboardLayout = ({activeMenu, children}) => {
    const { user } = useContext(UserContext);
    return (
<<<<<<< HEAD
        <div className='h-screen overflow-hidden'>
            <Navbar activeMenu={activeMenu} />

            {user && (
                <div className='flex h-full'>
=======
        <div className=''>
            <Navbar activeMenu={activeMenu} />

            {user && (
                <div className='flex'>
>>>>>>> 0c51e77eaa8e2a04f0ee88da6f3983da03d1990f
                    <div className='max-[1080px]:hidden'>
                        <SideMenu activeMenu={activeMenu} />
                    </div>

<<<<<<< HEAD
                    <div className={`grow h-full overflow-y-auto bg-light-gray ${activeMenu !== "Messages" ? "pb-16" : ""}`}>
=======
                    <div className='grow mx-5'>
>>>>>>> 0c51e77eaa8e2a04f0ee88da6f3983da03d1990f
                        {children}
                    </div>
                </div>
            )}
        </div>
    )
}

export default DashboardLayout