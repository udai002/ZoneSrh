import { useState } from "react"
import { IoMdClose } from "react-icons/io";
import {motion} from 'framer-motion'
import {Link} from 'react-router-dom'

const Navbar = ()=>{ 
    const [open , setOpen] = useState(false)
    
    return <div className="w-full flex flex-row justify-between sticky top-0 inset-0 z-50 bg-white/65  bg-opacity-45 ">
        <div className=" flex ">
            <h1 className="text-2xl font-bold mx-6 pt-4">ZoneSrh</h1>
            <ul className="flex-row text-lg mt-1 hidden md:flex pt-4">
                <li className="mx-4"><Link to='/'>Home</Link></li>
                <li className="mx-4"><Link to='/locations'>Location</Link></li>
                <li className="mx-4"><Link to='/about'>About</Link></li>
                <li className="mx-4"><Link to='/register'>Register</Link></li>
            </ul>
        </div>
        <div className="p-4 hidden md:block">
        <button className="mr-4 btn-black">Signin</button>
        <button className='btn-black'>Signup</button>
        </div>


{/* this is a opening menu  */}
        <div className="p-4 pt-6 md:hidden">
            {open?<motion.div initial={{opacity:0}} animate={{opacity:1}} transition={{delay:1}} ><IoMdClose className="text-2xl" onClick={()=>{setOpen(false)}} /></motion.div> :<div  onClick={()=>{setOpen(true)}}>
            <div className="w-8 border-b-[2px] border-black"></div>
            <div className="w-8 border-b-[2px] pt-2 border-black"></div>
            <div className="w-8 border-b-[2px] pt-2 border-black"></div>
            </div>}
            

           
        </div>


        {/* this is sideNavbar */}
        {open?<motion.div initial={{x:-300}} animate={{x:0}} className="fixed left-0 w-[240px]  h-[100vh] flex-col flex justify-around transition-transform transform translate-x-400 ease-in-out  overflow-auto inset-0 z-50 bg-white/95   bg-opacity-45 ">
            <div className="flex flex-row justify-center sticky" onClick={()=>{setOpen(false)}}>
            {/* <IoCloseCircle className="text-3xl m-4" /> */}
            <h1 className="text-3xl font-bold ">ZoneSRH</h1>
            </div>
            <ul className="p-4 text-center text-xl flex flex-col pt-10">
                <li className="mt-3"><Link to='/'>Home</Link></li>
                <li className="mt-3"><Link to='/locations'>Location</Link></li>
                <li className="mt-3"><Link to='/register'>Register</Link></li>
                <li className="mt-3"><Link to='/about'>About</Link></li>
            </ul>
            <div className="p-4 ">
        <button className="mx-4 btn-black">Signin</button>
        <button className='btn-black'>Signup</button>
        </div>
        </motion.div>:''}
        
</div>
}

export default Navbar 