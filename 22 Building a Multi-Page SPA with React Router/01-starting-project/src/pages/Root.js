import { Outlet } from 'react-router-dom';
import MainNavigation from '../components/MainNavigation';

// Outlet this component marks the place where the children should be rendered
export default function RootLayout() {
   return (
      <>
         <MainNavigation />
         <main>
            <Outlet />
         </main>
      </>
   );
}
