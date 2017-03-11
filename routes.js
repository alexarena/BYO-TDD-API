'use strict'

let express = require('express')
let router = express.Router()

let todo = require('./todo.js')

router.post('/create', (req,res) => {
  if(!req.body.text){
    res.sendStatus(400) // Client error
  }
  else{
    let result = todo.create(req.body.text)
    if(result === false){
      res.sendStatus(400)
    }
    else{
      res.sendStatus(201) //Created
    }
  }
})

router.get('/', (req,res) => {
  res.json(todo.getList())
})

router.delete('/delete', (req,res) => {

  if(!req.body.id){
    res.sendStatus(400)
  }
  else{
    let id = parseInt(req.body.id)
    let result = todo.delete(id)
    if(result === false){
      res.sendStatus(400)
    }
    else{
      res.sendStatus(200)
    }
  }
})

router.put('/update', (req,res) => {

  if(!req.body.id || !req.body.text){
    res.sendStatus(400)
  }
  else{
    let id = parseInt(req.body.id)
    let result = todo.update(id,req.body.text)
    if(result === false){
      res.sendStatus(400)
    }
    else{
      res.sendStatus(200)
    }
  }
})

module.exports = router
