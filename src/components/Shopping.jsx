import React, { useEffect } from "react";
import { useState } from "react";

const Shopping = () => {
  const [products, setProducts] = useState([
    {
      id: 0,
      name: "Shoes",
      price: 100,
    },
    {
      id: 1,
      name: "Sweater",
      price: 500,
    },
    {
      id: 2,
      name: "Pants",
      price: 250,
    },
    {
      id: 3,
      name: "Shirt",
      price: 150,
    },
  ]);

  const [cash, setCash] = useState(700);
  const [price, setPrice] = useState(0);
  const [counter, setCounter] = useState(0);

  const handleCheck = (e, price) => {
    const isCheck = e.target.checked;

    if (isCheck) {
      if (cash < price) {
        alert(`You don't have enough cash`);
        e.target.checked = false;
      }
      if (cash >= price) {
        setPrice((p) => p + price);
        setCash((c) => c - price);
      }
    } else {
      setPrice((p) => p - price);
      setCash((c) => c + price);
    }
  };

  const product = products.map((product) => (
    <li className="list-group-item" key={product.id}>
      <input
        type="checkbox"
        className="form-check-input"
        onChange={(e) => handleCheck(e, product.price)}
        name={product.name}
      />
      &nbsp; &nbsp;
      {product.name}
      <p>Price: {product.price}</p>
    </li>
  ));

  const handleBuy = () => {
    if (price === 0) {
      alert(`Please select a product to buy`);
      return;
    }

    alert(`The transaction was success you paid a total of: ${price}`);
    setPrice(0);
    document.querySelectorAll(".form-check-input").forEach((checkbox) => {
      checkbox.checked = false;
    });
  };

  const handleAddCash = () => {
    setCash((c) => c + 100);
  };

  const handleAddProduct = () => {
    const name = window.prompt(`Enter the name`);
    if (!name) {
      alert(`Invalid name`);
      return;
    }

    const price = window.prompt(`Enter the price`);
    if (!price || isNaN(price) || parseInt(price) <= 0) {
      alert(`Invalid price`);
    } else {
      const newProduct = {
        id: products.length,
        name,
        price: parseInt(price),
      };

      setProducts([...products, newProduct]);
    }
  };

  useEffect(() => {
    console.log(`Current cash: ${cash}`);
  }, [cash]);

  return (
    <div className="container">
      <h1>Your Cash: {cash}</h1>
      <button className="btn btn-secondary" onClick={() => handleAddCash()}>
        + Cash
      </button>
      <br />
      <br />
      <h1 className=" text-center">Product List</h1>
      <ul className="list-group text-center">
        {product}
        <button className="btn btn-success" onClick={() => handleBuy()}>
          Buy
        </button>
        <button className="btn btn-primary" onClick={() => handleAddProduct()}>
          Add Product
        </button>
      </ul>
    </div>
  );
};

export default Shopping;
