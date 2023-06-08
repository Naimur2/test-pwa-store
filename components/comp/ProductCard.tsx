import cartContext from "@/context/CartContext";
import { addToCart, removeFromCart } from "@/context/CartContextProvider";
import React, { useContext } from "react";

export interface Product {
    id: number;
    name: string;
    description: string;
    price: number | string;
    currencySymbol: string;
    image: string;
    currency: string;
}

export default function ProductCard({
    id,
    name,
    description,
    price,
    currencySymbol,
    image,
}: Product) {
    const { state, dispatch } = useContext(cartContext);

    const isAlreadyInCart = state.cart.filter((item) => item.id === id).length;

    const cartHandler = () => {
        if (isAlreadyInCart) {
            dispatch(removeFromCart(id));
        } else {
            dispatch(
                addToCart({
                    id,
                    price: Number(price),
                    quantity: 1,
                    name,
                    description,
                    image,
                    currencySymbol,
                    currency: "USD",
                })
            );
        }
    };

    return (
        <div className="grid grid-rows-[6rem,auto] p-4 rounded-md gap-4">
            <img
                src={image}
                alt=""
                className="h-full w-full object-cover aspect-square"
            />

            <div className="grid gap-2">
                <div className="">
                    <h3 className="font-bold">{name}</h3>
                    <p className="text-xs">{description}</p>
                </div>
                <div className="flex justify-between items-center flex-wrap gap-4 ">
                    <div className="">
                        <span className="">{currencySymbol}</span>
                        <span className="">{price}</span>
                    </div>

                    <button
                        className={`btn  text-xs px-2 py-2
                    ${isAlreadyInCart ? "btn-secondary" : "btn-primary"}
                    `}
                        onClick={cartHandler}
                    >
                        {isAlreadyInCart ? "Remove" : "Add to cart"}
                    </button>
                </div>
            </div>
        </div>
    );
}
