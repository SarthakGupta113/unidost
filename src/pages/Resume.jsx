import React, { useState } from 'react';

function ResumeBuilder() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    summary: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const generatePDF = async () => {
    try {
      console.log(process.env.B_HOST)
      const response = await fetch(`http://${process.env.B_HOST}/generate-pdf`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('PDF generation failed');
      }

      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);

      // Create a download link for the PDF
      const a = document.createElement('a');
      a.style.display = 'none';
      a.href = url;
      a.download = 'resume.pdf';
      document.body.appendChild(a);
      a.click();
      window.URL.revokeObjectURL(url);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
             <div className='flex justify-center pt-5 bg-[#2791a942]'>
            <div className='flex w-[90%]'>
                <div className='w-[25%] pb-6 rounded-l-lg bg-[#3a85e7]'></div>
                <div className='w-[75%] pb-6 rounded-r-lg bg-white'>
                    <div className='ml-8 mt-9 font-semibold text-[#3a85e7]   text-2xl'>Resume Builder: Enter your Details</div>
                <hr className='w-[96%] mt-9 mb-14 h-[0.05rem] border-gray-300 bg-gray-300 mx-auto'/>
                <div className='flex pl-[2rem]'>
                    <div className='w-[40rem] text-[1.2rem] text-black'>
                    <div>
                    First Name
                    </div>
                    <input type="text" className='focus:outline-none' name="firstName" placeholder="Enter your First Name" onChange={handleInputChange} />
                    <hr className='w-[80%] my-2 h-[0.05rem] border-gray-300 bg-gray-300'/>
                    </div>
                    <div className='w-[40rem] text-[1.2rem] text-black'>
                    <div>
                    Last Name
                    </div>
                    <input type="text" className='focus:outline-none' name="lastName" placeholder="Enter your Last Name" onChange={handleInputChange} />
                    <hr className='w-[80%] my-2 h-[0.05rem] border-gray-300 bg-gray-300'/>
                    </div>
                </div>
                <div className='flex pl-[2rem] mt-[2rem]'>
                    <div className='w-[40rem] text-[1.2rem] text-black'>
                    <div>
                    Email
                    </div>
                    <input type="text" className='focus:outline-none' name="email" placeholder="Enter your Email" onChange={handleInputChange}/>
                    <hr className='w-[80%] my-2 h-[0.05rem] border-gray-300 bg-gray-300'/>
                    </div>
                    <div className='w-[40rem] text-[1.2rem] text-black'>
                    <div>
                    Summary
                    </div>
                    <input type="text" className='focus:outline-none' name="summary" placeholder="Enter your Summary" onChange={handleInputChange}/>
                    <hr className='w-[80%] my-2 h-[0.05rem] border-gray-300 bg-gray-300'/>
                    </div>
                </div>
                <div className='flex pl-[2rem] mt-[2rem]'>
                    <div className='w-[40rem] text-[1.2rem] text-black'>
                    <div>
                    Address
                    </div>
                    <input type="text" className='focus:outline-none' name="address" placeholder="Enter your Email" onChange={handleInputChange}/>
                    <hr className='w-[80%] my-2 h-[0.05rem] border-gray-300 bg-gray-300'/>
                    </div>
                    <div className='w-[40rem] text-[1.2rem] text-black'>
                    <div>
                    Phone No.
                    </div>
                    <input type="text" className='focus:outline-none' name="phone" placeholder="Enter your Summary" onChange={handleInputChange}/>
                    <hr className='w-[80%] my-2 h-[0.05rem] border-gray-300 bg-gray-300'/>
                    </div>
                </div>
                <div className='flex pl-[2rem] mt-[2rem]'>
                    <div className='w-[40rem] text-[1.2rem] text-black'>
                    <div>
                    Education
                    </div>
                    <input type="text" className='focus:outline-none' name="education" placeholder="Enter your Email" onChange={handleInputChange}/>
                    <hr className='w-[80%] my-2 h-[0.05rem] border-gray-300 bg-gray-300'/>
                    </div>
                    <div className='w-[40rem] text-[1.2rem] text-black'>
                    <div>
                    Job Experience
                    </div>
                    <input type="text" className='focus:outline-none' name="work_exp" placeholder="Enter your Summary" onChange={handleInputChange}/>
                    <hr className='w-[80%] my-2 h-[0.05rem] border-gray-300 bg-gray-300'/>
                    </div>
                </div>
                <div className='flex pl-[2rem] mt-[2rem]'>                 
                <div className='w-[40rem] text-[1.2rem] text-black'>
                    <div>
                    Skills
                    </div>
                    <input type="text" className='focus:outline-none' name="skills" placeholder="Enter your Email" onChange={handleInputChange}/>
                    <hr className='w-[62%] my-2 h-[0.05rem] border-gray-300 bg-gray-300'/>
                </div>
                <div className='w-[40rem] text-[1.2rem] text-black'>
                    <div>
                    Upload Profile Picture
                    </div>
                    <input type="file" className='focus:outline-none' name="image" placeholder="Upoad Your Picture" onChange={handleInputChange}/>
                    <hr className='w-[80%] my-2 h-[0.05rem] border-gray-300 bg-gray-300'/>
                    </div>
                </div>
            <div className='flex pl-[2rem] mt-16'>
                        <div className='w-[50%]'>
                        <button className='px-4 py-1 hover:bg-blue-500 hover:text-white text-xl text-gray-500 rounded-3xl'>Reset All</button>
                        </div>
                        <button className='ml-4 text-white rounded-3xl hover:bg-orange-400 text-xl px-4 py-1 bg-blue-500' onClick={generatePDF}>Submit</button>
                </div>
                </div>
            </div>
          </div>
    </div>
  );
}

export default ResumeBuilder;
