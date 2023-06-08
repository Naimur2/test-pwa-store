import { useRouter } from "next/router";
import React, { useEffect } from "react";

export default function BottomTabs({
    setHeightOfNavbar,
}: {
    setHeightOfNavbar: React.Dispatch<React.SetStateAction<number>>;
}) {
    const headerRef = React.useRef<HTMLHeadElement>(null);
    const [windowWidth, setWindowWidth] = React.useState<number>(0);

    const route = useRouter();

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

    const pathName = route.pathname;

    return (
        <div className="btm-nav" ref={headerRef}>
            <button
                className={`${pathName === "/" ? "active" : ""}`}
                onClick={() => {
                    route.push("/");
                }}
            >
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
                        d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                    />
                </svg>
                <span className="btm-nav-label">Home</span>
            </button>
            <button
                onClick={() => {
                    route.push("/cart");
                }}
                className={`${pathName === "/cart" ? "active" : ""}`}
            >
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
                <span className="btm-nav-label">Cart</span>
            </button>
            <button>
                <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M12 12C14.7614 12 17 9.76142 17 7C17 4.23858 14.7614 2 12 2C9.23858 2 7 4.23858 7 7C7 9.76142 9.23858 12 12 12Z"
                        stroke="#A3A3A3"
                        strokeWidth="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                    />
                    <path
                        d="M20.5901 22C20.5901 18.13 16.7402 15 12.0002 15C7.26015 15 3.41016 18.13 3.41016 22"
                        stroke="#A3A3A3"
                        strokeWidth="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                    />
                </svg>

                <span className="btm-nav-label">Settings</span>
            </button>
        </div>
    );
}
