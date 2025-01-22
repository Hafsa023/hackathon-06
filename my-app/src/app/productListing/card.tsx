import { client } from "@/sanity/lib/client";
import { Product } from "../../../types/product";
import { sanityFetch } from "@/sanity/lib/fetch";
import { urlFor } from "@/sanity/lib/image";
import { allProducts, four } from "@/sanity/lib/queries";

import Image from "next/image";
import Link from "next/link";

export default async function Home() {
  const products = await client.fetch(`*[_type == "product"]{
        
        productName,
        "imageUrl": image.asset -> url,
        price,
        _id ,"slug":slug.current}`)

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4 ml-4 ">Our Products</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map((product : any ) => (
          <div
            className="border p-4 rounded-lg shadow-md hover:shadow-lg transition duration-200 "
            key={product._id}
          >
            {product.imageUrl && (
              <Image
                src={urlFor(product.imageUrl).url()}
                alt={product.productName}
                width={300}
                height={300}
                className="object-cover rounded-lg"
              />
            )}
            <h2 className="text-xl font-bold text-center mt-4">
              {product.productName}
            </h2>

            
            <span className="text-center text-lg font-semibold mt-4">
              ${product.price.toFixed(2)}
            </span>
            <Link href={`/products/${product.slug}`} key={product._id}>
  <button className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg mt-4 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50">
    View Details
  </button>
</Link>

          </div>
        ))}
      </div>
    </div>
  );
}
