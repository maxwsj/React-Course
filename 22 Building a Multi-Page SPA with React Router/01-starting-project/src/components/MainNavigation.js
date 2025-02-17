import { NavLink } from 'react-router-dom';

import classes from './MainNavigation.module.css';

export default function MainNavigation() {
   return (
      <header className={classes.header}>
         <nav>
            <ul className={classes.list}>
               <li>
                  {/* Using NavLink will give us a special className prop where we can use functions inside of it and have access to the isActive boolean variable */}
                  <NavLink
                     to="/"
                     className={({ isActive }) =>
                        isActive ? classes.active : undefined
                     }
                     end // this indicates that this link should only be considered active if the currently active router ends with "/"
                  >
                     Home
                  </NavLink>
               </li>
               <li>
                  <NavLink
                     to="/products"
                     className={({ isActive }) =>
                        isActive ? classes.active : undefined
                     }
                  >
                     Products
                  </NavLink>
               </li>
            </ul>
         </nav>
      </header>
   );
}
