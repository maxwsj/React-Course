import { Outlet, useLoaderData, useSubmit } from 'react-router-dom';
import { useEffect } from 'react';

import MainNavigation from '../components/MainNavigation';
import { getTokenDuration } from '../util/auth';

function RootLayout() {
   // const navigation = useNavigation();
   const token = useLoaderData();
   const submit = useSubmit();

   useEffect(() => {
      if (!token) {
         return;
      }

      if (token === 'EXPIRED') {
         submit(null, { action: '/logout', metod: 'post' });
         return;
      }

      const tokenDuration = getTokenDuration();

      setTimeout(() => {
         submit(null, { action: '/logout', metod: 'post' });
      }, tokenDuration);

      return () => {};
   }, [token, submit]);

   return (
      <>
         <MainNavigation />
         <main>
            {/* {navigation.state === 'loading' && <p>Loading...</p>} */}
            <Outlet />
         </main>
      </>
   );
}

export default RootLayout;
