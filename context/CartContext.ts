import { createContext } from "react";

export interface Product {
    id: number;
    price: number;
    quantity: number;
    name: string;
    image: string;
    description: string;
    currencySymbol: string;
    currency: string;
}

interface CartContext {
    cart: Product[];
    setCart: (cart: Product[]) => void;
}

interface CartState {
    cart: Product[];
}

const cartContext = createContext<{
    state: CartState;
    dispatch: (action: { type: string; payload: any }) => void;
}>({
    state: {
        cart: [],
    },
    dispatch: (action: { type: string; payload: any }) => {},
});

export default cartContext;
