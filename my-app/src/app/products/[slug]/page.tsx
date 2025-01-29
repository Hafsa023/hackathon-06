"use client";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import Image from "next/image";
import { useEffect, useState } from "react";
import Swal from 'sweetalert2';

interface Product {
  productName: string;
  price: number;
  description: string;
  imageUrl: string;
  slug: string;
  _type: string;
  _id: string;
  quantity?: number; 
  colors: string;
  inventory: number;
  category: string;
  status: string;
}

interface Props {
  params: {
    slug: string;
  };
}

export default function ProductDetails({ params }: Props) {
  const [product, setProduct] = useState<Product | null>(null);
  const [error, setError] = useState<string | null>(null);
  const { slug } = params;

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const query = `
          *[_type == "product" && slug.current == $slug]{
            productName,
            price,
            description,
            "imageUrl": image.asset->url,
            "slug": slug.current,
            _id,
            _type,
            colors,
            inventory,
            category,
            status
          }
        `;
        const data = await client.fetch(query, { slug: slug });
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
  }, [slug]); // Dependency is slug, which will update if the param changes.

  const handleAddToCart = (e: React.MouseEvent, product: Product) => {
    e.preventDefault();
    Swal.fire({
      position: "top-right",
      icon: "success",
      title: `${product.productName} added to cart`,
      showConfirmButton: false,
      timer: 1000,
    });
    // Add your cart logic here, e.g., update the cart in local storage or state.
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
            {/* Image Section */}
            <div className="flex flex-col md:flex-row justify-between items-center gap-6" key={product._id}>
              {product.imageUrl && (
                <Image
                  src={urlFor(product.imageUrl).url()}
                  alt={product.productName}
                  width={600}
                  height={600}
                  className="rounded-lg border-2"
                />
              )}

              {/* Product Details */}
              <div className="p-6 md:p-12 grid gap-5 text-gray-800 text-center md:text-left">
                <h1 className="text-3xl font-bold">{product.productName}</h1>
                <p className="text-lg">{product.description}</p>
                <p className="text-2xl font-bold">Price: ${product.price}</p>
                <p className="text-gray-700 font-semibold">Color: <span className="text-blue-500">{product.colors}</span></p>
                <p className="text-gray-700 font-semibold">Inventory: <span className="text-green-500">{product.inventory}</span></p>
                <p className="text-gray-700 font-semibold">Status: <span className="text-yellow-500">{product.status}</span></p>
                <p className="text-gray-700 font-semibold">Category: <span className="text-purple-500">{product.category}</span></p>

                <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                  <button
                    onClick={(e) => handleAddToCart(e, product)}
                    className="p-4 w-full md:w-[170px] bg-gradient-to-r from-teal-600 to-purple-700 rounded-full text-white font-bold"
                    aria-label={`Add ${product.productName} to cart`}
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
