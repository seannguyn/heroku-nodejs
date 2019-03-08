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
                
        output = output.map(sortAndStringify);

        let quadruplets = [
            [1,2,3,4]
        ]

        quadruplets = quadruplets.map(sortAndStringify);

        chai.expect(output.length === 1).to.be.true;
        for (var i = 0; i < quadruplets.length; i++) {
            chai.expect(output).to.include(quadruplets[i]);
        }
    });
    it('Test Case #2', function() {

        let output = algorithm.fourNumberSum([7,6,4,-1,1,2],16);
                
        output = output.map(sortAndStringify);

        let quadruplets = [
            [7,6,4,-1],
            [7,6,1,2]
        ]
        
        quadruplets = quadruplets.map(sortAndStringify);

        chai.expect(output.length === 2).to.be.true;
        for (var i = 0; i < quadruplets.length; i++) {
            chai.expect(output).to.include(quadruplets[i]);
        }
    })
})