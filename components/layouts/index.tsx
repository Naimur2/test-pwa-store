import React from "react";
import BottomTabs from "./BottomTabs";
import Navbar from "./Navbar";

export default function Layout({ children }: { children: React.ReactNode }) {
    const [heightOfNavbar, setHeightOfNavbar] = React.useState<number>(0);
    const [heightOfBottomTabs, setHeightOfBottomTabs] =
        React.useState<number>(0);
    return (
        <div className="h-full w-full grid grid-rows-[auto,1fr,auto] relative">
            <Navbar setHeightOfNavbar={setHeightOfNavbar} />
            <main
                style={{
                    paddingTop: heightOfNavbar,
                    paddingBottom: heightOfBottomTabs,
                }}
                className="row-start-2 "
            >
                {children}
            </main>
            <BottomTabs setHeightOfNavbar={setHeightOfBottomTabs} />
        </div>
    );
}
