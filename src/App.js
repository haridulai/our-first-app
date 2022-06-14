import React from "react";
import Product from "./Product";

function App() {
  return (
    <div>
      <h1>Hello world</h1>

      <Product
        name="Amazon Echo"
        description="Your AI assistant"
        price={59.99}
      />

      <Product name="iPhone" description="the best iphone" price={1200} />

      <Product
        name="Macbook Pro"
        description="Your Favourite Computer"
        price={2500}
      />

      {/* Product name descript price*/}
      {/* Product */}
      {/* Product */}
      {/* Product */}
    </div>
  );
}

export default App;
