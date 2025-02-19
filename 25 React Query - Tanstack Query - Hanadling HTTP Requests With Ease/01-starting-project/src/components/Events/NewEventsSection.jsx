import { useQuery } from '@tanstack/react-query';

import LoadingIndicator from '../UI/LoadingIndicator.jsx';
import ErrorBlock from '../UI/ErrorBlock.jsx';
import EventItem from './EventItem.jsx';
import { fetchEvents } from '../../util/http.js';

export default function NewEventsSection() {
   const { data, isPending, isError, error } = useQuery({
      queryKey: ['events'], // This will be necessary to reuse the data later
      // With this query we define the actual code that will be sent with the actual request
      queryFn: fetchEvents,

      // This controls after which time React Query will send such a Behind the Scenes request to get updated data if it found data in your cache.
      staleTime: 5000,
   });

   let content;

   if (isPending) {
      content = <LoadingIndicator />;
   }

   if (isError) {
      content = (
         <ErrorBlock
            title="An error occurred"
            message={error.info?.message || 'Failed to fetch events.'}
         />
      );
   }

   if (data) {
      content = (
         <ul className="events-list">
            {data.map((event) => (
               <li key={event.id}>
                  <EventItem event={event} />
               </li>
            ))}
         </ul>
      );
   }

   return (
      <section className="content-section" id="new-events-section">
         <header>
            <h2>Recently added events</h2>
         </header>
         {content}
      </section>
   );
}
