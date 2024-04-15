import React, { useState ,useEffect} from 'react'
import { Link } from 'react-router-dom'
const Home = () => {
    return (
    <>
          <div className="bg-[#c0b3b33b] min-h-screen pb-[3rem]">
            <div className='w-screen h-[16rem] bg-cover bg-no-repeat' style={{backgroundImage:"url(/bml_bg.jpg)"}}>
            <div className='w-full h-full bg-[#0000005d]'>
                  <div className='flex justify-center h-[7rem]'>
                    <div className='text-white-A701 h-full  font-bold text-center mx-auto mt-[5%] text-white text-[2rem]'>Navigating Your Future: Expert Career Guidance</div>
                  </div></div>
            </div>
            <div className='flex justify-center text-2xl  pt-8 text-purple-600 '>
              Explore Our Useful Tools 
            </div>
            <div className='flex mb-4 justify-center mt-4'>
                        <Link to={"/scholarship-form"}>
                        <div className='w-[24rem] h-[9.2rem] rounded-lg border-[1px] mx-[2rem] border-[#1142] bg-gradient-to-r from-[#ac53d9] via-[#9b23d7] to-[#8128ad]'>
                        <div className='w-[20rem] h-[11.81rem] text-justify mt-4 ml-4 text-[1rem] lowercase leading-[1.5625rem] text-gray-800 font-medium'>
                        <div className='text-center justify-center text-xl capitalize mb-4 flex text-red-300'><i className="fa-solid  text-red-300 fa-graduation-cap mt-[0.34rem] mr-3"></i>Exploring Scholarship</div>
                        <div className='normal-case opacity-90 text-center text-2xl text-[white]'>
                        "Unlocking Opportunities"
                        </div>
                        </div>
                        </div>
                        </Link>
                        <Link to={"/resume"}>
                        <div className='w-[24rem] h-[9.2rem] rounded-lg border-[1px] mx-[2rem] border-[#1142] bg-gradient-to-r from-[#ac53d9] via-[#9b23d7] to-[#8128ad]'>
                        <div className='w-[20rem] h-[11.81rem] text-justify mt-4 ml-4 text-[1rem] lowercase leading-[1.5625rem] text-gray-800 font-medium'>
                        <div className='text-center justify-center text-xl capitalize mb-4 flex text-red-300'><i className="fa-solid text-red-300  fa-envelope mt-[0.34rem] mr-3"></i>Resume Builder</div>
                        <div className='normal-case opacity-90 text-center text-2xl text-[white]'>
                        "Resume That Make an Impact"
                        </div>
                        </div>
                        </div>
                        </Link>
                        
            </div>
            <div className='flex justify-center text-2xl text-purple-600 py-4'>
              Why you should use UniDost as your Career Guide ?
            </div>
            <div className='flex justify-center'>
            <div className='w-[75rem] mt-41 h-[21rem]  rounded-lg text-lg border-[1px] flex pl-20 text-justify mx-[0.5rem] px-9 py-8  border-[#1142] bg-[white]'>
            <div>
            <div className='font-semibold py-2'>
              You Should be using UniDost as we are capable for the following: 
            </div>
            Comprehensive Scholarship Exploration: UniDost offers an extensive database of scholarships, making it easier for users to discover funding opportunities that align with their academic achievements, interests, and goals. We save you time and effort by curating scholarships from various sources.
            <div className='py-2'>
            Expert Resume Building: Our intuitive resume builder empowers you to create professional and tailored resumes with ease. Whether you're applying for a job, internship, or further education, a standout resume can make all the difference in securing opportunities.
            </div>
            <div className='py-2'>
            Streamlined University Shortlisting: Finding the right educational institution can be overwhelming. UniDost simplifies this process by helping you shortlist universities and colleges that align with your academic interests, career aspirations, and location preferences.
            </div>

            </div>
            
                        </div>
            </div>
    </div>
    </>

    )
}

export default Home