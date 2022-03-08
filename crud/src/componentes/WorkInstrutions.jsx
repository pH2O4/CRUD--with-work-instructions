import React, { useState } from "react";
import "./WorkInstrutions.css"
import { Button, Form, Row, Col} from "react-bootstrap"
import 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery'
import Axios from 'axios'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus ,faWrench, faCircleUser} from '@fortawesome/free-solid-svg-icons'
import Lines from '../componentes/ITlines'

const WorkS = () =>{

  const [values, setValues] = useState();
  const ChangingValue = (value) => {
    setValues((prevValue) => ({
      ...prevValue,
      [value.target.name]: value.target.value,
    }));
  };
  // $(".ContainerLinhas").append(`${}`)
  
  const AdicionarLinha = () =>{
    Axios.post('http://localhost:8000/api/workinstructions',{
       LinhaNome: values.LinhaNome
    } ).then((response)=> {
console.log(response.data)
    })
  }
 
  $(window).on("load", function(){
    
 });

  return(
<div className = "Work">
<div className="header">
<Button  href="/WorkStation" className="webfunctions">Minhas Instruções de Trabalho</Button>
<Button className="webfunctions"><FontAwesomeIcon icon={faCircleUser} /></Button>
<Button className="webfunctions"><FontAwesomeIcon icon={faWrench} /> </Button>
</div>
<div className="Contentx">
  <div className="ContainerButtonForm">
    <Button onClick={AdicionarLinha} id= "Addline"><FontAwesomeIcon  icon={faPlus} /> Adicionar mais linhas</Button>
<Form>
  <Row>
    <Col xs={20}>
      <Form.Control onChange={ChangingValue} name="LinhaNome" placeholder="First insert Line Name" />
    </Col>
  </Row>
</Form>
  </div>
      <div className="ContainerLinhas">
<Lines />
<Lines />
<Lines />
<Lines />
<Lines />
<Lines />
<Lines />
<Lines />
      </div>
</div>
</div>
  );

}

export default WorkS 