import { useParams } from 'react-router-dom';

export default function ProductDetailPage() {
   const params = useParams();

   return (
      <>
         <h1>Product Details!</h1>
         <p>{params.productId}</p>
      </>
   );
}
