import expect, { createSpy, spyOn, isSpy } from 'expect'
import { createStore } from 'redux'

const counter = (state = 0, action) => {
    if(action.type === 'INCREMENT') {
        return state + 1;
    }

    if(action.type === 'DECREMENT') {
        return state - 1;
    }
    return state;
}

const store = createStore(counter);

console.log(store.getState());

store.dispatch({ type: 'INCREMENT' });
console.log(store.getState());

const render = () => {
    document.body.innerText = store.getState();
};

store.subscribe(render);
render();

document.addEventListener('click', () => {
    store.dispatch({type: 'INCREMENT'});
});