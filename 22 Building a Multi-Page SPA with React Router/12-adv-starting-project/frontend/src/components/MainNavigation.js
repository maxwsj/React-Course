import { NavLink } from 'react-router-dom';

import classes from './MainNavigation.module.css';

function MainNavigation() {
   return (
      <header className={classes.header}>
         <nav>
            <ul className={classes.list}>
               <NavLink
                  to="/"
                  className={({ isActive }) =>
                     isActive ? classes.active : undefined
                  }
                  end
               >
                  Home
               </NavLink>
               <NavLink
                  to="/events"
                  className={({ isActive }) =>
                     isActive ? classes.active : undefined
                  }
               >
                  Events
               </NavLink>
            </ul>
         </nav>
      </header>
   );
}

export default MainNavigation;
