import { useRef } from 'react';

const NewTodo: React.FC<{ onAddTodo: (text: string) => void }> = (props) => {
   const todoTextInputRef = useRef<HTMLInputElement>(null);

   const submitHandler = (event: React.FormEvent) => {
      event.preventDefault();

      const enteredtext = todoTextInputRef.current!.value;

      if (enteredtext.trim().length === 0) {
         // throw an error
         return;
      }

      props.onAddTodo(enteredtext);
   };

   return (
      <form onSubmit={submitHandler}>
         <label htmlFor="text" ref={todoTextInputRef}>
            Todo text
         </label>
         <input type="text" id="text" />
         <button>Add Todo</button>
      </form>
   );
};

export default NewTodo;
