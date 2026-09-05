import React, { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "./components/Navbar";
import ProductCard from "./components/ProductCard";
import CartScreen from "./pages/CartScreen";

const App = () => {
  const [productsData, setProductsData] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(true);

  const getProductsData = async () => {
    try {
      let res = await axios.get("https://fakestoreapi.com/products");

      setProductsData(res.data);
    } catch (error) {
      console.log("Error in API", error);
    }
  };
  useEffect(() => {
    getProductsData();
  }, []);

  return (
    <div className="h-screen p-2 flex flex-col gap-4">
      <Navbar setIsCartOpen={setIsCartOpen}/>

      {isCartOpen ? (
        <div className="grid grid-cols-4 gap-3">
          {productsData.map((elem) => {
            return <ProductCard key={elem.id} product={elem} />;
          })}
        </div>
      ) : (
        <div className="grid grid-cols-4 gap-3">
          <CartScreen />
        </div>
      )}
    </div>
  );
};

export default App;
