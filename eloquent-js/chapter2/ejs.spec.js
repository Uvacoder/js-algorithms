'use strict';

const should = require( 'chai' ).should(),
      f = require( './../code/ejs1');
    //   performance = require( './../../performance' );


describe('2. Program Structure', () => {
    describe('- Loop a Triangle', () => {
        let output = `#\n##\n###\n####\n#####\n######\n#######\n`;
        it('should return a string like above', () => {
            f.loopATrian().should.equal(output);
        });
    });
    // describe('1.A Performance - Loop a Triangle', () => {
    //     it('performance test', () => {
    //         console.log(f.loopATrian.name);
    //         performance(f.loopATrian, f.loopATrian);
    //     });
    // });
    
    describe('- FizzBuzz', () => {
        it('should print numbers from 1 to 100 with three exceptions. 1. Number divisible by 3 -> Fizz, 2. Numbers divisible bz 5 -> Buzz  3. Numbers divisible by both FizzBuzz ', () => {
            f.fizzBuzz();
        });
    });

    describe('- Chess board', () => {
        let output = ` # # # #\n# # # # \n # # # #\n# # # # \n # # # #\n# # # # \n # # # #\n# # # # \n`,
            outputB = ` # #\n# # \n # #\n# # \n`;
        it('whitout input should return a string that represents an 8x8 grid like above', () => {
            f.chessBoard().should.equal(output);
        });
        it('whit input should return a string that represents an NxN grid like above', () => {
            f.chessBoard(4).should.equal(outputB);
        });

    });
});