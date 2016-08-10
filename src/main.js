import expect, { createSpy, spyOn, isSpy } from 'expect'
import deepFreeze from 'deep-freeze'

const addCounter = (list) => {
    //create and return a new array
    // return list.concat([0]);
    return [...list, 0];
};

const testAddCounter = () => {
    const listBefore = [];
    const listAfter = [0];

    deepFreeze(listBefore);

    expect(
        addCounter(listBefore)
    ).toEqual(listAfter)
};

testAddCounter();
console.log('All tests passed!');