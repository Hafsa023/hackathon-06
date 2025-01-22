
export interface Product {
    _id: string;
    productName: string;
    _type: "product";
   imageUrl:string;
       description: string;
    price: number;
    inventory: number;
    colors: string[];
    status: string;
    category: string;
   
    
}