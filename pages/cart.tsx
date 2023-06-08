import CartItem from "@/components/comp/CartItem";
import cartContext from "@/context/CartContext";
import { useRouter } from "next/router";
import React, { useContext } from "react";

export default function Cart() {
    const { state, dispatch } = useContext(cartContext);
    const route = useRouter();

    return (
        <section className="relative h-full">
            <div className="container px-4 mx-auto grid gap-4">
                {state.cart.map((item) => (
                    <CartItem key={item.id} {...item} />
                ))}
                {state.cart.length > 0 ? (
                    <div className="flex justify-between items-center p-4">
                        <h2 className="font-bold">
                            Total: {state.cart.reduce((a, b) => a + b.price, 0)}
                        </h2>
                        <a className="btn btn-primary" href="/checkout">
                            Checkout
                        </a>
                    </div>
                ) : (
                    <div className="flex justify-center items-center h-full pt-10">
                        <h2 className=" font-bold text-2xl">Cart is empty</h2>
                    </div>
                )}
            </div>
        </section>
    );
}
