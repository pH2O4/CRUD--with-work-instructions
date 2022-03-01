import React, { useState, Component } from "react";
import "./login.css"
import {Form, Button} from "react-bootstrap"
import 'bootstrap/dist/css/bootstrap.min.css';
import Axios from "axios"

const Login = () =>{
  const [values, setValues] = useState();
  const ChangingValue = (value) => {
    setValues((prevValue) => ({
      ...prevValue,
      [value.target.name]: value.target.value,
    }));
  };
  
  const ClickButtonS = () =>{
  Axios.post("http://localhost:8000/api/usuarios",{
    email: values.email,
    senha: values.senha,

  }).then((response)=> {
    console.log(response)
  })
  }
return(
<div className="login">
  <Form className="form">
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control onChange={ChangingValue} name="email" type="email" placeholder="Enter email" />
    <Form.Text className="text-muted">
     lembre-se de nao compartilhar suas informações de login
    </Form.Text>
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control  onChange={ChangingValue} name="senha" type="password" placeholder="Password" />
  </Form.Group>
  <Button variant="primary" href="/Cadastro">Cadastro-se </Button><br /> <br />
  <Button variant="primary"  onClick={() => ClickButtonS()} type="submit">
   Login
  </Button>
</Form>
</div>

)

}

export default Login