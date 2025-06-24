import { Link, Outlet } from "react-router";
import { useState, useEffect, useCallback } from "react";

export default function Navbar() {
    let link = window.location.pathname.split("/")[1];
    if (link === "") {
        link = "about";
    }
    const [activeLink, setActiveLink] = useState(link);
    const [activeLinkPosition, setActiveLinkPosition] = useState(0);
    const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

    const calcActiveLinkPosition = useCallback(() => {
        const currentLink = document.getElementById(activeLink);
        const currentLinkPosition = currentLink.offsetLeft;
        setActiveLinkPosition(currentLinkPosition);
    }, [activeLink]);

    useEffect(() => {
        if (window.screen.width < 768) {
            setIsMobile(true);
        }
        const calcActiveLinkPosition = () => {
            const currentLink = document.getElementById(activeLink);
            if (currentLink) {
                const currentLinkPosition = currentLink.offsetLeft;
                setActiveLinkPosition(currentLinkPosition);
            }
        };
        calcActiveLinkPosition();
    }, [activeLink, calcActiveLinkPosition]);

    window.addEventListener("resize", () => {
        calcActiveLinkPosition();
        if (window.innerWidth < 768) {
            setIsMobile(true);
        } else {
            setIsMobile(false);
        }
    });

    return (
        <div className="bg-[#191c35] text-white">
            <header className="flex items-center justify-center">
                <nav className="fixed md:h-10 z-10 bottom-10 w-[90%] md:top-5 flex items-center mx-auto text-center bg-gray-100/50 backdrop-blur-md rounded-xl md:w-3/4 lg:w-2/5">
                    <ul className="flex w-full p-0 m-0">
                        <li className="w-1/4">
                            <Link
                                id="about"
                                to="/"
                                className="z-10 flex items-center justify-center w-full py-4 md:py-2 text-decoration-none rounded-xl font-semibold box-border text-black"
                                onClick={(e) => {
                                    setActiveLink(e.target.id);
                                    calcActiveLinkPosition();
                                }}
                            >
                                {isMobile ? (
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        className=" pointer-events-none icon icon-tabler icons-tabler-outline icon-tabler-user"
                                    >
                                        <path
                                            stroke="none"
                                            d="M0 0h24v24H0z"
                                            fill="none"
                                        />
                                        <path d="M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0" />
                                        <path d="M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" />
                                    </svg>
                                ) : (
                                    "About"
                                )}
                            </Link>
                        </li>
                        <li className="w-1/4">
                            <Link
                                id="projects"
                                to="/projects"
                                className="flex items-center justify-center w-full py-4 md:py-2 text-decoration-none rounded-xl font-semibold box-border text-black"
                                onClick={(e) => {
                                    setActiveLink(e.target.id);
                                    calcActiveLinkPosition();
                                }}
                            >
                                {isMobile ? (
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        className="pointer-events-none icon icon-tabler icons-tabler-outline icon-tabler-code"
                                    >
                                        <path
                                            stroke="none"
                                            d="M0 0h24v24H0z"
                                            fill="none"
                                        />
                                        <path d="M7 8l-4 4l4 4" />
                                        <path d="M17 8l4 4l-4 4" />
                                        <path d="M14 4l-4 16" />
                                    </svg>
                                ) : (
                                    "Projects"
                                )}
                            </Link>
                        </li>
                        <li className="w-1/4">
                            <Link
                                id="education"
                                to="/education"
                                className="flex items-center justify-center w-full py-4 md:py-2 text-decoration-none rounded-xl font-semibold box-border text-black"
                                onClick={(e) => {
                                    setActiveLink(e.target.id);
                                    calcActiveLinkPosition();
                                }}
                            >
                                {isMobile ? (
                                    <svg
                                        className="pointer-events-none nav-icon icon icon-tabler icons-tabler-outline icon-tabler-user"
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    >
                                        <path
                                            stroke="none"
                                            d="M0 0h24v24H0z"
                                            fill="none"
                                        />
                                        <path d="M22 9l-10 -4l-10 4l10 4l10 -4v6" />
                                        <path d="M6 10.6v5.4a6 3 0 0 0 12 0v-5.4" />
                                    </svg>
                                ) : (
                                    "Education"
                                )}
                            </Link>
                        </li>
                        <li className="w-1/4">
                            <Link
                                id="contact"
                                to="mailto:mlorente2005@gmail.com"
                                className="flex items-center justify-center w-full py-4 md:py-2 text-decoration-none rounded-xl font-semibold box-border text-black"
                                onClick={(e) => {
                                    setActiveLink(e.target.id);
                                    calcActiveLinkPosition();
                                }}
                            >
                                {isMobile ? (
                                    <svg
                                        className="pointer-events-none nav-icon icon icon-tabler icons-tabler-outline icon-tabler-user"
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    >
                                        <path
                                            stroke="none"
                                            d="M0 0h24v24H0z"
                                            fill="none"
                                        />
                                        <path d="M8 9h8" />
                                        <path d="M8 13h6" />
                                        <path d="M18 4a3 3 0 0 1 3 3v8a3 3 0 0 1 -3 3h-5l-5 3v-3h-2a3 3 0 0 1 -3 -3v-8a3 3 0 0 1 3 -3h12z" />
                                    </svg>
                                ) : (
                                    "Contact"
                                )}
                            </Link>
                        </li>
                    </ul>
                    <div
                        className="z-[-10] absolute bottom-0 w-1/4 h-full rounded-xl duration-300 bg-[#f3f3f3b3]"
                        style={{ left: `${activeLinkPosition}px` }}
                    ></div>
                </nav>
            </header>
            <Outlet />
        </div>
    );
}
