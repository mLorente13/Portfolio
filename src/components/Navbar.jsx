import { Link, Outlet } from "react-router";
import NavbarLink from "./NavbarLink";
import { useState } from "react";
import { useEffect } from "react";

export default function Navbar() {
    let link = window.location.pathname.split("/")[1];
    if (link === "") {
        link = "home";
    }
    const [activeLink, setActiveLink] = useState(link);
    const [activeLinkPosition, setActiveLinkPosition] = useState(0);

    function calcActiveLinkPosition() {
        const currentLink = document.getElementById(activeLink);
        const currentLinkPosition = currentLink.offsetLeft;
        setActiveLinkPosition(currentLinkPosition);
    }

    useEffect(() => {
        calcActiveLinkPosition();
    }, [activeLink]);

    window.addEventListener("resize", calcActiveLinkPosition);

    return (
        <main>
            <header className="flex items-center justify-center">
                <nav className="fixed z-10 top-5 flex items-center mx-auto text-center bg-gray-100/50 backdrop-blur-md rounded-xl w-3/4 lg:w-1/2">
                    <ul className="flex w-full p-0 m-0">
                        <Link
                            id="home"
                            to="/"
                            className="w-1/4 inline-block py-2 text-decoration-none rounded-xl font-semibold box-border text-black"
                            onClick={(e) => {
                                setActiveLink(e.target.id);
                            }}
                        >
                            Home
                        </Link>
                        <Link
                            id="projects"
                            to="/projects"
                            className="inline-block w-1/4 py-2 text-decoration-none rounded-xl font-semibold box-border text-black"
                            onClick={(e) => {
                                setActiveLink(e.target.id);
                            }}
                        >
                            Projects
                        </Link>
                        <Link
                            id="education"
                            to="/education"
                            className="inline-block w-1/4 py-2 text-decoration-none rounded-xl font-semibold box-border text-black"
                            onClick={(e) => {
                                setActiveLink(e.target.id);
                            }}
                        >
                            Education
                        </Link>
                        <Link
                            id="contact"
                            to="/contact"
                            className="inline-block w-1/4 py-2 text-decoration-none rounded-xl font-semibold box-border text-black"
                            onClick={(e) => {
                                setActiveLink(e.target.id);
                            }}
                        >
                            Contact
                        </Link>
                    </ul>
                    <div
                        className="z-[-10] absolute bottom-0 w-1/4 h-full rounded-xl duration-300 bg-gray-300/70"
                        style={{ left: `${activeLinkPosition}px` }}
                    ></div>
                </nav>
            </header>
            <Outlet />
        </main>
    );
}
