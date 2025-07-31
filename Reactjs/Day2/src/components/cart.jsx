import React from "react";

function Cart() {
  // Sample cart items (replace with dynamic state/props later)
  const cartItems = [];

  const total = cartItems.reduce((acc, item) => acc + item.price, 0);

  return (
    <div>
      <h2>🛒 Your Cart</h2>

      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <ul style={{ listStyle: "none", padding: 0 }}>
          {cartItems.map((item) => (
            <li key={item.id} style={{
              marginBottom: "1rem",
              padding: "0.5rem",
              backgroundColor: "#fff",
              border: "1px solid #ccc",
              borderRadius: "5px"
            }}>
              <strong>{item.name}</strong>
              <p>Price: ₹{item.price}</p>
            </li>
          ))}
        </ul>
      )}

      <hr />
      <h4>Total: ₹{total}</h4>
      <button style={{
        marginTop: "1rem",
        padding: "0.5rem 1rem",
        backgroundColor: "#333",
        color: "#fff",
        border: "none",
        borderRadius: "4px",
        cursor: "pointer"
      }}>
        Checkout
      </button>
    </div>
  );
}

export default Cart;
