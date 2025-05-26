import logo from './logo.svg';
import './App.css';
import products from './products';
import ProductCard from './ProductCard';

function App() {
   return (
    <div className="app">
      <h1>Our Products</h1>
      <div className="product-grid">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}

export default App;
