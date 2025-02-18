import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import HomePage from './pages/Home';
import EventsPage, { loader as eventsLoader } from './pages/Events';
import EventDetailPage, {
   loader as eventsDetailLoader,
   action as deleteEventAction,
} from './pages/EventDetail';
import NewEventPage from './pages/NewEvent';
import EditEventPage from './pages/EditEvent';
import RootLayout from './pages/Root';
import EventsRootLayout from './pages/EventsRoot';
import ErrorPage from './pages/Error';
import { action as manipulateEventAction } from './components/EventForm';

const router = createBrowserRouter([
   {
      path: '/',
      element: <RootLayout />,
      errorElement: <ErrorPage />,
      children: [
         { index: true, element: <HomePage /> },
         {
            path: 'events',
            element: <EventsRootLayout />,
            children: [
               {
                  index: true,
                  element: <EventsPage />,
                  // We can load or fetch our data here in this loader function
                  loader: eventsLoader,
               },
               {
                  path: ':eventId',
                  id: 'event-detail',
                  loader: eventsDetailLoader,
                  children: [
                     {
                        index: true,
                        element: <EventDetailPage />,
                        action: deleteEventAction,
                     },
                     {
                        path: 'edit',
                        element: <EditEventPage />,
                        action: manipulateEventAction,
                     },
                  ],
               },

               {
                  path: 'new',
                  element: <NewEventPage />,
                  action: manipulateEventAction,
               },
            ],
         },
      ],
   },
]);

function App() {
   return <RouterProvider router={router}></RouterProvider>;
}

export default App;
