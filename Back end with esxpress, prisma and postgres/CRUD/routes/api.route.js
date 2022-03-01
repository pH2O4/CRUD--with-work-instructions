const router = require('express').Router();
const {PrismaClient} = require('@prisma/client')
const cors = require("cors");
const express = require('express');

const prisma = new PrismaClient


router.use(cors());

router.use(express.json());

router.post('/usuarios', async (req, res, next) => {
  const {email} = req.body
  const {senha} = req.body

  console.log(email)
});



module.exports = router;
