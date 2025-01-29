

import { groq } from "next-sanity";

export const allProducts = groq `*[_type == "product"]
{
        
        productName,
        description,
        imageUrl,
        price,
        inventory,
        colors,
        status,
        category,
        _id ,"slug":slug.current}`;
export const four= groq`*[_type == "product"][0..3]`