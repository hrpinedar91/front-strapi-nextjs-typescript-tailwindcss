"use client";

import React, { useContext } from "react";
import { cartContext } from "@/context/CartContext";

const Cart = () => {
  const { cartProducts } = useContext(cartContext);
  return (
    <div>
      <h1>Soy la pagina del carrito</h1>
      {JSON.stringify(cartProducts, null, 2)}
    </div>
  );
};

export default Cart;
