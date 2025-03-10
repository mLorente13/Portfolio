import { Outlet } from "react-router";
import NavbarLink from "./NavbarLink";
import { useState } from "react";

export default function Navbar() {
    const [activeLink, setActiveLink] = useState("home");
    return (
        <main>
            <header className="flex items-center justify-center">
                <nav className="fixed z-10 top-5 flex items-center mx-auto text-center bg-gray-300 backdrop-blur-md rounded-xl">
                    <ul className="flex w-full p-0 m-0">
                        <NavbarLink
                            path={"/"}
                            text="Home"
                            setActiveLink={setActiveLink}
                        />
                        <NavbarLink
                            path={"/projects"}
                            text={"Projects"}
                            setActiveLink={setActiveLink}
                        />
                        <NavbarLink
                            path={"/education"}
                            text="Education"
                            setActiveLink={setActiveLink}
                        />
                        <NavbarLink
                            path={"/contact"}
                            text="Contact"
                            setActiveLink={setActiveLink}
                        />
                    </ul>
                </nav>
            </header>
            <Outlet />
        </main>
    );
}
