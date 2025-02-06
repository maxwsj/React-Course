import { forwardRef, useImperativeHandle, useRef } from 'react';
import { createPortal } from 'react-dom';

import Button from './Button';

const Modal = forwardRef(function Modal({ children, buttonCaption }, ref) {
   const dialog = useRef();
   useImperativeHandle(ref, () => {
      // We will return an object that then exposes any porperties or functions that we want to expose to other components
      return {
         open() {
            dialog.current.showModal();
         },
      };
   });
   return createPortal(
      <dialog
         ref={dialog}
         className="backdrop:bg-stone-900/90 p-4 rounded-md shoadow-md"
      >
         {children}
         <form method="dialog" className="mt-4 text-right">
            <Button>{buttonCaption}</Button>
         </form>
      </dialog>,
      document.getElementById('modal-root')
   );
});

export default Modal;
