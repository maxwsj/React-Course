import { Link } from 'react-router-dom';

const DUMMY_EVENTS = [
   { id: 'e1', title: 'Event 1' },
   { id: 'e2', title: 'Event 2' },
   { id: 'e3', title: 'Event 3' },
   { id: 'e4', title: 'Event 4' },
   { id: 'e5', title: 'Event 5' },
];

export default function EventsPage() {
   return (
      <>
         <h1>EventsPage</h1>
         <ul>
            {DUMMY_EVENTS.map((event) => (
               <li key={event.id}>
                  <Link to={event.id}>{event.title}</Link>
               </li>
            ))}
         </ul>
      </>
   );
}
