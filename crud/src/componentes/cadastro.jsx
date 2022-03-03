import React, { useState } from "react";
import "./cadastro.css"
import {Form, Button} from "react-bootstrap"
import 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery'
import Axios from 'axios'

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
    Email: values.Email,
    Senha: values.Senha,
    SenhaV: values.SenhaV,
    NomeC: values.NomeC,
  }).then((response)=> {
    const resposta = response.data
    let contador = ""
    if(contador = 1){
    return
    }else{
        $(".senhacorretaounao").append(`${resposta}`);
    }   


    console.log(response)
  })
}
return(
<div className="cadastro">
  <Form className="form">
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Nome Completo</Form.Label>
    <Form.Control onChange={ChangingValue} name="NomeC" type="text" placeholder="Ensira seu nome"/>
    <Form.Label>Email address</Form.Label>
    <Form.Control onChange={ChangingValue} name="Email" type="Email" placeholder="Enter email" />
    <Form.Text className="text-mutedd">
     lembre-se de nao compartilhar suas informações de login
    </Form.Text>
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control  onChange={ChangingValue} name="Senha" type="password" placeholder="Password" />
    <Form.Label>Ensira a senha novamente</Form.Label>
    <Form.Control  onChange={ChangingValue} name="SenhaV" type="password" placeholder="Password" />
    <Form.Text className="text-muted">
    
    </Form.Text>
  </Form.Group>
    <div className="senhacorretaounao"></div>
  <Button variant="primary" onClick={() => ClickButtonS()} type="submit">
    Submit
  </Button>

</Form>
</div>

)

}

export default Login