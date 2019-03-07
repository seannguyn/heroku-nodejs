const request = require('supertest');
const  chai = require('chai');
const chaiHttp = require('chai-http');
const should = chai.should();
const algorithm = require('../function');
chai.use(chaiHttp);

function sortAndStringify(array) {
    return array.sort((a,b) => a-b).join(',');
}

describe('Testing fourNumberSum', function() {
    it('Test Case #1', function() {

        let output = algorithm.fourNumberSum([1,2,3,4,5,6,7],10);
        chai.expect(output.length === 1).to.be.true;

        output = output.map(sortAndStringify);
        const quadruplets = [
            [1,2,3,4]
        ]
        
        for (const quad in quadruplets) {
            chai.expect(output).to.include(sortAndStringify(quad));
        }
    })
})