import { useMemo, useReducer } from "react";
import CartContext, { Product } from "./CartContext";

const ADD_TO_CART = "ADD_TO_CART";
const REMOVE_FROM_CART = "REMOVE_FROM_CART";

const initialState: {
    cart: Product[];
} = {
    cart: [],
};

const reducer = (state: typeof initialState, action: any) => {
    switch (action.type) {
        case ADD_TO_CART:
            return {
                ...state,
                cart: [...state.cart, action.payload],
            };
        case REMOVE_FROM_CART:
            return {
                ...state,
                cart: state.cart.filter((item) => item.id !== action.payload),
            };
        default:
            return state;
    }
};

export const addToCart = (product: Product) => {
    return {
        type: ADD_TO_CART,
        payload: product,
    };
};

export const removeFromCart = (id: number) => {
    return {
        type: REMOVE_FROM_CART,
        payload: id,
    };
};

const CartContextProvider = ({ children }: { children: React.ReactNode }) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    const value = useMemo(() => {
        return { state, dispatch };
    }, [state]);

    return (
        <CartContext.Provider value={value}>{children}</CartContext.Provider>
    );
};

export default CartContextProvider;
