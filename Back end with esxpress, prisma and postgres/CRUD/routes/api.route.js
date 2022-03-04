const router = require('express').Router();
const { PrismaClient } = require('@prisma/client')
const cors = require("cors");
const express = require('express');

const prisma = new PrismaClient()


router.use(cors());

router.use(express.json());

router.get('/usuarios', async (req, res, next) => {

  try {
    const  email  = req.body.Email
    const  senha  = req.body.Senha
    const usuarios = await prisma.Usuarios.findMany()
    console.log(usuarios)
   

  



  } catch (error) {
    next(error)
  }

});


router.post('/usuarios', async (req, res, next) => {

  try {
    const  email  = req.body.Email
    const  senha = req.body.Senha
    const  nomeC = req.body.NomeC
    const  senhaV = req.body.SenhaV
    if(senha != senhaV) {
      res.json("Senhas não conferem");
    }else{
      const usuarios = await prisma.Usuarios.create({
 data:{
   Email: email,
   Senha: senha,
   NomeC: nomeC,
 }
    })
   res.send("Parabéns sua conta foi criada! estamos te encaminhando para area de login")
    }
     

    




  } catch (error) {
    next(error)
  }

});
module.exports = router;
