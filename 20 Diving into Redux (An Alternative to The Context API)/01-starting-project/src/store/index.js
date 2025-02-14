import { createStore } from 'redux';

const counterReducer = (state = { counter: 0 }, action) => {
   if (action.type === 'increment') {
      return {
         counte: state.counter + 1,
      };
   }
   if (action.type === 'decrement') {
      return {
         counte: state.counter - 1,
      };
   }
};

const store = createStore(counterReducer);

export default store;
