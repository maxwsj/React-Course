import { createSlice } from '@reduxjs/toolkit';
import { createStore } from 'redux';

const initialState = {
   counter: 0,
   showCounter: true,
};

createSlice({
   // Here we are preparing a slice of our global state
   name: 'counter',
   initialState, // its the object above
   // Are an object / map of all recuers that this slice needs
   reducer: {
      increment(state) {
         state.counter++;
      },
      decrement(state) {
         state.counter--;
      },
      increase(state, action) {
         state.counter = state.counter + action.amount;
      },
      toggleCounter(state) {
         state.showCounter = !state.showCounter;
      },
   },
});

const counterReducer = (state = initialState, action) => {
   if (action.type === 'increment') {
      return {
         counter: state.counter + 1,
         showCounter: state.showCounter,
      };
   }

   if (action.type === 'increase') {
      return {
         counter: state.counter + action.amount,
         showCounter: state.showCounter,
      };
   }

   if (action.type === 'decrement') {
      return {
         counter: state.counter - 1,
         showCounter: state.showCounter,
      };
   }

   if (action.type === 'toggle') {
      return {
         showCounter: !state.showCounter,
         counter: state.counter, // keeping the state
      };
   }

   return state;
};

const store = createStore(counterReducer);

export default store;
