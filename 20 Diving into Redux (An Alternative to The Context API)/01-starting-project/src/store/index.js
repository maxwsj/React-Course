import { createSlice, configureStore } from '@reduxjs/toolkit';

const initialState = {
   counter: 0,
   showCounter: true,
};

const counterSlice = createSlice({
   // Here we are preparing a slice of our global state
   name: 'counter',
   initialState, // its the object above
   // Are an object / map of all recuers that this slice needs
   reducers: {
      increment(state) {
         state.counter++;
      },
      decrement(state) {
         state.counter--;
      },
      increase(state, action) {
         state.counter = state.counter + action.payload;
      },
      toggleCounter(state) {
         state.showCounter = !state.showCounter;
      },
   },
});

// On configureStore we pass an object configuration
const store = configureStore({
   reducer: counterSlice.reducer,
   // reducer: { counter: counterSlice.reducer }, // if we have more than one slice we could use like this, the "counter" name is defined by us
});

export const counterActions = counterSlice.actions;

export default store;
