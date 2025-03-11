export default function Homepage() {
    return (
        <main className="flex flex-col items-center justify-center min-h-screen">
            <header className="flex flex-wrap justify-center gap-3 w-2/3 mx-auto text-center pb-10">
                <h1 className="w-full text-8xl font-bold">
                    Hi I<span className="text-orange-400">'</span>m Marc
                </h1>
                <h2 className="w-full text-2xl font-bold text-orange-300">
                    Frontend Web Developer from Spain
                </h2>
                <a
                    href="mailto:mlorente2005@gmail.com"
                    className="w-full sm:w-auto flex gap-2 justify-center items-center sm:ms-auto text-lg font-semibold text-white bg-orange-400 rounded-lg px-3 py-2 hover:bg-orange-400/90 duration-200"
                >
                    Contact me
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
                        className="icon icon-tabler icons-tabler-outline icon-tabler-mail"
                    >
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path d="M3 7a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10z" />
                        <path d="M3 7l9 6l9 -6" />
                    </svg>
                </a>
                <a
                    href="/Marc_Lorente_Tur-CV.pdf"
                    download
                    className="w-full sm:w-auto flex justify-center gap-2 items-center sm:me-auto text-lg font-semibold text-white bg-orange-400 rounded-lg px-3 py-2 hover:bg-orange-400/90 duration-200"
                >
                    Download CV
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
                        className="icon icon-tabler icons-tabler-outline icon-tabler-download"
                    >
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path d="M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2 -2v-2" />
                        <path d="M7 11l5 5l5 -5" />
                        <path d="M12 4l0 12" />
                    </svg>
                </a>
            </header>
            <section className="w-2/3">
                <h3 className="text-5xl font-bold">
                    About<span className="text-orange-400">.</span>
                </h3>
                <p className="text-2xl">
                    I'm a{" "}
                    <span className="text-orange-400">
                        Frontend Web developer
                    </span>{" "}
                    from Mallorca, Spain. My main focus is creating interfaces
                    for Web Applications that are both visually appealing and
                    highly functional, ensuring a seamless user experience. I
                    specialize in crafting responsive, accessible, and intuitive
                    designs that work flawlessly across various devices and
                    screen sizes.
                </p>
            </section>
        </main>
    );
}
