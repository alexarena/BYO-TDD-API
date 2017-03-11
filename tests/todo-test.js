'use strict'

let chai = require('chai')
let expect = chai.expect

let todo = require('../todo.js')

describe('todo.create(contents)', ()=>{

  it('should return false if the todo isn\'t a string',()=>{
    let result = todo.create(1)
    expect(result).to.equal(false)
  })

  it('should return true if the todo is a string < 50 chars',()=>{
    let result = todo.create('Get milk')
    expect(result).to.equal(true)
  })

  it('should return false if the todo is a string >= 50 chars', ()=>{
    let contents = 'Lorem ipsum dolor sit amet, consectetur cras amet.'
    let result = todo.create(contents)
    expect(result).to.equal(false)
  })

})

describe('todo.getList()', ()=>{

  todo.create('Learn Node')

  it('should return a list of todos',()=> {
    let result = todo.getList()
    expect(result).to.be.not.null
    expect(result[0].text).to.equal('Learn Node')
    expect(result[1].text).to.equal('Get milk')
  })

})

describe('todo.delete(id)',()=>{

  it('should return false if the index is invalid',()=>{
    let result = todo.delete(3)
    expect(result).to.equal(false)
  })

  it('should return false if the argument isn\'t an int', ()=>{
    let result = todo.delete('something')
    expect(result).to.equal(false)
  })

  it('should return true if the index was valid and it should actually be removed', ()=>{
    let result = todo.delete(0)
    expect(result).to.equal(true)

    result = todo.getList()
    expect(result[1].text).to.equal('Get milk')
    expect(result[0]).to.be.undefined
  })

})

describe('todo.update(id,newText)',()=>{

  it('should return false if the index is invalid',()=>{
    let result = todo.update(3,'New Todo')
    expect(result).to.equal(false)
  })

  it('should return false if the index argument isn\'t an int', ()=>{
    let result = todo.update('something','New Todo')
    expect(result).to.equal(false)
  })

  it('should return false if the text argument isn\'t a string < 50 chars', ()=>{
    let contents = 'Lorem ipsum dolor sit amet, consectetur cras amet.'
    let result = todo.update(1,contents)
    expect(result).to.equal(false)
  })

  it('should return true if the input is valid and the todo was updated', ()=>{
    let result = todo.update(1,'Get 2% milk')
    expect(result).to.equal(true)
    result = todo.getList()
    expect(result[1].text).to.equal('Get 2% milk')

  })

})
