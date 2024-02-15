import { useState } from "react"
import { IoCloseCircle } from "react-icons/io5";
import {motion} from 'framer-motion'

const Navbar = ()=>{ 
    const [open , setOpen] = useState(false)
    
    return <div className="w-full flex flex-row justify-between sticky inset-0 z-50   bg-opacity-45 ">
        <div className=" flex ">
            <h1 className="text-2xl font-bold mx-6 pt-4">ZoneSrh</h1>
            <ul className="flex-row text-lg mt-1 hidden md:flex pt-4">
                <li className="mx-4">Home</li>
                <li className="mx-4">Location</li>
                <li className="mx-4">About</li>
                <li className="mx-4">Register</li>
            </ul>
        </div>
        <div className="p-4 hidden md:block">
        <button className="mr-4 btn-black">Signin</button>
        <button className='btn-black'>Signup</button>
        </div>


{/* this is a opening menu  */}
        <div className="p-4 md:hidden" onClick={()=>{setOpen(true)}}>
            <div className="w-8 border-b-[2px] border-black"></div>
            <div className="w-8 border-b-[2px] pt-2 border-black"></div>
            <div className="w-8 border-b-[2px] pt-2 border-black"></div>
        </div>


        {/* this is sideNavbar */}
        {open?<motion.div initial={{x:-250}} animate={{x:0}} className="fixed left-0 w-[240px] bg-white h-[90vh] flex-col flex justify-between transition-transform transform translate-x-400 ease-in-out duration-300 overflow-auto">
            <div className="flex flex-row justify-end sticky" onClick={()=>{setOpen(false)}}>
            <IoCloseCircle className="text-3xl m-4" />
            </div>
            <ul className="p-4 text-center text-xl flex flex-col pt-10">
                <li className="mt-3">Home</li>
                <li className="mt-3">Location</li>
                <li className="mt-3">Register</li>
                <li className="mt-3">About</li>
            </ul>
            <div className="p-4 ">
        <button className="mx-4 btn-black">Signin</button>
        <button className='btn-black'>Signup</button>
        </div>
        </motion.div>:''}
        
</div>
}

export default Navbar 