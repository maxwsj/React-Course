import { useState, useEffect } from 'react';
import Places from './Places.jsx';

export default function AvailablePlaces({ onSelectPlace }) {
   const [isFecthing, setIsFecthing] = useState(false);
   const [availablePlaces, setAvailablePlaces] = useState([]);

   useEffect(() => {
      async function fetchPlaces() {
         setIsFecthing(true);
         const response = await fetch('http://localhost:3000/places');
         const resData = await response.json();
         setAvailablePlaces(resData.places);
         setIsFecthing(false);
      }

      fetchPlaces();
   }, []);

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
