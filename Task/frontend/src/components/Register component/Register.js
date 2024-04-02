import { useState } from "react";
import axios from "axios";
import { Button, TextField } from "@mui/material";
const Register = () => {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [confirmpassword, setConfirmPassword] = useState();
  const [mobile, setMobile] = useState();
  const [output, setOutput] = useState();
  const [images, setImages] = useState({});

  const handleRegister = () => {
    console.log(images[0]);
    const formData = new FormData();
    formData.append("fullname", name);
    formData.append("email", email);
    formData.append("mobile", mobile);
    formData.append("password", password);
    formData.append("confirmpassword", confirmpassword);
    formData.append("fileData", images[0]);

    axios
      .post("http://localhost:3001/user/register", formData)
      .then((res) => {
        setOutput("Registered Successfully");
        setName("");
        setEmail("");
        setMobile("");
        setPassword("");
        setConfirmPassword("");
        setImages("");
      })
      .catch((error) => {
        setOutput("User Not Registered");
        console.log(error);
      });
  };
  return (
    <>
      <center>
        <h1>Register Heree !!</h1>
        <label style={{ fontSize: "20px" }}>Name</label>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <TextField
          type="text"
          label="Enter name here"
          value={name}
          onChange={(event) => setName(event.target.value)}
          size="small"
        />
        <br />
        <br />
        <label style={{ fontSize: "20px" }}>Email</label>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <TextField
          type="text"
          label="Enter email here"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          size="small"
        />
        <br />
        <br />
        <label style={{ fontSize: "20px" }}>Password</label>
        &nbsp;
        <TextField
          type="password"
          label="Enter password here"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          size="small"
        />
        <br />
        <br />
        <label style={{"fontSize":"20px"}}>Confirm Password</label>
            <TextField type="password" 
            label="password here"
             value={ confirmpassword }
              onChange={event => setConfirmPassword(event.target.value)}
               size="small"/>
            
            <br/><br/>
        <label style={{ fontSize: "20px" }}>Mobile</label>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <TextField
          type="text"
          label="Enter 10-digit number"
          value={mobile}
          onChange={(event) => setMobile(event.target.value)}
          size="small"
        />
        <br />
        <br />
        <TextField
          type="file"
          value={images.name}
          onChange={(event) => {
            setImages(event.target.files);
          }}
          size="small"
        />
        <br />
        <br />
        <span style={{ color: "red" }}>{output}</span>
        <br />
        <Button color="primary" variant="contained" onClick={handleRegister}>
          Submit
        </Button>
      </center>
    </>
  );
};
export default Register;
