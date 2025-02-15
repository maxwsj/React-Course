import DUMMY_PRODUCTS from '../../util/dummy-data';
import ProductItem from './ProductItem';
import classes from './Products.module.css';

const Products = () => {
   return (
      <section className={classes.products}>
         <h2>Buy your favorite products</h2>
         <ul>
            {DUMMY_PRODUCTS.map((product) => (
               <ProductItem
                  title={product.title}
                  price={product.price}
                  description={product.description}
                  key={product.id}
                  id={product.id}
               />
            ))}
         </ul>
      </section>
   );
};

export default Products;
