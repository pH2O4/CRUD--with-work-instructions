import React, { useState, Component } from "react";
import "./cadastro.css"
import {Form, Button} from "react-bootstrap"
import 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery'

const Login = () =>{
const [values, setValues] = useState();
const ChangingValue = (value) => {
let senha = $("[name=Senha]").val()
let senhaV = $("[name=SenhaV]").val()
if9

  setValues((prevValue) => ({
    ...prevValue,
    [value.target.name]: value.target.value,
  }));
};

const ClickButtonS = () =>{
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
  <Button variant="primary" onClick={() => ClickButtonS()} type="submit">
    Submit
  </Button>
</Form>
</div>

)

}

export default Login