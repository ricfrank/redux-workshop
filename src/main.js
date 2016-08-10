import expect, { createSpy, spyOn, isSpy } from 'expect'

function counter(state = 0, action) {
    if(action.type === 'INCREMENT') {
        return state + 1;
    }

    if(action.type === 'DECREMENT') {
        return state - 1;
    }
    return state;
}

expect(
    counter(0, {type: 'INCREMENT'})
).toEqual(1);

expect(
    counter(1, {type: 'INCREMENT'})
).toEqual(2);

expect(
    counter(2, {type: 'INCREMENT'})
).toEqual(3);

expect(
    counter(3, {type: 'INCREMENT'})
).toEqual(4);

expect(
    counter(3, {type: 'DECREMENT'})
).toEqual(2);

expect(
    counter(3, {type: 'ZIOZIO'})
).toEqual(3);

expect(
    counter(undefined, {})
).toEqual(0);

console.log('Tests passed!');