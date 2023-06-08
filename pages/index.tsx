import ProductCard, { Product } from "@/components/comp/ProductCard";

const products: Product[] = [
    {
        id: 1,
        name: "Napa Extra",
        price: "5",
        currency: "USD",
        currencySymbol: "$",
        image: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1130&q=80",
        description: "It is a paracitamol",
    },
    {
        id: 2,
        name: "Omeprazole",
        price: "10",
        currency: "USD",
        currencySymbol: "$",
        image: "https://images.unsplash.com/photo-1587854692152-cbe660dbde88?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1169&q=80",
        description: "It is a for stomach",
    },
    {
        id: 3,
        name: "Orsaline",
        price: "15",
        currency: "USD",
        currencySymbol: "$",
        image: "https://plus.unsplash.com/premium_photo-1668487826818-d7092d28b617?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1112&q=80",
        description: "It is a for stomach",
    },
    {
        id: 4,
        name: "Emolant",
        price: "50",
        currency: "USD",
        currencySymbol: "$",
        image: "https://images.unsplash.com/photo-1587854692152-cbe660dbde88?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1169&q=80",
        description: "It is a for stomach",
    },
    {
        id: 5,
        name: "Napa Extra",
        price: "5",
        currency: "USD",
        currencySymbol: "$",
        image: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1130&q=80",
        description: "It is a paracitamol",
    },
    {
        id: 6,
        name: "Omeprazole",
        price: "10",
        currency: "USD",
        currencySymbol: "$",
        image: "https://images.unsplash.com/photo-1587854692152-cbe660dbde88?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1169&q=80",
        description: "It is a for stomach",
    },
    {
        id: 7,
        name: "Orsaline",
        price: "15",
        currency: "USD",
        currencySymbol: "$",
        image: "https://plus.unsplash.com/premium_photo-1668487826818-d7092d28b617?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1112&q=80",
        description: "It is a for stomach",
    },
    {
        id: 8,
        name: "Emolant",
        price: "50",
        currency: "USD",
        currencySymbol: "$",
        image: "https://images.unsplash.com/photo-1587854692152-cbe660dbde88?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1169&q=80",
        description: "It is a for stomach",
    },
];

export default function Home() {
    return (
        <section>
            <div className="container px-4 mx-auto grid grid-cols-2 gap-4">
                {products.map((product) => (
                    <ProductCard key={product.id} {...product} />
                ))}
            </div>
        </section>
    );
}
