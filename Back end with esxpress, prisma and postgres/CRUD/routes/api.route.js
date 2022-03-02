const router = require('express').Router();
const { PrismaClient } = require('@prisma/client')
const cors = require("cors");
const express = require('express');

const prisma = new PrismaClient


router.use(cors());

router.use(express.json());

router.get('/usuarios', async (req, res, next) => {

  try {
    const { Email } = req.body
    const { Senha } = req.body
    const usuarios = await prisma.Usuarios.findMany({
      Email,
      Senha
    })
    if(usuarios == 0)
      res.json("Você está sem cadastro, por favor vá na opção Cadastre-se")



  } catch (error) {
    next(error)
  }

  /* const {email} = req.body
   const {senha} = req.body
 
   console.log(email)3*/
});



module.exports = router;
