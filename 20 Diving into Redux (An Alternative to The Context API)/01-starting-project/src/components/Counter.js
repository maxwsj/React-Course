import { useSelector, useDispatch } from 'react-redux';
import classes from './Counter.module.css';

import { counterActions } from '../store';

const Counter = () => {
   const dispatch = useDispatch();
   const counter = useSelector((state) => state.counter);
   const show = useSelector((state) => state.showCounter);

   const incrementHandler = () => {
      dispatch(counterActions.increment());
   };

   const increaseHandler = () => {
      // The second property here must have the same name as setted in the store "amount"
      dispatch(counterActions.increase(5));
   };

   const decrementHandler = () => {
      dispatch(counterActions.decrement());
   };

   const toggleCounterHandler = () => {
      dispatch(counterActions.toggle());
   };

   return (
      <main className={classes.counter}>
         <h1>Redux Counter</h1>
         {show && <div className={classes.value}>{counter}</div>}
         <div>
            <button onClick={incrementHandler}>Increment</button>
            <button onClick={increaseHandler}>Increment by 5</button>
            <button onClick={decrementHandler}>Decrement</button>
         </div>
         <button onClick={toggleCounterHandler}>Toggle Counter</button>
      </main>
   );
};

export default Counter;
