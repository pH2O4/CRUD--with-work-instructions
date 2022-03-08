import React, { useState} from "react";
import "./login.css"
import {Form, Button} from "react-bootstrap"
import 'bootstrap/dist/css/bootstrap.min.css';
import Axios from "axios"
import $ from "jquery";

const Login = () =>{
  const [values, setValues] = useState();
  const ChangingValue = (value) => {
    setValues((prevValue) => ({
      ...prevValue,
      [value.target.name]: value.target.value,
    }));
  };
  
  document.addEventListener("keypress", function(e) {
    if(e.key === 'Enter') {
    
        var btn = document.querySelector("#buttonlogin");
      
      btn.click();
    
    }
  });

  const ClickButtonS = () =>{   

    Axios.post("http://localhost:8000/api/workinstructions",{
      Email: values.Email,
      Senha: values.Senha,
    }).then((response)=> {
    
    })
  Axios.post("http://localhost:8000/api/login",{
    Email: values.Email,
    Senha: values.Senha,
  }).then((response)=> {
    const itens = response.data
   if(response.data === "logando"){
  window.location.href = 'http://localhost:3000/WorkStation'

}else{
  window.alert(`${itens}`);
}    

  }) 

  }
return(
<div className="login">
  <Form className="form">
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control onChange={ChangingValue} name="Email" type="email" placeholder="Enter email" />
    <Form.Text className="text-muted">
     lembre-se de nao compartilhar suas informações de login
    </Form.Text>
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control  onChange={ChangingValue} name="Senha" type="password" placeholder="Password" />
  </Form.Group>
  <Button variant="primary" href="/Cadastro">Cadastre-se </Button><br /> <br />
  <Button id="buttonlogin" variant="primary"  onClick={() => ClickButtonS()}>
   Login
  </Button>
</Form>
</div>

)

}

export default Login