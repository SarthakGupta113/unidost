const express = require("express")
const  XLSX = require("xlsx")
const cors = require("cors")
const body = require("body-parser")
const fs = require('fs');
const PDFDocument = require("pdfkit")
const searchFile = XLSX.readFile(__dirname+"/College_data.xlsx")
const search_sheet = searchFile.Sheets[searchFile.SheetNames[0]]
const searchJson = XLSX.utils.sheet_to_json(search_sheet)
const searchFile1 = XLSX.readFile(__dirname+"/IndianUniversityRankingFrom2017to2021.xlsx")
const search_sheet1 = searchFile1.Sheets[searchFile1.SheetNames[0]]
const searchJson1 = XLSX.utils.sheet_to_json(search_sheet1)
const searchFile2 = XLSX.readFile(__dirname+"/dataset_combined.xlsx")
const search_sheet2 = searchFile2.Sheets[searchFile2.SheetNames[0]]
const searchJson2 = XLSX.utils.sheet_to_json(search_sheet2)
const app = express()
app.use(body.json());
app.use(cors());
app.listen(3050,()=>{
    console.log("Server is running on port : 3050")
})
app.get("/universityList",(req,res)=>{
    let list = searchJson1.map((item)=>item.Name)
    res.json({"List":list})
})
app.get("/getUnivData/:Name",(req,res)=>{
    let getData = searchJson1.filter((item)=>item.Name==req.params.Name.replace("%20"," "))
    res.json({"Data":getData[0]})
})
const d = async(dfq)=>{
    let d = await searchJson2.filter((item)=>item.Qualification==dfq.qualification && item.Gender==dfq.gender && item.Community== dfq.caste &&item.ExserviceMen==dfq.exmen &&item.Disability==dfq.disable && item.Sports == dfq.sports && item.AnnualPercentage ==dfq.percentage &&item.Income ==dfq.income )
    return d;
}
app.post("/getScholarship",async (req,res)=>{
    console.log(req.body)
    let s = await d(req.body.data)
    console.log(s)
    res.json({"D1":s})
})
app.post('/generate-pdf', async (req, res) => {
  try {
    const { firstName, lastName, email, summary ,address , phone,education,work_exp,skills} = req.body;

    // Create a new PDF document
    const doc = new PDFDocument();

    // Pipe the PDF output to the response stream
    res.setHeader('Content-Type', 'application/pdf');
    res.setHeader('Content-Disposition', 'attachment; filename=resume.pdf');
    doc.pipe(res);
    // Draw the image on the PD
    // Draw content on the PDF page
    doc.fontSize(20).text("Your Resume", 250, 100);
    doc.fontSize(14).text(`Name: ${firstName} ${lastName}`, 50, 150);
    doc.fontSize(14).text(`Email: ${email}`, 50, 200);
    doc.fontSize(14).text(`Summary: ${summary}`, 50, 250);
    doc.fontSize(14).text(`Address: ${address}`, 50, 300);
    doc.fontSize(14).text(`Phone: ${phone}`, 50, 350)
    doc.fontSize(14).text(`Education: \n ${education}`, 50, 400);
    doc.fontSize(14).text(`Work Experience: \n ${work_exp}`, 50, 450);
    doc.fontSize(14).text(`Skills: ${skills}`, 50, 500);

    // Finalize the PDF and end the response
    doc.end();
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
}
);