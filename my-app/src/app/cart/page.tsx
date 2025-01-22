
"use client";
import Link from "next/link";
import { useState, useEffect } from "react";

interface Product {
  name: string;
  price: number;
  slug: string;
  imageUrl: string;
  _id: string;
  quantity?: number; // Optional for cart
}

export default function CartPage() {
  const [cart, setCart] = useState<Product[]>([]);

  // Load the cart from localStorage when the page loads
  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem("cart") || "[]");

    // Ensure that the cart is an array
    if (Array.isArray(savedCart)) {
      setCart(savedCart);
    } else {
      // If it's not an array, initialize with an empty array
      setCart([]);
    }
  }, []);

  // Function to add a product to the cart
  const handleAddToCart = (product: Product) => {
    const savedCart = JSON.parse(localStorage.getItem("cart") || "[]");


    const existingProduct = savedCart.find((item:Product) => item._id === product._id);


    if (existingProduct) {
      // If it exists, update the quantity
      existingProduct.quantity = (existingProduct.quantity || 1) + 1;
    } else {
      // If it doesn't exist, add the new product with quantity 1
      savedCart.push({ ...product, quantity: 1 });
    }

    // Save the updated cart to localStorage
    localStorage.setItem("cart", JSON.stringify(savedCart));
    setCart(savedCart); // Update the state to trigger re-render
  };

  // Function to remove a product from the cart
  const handleRemoveFromCart = (productID: string) => {
    const savedCart: Product[] = JSON.parse(localStorage.getItem("cart") || "[]");

    // Filter out the product that needs to be removed
    const updatedCart = savedCart.filter((item: Product) => item._id !== productID);

    // Save the updated cart to localStorage
    localStorage.setItem("cart", JSON.stringify(updatedCart));
    setCart(updatedCart); // Update the state to trigger re-render
  };

  return (
    <div className="bg-white h-screen p-6 ">
      <h1 className="text-3xl font-bold mb-6">Your Cart</h1>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          {cart.map((item: Product) => (
            <div key={item._id} className="flex justify-between items-center mb-4 p-4 border-b">
              <div className="flex items-center gap-4">
                {/* Displaying product image */}
                <img src={`item.imageUrl || "/fallback-image.jpg"`} alt={item.name} className="w-20 h-20 object-cover" />
                
                <div>

                  <p className="font-semibold">{item.name}</p>
                  <p>Quantity: {item.quantity}</p>
                  <p>Price: ${item.price}</p>
                </div>
              </div>
              <button
                onClick={() => handleRemoveFromCart(item._id)}
                className="bg-red-500 text-white py-2 px-4 rounded"
              >
                Remove
              </button>
            </div>
          ))}
        </div>
      )}
      <div className="mt-6 flex justify-between items-center">
        {/* Display total price */}
        <p className="font-semibold text-xl">
          Total: $
          {cart.reduce((total, item) => total + (item.price * (item.quantity || 1)), 0).toFixed(2)}
        </p>
        {/* Checkout button */}
        <Link href={"/checkOut"}>
        <button className="bg-green-600 text-white py-2 px-6 rounded-full">
          Checkout
        </button>
        </Link>
      </div>
    </div>
  );
}



