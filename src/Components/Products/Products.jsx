import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";

const Products = () => {

  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <div className=" bg-cyan-200">
      <div className="text-center my-2">
        {/* <h1 className="text-2xl font-bold text-red-500">Products</h1> */}
        <h2 className=" text-4xl font-bold text-violet-700">Our Products</h2>
        <p className="my-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt sit
          voluptas cupiditate labore fugit veritatis consequatur placeat
          voluptatum sint. Sequi veritatis fuga sunt voluptatem suscipit vitae
          ex asperiores blanditiis? Accusamus impedit illo officia! Est vel iure
          minima quae culpa. Ullam.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-3 ml-5">
              {products.map((product) => (
                <ProductCard key={product._id} product={product}></ProductCard>
              ))}
            </div>
    </div>
  );
};

export default Products;
