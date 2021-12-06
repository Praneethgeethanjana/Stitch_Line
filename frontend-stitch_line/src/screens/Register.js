import { Form, Button,InputGroup,FormControl } from "react-bootstrap";
import { useState } from "react";



const Register = () => {

    const [username, setusername] = useState("");
    const [fullname,setfullname] = useState("");
    const [mobile,setmobile] = useState("");
    const [dob,setdob] = useState("");
    const [gender,setgender] = useState("");
    const [password, setpassword] = useState("");
   


    return (
        
        <div
        className="py-4 w-75"
        style={{
           
            height:'70%',
             marginLeft: "13%",
            marginTop: "8%",
            borderRadius: "10px",
            textAlign: "center",
            backgroundColor: "#202833",
        }}
      >
        <h1 style={{ color: "#fff", fontWeight:'inherit', marginTop: "10px" }}>
          REGISTRATION
        </h1>
        <h6 style={{ color: "#A7BBC7", marginTop: "5px" }}>
          Please enter your details !
        </h6>


        {/* <div class="p-6 card bordered"/>
  <div class="form-control">
    <label class="cursor-pointer label">
      <span class="label-text">Neutral</span> 
      <input type="radio" name="opt" checked="checked" class="radio" value=""/>
    </label>
  </div> 
  <div class="form-control">
    <label class="cursor-pointer label">
      <span class="label-text">Primary</span> 
      <input type="radio" name="opt" checked="checked" class="radio radio-primary" value=""/>
    </label> */}
  
        <Form.Control  onChange={(value) => {
            setusername(value.currentTarget.value);
          }} 
          className="mt-5 w-75" style={{borderRadius:'12px',marginLeft:'11%'}} size="lg" type="text" placeholder="User Name" />

          
        <Form.Control onChange={(value) =>{
          setfullname(value.currentTarget.value);
        }} 
         
          className="mt-5  w-75"
          style={{ borderRadius: "12px",marginLeft:'11%'}}
          size="lg"
          type="text"
          placeholder="Full Name"
        />

        <Form.Control onChange={(value) => {
          setmobile(value.currentTarget.value);
        }}
         
         className="mt-5  w-75"
         style={{ borderRadius: "12px",marginLeft:'11%'}}
         size="lg"
         type="text"
         placeholder="Mobile Number"
       />

        <h5 className="mt-5 ml-0" style={{ color: "#fff" }}>Date of Birth</h5>
       <Form.Control onChange={(value) =>{
         setdob(value.currentTarget.value);
       }}  
         
         className="mt-1  w-75"
         style={{ borderRadius: "12px",marginLeft:'11%'}}
         size="lg"
         type="date"
        
         placeholder="Date"
       />


  


        <Form.Control 
          onChange={(value) => {
            setpassword(value.currentTarget.value);
          }}
          className="mt-5  w-75"
          style={{  borderRadius: "12px", marginLeft: "11%" }}
          size="lg"
          type="password"

          placeholder="Password"
        />
        
             
  
        <Button
        //   onClick={loginAdmin}
          className="mt-5"
          style={{ borderRadius: "12px", width: "130px",marginLeft:'60%' }}
          variant="outline-primary"
          size="md"
        >
          REGISTER
        </Button>
  
      </div>
    )
}

export default Register
