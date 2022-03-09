import React from "react";
import "./ITlines.css"
import { useState } from "react";
import { Collapse } from "react-bootstrap"
import {Form, Button} from "react-bootstrap"

const ITlines = (props) => {

const [open, setOpen] = useState(false);
  return(
    <div className="LinesIT">
        
      <>
      <Button
        onClick={() => setOpen(!open)}
        aria-controls="example-collapse-text"
        aria-expanded={open}
        id= "tooglebutton"
      >
       {props.buttonname}
      </Button>
      <Collapse in={open}>
        <div id="example-collapse-text">
<div className="coluns">
<Form>
  <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
    <Form.Control className="float-left" type="string" placeholder="Nome da Coluna" />
  </Form.Group>
  <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
    <Form.Control className="float-left"as="textarea" rows={9} />
  </Form.Group>
</Form>
<Form>
  <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
    <Form.Control className="float-left" type="string" placeholder="Nome da Coluna" />
  </Form.Group>
  <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
    <Form.Control className="float-left"as="textarea" rows={9} />
  </Form.Group>
</Form>
<Form>
  <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
    <Form.Control className="float-left" type="string" placeholder="Nome da Coluna" />
  </Form.Group>
  <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
    <Form.Control className="float-left"as="textarea" rows={9} />
  </Form.Group>
</Form>
<Form>
  <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
    <Form.Control className="float-left" type="string" placeholder="Nome da Coluna" />
  </Form.Group>
  <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
    <Form.Control className="float-left"as="textarea" rows={9} />
  </Form.Group>
</Form>
<Form>
  <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
    <Form.Control className="float-left" type="string" placeholder="Nome da Coluna" />
  </Form.Group>
  <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
    <Form.Control className="float-left"as="textarea" rows={9} />
  </Form.Group>
</Form>
<Form>
  <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
    <Form.Control className="float-left" type="string" placeholder="Nome da Coluna" />
  </Form.Group>
  <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
    <Form.Control className="float-left"as="textarea" rows={9} />
  </Form.Group>
</Form>
</div>
        </div>
      </Collapse>
    </>
    </div>
  )
}

export default ITlines