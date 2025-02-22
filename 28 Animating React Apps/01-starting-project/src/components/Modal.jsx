import { motion } from 'framer-motion';
import { createPortal } from 'react-dom';

export default function Modal({ title, children, onClose }) {
   return createPortal(
      <>
         <div className="backdrop" onClick={onClose} />
         <motion.dialog
            initial={{
               opacity: 0,
               y: 30,
            }} // allow us to define an initial state for the to be performed animations, that will be assumed immediately after this element has been added to the DOM
            animate={{
               opacity: 1,
               y: 0,
            }}
            exit={{
               opacity: 0,
               y: 30,
            }}
            open
            className="modal"
         >
            <h2>{title}</h2>
            {children}
         </motion.dialog>
      </>,
      document.getElementById('modal')
   );
}
