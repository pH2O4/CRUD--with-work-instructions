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

});


router.post('/usuarios', async (req, res, next) => {

  try {
    const { Email } = req.body
    const { Senha } = req.body
    const { NomeC } = req.body
    const { SenhaV} = req.body
    if(Senha != SenhaV) {
      res.json("Senhas não conferem");
    } else{
          const usuarios = await prisma.Usuarios.create({
     Email: Email,
     Senha: Senha,
     NomeC: NomeC
    })
   res.sendStatus("Parabéns sua conta doi criada! estamos te encaminhando para area de login")

    }




  } catch (error) {
    next(error)
  }

});
module.exports = router;
