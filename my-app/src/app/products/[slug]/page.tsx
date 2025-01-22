
"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/router"; // Import useRouter hook
import { client } from "@/sanity/lib/client"; // Assuming you are using Sanity client
import Image from "next/image";

interface Product {
  name: string;
  price: number;
  description: string;
  imageUrl: string;
  slug: string;
  _id: string;
  quantity?: number;  // Optional for cart
  inventory: number;
  status: string;
  colors: string[];
  category: string;
}

interface Props {
  params: { slug: string };
}

export default function ProductDetails({ params }: Props) {
  const [product, setProduct] = useState<Product | null>(null);
  const [error, setError] = useState<string | null>(null);

  // Handling async fetching of params.slug
  const slug = params.slug;

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const query = `
          *[_type == "product" && slug.current == $slug]{
            name,
            price,
            description,
            "imageUrl": imageUrl.asset->url,
            "slug": slug.current,
            _id,
            inventory,
            status,
            colors,
            category
          }
        `;
        const data = await client.fetch(query, { slug });
        if (data.length === 0) {
          setError("Product not found.");
        } else {
          setProduct(data[0]);
        }
      } catch (err) {
        console.error("Error fetching product:", err);
        setError("Failed to load product details. Please try again later.");
      }
    };

    fetchProduct();
  }, [slug]);

  const handleAddToCart = (product: Product) => {
    try {
      const savedCart: Product[] = JSON.parse(localStorage.getItem("cart") || "[]");
      const existingProduct = savedCart.find((item) => item._id === product._id);

      if (existingProduct) {
        existingProduct.quantity = (existingProduct.quantity || 1) + 1;
      } else {
        savedCart.push({ ...product, quantity: 1 });
      }

      localStorage.setItem("cart", JSON.stringify(savedCart));
      alert(`${product.name} added to cart!`);
    } catch (error) {
      console.error("Error updating cart:", error);
      alert("Failed to add product to cart.");
    }
  };

  if (error) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center">
          <p className="text-lg font-semibold text-red-600">{error}</p>
          <button
            onClick={() => window.location.reload()}
            className="mt-4 px-6 py-2 bg-blue-500 text-white rounded-full"
          >
            Retry
          </button>
        </div>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <p className="text-lg font-semibold">Loading...</p>
      </div>
    );
  }

  return (
    <main>
      <div className="w-full bg-gradient-to-r from-amber-800 to-teal-800">
        <div className="max-w-[1440px] mx-auto flex items-center justify-center min-h-screen px-4">
          <div className="w-full max-w-[1000px] bg-white shadow-2xl rounded-2xl p-6">
            <div className="flex flex-col md:flex-row justify-between items-center gap-6">
              {/* Image Section */}
              <Image
                src={product.imageUrl || "/fallback-image.jpg"} // Fallback image if imageUrl is missing
                alt={product.name}
                width={600}
                height={600}
                className="rounded-lg border-2"
              />

              {/* Product Details */}
              <div className="p-6 md:p-12 grid gap-5 text-gray-800 text-center md:text-left">
                <h1 className="text-3xl font-bold">{product.name}</h1>
                <p className="text-lg">{product.description}</p>
                <p className="text-2xl font-bold">Price: ${product.price}</p>
                <p className="text-2xl font-semibold text-gray-800">Inventory: <span className="text-green-600">{product.inventory}</span></p>
<p className="text-2xl font-semibold text-gray-800">Status: <span className="text-blue-600">{product.status}</span></p>
<p className="text-2xl font-semibold text-gray-800">Colors: <span className="text-gray-700">{product.colors.join(", ")}</span></p>
<p className="text-2xl font-semibold text-gray-800">Category: <span className="text-purple-600">{product.category}</span></p>


                <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                  <button
                    onClick={() => handleAddToCart(product)}
                    className="p-4 w-full md:w-[170px] bg-gradient-to-r from-teal-600 to-purple-700 rounded-full text-white font-bold"
                    aria-label={`Add ${product.name} to cart`}
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}


