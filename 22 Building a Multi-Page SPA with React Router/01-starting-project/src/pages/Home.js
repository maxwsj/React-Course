import { Link, useNavigate } from 'react-router-dom';

export default function HomePage() {
   // We will get access to navigate programmatically
   const navigation = useNavigate();

   // We should use a link for navigation instead of this approach, this is just for learning purposes !!
   function navigateHandler() {
      navigation('/products');
   }

   return (
      <>
         <h1>My Home Page</h1>
         <p>
            Go to <Link to="/products">the list of products</Link>
         </p>
         <p>
            <button onClick={navigateHandler}>Navigate</button>
         </p>
      </>
   );
}
