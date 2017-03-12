let chai = require('chai')
let expect = chai.expect

let app = require('../index')
let request = require('request')

// There's only one (very incomplete) test for all routes.
// You can try writing the rest for practice.
// If you aren't sure where to start, take a look at todo-test.js

describe('GET /', ()=>{
  it('should respond with status 200',(done)=>{
    request.get('http://localhost:3000/',(err,res,body)=>{
      expect(res.statusCode).to.equal(200)

      //Because this is async, we need to use the done() method.
      //Learn more about async unit tests in Mocha here: http://staxmanade.com/2015/11/testing-asyncronous-code-with-mochajs-and-es7-async-await/
      done()
    })
  })
})
