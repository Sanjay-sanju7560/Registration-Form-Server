const student = require('../Models/studentModel')

exports.register = async (req,res)=>{
    const {firstname,lastname,address,email,gender,mobile,password,dob,course} = req.body
    console.log("Inside register request");
 try{
     // CHECK EMMAIL ALREADY EXISTS
   const existingStudent = await student.findOne({email})
   console.log(existingStudent);
   if(existingStudent){
    res.status(406).json("User Already Exists!! Please Login...")
   } else{
    // add user to db
    const newStudent = student({
        firstname,lastname,address,email,gender,mobile,password,dob,course
    })
    await newStudent.save()
    res.status(200).json(newStudent)
}
 }catch(err){
        res.status(401).json(err)
    }
}