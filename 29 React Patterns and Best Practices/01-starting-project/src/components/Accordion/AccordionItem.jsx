import { useAccordionContext } from './Accordion';

export default function AccordionItem({ id, className, title, children }) {
   const { openItemId, openItem, closeItem } = useAccordionContext();

   const isOpen = openItemId === id;

   function handleClick() {
      if (isOpen) {
         closeItem();
      } else {
         openItem(id);
      }
   }

   return (
      <li className={className}>
         <h3 onClick={handleClick}>{title}</h3>
         <div
            className={
               isOpen ? 'accordion-item-content open' : 'accordion-item-content'
            }
         >
            {children}
         </div>
      </li>
   );
}
