import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import HomePage from './pages/Home';
import EventsPage from './pages/Events';
import EventDetailPage from './pages/EventDetail';
import NewEventPage from './pages/NewEvent';
import EditEventPage from './pages/EditEvent';
import RootLayout from './pages/Root';
import EventsRootLayout from './pages/EventsRoot';

const router = createBrowserRouter([
   {
      path: '/',
      element: <RootLayout />,
      // errorElement: <ErrorPage />,
      children: [
         { index: true, element: <HomePage /> },
         {
            path: 'events',
            element: <EventsRootLayout />,
            children: [
               {
                  index: true,
                  element: <EventsPage />,
                  loader: async () => {
                     // We can load na fetch our data here in this loader function
                     const response = await fetch(
                        'http://localhost:8080/events'
                     );

                     if (!response.ok) {
                        // ...
                     } else {
                        const resData = await response.json();
                        return resData.events;
                     }
                  },
               },
               { path: ':eventId', element: <EventDetailPage /> },
               { path: 'new', element: <NewEventPage /> },
               { path: ':eventId/edit', element: <EditEventPage /> },
            ],
         },
      ],
   },
]);

function App() {
   return <RouterProvider router={router}></RouterProvider>;
}

export default App;
