'use strict';

const should = require( 'chai' ).should(),
      f = require( './../code/ejs2');
      
describe('3. Functions: ', () => {
    describe('- Recursive exercise', () => {
        let input =  24,
            output = '(((1 * 3) + 5) * 3)';
        it('first version', () => {

            f.getMult3orSum5(input).should.equal(output);
        });
    });
    describe('- Minimum form two numbers', () => {
        let a = 2,
            b = -2;
        it('first version', () => {
            f.minimum(a, b).should.equal(Math.min(a, b));
        });
    }); 
    describe('- Recursion', () => {
        let tests = [50, 75, -1];
        
        it('first version', () => {
            tests.map(test => f.isEven(test).should.equal(test % 2 === 0));
        });
    });
    describe('- Bean counting', () => {
        let str = 'Beean counting Bss: there are three Bs';

        it('without parameter', () => {
            f.countBs(str).should.equal(3);
        });
        it('defining the char to be count', () => {
            f.countBs(str, 'e').should.equal(7);
        });
    });
});