'use strict';

const should = require( 'chai' ).should(),
      expect = require( 'chai' ).expect,
      f = require( './../code/ejs3'),
      _ = require( 'lodash' );


describe('4. Data Structures: Objects and Arrays: ', () => {
      describe('- Sum of a Range: ', () => {
            let start = 1,
                end = 10,
                step = 2,
                range = _.range(start, end + 1);
                
            it('should generate a range from stat to end ', () => {
                  expect(f.range(start, end)).to.deep.equal(range);
            });
            it('should generate a range from 1 to 10 ', () => {
                  expect(f.range(1, 10)).to.deep.equal([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
            });


            it('should generate a range from stat to end with a step ', () => {
                  expect(f.rangeWithStep(start, end, step)).to.deep.equal(_.range(start, end + 1, step));
            });
            it('should generate a range from 5 to 2 with a -1', () => {
                  expect(f.rangeWithStep(5, 2, -1)).to.deep.equal([5, 4, 3, 2]);
            });

            it('should sum an array', () => {
                  f.sumRange(f.range(start, end)).should.equal(_.sum(range));
            });
      });

      describe('- Reversing an array: ', () => {
            let array = [1, 2, 3, 4, 5, 6, 7],
                arrayC = array.slice(),
                reversedArray = array.slice().reverse();

            it('should return a new array with the elements reversed', () => {
                  expect(f.reverseArray(array)).to.deep.equal(reversedArray);
            });
            it('should return the same array with the elements reversed', () => {
                  f.reverseArrayInPlace(arrayC);
                  expect(arrayC).to.deep.equal(reversedArray);
            });
      });
      describe('- List: ', () => {
            let arr = [1, 2, 3],
                list = {
                      value: 1,
                      rest: {
                            value: 2,
                            rest: {
                                  value: 3,
                                  rest : null
                            }
                      }
                };
            it('should return a list', () => {
                  expect(f.arrayToList(arr)).to.deep.equal(list);
            });
            it('should return a list -- recommended implementation', () => {
                  expect(f.arrayToListR(arr)).to.deep.equal(list);
            });
            it('should return an array', () => {
                  expect(f.listToArray(list)).to.deep.equal(arr);
            });
            it('should return an array -- recommended implementation', () => {
                  expect(f.listToArrayR(list)).to.deep.equal(arr);
            });
      });
      describe('- Deep comparison: ', () => {
            let a = "Hola",
                b = 1,
                c = {here: {is: "an"}, object: 2};

            // it('should be the strings equal', () => {
            //       f.deepEqual(a, "Hola").should.equal(true);
            // });
            // it('should be the numbers equal', () => {
            //       f.deepEqual(b, 1).should.equal(true);
            // });
            // it('should be the objects equal', () => {
            //       expect(f.deepEqual(c, {here: {is: "an"}, object: 2})).to.deep.equal(true);
            // });
            it('should be the objects different', () => {
                  expect(f.deepEqual(c, {here: 1, object: 2})).to.deep.equal(false);
            });
            it('should be the objects equal', () => {
                  expect(f.deepEqual(c, c)).to.deep.equal(true);
            });
            
      });
});