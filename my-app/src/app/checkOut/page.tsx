"use client";
import { useState, useEffect } from "react";

interface Product {
  name: string;
  price: number;
  slug: string;
  imageUrl: string;
  _id: string;
  quantity?: number; // Optional for cart
}

export default function CheckoutPage() {
  const [cart, setCart] = useState<Product[]>([]);
  const [formData, setFormData] = useState({
    name: "",
    address: "",
    paymentMethod: "",
  });
  const [alertMessage, setAlertMessage] = useState<string>("");

  // Load the cart from localStorage when the page loads
  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem("cart") || "[]");

    if (Array.isArray(savedCart)) {
      setCart(savedCart);
    } else {
      setCart([]);
    }
  }, []);

  // Function to handle form input changes
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Function to handle form submission (e.g., checkout)
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (formData.name && formData.address && formData.paymentMethod) {
      // Perform checkout logic here (e.g., sending the order to the server)
      console.log("Checkout Details:", formData);

      // Show success alert
      setAlertMessage("Your order has been placed successfully!");
      
      // Clear cart and localStorage after checkout
      localStorage.removeItem("cart");
      setCart([]);
      
      // Clear form
      setFormData({ name: "", address: "", paymentMethod: "" });
    } else {
      setAlertMessage("Please fill in all fields.");
    }
  };

  return (
    <div className="bg-gray-100 h-screen p-6 flex flex-col">
      <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">Checkout</h1>

      {/* Alert Message */}
      {alertMessage && (
        <div className={`p-4 mb-4 text-white rounded-lg ${alertMessage.includes('successfully') ? 'bg-green-500' : 'bg-red-500'}`}>
          <p>{alertMessage}</p>
        </div>
      )}

      {cart.length === 0 ? (
        <p className="text-center text-gray-600">Your cart is empty.</p>
      ) : (
        <div className="mb-8">
          {/* Cart summary */}
          <h2 className="text-2xl font-semibold mb-4">Order Summary</h2>
          {cart.map((item: Product) => (
            <div key={item._id} className="flex justify-between items-center mb-4 p-4 bg-white shadow-md rounded-lg">
              <div className="flex items-center gap-4">
                <img
                  src={item.imageUrl || "/fallback-image.jpg"}
                  alt={item.name}
                  className="w-20 h-20 object-cover rounded-md"
                />
                <div>
                  <p className="font-semibold text-lg">{item.name}</p>
                  <p className="text-sm text-gray-600">Quantity: {item.quantity}</p>
                  <p className="text-sm text-gray-600">Price: ${item.price}</p>
                </div>
              </div>
            </div>
          ))}

          {/* Total price */}
          <div className="mt-6 text-right">
            <p className="font-semibold text-xl">
              Total: $
              {cart
                .reduce((total, item) => total + (item.price * (item.quantity || 1)), 0)
                .toFixed(2)}
            </p>
          </div>
        </div>
      )}

      {/* Checkout form */}
      <form onSubmit={handleSubmit} className="mt-8 space-y-6 bg-white p-6 rounded-lg shadow-md">
        <div className="mb-4">
          <label className="block text-sm font-semibold mb-2 text-gray-700">Full Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-semibold mb-2 text-gray-700">Address</label>
          <input
            type="text"
            name="address"
            value={formData.address}
            onChange={handleInputChange}
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-semibold mb-2 text-gray-700">Payment Method</label>
          <input
            type="text"
            name="paymentMethod"
            value={formData.paymentMethod}
            onChange={handleInputChange}
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        <button
          type="submit"
          className="w-full py-3 bg-blue-600 text-white text-lg font-semibold rounded-full hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-500"
        >
          Place Order
        </button>
      </form>
    </div>
  );
}
