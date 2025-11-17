import React from 'react'
import UI_IMG from "../../assets/images/auth-img.png"
import BG_IMG from "../../assets/images/bg-img.png" // ✅ Import your background

const AuthLayout = ({ children }) => {
  return (
    <div className="flex">
      {/* Left side (form) */}
      <div className="w-screen h-screen md:w-[60vw] px-12 pt-8 pb-12">
<<<<<<< HEAD
        <img src="/vznx.png" alt="Company Logo" className="h-10 w-auto" />
=======
        <h2 className="font-stack text-2xl text-black ">Task Manager</h2>
>>>>>>> 0c51e77eaa8e2a04f0ee88da6f3983da03d1990f
        {children}
      </div>

      {/* Right side (background + image) */}
      <div
        className="hidden md:flex w-[40vw] h-screen items-center justify-center bg-blue-50 bg-cover bg-no-repeat bg-center overflow-hidden p-8"
        style={{ backgroundImage: `url(${BG_IMG})` }} 
      >
        <img src={UI_IMG} className="w-64 lg:w-[90%]" alt="UI" />
      </div>
    </div>
  )
}

export default AuthLayout
