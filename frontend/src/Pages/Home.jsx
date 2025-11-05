import React from 'react'

import vc from "../assets/vc.jpg"
import bg from "../assets/bg.jpg"
import { Link, useNavigate } from 'react-router-dom'
import Button from '../components/common/Button'
function Home() {
  const navigate = useNavigate();
  return (
    <div className='w-[100vw] h-[100vh] text-white overflow-x-hidden bg-cover' style={{ backgroundImage: `url(${bg})` }}>
      <nav className='py-4 px-5 flex flex-col sm:flex-row justify-between items-center sm:items-baseline sm:gap-0'>
        <div>
          <p className='font-bold text-3xl sm:text-4xl' >Video Call</p>
        </div>
        <div className='flex flex-col sm:flex-row gap-4 sm:gap-8 cursor-pointer items-center'>
          <p  className='font-semibold hover:text-[#e4685d] transition' 
            onClick={() => {navigate("/vfe3")}}
          >Join as Guest</p>
          <p className='font-semibold hover:text-[#e4685d] transition' onClick={() => {navigate("/auth")}}> Register</p>
          <Link to={"/auth"}>
              <Button text={"Login"}/>
          </Link>
        </div>

        
      </nav>

      {/* main Container */}
      <div className='flex flex-col lg:flex-row gap-[2rem] h-auto lg:h-[70vh] px-[2rem] items-center mt-[2rem] lg:mt-[4rem]'>
        {/* left part */}
        <div className='flex flex-col gap-3 text-center lg:text-left max-w-[500px]' >
          <div className='font-bold text-3xl sm:text-4xl lg:5xl leading-snug'><span style={{color:"#e4685d"}}>Connect</span> with your Friend</div>
          <div className=' font-semibold text-lg sm:text-xl'>Cover a distance by video call </div>
          <div role='button' className='mt-4 flex justify-center lg:justify-start'>
            <Link to={"/auth"}>
              <Button text={"Get Started"}/>
            </Link>
          </div>
        </div>

        {/* right part */}
          <div className=" lg:w-[60vw] lg:h-[70vh] xl:[70vw] sm:[50vw] md:[60vw] 
           rounded-lg overflow-hidden shadow-md shadow-black hover:shadow-black object-cover transform transition duration-300 hover:scale-105">
          <img
            src={vc}
            alt="vc"
            className="w-full h-full object-fill"
          />
        </div>

      </div>
      
    </div>
    

  )
}

export default Home