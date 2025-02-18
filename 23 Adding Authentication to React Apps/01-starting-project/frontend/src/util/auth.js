import { redirect } from 'react-router-dom';

export function getAuthToken() {
   const token = localStorage.getItem('token');
   return token;
}

export function tokenLoader() {
   return getAuthToken();
}

// Used to protect a route
export function checkAuthLoader() {
   const token = getAuthToken();

   if (!token) {
      return redirect('/auth');
   }

   return null;
}
