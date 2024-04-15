import React, { useEffect ,useState} from 'react'
import { useParams } from 'react-router-dom';
import Navbar from '../components/Navbar';
const University_Page = () => {
    const [data, setdata] = useState({"Data":{"City":"","State": "", "PR Score": 0, "PR Rank": 0, "Score": 0, "Year": 0, "Rank": 0,"Institute ID": "","Name": "",}});
    const {name} = useParams()
    const getData= async()=>{
        const response = await fetch(`http://${process.env.REACT_APP_B_HOST}/getUnivData/${name}`, {
            method: "GET",
            headers: { "Content-Type": "application/json" },
          }
          ).then((res) => res.json()).then((res) => {setdata(res);})
    }
    useEffect(()=>{
        getData();
    },[])
  return (
    <div>
        <div className=" bg-[#aab7c5]">
            <div className='w-screen h-[9rem] bg-cover bg-no-repeat' style={{backgroundImage:"url(https://www.liberty.edu/wp-content/uploads/join-liberty-as-a-champion-for-christ-20190903_0386KT2.jpg)"}}>
            <div className='w-full h-full bg-[#0000005d]'>
                  <div className='flex justify-center h-[7rem]'>
                    <div className='text-white-A701 h-full  font-bold flex mx-auto mt-[3%] text-white text-[2rem] '><div className=''>{data["Data"].Name}</div></div>
                  </div></div>
            </div>
    </div>
            <div className='flex justify-center'>
            <div className='bg-white w-[90%] mt-4 rounded-lg pt-3'>
              <div className='text-black underline pl-8 text-2xl  text-center'>
                General Details:
              </div>
            <div className='flex mb-4 justify-center mt-8'>
                        <div className='w-[16rem] h-[9.2rem] rounded-lg border-[2px] mx-[2rem] bg-[#4242edcf]  '>
                        <div className='w-[16rem] h-[11.81rem] text-justify mt-4  text-[1rem] lowercase leading-[1.5625rem] text-gray-800 font-medium'>
                        <div className='flex justify-center text-xl capitalize mb-4 text-[#79ec59]'>Institute ID</div>
                        <div className='normal-case opacity-90 justify-center flex text-2xl text-[#f1964c]'>
                        {data["Data"]['Institute ID']}
                        </div>
                        </div>
                        </div>
                        <div className='w-[16rem] h-[9.2rem] rounded-lg border-[2px] mx-[2rem] bg-[#4242edcf] '>
                        <div className='w-[16rem] h-[11.81rem] text-justify mt-4  text-[1rem] lowercase leading-[1.5625rem] text-gray-800 font-medium'>
                        <div className=' justify-center text-xl capitalize mb-4 flex text-[#79ec59]'>City</div>
                        <div className='normal-case opacity-90 justify-center flex text-2xl text-[#f1964c]'>
                        {data["Data"]['City']}
                        </div>
                        </div>
                        </div>
                        <div className='w-[16rem] h-[9.2rem] rounded-lg border-[2px] mx-[2rem] bg-[#4242edcf] '>
                        <div className='w-[16rem] h-[11.81rem] text-justify mt-4  text-[1rem] lowercase leading-[1.5625rem] text-gray-800 font-medium'>
                        <div className=' justify-center text-xl capitalize mb-4 flex text-[#79ec59]'>State</div>
                        <div className='normal-case opacity-90 justify-center flex text-2xl text-[#f1964c]'>
                        {data["Data"]['State']}
                        </div>
                        </div>
                        </div>

                        
                    </div>
                    <div className='text-black underline pl-8 text-2xl text-center'>
                Rankings:
              </div>
            <div className='flex mb-4 justify-center mt-8'>
                        <div className='w-[16rem] h-[9.2rem] rounded-lg border-[2px] mx-[2rem] bg-[#4242edcf]  '>
                        <div className='w-[16rem] h-[11.81rem] text-justify mt-4  text-[1rem] lowercase leading-[1.5625rem] text-gray-800 font-medium'>
                        <div className='flex justify-center text-xl capitalize mb-4 text-[#79ec59]'> Rank</div>
                        <div className='normal-case opacity-90 justify-center flex text-2xl text-[#f1964c]'>
                        {data["Data"]['Rank']}
                        </div>
                        </div>
                        </div>
                        <div className='w-[16rem] h-[9.2rem] rounded-lg border-[2px] mx-[2rem] bg-[#4242edcf] '>
                        <div className='w-[16rem] h-[11.81rem] text-justify mt-4  text-[1rem] lowercase leading-[1.5625rem] text-gray-800 font-medium'>
                        <div className=' justify-center text-xl capitalize mb-4 flex text-[#79ec59]'>PR Score</div>
                        <div className='normal-case opacity-90 justify-center flex text-2xl text-[#f1964c]'>
                        {data["Data"]['PR Score']}
                        </div>
                        </div>
                        </div>
                        <div className='w-[16rem] h-[9.2rem] rounded-lg border-[2px] mx-[2rem] bg-[#4242edcf] '>
                        <div className='w-[16rem] h-[11.81rem] text-justify mt-4  text-[1rem] lowercase leading-[1.5625rem] text-gray-800 font-medium'>
                        <div className=' justify-center text-xl capitalize mb-4 flex text-[#79ec59]'>PR Rank</div>
                        <div className='normal-case opacity-90 justify-center flex text-2xl text-[#f1964c]'>
                        {data["Data"]['PR Rank']}
                        </div>
                        </div>
                        </div>
                        <div className='w-[16rem] h-[9.2rem] rounded-lg border-[1px] mx-[2rem] bg-[#4242edcf] '>
                        <div className='w-[16rem] h-[11.81rem] text-justify mt-4  text-[1rem] lowercase leading-[1.5625rem] text-gray-800 font-medium'>
                        <div className=' justify-center text-xl capitalize mb-4 flex text-[#79ec59]'>Score</div>
                        <div className='normal-case opacity-90 justify-center flex text-2xl text-[#f1964c]'>
                        {data["Data"]['Score']}
                        </div>
                        </div>
                        </div>
                        
                    </div>
            </div>
            </div>
    </div>
  )
}

export default University_Page