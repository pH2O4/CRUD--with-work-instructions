import React, { Component } from "react";
import "./cadastro.css"
import {Form, Button} from "react-bootstrap"
import 'bootstrap/dist/css/bootstrap.min.css';

const Login = () =>{

return(
<div className="cadastro">
  <Form className="form">
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Nome Completo</Form.Label>
    <Form.Control  type="name" placeholder="Ensira seu nome"/>
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter email" />
    <Form.Text className="text-muted">
     lembre-se de nao compartilhar suas informações de login
    </Form.Text>
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" placeholder="Password" />
    <Form.Label>Ensira a senha novamente</Form.Label>
    <Form.Control type="passwordRepeat" placeholder="Password" />
  </Form.Group>
  <Button variant="primary" type="submit">
    Submit
  </Button>
</Form>
</div>

)

}

export default Login