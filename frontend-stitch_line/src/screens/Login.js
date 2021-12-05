import { Form, Button } from "react-bootstrap";
// import {useHistory} from 'react-router-dom'
import { useState } from "react";
import '../screens/css/Login.css'



const Login = () => {
    //const navigation = useHistory();

    const [username, setusername] = useState("");
    const [password, setpassword] = useState("");
    return (

        <div
        className="py-4 w-75"
        style={{
            alignItems:'center',
            height:'70%',
             marginLeft: "13%",
            marginTop: "8%",
            borderRadius: "10px",
            textAlign: "center",
            backgroundColor: "#334257",
        }}
      >
        <h1 style={{ color: "#fff", fontWeight:'inherit', marginTop: "10px" }}>
          LOGIN
        </h1>
        <h6 style={{ color: "#A7BBC7", marginTop: "5px" }}>
          Please enter your email and password !
        </h6>
  
        <Form.Control 
          onChange={(value) => {
            setusername(value.currentTarget.value);
          }}
          className="mt-5  w-75"
          style={{ borderRadius: "12px",marginLeft:'11%'}}
          size="lg"
          type="text"
          placeholder="User Name"
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
        
              <h6 style={{color:'#A7BBC7',marginTop:'25px',marginBottom:'20px'}}>Forget Password?</h6>
  
        <Button
        //   onClick={loginAdmin}
          className="mt-5"
          style={{ borderRadius: "12px", width: "130px",marginLeft:'60%' }}
          variant="outline-primary"
          size="md"
        >
          LOGIN
        </Button>
  
      </div>
    )
}

export default Login