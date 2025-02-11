import { useState, useEffect } from 'react';
import Places from './Places.jsx';
import Error from './Error.jsx';
import { sortPlacesByDistance } from '../loc.js';

export default function AvailablePlaces({ onSelectPlace }) {
   const [isFecthing, setIsFecthing] = useState(false);
   const [availablePlaces, setAvailablePlaces] = useState([]);
   const [error, setError] = useState();

   useEffect(() => {
      async function fetchPlaces() {
         setIsFecthing(true);

         try {
            const response = await fetch('http://localhost:3000/places');
            const resData = await response.json();

            if (!response.ok) {
               throw new Error('Failed to fetch places');
            }

            navigator.geolocation.getCurrentPosition((position) => {
               const sortedPlaces = sortPlacesByDistance(
                  resData.places,
                  position.coords.latitude,
                  position.coords.longitude
               );
               setAvailablePlaces(sortedPlaces);
               setIsFecthing(false);
            });
         } catch (error) {
            setError({
               message:
                  error.message ||
                  'Could not fetch places, please try again later',
            });
            setIsFecthing(false);
         }
      }

      fetchPlaces();
   }, []);

   if (error) {
      return <Error title="An error occurre!" message={error.message} />;
   }

   return (
      <Places
         title="Available Places"
         places={availablePlaces}
         isLoading={isFecthing}
         loadingText="Fecthing place data..."
         fallbackText="No places available."
         onSelectPlace={onSelectPlace}
      />
   );
}
