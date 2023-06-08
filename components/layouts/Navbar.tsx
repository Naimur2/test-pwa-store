import cartContext from "@/context/CartContext";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useContext, useEffect } from "react";
export default function Navbar({
    setHeightOfNavbar,
}: {
    setHeightOfNavbar: React.Dispatch<React.SetStateAction<number>>;
}) {
    const { state, dispatch } = useContext(cartContext);

    const router = useRouter();

    const headerRef = React.useRef<HTMLHeadElement>(null);

    const [windowWidth, setWindowWidth] = React.useState<number>(0);

    useEffect(() => {
        if (headerRef.current && windowWidth && setHeightOfNavbar) {
            setHeightOfNavbar(headerRef.current.offsetHeight);
        }
    }, [windowWidth, setHeightOfNavbar]);

    useEffect(() => {
        if (window) {
            window.addEventListener("resize", () => {
                setWindowWidth(window.innerWidth);
            });

            setWindowWidth(window.innerWidth);

            return () => {
                window.removeEventListener("resize", () => {
                    setWindowWidth(window.innerWidth);
                });
            };
        }
    }, []);

    return (
        <header
            className="container px-4 mx-auto fixed top-0 left-0 right-0 z-[1000]"
            ref={headerRef}
        >
            <div className="navbar bg-base-100">
                <div className="flex-1">
                    <Link
                        href={"/"}
                        className="btn btn-ghost normal-case text-xl"
                    >
                        Ecom App
                    </Link>
                </div>
                <div className="flex-none">
                    <button
                        tabIndex={0}
                        className="btn btn-ghost btn-circle"
                        onClick={() => {
                            router.push("/cart");
                        }}
                    >
                        <div className="indicator">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                                />
                            </svg>
                            <span className="badge badge-sm indicator-item">
                                {state.cart.length}
                            </span>
                        </div>
                    </button>

                    <button>
                        <div className="w-10 rounded-full overflow-hidden">
                            <img src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=880&q=80" />
                        </div>
                    </button>
                </div>
            </div>
        </header>
    );
}
