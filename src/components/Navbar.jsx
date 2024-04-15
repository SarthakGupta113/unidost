import React,{useState,useEffect} from 'react'
import { Link ,useNavigate} from 'react-router-dom'
import "primereact/resources/themes/lara-light-indigo/theme.css"
import "primereact/resources/primereact.css";
import { AutoComplete } from "primereact/autocomplete";
const Navbar = () => {
    const [searchData, setsearchData] = useState([]);
    const [searchData1, setsearchData1] = useState([]);
    const [searchK, setsearchK] = useState("");
    const hist = useNavigate();
    const getList= async()=>{
        const response = await fetch(`http://localhost:3050/universityList`, {
            method: "GET",
            headers: { "Content-Type": "application/json" },
          }
          ).then((res) => res.json()).then((res) => {setsearchData(res.List);setsearchData1(res.List);})
    }
    useEffect(() => {
        getList();
    }, []);
    const fileterD = ()=>{
        setsearchData(searchData1.filter((el)=>el.toLowerCase().includes(searchK.toLowerCase())))
    }
    let onChange=(e)=>{
        setsearchK(e.target.value)
    }
    const onClick1 =()=>{
        hist(`/university/${searchK}`)
        window.location.reload();
    }
    return(
        <>
    <nav className='bg-white flex h-[5rem] shadow-md shadow-[#d8cfcf]'>
    <Link to={"/"} className='flex'>
    <div className='pt-2'>
    <img src="/icon.jpeg" className='ml-2' width={60} height={40}/>
    </div>
    <div className='flex pt-6 pl-4 text-2xl font-semibold'>
        <pre>
        UniDost
        </pre>
    </div>
    </Link>
    <div className='flex justify-center pr-10 items-center w-[70%]'>
    <div className=''>
    <div className=' border-2 pl-6 pr-4 border-[#c98e47d8] rounded-3xl flex  mt-2 h-[2.5rem] w-[20rem] '>
    <AutoComplete suggestions={searchData} size={25} className='input w-[90%] bg-white focus:outline-none' inputClassName='border-0 bg-white focus:outline-none' placeholder='Search for University' value={searchK} completeMethod={fileterD} onChange={onChange}/>
    <i className='fas fa-search text-cyan-500 text-lg mt-1 cursor-pointer' onClick={onClick1}></i>
    </div>
    </div>
    </div>
  </nav>
        </>)
}

export default Navbar