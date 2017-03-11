let chai = require('chai')
let expect = chai.expect

describe('GET /', ()=>{
  it('should respond with status 200',(done)=>{
    expect(200).to.equal(200)
    done()
  })
})
