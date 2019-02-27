const request = require('supertest');
const app = require('../app');
const  chai = require('chai');
const chaiHttp = require('chai-http');
const should = chai.should();
 
chai.use(chaiHttp);

describe('Test_1', function() {
  it('test resource page', function(done) {
    chai.request(app)
      .get('/resource')
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.be.a('object');
        res.body.should.have.property('success').eql(true);
        // console.log(res.body);
        done();
      })
  })
}); 