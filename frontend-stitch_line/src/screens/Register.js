import { Form, Button} from "react-bootstrap";
import { useState} from "react";
import axios from "axios";
import { useHistory } from "react-router";



const Register = () => {

    const navigation = useHistory();

    const [username, setusername] = useState("");
    const [fullname,setfullname] = useState("");
    const [mobile,setmobile] = useState("");
    const [dob,setdob] = useState("");
    const [password, setpassword] = useState("");
    const [confirm, setconfirm] = useState('');

    const [errmsg, seterrmsg] = useState(false);
    const [errmsgtext, seterrmsgtext] = useState('');
  


    function haveUserName() {
      return axios({
        method: 'GET',
        url: `http://localhost:8080/api/v1/service/register/${username}`,
      })
        .then(res => {
          return res.data;
        })
        .catch(err => {
          console.log(err);
        });
    }

        // New Registration
  //       function saveUser() {
        
  //         axios({
  //           method: 'POST',
  //           url: 'http://localhost:8080/api/v1/service/register',
  //           data: {

  //             username: username,
  //             fullname: fullname,
  //             mobile: mobile,
  //             dob: dob,
  //             password:password,
  //           },
  //         }).then(res => {
  //           if (res.data) {
  //             navigation.push('/program');
  //           }
  //         })
  //     .catch(err => {
  //       console.log(err);
  //     });
  // }

  function saveUser() {
    haveUserName()
      .then(result => {
        if (result) {
          seterrmsg(true);
          seterrmsgtext('Email already exists');
        } else if (password !== confirm) {
          seterrmsg(true);
          seterrmsgtext('Wrong password');
        } else {
          axios({
            method: 'POST',
            url: 'http://localhost:8080/api/v1/service/register',
            data: {
              username: username,
              fullname: fullname,
              mobile: mobile,
              dob: dob,
              password:password,
            },
          }).then(res => {
            if (res.data) {
              navigation.push("/program");
            }
          });
        }
      })
      .catch(err => {
        console.log(err);
      });
  }


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
         onClick={saveUser}
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
