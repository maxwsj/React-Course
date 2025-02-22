import { motion } from 'framer-motion';
import { createPortal } from 'react-dom';

export default function Modal({ title, children, onClose }) {
   return createPortal(
      <>
         <div className="backdrop" onClick={onClose} />
         <motion.dialog
            variants={{
               hidden: {
                  opacity: 0,
                  y: 30,
               },
               visible: {
                  opacity: 1,
                  y: 0,
               },
            }}
            initial="hidden" // allow us to define an initial state for the to be performed animations, that will be assumed immediately after this element has been added to the DOM
            animate="visible"
            exit="hidden"
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
