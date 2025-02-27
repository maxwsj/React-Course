import { useState, useEffect } from 'react';
import Places from './Places.jsx';
import Error from './Error.jsx';
import { sortPlacesByDistance } from '../loc.js';
import { fetchAvailablePlaces } from '../http.js';

export default function AvailablePlaces({ onSelectPlace }) {
   const [isFecthing, setIsFecthing] = useState(false);
   const [availablePlaces, setAvailablePlaces] = useState([]);
   const [error, setError] = useState();

   useEffect(() => {
      async function fetchPlaces() {
         setIsFecthing(true);

         try {
            const places = await fetchAvailablePlaces();
            navigator.geolocation.getCurrentPosition((position) => {
               const sortedPlaces = sortPlacesByDistance(
                  places,
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
