import {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import '../App.css';

const ProductListing = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((response) => response.json())
      .then((data) => setProducts(data.products));
  }, []);

  return (
    <div>
      <h2>Product Listing</h2>
      <div className="products-grid">
        {products?.map((product) => (
          <div key={product.id} className="product-card">
            <Link to={`/products/${product.id}`}>
              <img src={product.thumbnail} alt={product.title} />
              <h3>{product.title}</h3>
              <h3>${product.price}</h3>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductListing;