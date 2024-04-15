import React, { useEffect } from 'react'

const SCDisplay = ({data,setData}) => {
  let a = 1;
  let l = [];
  let l1 = [];
  const ffData=async()=>{
    for(let i of data){
        if(!(l1.includes(i.Name))){
            l.push(i)
        }
        l1.push(i.Name)
      }
      setData(l)
  }
  useEffect(()=>{
    if(a){
      ffData();
    }
  },[data])
  return (
    <>
    <div className='flex justify-center'>
    <div className='w-[60%] mt-1 pt-2'>
    <div className='text-2xl text-center '>Scholarships Results</div>
    </div>
    </div>
    <div className='pt-4'>
      {data.map((item)=>{ return(
      <div className='mt-2'>
        <div className='ml-6 bg-white px-4 py-2 flex border border-gray-700 rounded-xl'>
          {item.Outcome?<div className='w-[1rem] ml-[0.3rem] font-extrabold text-lg text-lime-500'>|</div>:<div className='w-[1rem] ml-[0.3rem] font-extrabold text-lg text-red-500'>|</div>}{<div className='w-[40rem]'>{item.Name.replace("?"," ")}</div>}<div className=''>{item.Outcome?<span className='font-semibold text-green-500'>Accepted</span>:<span className='font-semibold text-red-500'>Rejected</span>}</div>
        </div>
      </div>
 )})}
    </div>
    </>
  )
}

export default SCDisplay