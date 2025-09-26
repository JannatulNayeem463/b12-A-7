import { useEffect, useState } from 'react'

import { ToastContainer,toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import BannerCunts from './components/bannerCunts/bannerCunts'
import CardTask from './components/CardTask/CardTask'
import TaskStatus from './components/TaskStatus/TaskStatus'
import ResolvedTask from './components/ResolvedTask/ResolvedTask'

const fetchBanner = async () => {
  const res = await fetch("/banner.json")
  return res.json()
}

const fetchCard = async () => {
  const res = await fetch("/customer.json")
  return res.json()
}

function App() {

  const bannerPromies = fetchBanner()
  const cardPromies = fetchCard()
/*-----*/
  
  const [cardData, setCardData] = useState([])
  const [taskStatusCards, setTaskStatusCards] = useState([])
  const [inProgressCount, setInProgressCount] = useState(0)
  const [resolvedCount, setResolvedCount] = useState(0)
  const [resolvedTasks, setResolvedTasks] = useState([]) 
 
  useEffect(() => {
    fetchCard().then(data => {
      setCardData(data)
    })
  }, [])

  const handleCardClick = (card) => {
    const alreadyAdded =  taskStatusCards.find(item => item.id === card.id)
   if (alreadyAdded) {
      toast.warning("🟡 Ticket already added to Task Status")
      return
    }

    
    setTaskStatusCards(prev => [...prev, card])

    setInProgressCount(prev => prev + 1)
    setCardData(prev => prev.filter(item => item.id !== card.id))

    toast.success("✅ Ticket added to Task Status")
  }
  const handleComplete = (id) => {
    const completedTask = taskStatusCards.find(task => task.id === id);

    setTaskStatusCards(prev => prev.filter(task => task.id !== id));
   setResolvedTasks(prev => [...prev, completedTask]);
   
    setInProgressCount(prev => Math.max(prev - 1, 0));
    setResolvedCount(prev => prev + 1);
    toast.success(`✅ "${completedTask?.title}"`);
    toast.info(`✅ Task "${completedTask?.title}"`)
  }

  return (
    <>
     <div className="navbar bg-base-100 shadow-sm">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
              <li><a>Home</a></li>
              <li><a>FAQ</a></li>
              <li><a>Changelog</a></li>
              <li><a>Blog</a></li>
              <li><a>Download</a></li>
              <li><a>Contact</a></li>

            </ul>
          </div>
          <a className="btn btn-ghost text-2xl font-bold ">CS — Ticket System</a>
        </div>
        <div className="navbar-end hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li><a>Home</a></li>
            <li><a>FAQ</a></li>
            <li><a>Changelog</a></li>
            <li><a>Blog</a></li>
            <li><a>Download</a></li>
            <li><a>Contact</a></li>
          </ul>

          <a className="btn  bg-gradient-to-r from-[#632ee3] to-[#9f62f2] text-white"> + New Ticket</a>
        </div>
      </div>
         

      <div className="bg-[#e5e7eb]" >
        <BannerCunts bannerPromies={bannerPromies} inProgressCount={inProgressCount}></BannerCunts>
       <div className="flex"> <CardTask cardPromies={cardPromies} onCardClick={handleCardClick}></CardTask>
       <div> <TaskStatus tasks={taskStatusCards} onComplete={handleComplete}></TaskStatus>
        <ResolvedTask resolvedTasks={resolvedTasks} onComplete={handleComplete} ></ResolvedTask></div>
        </div>
        </div>
        <ToastContainer position="top-right" autoClose={2000} />

   <div className="footer bg-black">    
        <footer className="footer sm:footer-horizontal bg-neutral text-neutral-content p-10">
   <div>
    <h2 className=" text-2xl ml-5 font-bold text-white">CS — Ticket System</h2>
    <p className="link link-hover text-[#a1a1aa] mt-4">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
     <p className="text-[#a1a1aa]"> Lorem Ipsum has been the industry's standard dummy text ever since the</p> 
         1500s, when an unknown printer took a galley of type and
         <p className="text-[#a1a1aa]"> scrambled it to make a type specimen book.</p>
   
  </div>
  <nav>
    <h4 className="font-bold">Company</h4>
    
    <a className="link link-hover text-[#a1a1aa]">About us</a>
    <a className="link link-hover text-[#a1a1aa]">Our Mission</a>
    <a className="link link-hover text-[#a1a1aa]">Contact Saled</a>
   
    </nav>

  <nav>
    <h4 className=" font-bold">Services</h4>
    <a className="link link-hover text-[#a1a1aa]">Branding</a>
    <a className="link link-hover text-[#a1a1aa]">Design</a>
    <a className="link link-hover text-[#a1a1aa]">Marketing</a>
   
  </nav>
  <nav>
    <h4 className="font-bold ">Information</h4>
    <a className="link link-hover text-[#a1a1aa]">Terms of use</a>
    <a className="link link-hover text-[#a1a1aa]">Privacy policy</a>
    <a className="link link-hover text-[#a1a1aa]">Cookie policy</a>
  </nav>
  </footer>
<div className="bg-black text-[#a1a1aa] font-[12px] flex justify-center text-center w-full ">
    <p className="  "> © 2025 CS — Ticket System. All rights reserved.</p>
  </div>
   </div>    
    </>
  )
}
export default App
