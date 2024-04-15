import React, { useState } from 'react'
import SCDisplay from '../components/SCDisplay';
const Scholarship = () => {
const [data, setdata] = useState({"gender":"","caste":"","exmen":"","disable":"","sports":"","percentage":"","qualification":"","income":""});
let caste = ["Select your Caste","General","Minority","SC/ST","OBC"]
let gender = ["Select your Gender","Male","Female","Others"]
let annual = ["Select the Pecentage Range","90-100","80-90","70-80","60-70","Less the 60"]
let income = ["Select the Annual Income","Upto 1.5L","1.5L to 3L","3L to 6L","Above 6L"]
let qualification = ["Select your Qualification","Undergraduate","Postgraduate","Doctrate"]
const [isData, setisData] = useState(0);
const [scholarshipData, setscholarshipData] = useState([{"Name":""}]);
const onChange=(e)=>{
    setdata({...data,[e.target.name]:e.target.value})
}
const getResponse=async()=>{
    console.log(process.env)
    const response = await fetch(`http://${process.env.REACT_APP_B_HOST}/getScholarship`,{
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body:JSON.stringify({data})
    }).then((res)=>res.json()).then((res)=>{setscholarshipData(res["D1"]);setisData(1);console.log(res["D1"])})
}
const onSubmit = async()=>{
    console.log(data)
    await getResponse();
}
  return (
    <div>
        {isData?<><SCDisplay data={scholarshipData} setData={setscholarshipData} /></>:
        <div className='flex justify-center pt-5 bg-[#2791a942]'>
            <div className='flex w-[90%]'>
                <div className='w-[25%] h-screen rounded-l-lg bg-[#3a85e7]'></div>
                <div className='w-[75%] h-screen rounded-r-lg bg-white'>
                    <div className='ml-8 mt-9 font-semibold text-[#3a85e7]   text-2xl'>Scholarship Search: Enter your Details</div>
                <hr className='w-[96%] mt-9 mb-14 h-[0.05rem] border-gray-300 bg-gray-300 mx-auto'/>
                <div className='flex pl-[2rem]'>
                    <div className='w-[40rem] text-[1.2rem] text-gray-400'>
                    <div>
                    Gender
                    </div>
                    <select name="gender" onChange={onChange} value={data.gender} className='focus:outline-none w-[80%] font-semibold text-black mt-2'>
                        {gender.map((item)=>{
                            return(
                            <option name={item}>{item}</option>
                            )
                        })}
                    </select>
                    <hr className='w-[80%] my-2 h-[0.05rem] border-gray-300 bg-gray-300'/>
                    </div>
                    <div className='w-[40rem] text-[1.2rem] text-gray-400'>
                    <div>
                    Caste
                    </div>
                    <select name="caste" onChange={onChange} value={data.caste} className='focus:outline-none w-[80%] font-semibold text-black mt-2'>
                        {caste.map((item)=>{
                            return(
                            <option name={item}>{item}</option>
                            )
                        })}
                    </select>
                    <hr className='w-[80%] my-2 h-[0.05rem] border-gray-300 bg-gray-300'/>
                    </div>
                </div>
                <div className='flex pl-[2rem] mt-5'>
                    <div className='w-[40rem] text-[1.2rem] text-gray-400'>
                    <div>
                    Exservice Men
                    </div>
                    <div className='flex text-black'>
                        <label className='ml-3 mr-7 mt-2'><input type="radio" name='exmen' onChange={onChange} value="Yes"/>Yes</label>
                        <label className='mr-7 mt-2'><input type="radio" name='exmen' onChange={onChange} value="No"/>No</label>
                    </div>
                    </div>
                    <div className='w-[40rem] text-[1.2rem] text-gray-400'>
                    <div>
                    Physical Disablity
                    </div>
                    <div className='flex text-black'>
                        <label className='ml-3 mr-7 mt-2'><input type="radio" name='disable' onChange={onChange} value="Yes"/>Yes</label>
                        <label className='mr-7 mt-2'><input type="radio" name='disable' onChange={onChange} value="No"/>No</label>
                    </div>
                    </div>
                </div>
                <div className='flex pl-[2rem] mt-7'>
                <div className='w-[40rem] text-[1.2rem] text-gray-400'>
                    <div>
                    Sports Quota
                    </div>
                    <div className='flex text-black'>
                        <label className='ml-3 mr-7 mt-2'><input type="radio" name='sports' onChange={onChange} value="Yes" />Yes</label>
                        <label className='mr-7 mt-2'><input type="radio" name='sports' onChange={onChange} value="No" />No</label>
                    </div>
                    </div>
                    <div className='w-[40rem] text-[1.2rem] text-gray-400'>
                    <div>
                    Percentage Obtained
                    </div>
                    <select name="percentage" className='focus:outline-none w-[80%] font-semibold text-black mt-2' value={data.percentage} onChange={onChange}>
                        {annual.map((item)=>{
                            return(
                            <option name={item}>{item}</option>
                            )
                        })}
                    </select>
                    <hr className='w-[80%] my-2 h-[0.05rem] border-gray-300 bg-gray-300'/>
                    </div>
                </div>
                <div className='flex pl-[2rem] mt-5'>
                    <div className='w-[40rem] text-[1.2rem] text-gray-400'>
                    <div>
                    Education Qualification
                    </div>
                    <select name="qualification" className='focus:outline-none w-[80%] font-semibold text-black mt-2' onChange={onChange} value={data.qualification}>
                        {qualification.map((item)=>{
                            return(
                            <option name={item}>{item}</option>
                            )
                        })}
                    </select>
                    <hr className='w-[80%] my-2 h-[0.05rem] border-gray-300 bg-gray-300'/>
                    </div>
                    <div className='w-[40rem] text-[1.2rem] text-gray-400'>
                    <div>
                    Annual Income
                    </div>
                    <select name="income" className='focus:outline-none w-[80%] font-semibold text-black mt-2' onChange={onChange} value={data.income}>
                        {income.map((item)=>{
                            return(
                            <option name={item}>{item}</option>
                            )
                        })}
                    </select>
                    <hr className='w-[80%] my-2 h-[0.05rem] border-gray-300 bg-gray-300'/>
                    </div>
                </div>
                <div className='flex pl-[2rem] mt-16'>
                        <div className='w-[50%]'>
                        <button className='px-4 py-1 hover:bg-blue-500 hover:text-white text-xl text-gray-500 rounded-3xl'>Reset All</button>
                        </div>
                        <button className='ml-4 text-white rounded-3xl hover:bg-orange-400 text-xl px-4 py-1 bg-blue-500' onClick={onSubmit}>Submit</button>
                </div>
                </div>
            </div>
        </div>}
    </div>
  )
}

export default Scholarship